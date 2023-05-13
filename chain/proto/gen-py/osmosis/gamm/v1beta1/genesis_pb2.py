# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: osmosis/gamm/v1beta1/genesis.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from gogoproto import gogo_pb2 as gogoproto_dot_gogo__pb2
from google.protobuf import any_pb2 as google_dot_protobuf_dot_any__pb2
from cosmos_proto import cosmos_pb2 as cosmos__proto_dot_cosmos__pb2
from cosmos.base.v1beta1 import coin_pb2 as cosmos_dot_base_dot_v1beta1_dot_coin__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='osmosis/gamm/v1beta1/genesis.proto',
  package='osmosis.gamm.v1beta1',
  syntax='proto3',
  serialized_options=_b('Z0github.com/osmosis-labs/osmosis/v12/x/gamm/types'),
  serialized_pb=_b('\n\"osmosis/gamm/v1beta1/genesis.proto\x12\x14osmosis.gamm.v1beta1\x1a\x14gogoproto/gogo.proto\x1a\x19google/protobuf/any.proto\x1a\x19\x63osmos_proto/cosmos.proto\x1a\x1e\x63osmos/base/v1beta1/coin.proto\"\x9e\x01\n\x06Params\x12\x93\x01\n\x11pool_creation_fee\x18\x01 \x03(\x0b\x32\x19.cosmos.base.v1beta1.CoinBL\xc8\xde\x1f\x00\xf2\xde\x1f\x18yaml:\"pool_creation_fee\"\xaa\xdf\x1f(github.com/cosmos/cosmos-sdk/types.CoinsR\x0fpoolCreationFee\"\xab\x01\n\x0cGenesisState\x12\x35\n\x05pools\x18\x01 \x03(\x0b\x32\x14.google.protobuf.AnyB\t\xca\xb4-\x05PoolIR\x05pools\x12(\n\x10next_pool_number\x18\x02 \x01(\x04R\x0enextPoolNumber\x12:\n\x06params\x18\x03 \x01(\x0b\x32\x1c.osmosis.gamm.v1beta1.ParamsB\x04\xc8\xde\x1f\x00R\x06paramsB2Z0github.com/osmosis-labs/osmosis/v12/x/gamm/typesb\x06proto3')
  ,
  dependencies=[gogoproto_dot_gogo__pb2.DESCRIPTOR,google_dot_protobuf_dot_any__pb2.DESCRIPTOR,cosmos__proto_dot_cosmos__pb2.DESCRIPTOR,cosmos_dot_base_dot_v1beta1_dot_coin__pb2.DESCRIPTOR,])




_PARAMS = _descriptor.Descriptor(
  name='Params',
  full_name='osmosis.gamm.v1beta1.Params',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='pool_creation_fee', full_name='osmosis.gamm.v1beta1.Params.pool_creation_fee', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000\362\336\037\030yaml:\"pool_creation_fee\"\252\337\037(github.com/cosmos/cosmos-sdk/types.Coins'), json_name='poolCreationFee', file=DESCRIPTOR),
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
  serialized_start=169,
  serialized_end=327,
)


_GENESISSTATE = _descriptor.Descriptor(
  name='GenesisState',
  full_name='osmosis.gamm.v1beta1.GenesisState',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='pools', full_name='osmosis.gamm.v1beta1.GenesisState.pools', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\312\264-\005PoolI'), json_name='pools', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='next_pool_number', full_name='osmosis.gamm.v1beta1.GenesisState.next_pool_number', index=1,
      number=2, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='nextPoolNumber', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='params', full_name='osmosis.gamm.v1beta1.GenesisState.params', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000'), json_name='params', file=DESCRIPTOR),
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
  serialized_start=330,
  serialized_end=501,
)

_PARAMS.fields_by_name['pool_creation_fee'].message_type = cosmos_dot_base_dot_v1beta1_dot_coin__pb2._COIN
_GENESISSTATE.fields_by_name['pools'].message_type = google_dot_protobuf_dot_any__pb2._ANY
_GENESISSTATE.fields_by_name['params'].message_type = _PARAMS
DESCRIPTOR.message_types_by_name['Params'] = _PARAMS
DESCRIPTOR.message_types_by_name['GenesisState'] = _GENESISSTATE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Params = _reflection.GeneratedProtocolMessageType('Params', (_message.Message,), dict(
  DESCRIPTOR = _PARAMS,
  __module__ = 'osmosis.gamm.v1beta1.genesis_pb2'
  # @@protoc_insertion_point(class_scope:osmosis.gamm.v1beta1.Params)
  ))
_sym_db.RegisterMessage(Params)

GenesisState = _reflection.GeneratedProtocolMessageType('GenesisState', (_message.Message,), dict(
  DESCRIPTOR = _GENESISSTATE,
  __module__ = 'osmosis.gamm.v1beta1.genesis_pb2'
  # @@protoc_insertion_point(class_scope:osmosis.gamm.v1beta1.GenesisState)
  ))
_sym_db.RegisterMessage(GenesisState)


DESCRIPTOR._options = None
_PARAMS.fields_by_name['pool_creation_fee']._options = None
_GENESISSTATE.fields_by_name['pools']._options = None
_GENESISSTATE.fields_by_name['params']._options = None
# @@protoc_insertion_point(module_scope)
