# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: cosmos/authz/module/v1/module.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from cosmos.app.v1alpha1 import module_pb2 as cosmos_dot_app_dot_v1alpha1_dot_module__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='cosmos/authz/module/v1/module.proto',
  package='cosmos.authz.module.v1',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=_b('\n#cosmos/authz/module/v1/module.proto\x12\x16\x63osmos.authz.module.v1\x1a cosmos/app/v1alpha1/module.proto\"6\n\x06Module:,\xba\xc0\x96\xda\x01&\n$github.com/cosmos/cosmos-sdk/x/authzb\x06proto3')
  ,
  dependencies=[cosmos_dot_app_dot_v1alpha1_dot_module__pb2.DESCRIPTOR,])




_MODULE = _descriptor.Descriptor(
  name='Module',
  full_name='cosmos.authz.module.v1.Module',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=_b('\272\300\226\332\001&\n$github.com/cosmos/cosmos-sdk/x/authz'),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=97,
  serialized_end=151,
)

DESCRIPTOR.message_types_by_name['Module'] = _MODULE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Module = _reflection.GeneratedProtocolMessageType('Module', (_message.Message,), dict(
  DESCRIPTOR = _MODULE,
  __module__ = 'cosmos.authz.module.v1.module_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.authz.module.v1.Module)
  ))
_sym_db.RegisterMessage(Module)


_MODULE._options = None
# @@protoc_insertion_point(module_scope)
