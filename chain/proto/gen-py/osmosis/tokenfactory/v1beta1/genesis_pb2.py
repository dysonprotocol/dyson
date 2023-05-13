# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: osmosis/tokenfactory/v1beta1/genesis.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from gogoproto import gogo_pb2 as gogoproto_dot_gogo__pb2
from osmosis.tokenfactory.v1beta1 import authorityMetadata_pb2 as osmosis_dot_tokenfactory_dot_v1beta1_dot_authorityMetadata__pb2
from osmosis.tokenfactory.v1beta1 import params_pb2 as osmosis_dot_tokenfactory_dot_v1beta1_dot_params__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='osmosis/tokenfactory/v1beta1/genesis.proto',
  package='osmosis.tokenfactory.v1beta1',
  syntax='proto3',
  serialized_options=_b('Z8github.com/osmosis-labs/osmosis/v12/x/tokenfactory/types'),
  serialized_pb=_b('\n*osmosis/tokenfactory/v1beta1/genesis.proto\x12\x1cosmosis.tokenfactory.v1beta1\x1a\x14gogoproto/gogo.proto\x1a\x34osmosis/tokenfactory/v1beta1/authorityMetadata.proto\x1a)osmosis/tokenfactory/v1beta1/params.proto\"\xc4\x01\n\x0cGenesisState\x12\x42\n\x06params\x18\x01 \x01(\x0b\x32$.osmosis.tokenfactory.v1beta1.ParamsB\x04\xc8\xde\x1f\x00R\x06params\x12p\n\x0e\x66\x61\x63tory_denoms\x18\x02 \x03(\x0b\x32*.osmosis.tokenfactory.v1beta1.GenesisDenomB\x1d\xc8\xde\x1f\x00\xf2\xde\x1f\x15yaml:\"factory_denoms\"R\rfactoryDenoms\"\xc5\x01\n\x0cGenesisDenom\x12&\n\x05\x64\x65nom\x18\x01 \x01(\tB\x10\xf2\xde\x1f\x0cyaml:\"denom\"R\x05\x64\x65nom\x12\x86\x01\n\x12\x61uthority_metadata\x18\x02 \x01(\x0b\x32\x34.osmosis.tokenfactory.v1beta1.DenomAuthorityMetadataB!\xc8\xde\x1f\x00\xf2\xde\x1f\x19yaml:\"authority_metadata\"R\x11\x61uthorityMetadata:\x04\xe8\xa0\x1f\x01\x42:Z8github.com/osmosis-labs/osmosis/v12/x/tokenfactory/typesb\x06proto3')
  ,
  dependencies=[gogoproto_dot_gogo__pb2.DESCRIPTOR,osmosis_dot_tokenfactory_dot_v1beta1_dot_authorityMetadata__pb2.DESCRIPTOR,osmosis_dot_tokenfactory_dot_v1beta1_dot_params__pb2.DESCRIPTOR,])




_GENESISSTATE = _descriptor.Descriptor(
  name='GenesisState',
  full_name='osmosis.tokenfactory.v1beta1.GenesisState',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='params', full_name='osmosis.tokenfactory.v1beta1.GenesisState.params', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000'), json_name='params', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='factory_denoms', full_name='osmosis.tokenfactory.v1beta1.GenesisState.factory_denoms', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000\362\336\037\025yaml:\"factory_denoms\"'), json_name='factoryDenoms', file=DESCRIPTOR),
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
  serialized_start=196,
  serialized_end=392,
)


_GENESISDENOM = _descriptor.Descriptor(
  name='GenesisDenom',
  full_name='osmosis.tokenfactory.v1beta1.GenesisDenom',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='denom', full_name='osmosis.tokenfactory.v1beta1.GenesisDenom.denom', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\362\336\037\014yaml:\"denom\"'), json_name='denom', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='authority_metadata', full_name='osmosis.tokenfactory.v1beta1.GenesisDenom.authority_metadata', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000\362\336\037\031yaml:\"authority_metadata\"'), json_name='authorityMetadata', file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=_b('\350\240\037\001'),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=395,
  serialized_end=592,
)

_GENESISSTATE.fields_by_name['params'].message_type = osmosis_dot_tokenfactory_dot_v1beta1_dot_params__pb2._PARAMS
_GENESISSTATE.fields_by_name['factory_denoms'].message_type = _GENESISDENOM
_GENESISDENOM.fields_by_name['authority_metadata'].message_type = osmosis_dot_tokenfactory_dot_v1beta1_dot_authorityMetadata__pb2._DENOMAUTHORITYMETADATA
DESCRIPTOR.message_types_by_name['GenesisState'] = _GENESISSTATE
DESCRIPTOR.message_types_by_name['GenesisDenom'] = _GENESISDENOM
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

GenesisState = _reflection.GeneratedProtocolMessageType('GenesisState', (_message.Message,), dict(
  DESCRIPTOR = _GENESISSTATE,
  __module__ = 'osmosis.tokenfactory.v1beta1.genesis_pb2'
  # @@protoc_insertion_point(class_scope:osmosis.tokenfactory.v1beta1.GenesisState)
  ))
_sym_db.RegisterMessage(GenesisState)

GenesisDenom = _reflection.GeneratedProtocolMessageType('GenesisDenom', (_message.Message,), dict(
  DESCRIPTOR = _GENESISDENOM,
  __module__ = 'osmosis.tokenfactory.v1beta1.genesis_pb2'
  # @@protoc_insertion_point(class_scope:osmosis.tokenfactory.v1beta1.GenesisDenom)
  ))
_sym_db.RegisterMessage(GenesisDenom)


DESCRIPTOR._options = None
_GENESISSTATE.fields_by_name['params']._options = None
_GENESISSTATE.fields_by_name['factory_denoms']._options = None
_GENESISDENOM.fields_by_name['denom']._options = None
_GENESISDENOM.fields_by_name['authority_metadata']._options = None
_GENESISDENOM._options = None
# @@protoc_insertion_point(module_scope)