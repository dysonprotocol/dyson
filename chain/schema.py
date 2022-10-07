import sys
import ast
import fnmatch
import logging
import os
import typing
import simplejson as json
from pytojsonschema.common import (
    TypeNamespace,
    SchemaMap,
    Schema,
    init_typing_namespace,
    init_schema_map,
)
from pytojsonschema.jsonschema import (
    get_json_schema_from_ast_element,
    InvalidTypeAnnotation,
)
from pytojsonschema.types import (
    process_import,
    process_import_from,
    process_assign,
    process_class_def,
)
from pytojsonschema.functions import process_function_def

JSON_SCHEMA_DRAFT = "http://json-schema.org/draft-07/schema#"
LOGGER = logging.getLogger()

import pytojsonschema

pytojsonschema.common.ALLOWED_ANNOTATION_KEYS.add("format")


def process_code(code: str):
    ast_body = ast.parse(code).body
    schema_map = init_schema_map()
    type_namespace = init_typing_namespace()
    type_namespace["Dict"].add("dict")
    type_namespace["List"].add("list")
    function_schema_dict = {}
    file_path = "file.py"

    def _process_function(ast_function_def: ast.FunctionDef):
        s = {"function": ast_function_def.name}

        try:
            s["schema"] = process_function_def(
                ast_function_def, type_namespace, schema_map
            )
        except Exception as e:
            s["error"] = str(e)

        function_schema_dict[ast_function_def.name] = s

    schema_all = None
    for node in ast_body:
        ast_assign = node
        if (
            isinstance(node, ast.Assign)
            and isinstance(ast_assign.targets[0], ast.Name)
            and ast_assign.targets[0].id == "__all__"
            and isinstance(ast_assign.value, ast.List)
        ):
            schema_all = [
                i.value for i in ast_assign.value.elts if isinstance(i, ast.Constant)
            ]

        node_type = type(node)
        process_map = {
            ast.Import: lambda: process_import(node, type_namespace, schema_map),
            ast.ImportFrom: lambda: process_import_from(
                node, os.path.dirname(file_path), type_namespace, schema_map
            ),
            ast.Assign: lambda: process_assign(node, type_namespace, schema_map),
            ast.ClassDef: lambda: process_class_def(node, type_namespace, schema_map),
            ast.FunctionDef: lambda: _process_function(node),
        }
        if node_type in process_map:
            process_map[node_type]()
    if schema_all is not None:
        return [s for s in function_schema_dict.values() if s["function"] in schema_all]
    return [
        s
        for s in function_schema_dict.values()
        if (not s["function"].startswith("_")) and (s["function"] not in ["app", "application"])
    ]


if __name__ == "__main__":
    import fileinput

    try:
        print(json.dumps(process_code("".join(fileinput.input()))))
    except Exception as e:
        print(json.dumps([{"error": repr(e)}]))
