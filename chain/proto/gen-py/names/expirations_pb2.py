# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: names/expirations.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='names/expirations.proto',
  package='names',
  syntax='proto3',
  serialized_options=_b('Z\"github.com/org/dyson/x/names/types'),
  serialized_pb=_b('\n\x17names/expirations.proto\x12\x05names\"E\n\x0b\x45xpirations\x12 \n\x0b\x62lockHeight\x18\x01 \x01(\tR\x0b\x62lockHeight\x12\x14\n\x05names\x18\x02 \x03(\tR\x05namesB$Z\"github.com/org/dyson/x/names/typesb\x06proto3')
)




_EXPIRATIONS = _descriptor.Descriptor(
  name='Expirations',
  full_name='names.Expirations',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='blockHeight', full_name='names.Expirations.blockHeight', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='blockHeight', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='names', full_name='names.Expirations.names', index=1,
      number=2, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='names', file=DESCRIPTOR),
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
  serialized_start=34,
  serialized_end=103,
)

DESCRIPTOR.message_types_by_name['Expirations'] = _EXPIRATIONS
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Expirations = _reflection.GeneratedProtocolMessageType('Expirations', (_message.Message,), dict(
  DESCRIPTOR = _EXPIRATIONS,
  __module__ = 'names.expirations_pb2'
  # @@protoc_insertion_point(class_scope:names.Expirations)
  ))
_sym_db.RegisterMessage(Expirations)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
