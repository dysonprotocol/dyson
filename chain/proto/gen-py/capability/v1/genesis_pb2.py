# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: capability/v1/genesis.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from gogoproto import gogo_pb2 as gogoproto_dot_gogo__pb2
from capability.v1 import capability_pb2 as capability_dot_v1_dot_capability__pb2
from amino import amino_pb2 as amino_dot_amino__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='capability/v1/genesis.proto',
  package='capability.v1',
  syntax='proto3',
  serialized_options=_b('Z1github.com/cosmos/ibc-go/modules/capability/types'),
  serialized_pb=_b('\n\x1b\x63\x61pability/v1/genesis.proto\x12\rcapability.v1\x1a\x14gogoproto/gogo.proto\x1a\x1e\x63\x61pability/v1/capability.proto\x1a\x11\x61mino/amino.proto\"t\n\rGenesisOwners\x12\x14\n\x05index\x18\x01 \x01(\x04R\x05index\x12M\n\x0cindex_owners\x18\x02 \x01(\x0b\x32\x1f.capability.v1.CapabilityOwnersB\t\xc8\xde\x1f\x00\xa8\xe7\xb0*\x01R\x0bindexOwners\"e\n\x0cGenesisState\x12\x14\n\x05index\x18\x01 \x01(\x04R\x05index\x12?\n\x06owners\x18\x02 \x03(\x0b\x32\x1c.capability.v1.GenesisOwnersB\t\xc8\xde\x1f\x00\xa8\xe7\xb0*\x01R\x06ownersB3Z1github.com/cosmos/ibc-go/modules/capability/typesb\x06proto3')
  ,
  dependencies=[gogoproto_dot_gogo__pb2.DESCRIPTOR,capability_dot_v1_dot_capability__pb2.DESCRIPTOR,amino_dot_amino__pb2.DESCRIPTOR,])




_GENESISOWNERS = _descriptor.Descriptor(
  name='GenesisOwners',
  full_name='capability.v1.GenesisOwners',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='index', full_name='capability.v1.GenesisOwners.index', index=0,
      number=1, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='index', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='index_owners', full_name='capability.v1.GenesisOwners.index_owners', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000\250\347\260*\001'), json_name='indexOwners', file=DESCRIPTOR),
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
  serialized_start=119,
  serialized_end=235,
)


_GENESISSTATE = _descriptor.Descriptor(
  name='GenesisState',
  full_name='capability.v1.GenesisState',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='index', full_name='capability.v1.GenesisState.index', index=0,
      number=1, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='index', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='owners', full_name='capability.v1.GenesisState.owners', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000\250\347\260*\001'), json_name='owners', file=DESCRIPTOR),
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
  serialized_start=237,
  serialized_end=338,
)

_GENESISOWNERS.fields_by_name['index_owners'].message_type = capability_dot_v1_dot_capability__pb2._CAPABILITYOWNERS
_GENESISSTATE.fields_by_name['owners'].message_type = _GENESISOWNERS
DESCRIPTOR.message_types_by_name['GenesisOwners'] = _GENESISOWNERS
DESCRIPTOR.message_types_by_name['GenesisState'] = _GENESISSTATE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

GenesisOwners = _reflection.GeneratedProtocolMessageType('GenesisOwners', (_message.Message,), dict(
  DESCRIPTOR = _GENESISOWNERS,
  __module__ = 'capability.v1.genesis_pb2'
  # @@protoc_insertion_point(class_scope:capability.v1.GenesisOwners)
  ))
_sym_db.RegisterMessage(GenesisOwners)

GenesisState = _reflection.GeneratedProtocolMessageType('GenesisState', (_message.Message,), dict(
  DESCRIPTOR = _GENESISSTATE,
  __module__ = 'capability.v1.genesis_pb2'
  # @@protoc_insertion_point(class_scope:capability.v1.GenesisState)
  ))
_sym_db.RegisterMessage(GenesisState)


DESCRIPTOR._options = None
_GENESISOWNERS.fields_by_name['index_owners']._options = None
_GENESISSTATE.fields_by_name['owners']._options = None
# @@protoc_insertion_point(module_scope)
