# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: names/genesis.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from gogoproto import gogo_pb2 as gogoproto_dot_gogo__pb2
from names import params_pb2 as names_dot_params__pb2
from names import name_pb2 as names_dot_name__pb2
from names import expirations_pb2 as names_dot_expirations__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='names/genesis.proto',
  package='names',
  syntax='proto3',
  serialized_options=_b('Z\"github.com/org/dyson/x/names/types'),
  serialized_pb=_b('\n\x13names/genesis.proto\x12\x05names\x1a\x14gogoproto/gogo.proto\x1a\x12names/params.proto\x1a\x10names/name.proto\x1a\x17names/expirations.proto\"\xae\x01\n\x0cGenesisState\x12+\n\x06params\x18\x01 \x01(\x0b\x32\r.names.ParamsB\x04\xc8\xde\x1f\x00R\x06params\x12-\n\x08nameList\x18\x02 \x03(\x0b\x32\x0b.names.NameB\x04\xc8\xde\x1f\x00R\x08nameList\x12\x42\n\x0f\x65xpirationsList\x18\x03 \x03(\x0b\x32\x12.names.ExpirationsB\x04\xc8\xde\x1f\x00R\x0f\x65xpirationsListB$Z\"github.com/org/dyson/x/names/typesb\x06proto3')
  ,
  dependencies=[gogoproto_dot_gogo__pb2.DESCRIPTOR,names_dot_params__pb2.DESCRIPTOR,names_dot_name__pb2.DESCRIPTOR,names_dot_expirations__pb2.DESCRIPTOR,])




_GENESISSTATE = _descriptor.Descriptor(
  name='GenesisState',
  full_name='names.GenesisState',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='params', full_name='names.GenesisState.params', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000'), json_name='params', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='nameList', full_name='names.GenesisState.nameList', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000'), json_name='nameList', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='expirationsList', full_name='names.GenesisState.expirationsList', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000'), json_name='expirationsList', file=DESCRIPTOR),
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
  serialized_start=116,
  serialized_end=290,
)

_GENESISSTATE.fields_by_name['params'].message_type = names_dot_params__pb2._PARAMS
_GENESISSTATE.fields_by_name['nameList'].message_type = names_dot_name__pb2._NAME
_GENESISSTATE.fields_by_name['expirationsList'].message_type = names_dot_expirations__pb2._EXPIRATIONS
DESCRIPTOR.message_types_by_name['GenesisState'] = _GENESISSTATE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

GenesisState = _reflection.GeneratedProtocolMessageType('GenesisState', (_message.Message,), dict(
  DESCRIPTOR = _GENESISSTATE,
  __module__ = 'names.genesis_pb2'
  # @@protoc_insertion_point(class_scope:names.GenesisState)
  ))
_sym_db.RegisterMessage(GenesisState)


DESCRIPTOR._options = None
_GENESISSTATE.fields_by_name['params']._options = None
_GENESISSTATE.fields_by_name['nameList']._options = None
_GENESISSTATE.fields_by_name['expirationsList']._options = None
# @@protoc_insertion_point(module_scope)
