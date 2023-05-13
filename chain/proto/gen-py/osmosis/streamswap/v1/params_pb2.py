# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: osmosis/streamswap/v1/params.proto

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
from google.protobuf import duration_pb2 as google_dot_protobuf_dot_duration__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='osmosis/streamswap/v1/params.proto',
  package='osmosis.streamswap.v1',
  syntax='proto3',
  serialized_options=_b('Z6github.com/osmosis-labs/osmosis/v12/x/streamswap/types'),
  serialized_pb=_b('\n\"osmosis/streamswap/v1/params.proto\x12\x15osmosis.streamswap.v1\x1a\x14gogoproto/gogo.proto\x1a\x19google/protobuf/any.proto\x1a\x19\x63osmos_proto/cosmos.proto\x1a\x1e\x63osmos/base/v1beta1/coin.proto\x1a\x1egoogle/protobuf/duration.proto\"\x95\x03\n\x06Params\x12\x93\x01\n\x11sale_creation_fee\x18\x01 \x03(\x0b\x32\x19.cosmos.base.v1beta1.CoinBL\xc8\xde\x1f\x00\xf2\xde\x1f\x18yaml:\"sale_creation_fee\"\xaa\xdf\x1f(github.com/cosmos/cosmos-sdk/types.CoinsR\x0fsaleCreationFee\x12=\n\x1bsale_creation_fee_recipient\x18\x02 \x01(\tR\x18saleCreationFeeRecipient\x12\x65\n\x1dmin_duration_until_start_time\x18\x03 \x01(\x0b\x32\x19.google.protobuf.DurationB\x08\xc8\xde\x1f\x00\x98\xdf\x1f\x01R\x19minDurationUntilStartTime\x12O\n\x11min_sale_duration\x18\x04 \x01(\x0b\x32\x19.google.protobuf.DurationB\x08\xc8\xde\x1f\x00\x98\xdf\x1f\x01R\x0fminSaleDurationB8Z6github.com/osmosis-labs/osmosis/v12/x/streamswap/typesb\x06proto3')
  ,
  dependencies=[gogoproto_dot_gogo__pb2.DESCRIPTOR,google_dot_protobuf_dot_any__pb2.DESCRIPTOR,cosmos__proto_dot_cosmos__pb2.DESCRIPTOR,cosmos_dot_base_dot_v1beta1_dot_coin__pb2.DESCRIPTOR,google_dot_protobuf_dot_duration__pb2.DESCRIPTOR,])




_PARAMS = _descriptor.Descriptor(
  name='Params',
  full_name='osmosis.streamswap.v1.Params',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='sale_creation_fee', full_name='osmosis.streamswap.v1.Params.sale_creation_fee', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000\362\336\037\030yaml:\"sale_creation_fee\"\252\337\037(github.com/cosmos/cosmos-sdk/types.Coins'), json_name='saleCreationFee', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='sale_creation_fee_recipient', full_name='osmosis.streamswap.v1.Params.sale_creation_fee_recipient', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='saleCreationFeeRecipient', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='min_duration_until_start_time', full_name='osmosis.streamswap.v1.Params.min_duration_until_start_time', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000\230\337\037\001'), json_name='minDurationUntilStartTime', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='min_sale_duration', full_name='osmosis.streamswap.v1.Params.min_sale_duration', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000\230\337\037\001'), json_name='minSaleDuration', file=DESCRIPTOR),
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
  serialized_start=202,
  serialized_end=607,
)

_PARAMS.fields_by_name['sale_creation_fee'].message_type = cosmos_dot_base_dot_v1beta1_dot_coin__pb2._COIN
_PARAMS.fields_by_name['min_duration_until_start_time'].message_type = google_dot_protobuf_dot_duration__pb2._DURATION
_PARAMS.fields_by_name['min_sale_duration'].message_type = google_dot_protobuf_dot_duration__pb2._DURATION
DESCRIPTOR.message_types_by_name['Params'] = _PARAMS
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Params = _reflection.GeneratedProtocolMessageType('Params', (_message.Message,), dict(
  DESCRIPTOR = _PARAMS,
  __module__ = 'osmosis.streamswap.v1.params_pb2'
  # @@protoc_insertion_point(class_scope:osmosis.streamswap.v1.Params)
  ))
_sym_db.RegisterMessage(Params)


DESCRIPTOR._options = None
_PARAMS.fields_by_name['sale_creation_fee']._options = None
_PARAMS.fields_by_name['min_duration_until_start_time']._options = None
_PARAMS.fields_by_name['min_sale_duration']._options = None
# @@protoc_insertion_point(module_scope)
