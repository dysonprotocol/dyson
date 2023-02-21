import ast
import json
import http.client as http_client
import logging
import random
import re
from functools import wraps

import forge
from freezegun import freeze_time

try:
    import re2

    re2.set_fallback_notification(re2.FALLBACK_EXCEPTION)
    re2_dict = {
        "ASCII": re2.ASCII,
        "BackreferencesException": re2.BackreferencesException,
        "CharClassProblemException": re2.CharClassProblemException,
        "DEBUG": re2.DEBUG,
        "DOTALL": re2.DOTALL,
        "I": re2.I,
        "IGNORECASE": re2.IGNORECASE,
        "L": re2.L,
        "LOCALE": re2.LOCALE,
        "M": re2.M,
        "MULTILINE": re2.MULTILINE,
        "RegexError": re2.RegexError,
        "S": re2.S,
        "U": re2.U,
        "UNICODE": re2.UNICODE,
        "VERBOSE": re2.VERBOSE,
        "X": re2.X,
        "compile": re2.compile,
        "contains": re2.contains,
        "count": re2.count,
        "error": re2.error,
        "escape": re2.escape,
        "findall": re2.findall,
        "finditer": re2.finditer,
        "fullmatch": re2.fullmatch,
        "match": re2.match,
        "re": re2.re,
        "search": re2.search,
        "split": re2.split,
        "sub": re2.sub,
        "subn": re2.subn,
    }
except:
    re2_dict = {}
    print("WARNING: Could not load re2")


import io
import sys
from contextlib import redirect_stdout
from functools import partial

import requests
import simplejson
import simplejson as json

import dyslang

MAX_CUM_SIZE = dyslang.MAX_SCOPE_SIZE * dyslang.MAX_NODE_CALLS
GAS_MULTIPLE = 1


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
    import base64
    import datetime
    import decimal
    import hashlib
    import html
    import inspect
    import mimetypes
    import pathlib
    import random
    import string
    import typing
    import urllib

    @forge.copy(random.seed)
    def safe_random_seed(a=None, version=2):
        assert a is not None, "in Dyson seed must not be None"
        return random.seed(a, version)
    safe_random_seed.__doc__ = random.Random.seed.__doc__
    safe_random_seed.__module__ = random.Random.seed.__module__
    safe_random_seed.__qualname__ = random.Random.seed.__qualname__
    allow_func(safe_random_seed)


    @forge.copy(json.dumps)
    def safe_json_dumps(**kwargs):
        if kwargs.get("separators", None):
            assert kwargs["separators"] == (
                ",",
                ":",
            ), f"separators can only be (',', ': ')"
        if check_circular := kwargs.get("check_circular", None):
            assert check_circular is True, "check_circular must be True"
        if indent := kwargs.get("indent", None):
            if isinstance(indent, str):
                assert (
                    len(kwargs["indent"]) <= 4
                ), f"indent must be less than or equal 4, got: {indent}"
            if isinstance(indent, int):
                assert (
                    kwargs["indent"] <= 4
                ), f"indent must be less than or equal 4, got: {indent}"
        return json.dumps(**kwargs)

    safe_json_dumps.__doc__ = json.dumps.__doc__
    safe_json_dumps.__module__ = "simplejson"
    safe_json_dumps.__qualname__ = "dumps"
    allow_func(safe_json_dumps)

    mod_dict = {
        "datetime": {
            "date": datetime.date,
            "datetime": datetime.datetime,
            "time": datetime.time,
            "timedelta": datetime.timedelta,
            "timezone": datetime.timezone,
            "tzinfo": datetime.tzinfo,
        },
        "pathlib": {"PurePath": pathlib.PurePath},
        "mimetypes": {"guess_type": mimetypes.guess_type},
        "urllib": {
            "parse": {
                "parse_qs": urllib.parse.parse_qs,
                "parse_qsl": urllib.parse.parse_qsl,
                "urlsplit": urllib.parse.urlsplit,
                "urlunsplit": urllib.parse.urlunsplit,
                "urljoin": urllib.parse.urljoin,
                "urldefrag": urllib.parse.urldefrag,
                "quote": urllib.parse.quote,
                "quote_plus": urllib.parse.quote_plus,
                "quote_from_bytes": urllib.parse.quote_from_bytes,
                "unquote": urllib.parse.unquote,
                "unquote_plus": urllib.parse.unquote_plus,
                "unquote_to_bytes": urllib.parse.unquote_to_bytes,
                "quote_from_bytes": urllib.parse.quote_from_bytes,
            }
        },
        "base64": {
            "decodebytes": base64.decodebytes,
            "encodebytes": base64.encodebytes,
            "b64decode": base64.b64decode,
            "b64encode": base64.b64encode,
            "urlsafe_b64encode": base64.urlsafe_b64encode,
            "urlsafe_b64decode": base64.urlsafe_b64decode,
        },
        "decimal": {"Decimal": decimal.Decimal},
        "simplejson": {
            "dumps": safe_json_dumps,
            "loads": simplejson.loads,
        },
        "simplejson.errors": {
            "JSONDecodeError": simplejson.JSONDecodeError,
        },
        "json": {
            "dumps": safe_json_dumps,
            "loads": simplejson.loads,
            "JSONDecodeError": simplejson.JSONDecodeError,
        },
        "html": {"escape": html.escape, "unescape": html.unescape},
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
        "string": {
            "Template": string.Template,
            "capwords": string.capwords,
            "ascii_letters": string.ascii_letters,
            "ascii_lowercase": string.ascii_lowercase,
            "ascii_uppercase": string.ascii_uppercase,
            "digits": string.digits,
            "hexdigits": string.hexdigits,
            "octdigits": string.octdigits,
            "punctuation": string.punctuation,
            "printable": string.printable,
            "whitespace": string.whitespace,
        },
        "random": {
            "betavariate": random.betavariate,
            "choice": random.choice,
            "choices": random.choices,
            "expovariate": random.expovariate,
            "gauss": random.gauss,
            "paretovariate": random.paretovariate,
            "random": random.random,
            "sample": random.sample,
            "shuffle": random.shuffle,
            "triangular": random.triangular,
            "seed": safe_random_seed,
            "uniform": random.uniform,
        },
        "re2": re2_dict,
    }

    def walk(node):
        for key, item in node.items():
            if isinstance(item, dict):
                walk(item)
            else:
                allow_func(item)

    walk(mod_dict)
    return mod_dict


def build_sandbox(port, creator, address, amount, block_info):
    amount = json.loads(amount or "{}")
    url = f"http://localhost:{port}/rpc"

    def _chain(method, **params):
        """
        The main way to interact with the chain from a script.

        :param method: the command to call on the chain, see TxBuilder for a list of possible commands
        `**kwargs` will depend on the command being called

        :returns: the response of the command or error

        """
        # Example echo method
        method = "".join((filter(str.isalnum, method))).capitalize()

        def snake(name):
            return re.sub(r"(?<!^)(?=[A-Z])", "_", name).lower()

        #params = {snake(k): v for k, v in params.items()}
        if method not in ["ConsumeGas", "Gaslimit"]:
            # normal rpc calls are encoded as json strings
            params = {"s": json.dumps(params)}
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
            if ret_json["error"] and ret_json["error"].startswith(
                "CHAIN ERROR: types.ErrorOutOfGas"
            ):
                raise MemoryError("Out of Gas")
            try:
                # some rpc responses are json encoded
                ret_json["result"] = json.loads(str(ret_json["result"]).encode())
            except json.JSONDecodeError:
                pass
            return ret_json
        except json.JSONDecodeError:
            return {"exception": res.text}

    _chain.__qualname__ = "_chain"
    allow_dys_func(_chain)

    gas_state = {
        "unconsumed_size": 1,
        "gas_consumed": 0,
        "gas_limit": 0,
        "cumsize": 0,
        "nodes_called": 0,
    }

    class ScopedDysonEval(dyslang.DysEval):

        last_node = None
        cumsize = 0

        def gas_state(self):
            return gas_state

        def consume_gas(self):
            amount = int(gas_state["unconsumed_size"] * GAS_MULTIPLE)
            if amount:
                resp = _chain("ConsumeGas", amount=amount)
                gas_state["unconsumed_size"] = 0
                if resp["error"]:
                    resp = _chain("GasLimit")
            else:
                resp = _chain("GasLimit")

            gas_state["gas_consumed"] = resp["result"].get("GasConsumed", None)
            gas_state["gas_limit"] = resp["result"].get("GasLimit", None)
            if gas_state["gas_consumed"] > gas_state["gas_limit"]:
                raise MemoryError("Out of Gas")

        def track(self, node):
            if hasattr(node, "nodes_called"):
                return

            if hasattr(node, "lineno"):
                size = len(repr(self.scope)) + len(repr(self._last_eval_result)) // 100
                if size > dyslang.MAX_SCOPE_SIZE:
                    raise MemoryError("Scope has used too much memory")

                if node is not self.last_node:
                    self.last_node = node
                    gas_state["nodes_called"] += 1

                    if gas_state["nodes_called"] > dyslang.MAX_NODE_CALLS:
                        raise MemoryError("This program has too many evaluations")

                    gas_state["cumsize"] += size
                    gas_state["unconsumed_size"] += size
                    if gas_state["cumsize"] > MAX_CUM_SIZE:
                        raise MemoryError("Cumsize too large")
                if gas_state["unconsumed_size"] > 10000 or isinstance(node, ast.Module):
                    sandbox.consume_gas()

    scope = {}
    sandbox = ScopedDysonEval(
        scope=scope,
    )

    @forge.copy(print)
    def dyson_print(*args, sep=" ", end="\n", file=None, flush=False):
        assert len(sep) <= 5, AssertionError(f"sep len greater than 5")
        assert len(end) <= 5, AssertionError(f"end len greater than 5")
        print(*args, end=end)

    dyson_print.__doc__ = print.__doc__
    dyson_print.__module__ = "builtins"
    dyson_print.__qualname__ = "print"
    dyson_print = allow_func(dyson_print)

    sandbox.scope.dicts[0]["print"] = dyson_print
    # sandbox.scope.dicts[0]["globals"] = sandbox.scope.globals
    # sandbox.scope.dicts[0]["locals"] = sandbox.scope.locals

    def rpc(method, **params):
        """
        Depricated
        see: dyson._chain
        """
        dyson_print(
            "DeprecationWarning: dyson.rpc is deprecated and will be removed. Use dyson._chain"
        )
        return _chain(method, **params)

    rpc.__qualname__ = "rpc"
    allow_dys_func(rpc)

    @allow_dys_func
    def get_gas_consumed():
        """
        The total amount of gas consumed so far.
        """
        return gas_state["gas_consumed"]

    @allow_dys_func
    def get_gas_limit():
        """
        The maximum amount of gas that can be used in this query or transaction
        """
        return gas_state["gas_limit"]

    @allow_dys_func
    def get_nodes_called():
        """
        The number of Python AST nodes evaluated in this query or transaction
        """
        return gas_state["nodes_called"]

    @allow_dys_func
    def get_cumulative_size():
        """
        The cumulative size of memory used for each node called in this query or script
        """
        return gas_state["cumsize"]

    @allow_dys_func
    def get_script_address() -> str:
        """
        Returns the address of this current script.
        """
        return address

    @allow_dys_func
    def get_caller() -> str:
        """
        Returns the address of the caller of this script.
        """
        return creator

    @allow_dys_func
    def get_block_info() -> dict:
        """
        Returns a dictionary of the current block info
        """
        return block_info

    @allow_dys_func
    def get_coins_sent():
        """
        Returns the coins sent to this function.
        This is not the gas or gas fees.
        """
        return amount

    module_dict = get_module_dict()

    module_dict["dys"] = {
        "rpc": rpc,
        "_chain": _chain,  # remove
        "SCRIPT_ADDRESS": address,
        "CALLER": creator,
        "AMOUNT": amount,
        "BLOCK_INFO": block_info,
        "get_gas_consumed": get_gas_consumed,
        "get_gas_limit": get_gas_limit,
        "get_script_address": get_script_address,
        "get_caller": get_caller,
        "get_block_info": get_block_info,
        "get_coins_sent": get_coins_sent,
        "get_nodes_called": get_nodes_called,
        "get_cumulative_size": get_cumulative_size,
    }

    sandbox.modules = dyslang.make_modules(module_dict)
    return sandbox


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
    sandbox = None
    nodes_called = 0
    cumsize = 0

    block_info = json.loads(block_info)
    with freeze_time(block_info["time"]):
        with io.StringIO() as buf, redirect_stdout(buf):
            try:

                sandbox = build_sandbox(
                    port,
                    creator,
                    address,
                    amount,
                    block_info,
                )
                sandbox.consume_gas()

                random.seed(
                    (str(block_info) or "")
                    + (creator or "")
                    + (address or "")
                    + (funcname or "")
                    + (json_args or "")
                    + (json_kwargs or "")
                    + (extra_line or "")
                    + (amount or "")
                    + str(sandbox.gas_state() or "")
                )
                result = (
                    sandbox.eval(
                        code + "\n" + extra_line,
                    )
                    or [None]
                )[-1]
                scope = sandbox.scope.flatten()
                public_scope_all = scope.get(
                    "__all__",
                    [
                        k
                        for k, v in scope.items()
                        if v is not sandbox.modules.dys._chain
                        if v is not sandbox.modules.dys.rpc
                        and not k.startswith("_")
                        and k not in ["app", "application"]
                    ],
                )
                if funcname:
                    if funcname in scope:
                        if funcname in public_scope_all:
                            args = json.loads(json_args or "[]")
                            # print("args", args)
                            kwargs = json.loads(json_kwargs or "{}")
                            # print("kwargs", kwargs)
                            result = scope[funcname](*args, **kwargs)
                        else:
                            raise Exception(f"function not public: {funcname}")
                    else:
                        raise Exception(f"function not defined: {funcname}")
                # consume final gas
                sandbox.consume_gas()
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
                stdout = buf.getvalue()[-10000:]

    if exception is not None:
        exception = {
            "class": exception.__class__.__name__,
            "context": exception.__context__.__class__.__name__,
            "msg": str(exception),
            "lineno": getattr(exception, "lineno", 0),
            "col": getattr(exception, "col", 0),
        }

    return sandbox, {
        "result": result,
        "stdout": stdout,
        "exception": exception,
        # TODO wait for gas fix
        # https://github.com/tendermint/vue/issues/147
        # https://github.com/tendermint/starport/blob/develop/starport/pkg/cosmosgen/templates/vuex/store/index.ts.tpl#L170
        "nodes_called": sandbox.modules.dys.get_nodes_called() if sandbox else None,
        "gas_limit": sandbox.modules.dys.get_gas_limit() if sandbox else None,
        "script_gas_consumed": sandbox.modules.dys.get_gas_consumed()
        if sandbox
        else None,
        "cumsize": sandbox.modules.dys.get_cumulative_size() if sandbox else None,
    }


dyslang.WHITELIST_FUNCTIONS.update(
    [
        "datetime.datetime.isoformat",
        "datetime.datetime.fromisoformat",
        "freezegun.api.FakeDatetime.now",
        "freezegun.api.FakeDatetime.time",
        "freezegun.api.FakeDatetime.date",
        "freezegun.api.FakeDatetime.timestamp",
        "datetime.time",
        "datetime.date",
        # re2.Match.re
        "contains",
        "count",
        "findall",
        "finditer",
        "fullmatch",
        "match",
        "scanner",
        "search",
        "split",
        # str
        "str.capitalize",
        "str.casefold",
        "str.count",
        "str.encode",
        "str.endswith",
        "str.find",
        "str.index",
        "str.isalnum",
        "str.isalpha",
        "str.isascii",
        "str.isdecimal",
        "str.isdigit",
        "str.isidentifier",
        "str.islower",
        "str.isnumeric",
        "str.isprintable",
        "str.isspace",
        "str.istitle",
        "str.isupper",
        "str.join",
        "str.lower",
        "str.lstrip",
        "str.partition",
        "str.removeprefix",
        "str.removesuffix",
        "str.rfind",
        "str.rindex",
        "str.rpartition",
        "str.rsplit",
        "str.rstrip",
        "str.split",
        "str.splitlines",
        "str.startswith",
        "str.strip",
        "str.swapcase",
        "str.title",
        "str.upper",
        # list
        "list.append",
        "list.clear",
        "list.copy",
        "list.count",
        "list.extend",
        "list.index",
        "list.insert",
        "list.pop",
        "list.remove",
        "list.reverse",
        "list.sort",
        # dict
        "dict.clear",
        "dict.copy",
        "dict.fromkeys",
        "dict.get",
        "dict.items",
        "dict.keys",
        "dict.pop",
        "dict.popitem",
        "dict.setdefault",
        "dict.update",
        "dict.values",
        # Template
        "string.Template.safe_substitute",
        "string.Template.substitute",
        # random
        "Random.random",
        "random.Random.uniform",
        "random.Random.expovariate",
        "random.Random.choice",
        "random.Random.shuffle",
        "random.Random.sample",
        # wsgi
        "wsgiref.handlers.BaseHandler.start_response",
        "wsgiref.handlers.BaseHandler.write",
    ]
)


def allow_modules(mod_dict):
    allow_func(mod_dict)

    if isinstance(
        mod_dict,
    ):
        return mod_dict
    ret = types.ModuleType(k)
    for kk, vv in mod_dict.items():
        ret.__dict__[kk] = make_modules(vv, kk)


def allow_func(func=None, mod=None, name=None):
    if callable(func):
        return _allow_func(func, mod=mod, name=name)
    return func


def allow_dys_func(function):
    function.__qualname__ = function.__name__
    function.__module__ = "dys"
    return wraps(function)(_allow_func)(function)


def _allow_func(func, mod=None, name=None):
    if not callable(func):
        return func

    modname = mod or getattr(func, "__module__", None)
    qualname = name or getattr(
        func, "__qualname__", getattr(func, "__name__", getattr(func, "_name", None))
    )

    if modname:
        fullname = modname + "." + qualname
    else:
        fullname = qualname

    dyslang.WHITELIST_FUNCTIONS.add(fullname)
    return func


if __name__ == "__main__":
    _, response = main()
    print(
        json.dumps(response, sort_keys=True, default=repr), end=""
    )  # "end" is important for parsing in go
    if response["exception"] is not None:
        sys.exit(1)
