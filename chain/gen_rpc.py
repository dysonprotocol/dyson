import glob
import json
from pathlib import Path
from string import Template

import yaml

from dysvm_server import build_sandbox, dyslang, get_module_dict


with open("docs/static/openapi.yml") as f:
    y = yaml.safe_load(f)

rest_query_paths = {
    v.get("get", {}).get("operationId", p).lower(): p for p, v in y["paths"].items()
}


msg_template = Template(
    """
// Keeper: $mod_keeper
// Types: $mod_types
// $keeper_import
func (rpcservice *RpcService) $function_name(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := $mod_keeper.NewMsgServerImpl(rpcservice.k.$mod_keeper).$keeper_function
        var msg $mod_types.$req_type
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
$handler
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

    if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
    }

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
    *response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}
"""
)

query_template = Template(
    """
// Keeper: $mod_keeper
// Types: $mod_types
// $keeper_import
func (rpcservice *RpcService) $function_name(_ *http.Request, req *RpcReq, response *string) (err error) {
    var msg $mod_types.$req_type
    err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
    if err != nil {
        return err
    }
    $handler
    if err != nil {
        return err
    }
    *response = string(rpcservice.k.cdc.MustMarshalJSON(r))
    return nil
}
"""
)


def to_camel_case(text):
    s = text.replace("-", " ").replace("_", " ")
    s = s.split()
    if len(text) == 0:
        return text
    ret = s[0] + "".join(i.capitalize() for i in s[1:])
    return ret


def fetch_concrete_schema(concrete_type):
    mod, _, name = concrete_type[1:].rpartition(".")
    schema_path = glob.glob(f"**/{mod}/**/{name}.json", recursive=True)
    if not schema_path:
        print(f"Schema for {concrete_type} not found")
        return None, None
    with open(schema_path[0]) as f:
        schema = json.load(f)
        return schema["$ref"], schema["definitions"]


# expand the exported interface json schema
with open("./vue/src/views/exported-interfaces.json") as f:
    exported_interfaces = json.load(f)


def walk(func, key, node, root):
    if isinstance(node, dict):
        for k in list(node.keys()):
            node[k] = walk(func, f"{key}.{k}", node[k], root)
        node = func(key, node, root)
    return node


# maps the command schema lookup to the exported interface schmea key
PROTOANY_MAPPING = {
    "cosmos.group.v1/sendMsgCreateGroupWithPolicy.definitions.MsgCreateGroupWithPolicy.properties.decision_policy": "cosmos.group.v1.DecisionPolicy",
    "cosmos.authz.v1beta1/sendMsgGrant.definitions.cosmos.authz.v1beta1.Grant.properties.authorization": "cosmos.v1beta1.Authorization",
    "cosmos.authz.v1beta1/sendMsgExec.definitions.MsgExec.properties.msgs.items": "cosmos.base.v1beta1.Msg",
    "cosmos.feegrant.v1beta1/sendMsgGrantAllowance.definitions.MsgGrantAllowance.properties.allowance": "cosmos.base.v1beta1.Msg",
    "cosmos.gov.v1/sendMsgSubmitProposal.definitions.MsgSubmitProposal.properties.messages.items": "cosmos.base.v1beta1.Msg",
    "cosmos.group.v1/sendMsgCreateGroupPolicy.definitions.MsgCreateGroupPolicy.properties.decision_policy": "cosmos.group.v1.DecisionPolicy",
    "cosmos.group.v1/sendMsgUpdateGroupPolicyDecisionPolicy.definitions.MsgUpdateGroupPolicyDecisionPolicy.properties.decision_policy": "cosmos.group.v1.DecisionPolicy",
    "cosmos.group.v1/sendMsgSubmitProposal.definitions.MsgSubmitProposal.properties.messages.items": "cosmos.base.v1beta1.Msg",
    "cosmos.gov.v1beta1/sendMsgSubmitProposal.definitions.MsgSubmitProposal.properties.content": "cosmos.gov.v1beta1.Content",
    "cosmos.gov.v1/sendMsgExecLegacyContent.definitions.MsgExecLegacyContent.properties.content": "cosmos.gov.v1beta1.Content",
}


def no_additional_properties(key, node, root):
    if "additionalProperties" in node:
        node["additionalProperties"] = False
    return node


def better_page_request(key, node, root):
    if key.endswith("cosmos.base.query.v1beta1.PageRequest"):
        node["options"] = {"show_opt_in": True, "required_by_default": False}
        node["required"] = []
    return node


def better_any(key, node, root):
    if "properties" in node:
        properties = node["properties"]
        if "type_url" in properties and "value" in properties:

            properties["json_value"] = {
                "description": "This is a helper form to encode the proper base64 encoded protobuf value",
                "type": "string",
                "description": "Must be a valid json object of the above specified type.",
                "format": "json",
            }
            properties["type_url"].update(
                {
                    "description": "Registered fully-qualified proto name for a message type valid for this request",
                }
            )

            node["title"] = "JSON"
            node = {
                "oneOf": [node],
            }

            if key in PROTOANY_MAPPING:
                node["oneOf"] = []
                print(f"Embeding Mapping for better_any: {key}")
                for ct in sorted(exported_interfaces[PROTOANY_MAPPING[key]]):
                    name = ct[1:]
                    ref, defs = fetch_concrete_schema(ct)

                    if ref and defs:
                        if "MsgDeployAutonomousScript" in defs:
                            defs["MsgDeployAutonomousScript"]["properties"]["code"][
                                "format"
                            ] = "python"

                        if "MsgUpdateScript" in defs:
                            defs["MsgUpdateScript"]["properties"]["code"][
                                "format"
                            ] = "python"

                        node["oneOf"] += [
                            {
                                "title": name,
                                "type": "object",
                                "properties": {
                                    "type_url": {
                                        "type": "string",
                                        "description": "Registered fully-qualified proto name for a message type valid for this request",
                                        "readOnly": True,
                                        "default": ct,
                                        "enum": [ct],
                                    },
                                    "value": {
                                        "type": "string",
                                        "description": "Must be a valid serialized protocol buffer of the above specified type.",
                                        "format": "binary",
                                        "readOnly": True,
                                        "binaryEncoding": "base64",
                                    },
                                    "object_value": {"$ref": ref},
                                },
                            }
                        ]
                        root["definitions"].update(defs)
            else:
                print(f"Missing Mapping for better_any: {key}")

    return node


types = set()
keepers = set()
code = []
schemas = {}
for file_path in [
    "vue/src/store/generated/cosmos/cosmos-sdk/cosmos.auth.v1beta1/protomodule.json",
    "vue/src/store/generated/cosmos/cosmos-sdk/cosmos.authz.v1beta1/protomodule.json",
    "vue/src/store/generated/cosmos/cosmos-sdk/cosmos.bank.v1beta1/protomodule.json",
    # "vue/src/store/generated/cosmos/cosmos-sdk/cosmos.base.node.v1beta1/protomodule.json",
    # "vue/src/store/generated/cosmos/cosmos-sdk/cosmos.base.tendermint.v1beta1/protomodule.json",
    # "vue/src/store/generated/cosmos/cosmos-sdk/cosmos.crisis.v1beta1/protomodule.json",
    "vue/src/store/generated/cosmos/cosmos-sdk/cosmos.distribution.v1beta1/protomodule.json",
    # "vue/src/store/generated/cosmos/cosmos-sdk/cosmos.evidence.v1beta1/protomodule.json",
    "vue/src/store/generated/cosmos/cosmos-sdk/cosmos.feegrant.v1beta1/protomodule.json",
    "vue/src/store/generated/cosmos/cosmos-sdk/cosmos.gov.v1beta1/protomodule.json",
    "vue/src/store/generated/cosmos/cosmos-sdk/cosmos.gov.v1/protomodule.json",
    "vue/src/store/generated/cosmos/cosmos-sdk/cosmos.group.v1/protomodule.json",
    "vue/src/store/generated/cosmos/cosmos-sdk/cosmos.mint.v1beta1/protomodule.json",
    "vue/src/store/generated/cosmos/cosmos-sdk/cosmos.nft.v1beta1/protomodule.json",
    "vue/src/store/generated/cosmos/cosmos-sdk/cosmos.params.v1beta1/protomodule.json",
    "vue/src/store/generated/cosmos/cosmos-sdk/cosmos.slashing.v1beta1/protomodule.json",
    "vue/src/store/generated/cosmos/cosmos-sdk/cosmos.staking.v1beta1/protomodule.json",
    # "vue/src/store/generated/cosmos/cosmos-sdk/cosmos.tx.v1beta1/protomodule.json",
    "vue/src/store/generated/cosmos/cosmos-sdk/cosmos.upgrade.v1beta1/protomodule.json",
    "vue/src/store/generated/cosmos/cosmos-sdk/cosmos.vesting.v1beta1/protomodule.json",
    # "vue/src/store/generated/ibc-go/v5/ibc.applications.interchain_accounts.controller.v1/protomodule.json",
    # "vue/src/store/generated/ibc-go/v5/ibc.applications.interchain_accounts.host.v1/protomodule.json",
    "vue/src/store/generated/ibc-go/v5/ibc.applications.transfer.v1/protomodule.json",
    # "vue/src/store/generated/ibc-go/v5/ibc.core.channel.v1/protomodule.json",
    # "vue/src/store/generated/ibc-go/v5/ibc.core.client.v1/protomodule.json",
    # "vue/src/store/generated/ibc-go/v5/ibc.core.connection.v1/protomodule.json",
    "vue/src/store/generated/org/dyson/dyson/protomodule.json",
    "vue/src/store/generated/org/dyson/names/protomodule.json",
]:

    data = json.load(open(file_path))
    for services in data["Pkg"]["Services"]:
        if services["Name"] == "Service":
            continue
        for d in services["RPCFuncs"]:
            if services["Name"] == "Msg":
                command = (
                    f'{ data["Pkg"]["Name"] }/send{ services["Name"] }{ d["Name"] }'
                )

            if services["Name"] == "Query":
                command = f'{ data["Pkg"]["Name"] }/{ services["Name"] }{ d["Name"] }'

            req_schema = json.load(
                open(
                    str(
                        Path(file_path).parent
                        / Path("module/types")
                        / Path(f"{d['RequestType']}.json")
                    )
                )
            )
            req_schema = walk(better_page_request, command, req_schema, req_schema)
            req_schema = walk(better_any, command, req_schema, req_schema)
            req_schema = walk(no_additional_properties, command, req_schema, req_schema)

            # don't force camel case
            # for k, v in req_schema["definitions"].items():
            # if "properties" in v:
            #    for p in list(v["properties"]):
            #        cc = to_camel_case(p)
            #        if p != cc:
            #            v["properties"][cc] = v["properties"].pop(p)
            res_schema = {"type": "string", "format": "json", "title": "Response"}
            # res_schema = json.load(
            #    open(
            #        str(
            #            Path(file_path).parent
            #            / Path("module/types")
            #            / Path(f"{d['ReturnsType']}.json")
            #        )
            #    )
            # )
            rest_path = f'{ data["Pkg"]["Name"] }{ d["Name"] }'.lower().replace(".", "")
            schemas[command] = {
                "module_name": data["Pkg"]["Name"],
                "name": d["Name"],
                "service_name": services["Name"],
                "request_schema": req_schema,
                "resp_schema": res_schema,
                "rest_path": rest_query_paths.get(rest_path),
                "http_rules": d["HTTPRules"],
            }
            # print(d)
            service_name = services["Name"]
            if service_name == "Msg":
                template = msg_template
                function_name = f"{data['Pkg']['Name']}sendMsg{d['Name']}".replace(
                    ".", ""
                ).capitalize()
                handler_template = Template(
                    "handler := $mod_keeper.NewMsgServerImpl(rpcservice.k.$mod_keeper).$keeper_function"
                )
            elif service_name == "Query":
                template = query_template
                handler_template = Template(
                    """r, err := rpcservice.k.$mod_keeper.$keeper_function(rpcservice.ctx, &msg)"""
                )
                function_name = f"{data['Pkg']['Name']}Query{d['Name']}".replace(
                    ".", ""
                ).capitalize()
            else:
                raise Exception(f"oh no: {service_name}\n{services} ")
            mod_types = f"{data['Pkg']['Name']}types".lower().replace(".", "")
            mod_keeper = f"{data['Pkg']['Name']}keeper".lower().replace(".", "")

            if "dyson" in mod_keeper:
                keeper_import = data["Pkg"]["GoImportName"].replace("/types", "")
                if service_name == "Msg":
                    handler_template = Template(
                        "handler := rpcservice.m.$keeper_function"
                    )
                elif service_name == "Query":
                    handler_template = Template(
                        """r, err := rpcservice.k.$keeper_function(rpcservice.ctx, &msg)"""
                    )
                types.add(f'{mod_types} "{data["Pkg"]["GoImportName"]}"')
            else:

                if "nft" in mod_keeper:
                    keeper_import = None
                    if service_name == "Msg":
                        handler_template = Template(
                            """
                            _ = cosmosnftv1beta1keeper.ModuleName // dummy to fix import error
                            handler := rpcservice.m.$mod_keeper.$keeper_function
                            """
                        )
                    elif service_name == "Query":
                        handler_template = Template(
                            """r, err := rpcservice.k.$mod_keeper.$keeper_function(rpcservice.ctx, &msg)"""
                        )
                if "gov" in mod_keeper:
                    print(
                        f"mod_keeper: {mod_keeper} service_name: {service_name} keeper_import: {keeper_import}"
                    )
                    if "beta1" in mod_keeper:
                        keeper_import = None
                        if service_name == "Msg":
                            handler_template = Template(
                                """msgServer := cosmosgovv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgovv1keeper)
                                handler := cosmosgovv1keeper.NewLegacyMsgServerImpl(rpcservice.k.accountKeeper.GetModuleAddress(\"gov\").String(), msgServer).$keeper_function"""
                            )
                        else:
                            handler_template = Template(
                                """r, err := cosmosgovv1keeper.NewLegacyQueryServer(rpcservice.k.cosmosgovv1keeper).$keeper_function(rpcservice.ctx, &msg)"""
                            )

                    else:
                        if service_name == "Msg":
                            keeper_import = data["Pkg"]["GoImportName"].replace(
                                "/types/v1", "/keeper"
                            )

                elif "vesting" in mod_keeper:
                    keeper_import = data["Pkg"]["GoImportName"].replace("/types", "")
                    if service_name == "Msg":
                        handler_template = Template(
                            "handler := $mod_keeper.NewMsgServerImpl(rpcservice.k.accountKeeper, rpcservice.k.bankkeeper).$keeper_function"
                        )
                elif "group" in mod_keeper:
                    # none because it uses the one on the keeper
                    keeper_import = None
                    if service_name == "Msg":
                        handler_template = Template(
                            "handler := rpcservice.k.$mod_keeper.$keeper_function"
                        )
                elif "ibcapplication" in mod_keeper:
                    # none because it uses the one on the keeper
                    keeper_import = None
                    if service_name == "Msg":
                        handler_template = Template(
                            "handler := rpcservice.k.$mod_keeper.$keeper_function"
                        )
                elif ("staking" in mod_keeper) and (service_name == "Query"):
                    mod_keeper = f"{data['Pkg']['Name']}querier".lower().replace(
                        ".", ""
                    )
                    keeper_import = None
                elif ("liquidity" in mod_keeper) and (service_name == "Query"):
                    mod_keeper = f"{data['Pkg']['Name']}querier".lower().replace(
                        ".", ""
                    )
                    keeper_import = None
                elif "authz" in mod_keeper:
                    # none because it uses the one on the keeper
                    keeper_import = None
                    if service_name == "Msg":
                        handler_template = Template(
                            "handler := rpcservice.k.$mod_keeper.$keeper_function"
                        )
                elif "feegrant" in mod_keeper:
                    keeper_import = data["Pkg"]["GoImportName"] + "/keeper"

                else:
                    keeper_import = data["Pkg"]["GoImportName"].replace(
                        "/types", "/keeper"
                    )
                if keeper_import and service_name == "Msg":
                    keepers.add(f'{mod_keeper} "{keeper_import}"')
                types.add(f'{mod_types} "{data["Pkg"]["GoImportName"]}"')

            template_data = dict(
                function_name=function_name,
                mod_types=mod_types,
                req_type=d["RequestType"],
                # resp_type=d["ReturnsType"],
                mod_keeper=mod_keeper,
                keeper_function=d["Name"],
                keeper_import=keeper_import,
            )
            handler = handler_template.safe_substitute(**template_data)
            template_data["handler"] = handler

            code.append(template.safe_substitute(**template_data))


imports = "\n".join(types | keepers)

funcs = "\n".join(code)


out = (
    f"""package keeper

import (
    "net/http"
    sdk "github.com/cosmos/cosmos-sdk/types"
    sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/org/dyson/x/dyson/types"
    { imports }
)
"""
    + """
type RpcReq struct {
	S string
}
"""
    + f"""

{ funcs }
"""
)


with open("x/dyson/keeper/rpcserver.go", "w") as f:
    f.write(out)

# override schema to use textareas
schemas["dyson/sendMsgDeployAutonomousScript"]["request_schema"]["definitions"][
    "MsgDeployAutonomousScript"
]["properties"]["code"]["format"] = "python"

schemas["dyson/sendMsgUpdateScript"]["request_schema"]["definitions"][
    "MsgUpdateScript"
]["properties"]["code"]["format"] = "python"

schemas["dyson/QueryQueryScript"]["request_schema"]["definitions"]["MsgRun"][
    "properties"
]["extra_lines"]["format"] = "python"

# schemas["dyson/QueryQueryScript"]["resp_schema"]["definitions"]["MsgRunResponse"][
#    "properties"
# ]["response"]["format"] = "textarea"

schemas["dyson/sendMsgRun"]["request_schema"]["definitions"]["MsgRun"]["properties"][
    "extra_lines"
]["format"] = "python"

# schemas["dyson/sendMsgRun"]["resp_schema"]["definitions"]["MsgRunResponse"][
#    "properties"
# ]["response"]["format"] = "textarea"

schemas["dyson/sendMsgUpdateStorage"]["request_schema"]["definitions"][
    "MsgUpdateStorage"
]["properties"]["data"]["format"] = "json"

schemas["dyson/sendMsgCreateStorage"]["request_schema"]["definitions"][
    "MsgCreateStorage"
]["properties"]["data"]["format"] = "json"


with open("vue/src/views/command_schema.json", "w") as f:
    json.dump(schemas, f, indent=2)


from IPython.core.oinspect import Inspector

from dyslang import WHITELIST_FUNCTIONS, dys_eval
from dysvm_server import build_sandbox, get_module_dict

sandbox = build_sandbox("", "", "", "", "", "")
inspector = Inspector()

locals().update(sandbox.modules.__dict__)
import random
import urllib
import wsgiref.handlers

import simplejson

docs = {}


exclude_keys = [
    "file",
    "isalias",
    "ismagic",
    "length",
    "namespace",
    "source",
    "found",
    "string_form",
    "subclasses",
    "type_name",
    "base_class",
    "name",
]

normalized_functions = sorted(
    f.removeprefix("builtins.")
    .removeprefix("script.*")
    .replace("freezegun.api.FakeDatetime", "datetime.datetime")
    .replace("_io", "io")
    .replace("_hashlib", "hashlib")
    .replace("openssl_", "")
    for f in WHITELIST_FUNCTIONS
    if not f.startswith("json.")
)
print(WHITELIST_FUNCTIONS)
for ff in normalized_functions:
    if ff:
        f = ff.removeprefix("builtins.").removeprefix("script.*")
        # print(ff, f)
        try:
            func = eval(f)
            if callable(func):
                d = inspector._info(func, detail_level=0)
            else:
                # print("not callable:", f)
                continue
        except NameError:
            # print("name error:", f)
            continue

        # docs[ff] = d
        docs[ff] = {
            k: v for k, v in d.items() if k not in exclude_keys and v is not None
        }

import json

with open("vue/src/views/dyslang_docs.json", "w") as f:
    json.dump(docs, f, indent=2)
