# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: dyson/script.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='dyson/script.proto',
  package='dyson',
  syntax='proto3',
  serialized_options=_b('Z\"github.com/org/dyson/x/dyson/types'),
  serialized_pb=_b('\n\x12\x64yson/script.proto\x12\x05\x64yson\"L\n\x06Script\x12\x18\n\x07\x63reator\x18\x01 \x01(\tR\x07\x63reator\x12\x14\n\x05index\x18\x02 \x01(\tR\x05index\x12\x12\n\x04\x63ode\x18\x03 \x01(\tR\x04\x63odeB$Z\"github.com/org/dyson/x/dyson/typesb\x06proto3')
)




_SCRIPT = _descriptor.Descriptor(
  name='Script',
  full_name='dyson.Script',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='creator', full_name='dyson.Script.creator', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='creator', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='index', full_name='dyson.Script.index', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='index', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='code', full_name='dyson.Script.code', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='code', file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=29,
  serialized_end=105,
)

DESCRIPTOR.message_types_by_name['Script'] = _SCRIPT
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Script = _reflection.GeneratedProtocolMessageType('Script', (_message.Message,), dict(
  DESCRIPTOR = _SCRIPT,
  __module__ = 'dyson.script_pb2'
  # @@protoc_insertion_point(class_scope:dyson.Script)
  ))
_sym_db.RegisterMessage(Script)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)