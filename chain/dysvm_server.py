import ast
import re
import logging

import http.client as http_client

import re2

re2.set_fallback_notification(re2.FALLBACK_EXCEPTION)


import io
import sys
from contextlib import redirect_stdout

import requests
import simplejson as json
from functools import partial

import dyslang

MAX_CUM_SIZE = dyslang.MAX_SCOPE_SIZE * dyslang.MAX_NODE_CALLS

dyslang.ALLOWED_BUILTINS = [
    "dict.get",
    "dict.items",
    "dict.keys",
    "dict.values",
    "isinstance",
    "issubclass",
    "iter",
    "len",
    "sorted",
    "list.append",
    "list.count",
    "list.index",
    "list.pop",
    "list.reverse",
    "list.sort",
    "list.extend",
    "print",
    "str.count",
    "str.startswith",
    "str.endswith",
    "str.encode",
    "str.join",
    "str.strip",
    "str.rstrip",
    "str.lstrip",
    "str.removeprefix",
    "str.removesuffix",
    "str.split",
    "sum",
    "bytes.join",
    "bool",
    "findall",  # re2.findall
    "finditer",  # re2.finditer
    "fullmatch",  # re2.fullmatch
    "match",  # re2.match
    "search",  # re2.search
    "split",  # re2.split
]


class DysonEval(dyslang.DysEval):
    cumsize = 0

    consume_gas_func = None
    last_node = None
    unconsumed_size = 0
    gas_consumed = 0
    gas_limit = 0

    def consume_gas(self):
        # Calls ConsumeGas on the goctx
        if self.consume_gas_func and self.unconsumed_size:
            resp = self.consume_gas_func(amount=self.unconsumed_size)
            self.unconsumed_size = 0
            if resp["error"]:
                raise MemoryError(f"Out of Gas: {resp['error']}")
            self.gas_consumed = resp["result"].get("GasConsumed", None)
            self.gas_limit = resp["result"].get("GasLimit", None)
        else:
            raise Exception("Missing consume gas func")

    def track(self, node):
        if hasattr(node, "nodes_called"):
            return

        if hasattr(node, "lineno"):
            size = len(repr(self.scope)) + len(repr(self._last_eval_result))
            if size > dyslang.MAX_SCOPE_SIZE:
                raise MemoryError("Scope has used too much memory")

            if node is not self.last_node:
                self.last_node = node
                self.nodes_called += 1

                if self.nodes_called > dyslang.MAX_NODE_CALLS:
                    raise MemoryError("This program has too many evaluations")

                self.cumsize += size
                self.unconsumed_size += size
                if self.cumsize > MAX_CUM_SIZE:
                    raise MemoryError("Cumsize too large")
            if self.unconsumed_size > 100000 or isinstance(node, ast.Module):
                self.consume_gas()


def safe_module_import(dotted_module):
    spec = importlib.util.find_spec(dotted_module)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def main():
    print(sys.argv[1:])

    (
        port,
        creator,
        address,
        amount,
        block_info,
        funcname,
        json_args,
        json_kwargs,
        extra_line,
        code,
    ) = sys.argv[1:]

    return eval_script(
        port,
        creator,
        address,
        amount,
        block_info,
        funcname,
        json_args,
        json_kwargs,
        extra_line,
        code,
    )


def get_module_dict():
    import pathlib, uuid, mimetypes, urllib, base64, decimal, jsonschema, html, hashlib, typing, string

    def safe_json_dumps(j, indent=None, default=None):
        if indent:
            assert indent <= 4, f"indent must be less than or equal 4, got: {indent}"
        return json.dumps(j, indent, default)

    return {
        "pathlib": {"PurePath": pathlib.PurePath},
        "uuid": {"uuid4": uuid.uuid4},
        "mimetypes": {"guess_type": mimetypes.guess_type},
        "urllib": {"parse": urllib.parse},
        "base64": {
            "decodebytes": base64.decodebytes,
            "encodebytes": base64.encodebytes,
            "b64decode": base64.b64decode,
            "b64encode": base64.b64encode,
            "urlsafe_b64encode": base64.urlsafe_b64encode,
            "urlsafe_b64decode": base64.urlsafe_b64decode,
        },
        "decimal": {"Decimal": decimal.Decimal},
        "json": {
            "dumps": safe_json_dumps,
            "loads": json.loads,
            "JSONDecodeError": json.JSONDecodeError,
        },
        "jsonschema": {"validate": jsonschema.validate},
        "jsonschema.exceptions": {
            "ValidationError": jsonschema.ValidationError,
            "FormatError": jsonschema.FormatError,
        },
        "html": {"escape": html.escape},
        "io": {"StringIO": io.StringIO, "BytesIO": io.BytesIO},
        "hashlib": {"sha1": hashlib.sha1, "sha256": hashlib.sha256},
        "typing": {
            "Callable": typing.Callable,
            "Any": typing.Any,
            "Union": typing.Union,
            "Optional": typing.Optional,
            "Literal": typing.Literal,
            "Annotated": typing.Annotated,
        },
        "string": {"Template": string.Template},
        "re2": {
            "findall": re2.findall,
            "finditer": re2.finditer,
            "fullmatch": re2.fullmatch,
            "match": re2.match,
            "search": re2.search,
            "split": re2.split,
            "UNICODE": re2.UNICODE,
        },
    }


def eval_script(
    port,
    creator,
    address,
    amount,
    block_info,
    funcname,
    json_args,
    json_kwargs,
    extra_line,
    code,
):
    result = None
    stdout = None
    exception = None
    nodes_called = 0
    cumsize = 0
    block_info = json.loads(block_info)
    with io.StringIO() as buf, redirect_stdout(buf):
        try:
            url = f"http://localhost:{port}/rpc"

            result = None
            exception = None
            scope = {
                "print": lambda *x: print(*x),
            }

            def rpc(method, **params):
                # Example echo method
                method = "".join((filter(str.isalnum, method))).capitalize()

                def snake(name):
                    return re.sub(r"(?<!^)(?=[A-Z])", "_", name).lower()

                params = {snake(k): v for k, v in params.items()}
                payload = {
                    "method": f"RpcService.{method}",
                    "params": [params],
                    "jsonrpc": "2.0",
                    "id": 0,
                }
                res = requests.post(url, json=payload)
                # print(f"rpc {method}: {res.status_code} response from golang: {res.text}")
                try:
                    ret_json = res.json()
                    return ret_json
                except json.JSONDecodeError:
                    return {"exception": res.text}

            sandbox = DysonEval(
                scope=scope,
            )

            sandbox.consume_gas_func = lambda amount: rpc("ConsumeGas", amount=amount)

            def get_gas_consumed():
                return sandbox.gas_consumed

            def get_gas_limit():
                return sandbox.gas_limit

            module_dict = get_module_dict()
            module_dict["dys"] = {
                "rpc": rpc,
                "SCRIPT_ADDRESS": address,
                "CALLER": creator,
                "AMOUNT": amount,
                "BLOCK_INFO": block_info,
                "get_gas_consumed": get_gas_consumed,
                "get_gas_limit": get_gas_limit,
            }

            sandbox.modules = dyslang.make_modules(module_dict)
            result = (
                sandbox.eval(
                    code + "\n" + extra_line,
                )
                or [None]
            )[-1]
            if funcname:
                if funcname in scope:
                    args = json.loads(json_args or "[]")
                    # print("args", args)
                    kwargs = json.loads(json_kwargs or "{}")
                    # print("kwargs", kwargs)
                    result = scope[funcname](*args, **kwargs)
                else:
                    raise Exception(f"function not defined: {funcname}")
        except dyslang.DysRuntimeError as e:
            exception = e
            print("ERR:", repr(e.__context__))
        except Exception as e:
            exception = e
            print("ERROR: ", e)
        finally:
            if sandbox is not None:
                nodes_called = sandbox.nodes_called
                cumsize = sandbox.cumsize
            stdout = buf.getvalue()[-1000:]

    if exception is not None:
        exception = {
            "class": exception.__class__.__name__,
            "context": exception.__context__.__class__.__name__,
            "msg": str(exception),
            "lineno": getattr(exception, "lineno", 0),
            "col": getattr(exception, "col", 0),
        }
    return {
        "result": result,
        "stdout": stdout,
        "exception": exception,
        # TODO wait for gas fix
        # https://github.com/tendermint/vue/issues/147
        # https://github.com/tendermint/starport/blob/develop/starport/pkg/cosmosgen/templates/vuex/store/index.ts.tpl#L170
        "nodes_called": nodes_called,
        "cumsize": cumsize,
    }


if __name__ == "__main__":
    response = main()
    print(
        json.dumps(response, sort_keys=True, default=repr), end=""
    )  # "end" is important for parsing in go
    if response["exception"] is not None:
        sys.exit(1)
