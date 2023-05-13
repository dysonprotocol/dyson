# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: cosmos/tx/config/v1/config.proto

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
  name='cosmos/tx/config/v1/config.proto',
  package='cosmos.tx.config.v1',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=_b('\n cosmos/tx/config/v1/config.proto\x12\x13\x63osmos.tx.config.v1\x1a cosmos/app/v1alpha1/module.proto\"\x90\x01\n\x06\x43onfig\x12*\n\x11skip_ante_handler\x18\x01 \x01(\x08R\x0fskipAnteHandler\x12*\n\x11skip_post_handler\x18\x02 \x01(\x08R\x0fskipPostHandler:.\xba\xc0\x96\xda\x01(\n&github.com/cosmos/cosmos-sdk/x/auth/txb\x06proto3')
  ,
  dependencies=[cosmos_dot_app_dot_v1alpha1_dot_module__pb2.DESCRIPTOR,])




_CONFIG = _descriptor.Descriptor(
  name='Config',
  full_name='cosmos.tx.config.v1.Config',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='skip_ante_handler', full_name='cosmos.tx.config.v1.Config.skip_ante_handler', index=0,
      number=1, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='skipAnteHandler', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='skip_post_handler', full_name='cosmos.tx.config.v1.Config.skip_post_handler', index=1,
      number=2, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='skipPostHandler', file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=_b('\272\300\226\332\001(\n&github.com/cosmos/cosmos-sdk/x/auth/tx'),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=92,
  serialized_end=236,
)

DESCRIPTOR.message_types_by_name['Config'] = _CONFIG
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Config = _reflection.GeneratedProtocolMessageType('Config', (_message.Message,), dict(
  DESCRIPTOR = _CONFIG,
  __module__ = 'cosmos.tx.config.v1.config_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.tx.config.v1.Config)
  ))
_sym_db.RegisterMessage(Config)


_CONFIG._options = None
# @@protoc_insertion_point(module_scope)
