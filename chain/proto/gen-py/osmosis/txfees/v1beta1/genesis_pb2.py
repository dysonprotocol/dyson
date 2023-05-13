# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: osmosis/txfees/v1beta1/genesis.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from gogoproto import gogo_pb2 as gogoproto_dot_gogo__pb2
from osmosis.txfees.v1beta1 import feetoken_pb2 as osmosis_dot_txfees_dot_v1beta1_dot_feetoken__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='osmosis/txfees/v1beta1/genesis.proto',
  package='osmosis.txfees.v1beta1',
  syntax='proto3',
  serialized_options=_b('Z2github.com/osmosis-labs/osmosis/v12/x/txfees/types'),
  serialized_pb=_b('\n$osmosis/txfees/v1beta1/genesis.proto\x12\x16osmosis.txfees.v1beta1\x1a\x14gogoproto/gogo.proto\x1a%osmosis/txfees/v1beta1/feetoken.proto\"r\n\x0cGenesisState\x12\x1c\n\tbasedenom\x18\x01 \x01(\tR\tbasedenom\x12\x44\n\tfeetokens\x18\x02 \x03(\x0b\x32 .osmosis.txfees.v1beta1.FeeTokenB\x04\xc8\xde\x1f\x00R\tfeetokensB4Z2github.com/osmosis-labs/osmosis/v12/x/txfees/typesb\x06proto3')
  ,
  dependencies=[gogoproto_dot_gogo__pb2.DESCRIPTOR,osmosis_dot_txfees_dot_v1beta1_dot_feetoken__pb2.DESCRIPTOR,])




_GENESISSTATE = _descriptor.Descriptor(
  name='GenesisState',
  full_name='osmosis.txfees.v1beta1.GenesisState',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='basedenom', full_name='osmosis.txfees.v1beta1.GenesisState.basedenom', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='basedenom', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='feetokens', full_name='osmosis.txfees.v1beta1.GenesisState.feetokens', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000'), json_name='feetokens', file=DESCRIPTOR),
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
  serialized_start=125,
  serialized_end=239,
)

_GENESISSTATE.fields_by_name['feetokens'].message_type = osmosis_dot_txfees_dot_v1beta1_dot_feetoken__pb2._FEETOKEN
DESCRIPTOR.message_types_by_name['GenesisState'] = _GENESISSTATE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

GenesisState = _reflection.GeneratedProtocolMessageType('GenesisState', (_message.Message,), dict(
  DESCRIPTOR = _GENESISSTATE,
  __module__ = 'osmosis.txfees.v1beta1.genesis_pb2'
  # @@protoc_insertion_point(class_scope:osmosis.txfees.v1beta1.GenesisState)
  ))
_sym_db.RegisterMessage(GenesisState)


DESCRIPTOR._options = None
_GENESISSTATE.fields_by_name['feetokens']._options = None
# @@protoc_insertion_point(module_scope)
