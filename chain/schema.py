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

pytojsonschema.common.ALLOWED_ANNOTATION_KEYS.add('format')

def process_code(code: str):
    ast_body = ast.parse(code).body
    schema_map = init_schema_map()
    type_namespace = init_typing_namespace()
    type_namespace["Dict"].add("dict")
    type_namespace["List"].add("list")
    function_schema_list = []
    file_path = "file.py"

    def _process_function(ast_function_def: ast.FunctionDef):
        s = {"function": ast_function_def.name}

        try:
            s['schema'] = process_function_def(
                ast_function_def, type_namespace, schema_map
            )
        except Exception as e:
            s['error'] = str(e)
        function_schema_list.append(s)

    for node in ast_body:
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
    # TODO filter by __all__ if available
    return function_schema_list


if __name__ == "__main__":
    import fileinput
    try:
        print(json.dumps(process_code("".join(fileinput.input()))))
    except Exception as e:
        print(json.dumps([{'error': repr(e)}]))
