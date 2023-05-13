# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: osmosis/incentives/query.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from gogoproto import gogo_pb2 as gogoproto_dot_gogo__pb2
from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from google.protobuf import duration_pb2 as google_dot_protobuf_dot_duration__pb2
from cosmos.base.v1beta1 import coin_pb2 as cosmos_dot_base_dot_v1beta1_dot_coin__pb2
from cosmos.base.query.v1beta1 import pagination_pb2 as cosmos_dot_base_dot_query_dot_v1beta1_dot_pagination__pb2
from osmosis.incentives import gauge_pb2 as osmosis_dot_incentives_dot_gauge__pb2
from osmosis.lockup import lock_pb2 as osmosis_dot_lockup_dot_lock__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='osmosis/incentives/query.proto',
  package='osmosis.incentives',
  syntax='proto3',
  serialized_options=_b('Z6github.com/osmosis-labs/osmosis/v12/x/incentives/types'),
  serialized_pb=_b('\n\x1eosmosis/incentives/query.proto\x12\x12osmosis.incentives\x1a\x14gogoproto/gogo.proto\x1a\x1cgoogle/api/annotations.proto\x1a\x1egoogle/protobuf/duration.proto\x1a\x1e\x63osmos/base/v1beta1/coin.proto\x1a*cosmos/base/query/v1beta1/pagination.proto\x1a\x1eosmosis/incentives/gauge.proto\x1a\x19osmosis/lockup/lock.proto\" \n\x1eModuleToDistributeCoinsRequest\"\x84\x01\n\x1fModuleToDistributeCoinsResponse\x12\x61\n\x05\x63oins\x18\x01 \x03(\x0b\x32\x19.cosmos.base.v1beta1.CoinB0\xc8\xde\x1f\x00\xaa\xdf\x1f(github.com/cosmos/cosmos-sdk/types.CoinsR\x05\x63oins\"\"\n\x10GaugeByIDRequest\x12\x0e\n\x02id\x18\x01 \x01(\x04R\x02id\"D\n\x11GaugeByIDResponse\x12/\n\x05gauge\x18\x01 \x01(\x0b\x32\x19.osmosis.incentives.GaugeR\x05gauge\"W\n\rGaugesRequest\x12\x46\n\npagination\x18\x01 \x01(\x0b\x32&.cosmos.base.query.v1beta1.PageRequestR\npagination\"\x8e\x01\n\x0eGaugesResponse\x12\x33\n\x04\x64\x61ta\x18\x01 \x03(\x0b\x32\x19.osmosis.incentives.GaugeB\x04\xc8\xde\x1f\x00R\x04\x64\x61ta\x12G\n\npagination\x18\x02 \x01(\x0b\x32\'.cosmos.base.query.v1beta1.PageResponseR\npagination\"]\n\x13\x41\x63tiveGaugesRequest\x12\x46\n\npagination\x18\x01 \x01(\x0b\x32&.cosmos.base.query.v1beta1.PageRequestR\npagination\"\x94\x01\n\x14\x41\x63tiveGaugesResponse\x12\x33\n\x04\x64\x61ta\x18\x01 \x03(\x0b\x32\x19.osmosis.incentives.GaugeB\x04\xc8\xde\x1f\x00R\x04\x64\x61ta\x12G\n\npagination\x18\x02 \x01(\x0b\x32\'.cosmos.base.query.v1beta1.PageResponseR\npagination\"{\n\x1b\x41\x63tiveGaugesPerDenomRequest\x12\x14\n\x05\x64\x65nom\x18\x01 \x01(\tR\x05\x64\x65nom\x12\x46\n\npagination\x18\x02 \x01(\x0b\x32&.cosmos.base.query.v1beta1.PageRequestR\npagination\"\x9c\x01\n\x1c\x41\x63tiveGaugesPerDenomResponse\x12\x33\n\x04\x64\x61ta\x18\x01 \x03(\x0b\x32\x19.osmosis.incentives.GaugeB\x04\xc8\xde\x1f\x00R\x04\x64\x61ta\x12G\n\npagination\x18\x02 \x01(\x0b\x32\'.cosmos.base.query.v1beta1.PageResponseR\npagination\"_\n\x15UpcomingGaugesRequest\x12\x46\n\npagination\x18\x01 \x01(\x0b\x32&.cosmos.base.query.v1beta1.PageRequestR\npagination\"\x96\x01\n\x16UpcomingGaugesResponse\x12\x33\n\x04\x64\x61ta\x18\x01 \x03(\x0b\x32\x19.osmosis.incentives.GaugeB\x04\xc8\xde\x1f\x00R\x04\x64\x61ta\x12G\n\npagination\x18\x02 \x01(\x0b\x32\'.cosmos.base.query.v1beta1.PageResponseR\npagination\"}\n\x1dUpcomingGaugesPerDenomRequest\x12\x14\n\x05\x64\x65nom\x18\x01 \x01(\tR\x05\x64\x65nom\x12\x46\n\npagination\x18\x02 \x01(\x0b\x32&.cosmos.base.query.v1beta1.PageRequestR\npagination\"\xb3\x01\n\x1eUpcomingGaugesPerDenomResponse\x12H\n\x0fupcoming_gauges\x18\x01 \x03(\x0b\x32\x19.osmosis.incentives.GaugeB\x04\xc8\xde\x1f\x00R\x0eupcomingGauges\x12G\n\npagination\x18\x02 \x01(\x0b\x32\'.cosmos.base.query.v1beta1.PageResponseR\npagination\"s\n\x11RewardsEstRequest\x12&\n\x05owner\x18\x01 \x01(\tB\x10\xf2\xde\x1f\x0cyaml:\"owner\"R\x05owner\x12\x19\n\x08lock_ids\x18\x02 \x03(\x04R\x07lockIds\x12\x1b\n\tend_epoch\x18\x03 \x01(\x03R\x08\x65ndEpoch\"w\n\x12RewardsEstResponse\x12\x61\n\x05\x63oins\x18\x01 \x03(\x0b\x32\x19.cosmos.base.v1beta1.CoinB0\xc8\xde\x1f\x00\xaa\xdf\x1f(github.com/cosmos/cosmos-sdk/types.CoinsR\x05\x63oins\"\x1f\n\x1dQueryLockableDurationsRequest\"\x91\x01\n\x1eQueryLockableDurationsResponse\x12o\n\x12lockable_durations\x18\x01 \x03(\x0b\x32\x19.google.protobuf.DurationB%\xc8\xde\x1f\x00\xf2\xde\x1f\x19yaml:\"lockable_durations\"\x98\xdf\x1f\x01R\x11lockableDurations2\xd6\x0b\n\x05Query\x12\xc2\x01\n\x17ModuleToDistributeCoins\x12\x32.osmosis.incentives.ModuleToDistributeCoinsRequest\x1a\x33.osmosis.incentives.ModuleToDistributeCoinsResponse\">\x82\xd3\xe4\x93\x02\x38\x12\x36/osmosis/incentives/v1beta1/module_to_distribute_coins\x12\x8e\x01\n\tGaugeByID\x12$.osmosis.incentives.GaugeByIDRequest\x1a%.osmosis.incentives.GaugeByIDResponse\"4\x82\xd3\xe4\x93\x02.\x12,/osmosis/incentives/v1beta1/gauge_by_id/{id}\x12{\n\x06Gauges\x12!.osmosis.incentives.GaugesRequest\x1a\".osmosis.incentives.GaugesResponse\"*\x82\xd3\xe4\x93\x02$\x12\"/osmosis/incentives/v1beta1/gauges\x12\x94\x01\n\x0c\x41\x63tiveGauges\x12\'.osmosis.incentives.ActiveGaugesRequest\x1a(.osmosis.incentives.ActiveGaugesResponse\"1\x82\xd3\xe4\x93\x02+\x12)/osmosis/incentives/v1beta1/active_gauges\x12\xb6\x01\n\x14\x41\x63tiveGaugesPerDenom\x12/.osmosis.incentives.ActiveGaugesPerDenomRequest\x1a\x30.osmosis.incentives.ActiveGaugesPerDenomResponse\";\x82\xd3\xe4\x93\x02\x35\x12\x33/osmosis/incentives/v1beta1/active_gauges_per_denom\x12\x9c\x01\n\x0eUpcomingGauges\x12).osmosis.incentives.UpcomingGaugesRequest\x1a*.osmosis.incentives.UpcomingGaugesResponse\"3\x82\xd3\xe4\x93\x02-\x12+/osmosis/incentives/v1beta1/upcoming_gauges\x12\xbe\x01\n\x16UpcomingGaugesPerDenom\x12\x31.osmosis.incentives.UpcomingGaugesPerDenomRequest\x1a\x32.osmosis.incentives.UpcomingGaugesPerDenomResponse\"=\x82\xd3\xe4\x93\x02\x37\x12\x35/osmosis/incentives/v1beta1/upcoming_gauges_per_denom\x12\x94\x01\n\nRewardsEst\x12%.osmosis.incentives.RewardsEstRequest\x1a&.osmosis.incentives.RewardsEstResponse\"7\x82\xd3\xe4\x93\x02\x31\x12//osmosis/incentives/v1beta1/rewards_est/{owner}\x12\xb2\x01\n\x11LockableDurations\x12\x31.osmosis.incentives.QueryLockableDurationsRequest\x1a\x32.osmosis.incentives.QueryLockableDurationsResponse\"6\x82\xd3\xe4\x93\x02\x30\x12./osmosis/incentives/v1beta1/lockable_durationsB8Z6github.com/osmosis-labs/osmosis/v12/x/incentives/typesb\x06proto3')
  ,
  dependencies=[gogoproto_dot_gogo__pb2.DESCRIPTOR,google_dot_api_dot_annotations__pb2.DESCRIPTOR,google_dot_protobuf_dot_duration__pb2.DESCRIPTOR,cosmos_dot_base_dot_v1beta1_dot_coin__pb2.DESCRIPTOR,cosmos_dot_base_dot_query_dot_v1beta1_dot_pagination__pb2.DESCRIPTOR,osmosis_dot_incentives_dot_gauge__pb2.DESCRIPTOR,osmosis_dot_lockup_dot_lock__pb2.DESCRIPTOR,])




_MODULETODISTRIBUTECOINSREQUEST = _descriptor.Descriptor(
  name='ModuleToDistributeCoinsRequest',
  full_name='osmosis.incentives.ModuleToDistributeCoinsRequest',
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
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=273,
  serialized_end=305,
)


_MODULETODISTRIBUTECOINSRESPONSE = _descriptor.Descriptor(
  name='ModuleToDistributeCoinsResponse',
  full_name='osmosis.incentives.ModuleToDistributeCoinsResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='coins', full_name='osmosis.incentives.ModuleToDistributeCoinsResponse.coins', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000\252\337\037(github.com/cosmos/cosmos-sdk/types.Coins'), json_name='coins', file=DESCRIPTOR),
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
  serialized_start=308,
  serialized_end=440,
)


_GAUGEBYIDREQUEST = _descriptor.Descriptor(
  name='GaugeByIDRequest',
  full_name='osmosis.incentives.GaugeByIDRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='osmosis.incentives.GaugeByIDRequest.id', index=0,
      number=1, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='id', file=DESCRIPTOR),
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
  serialized_start=442,
  serialized_end=476,
)


_GAUGEBYIDRESPONSE = _descriptor.Descriptor(
  name='GaugeByIDResponse',
  full_name='osmosis.incentives.GaugeByIDResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='gauge', full_name='osmosis.incentives.GaugeByIDResponse.gauge', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='gauge', file=DESCRIPTOR),
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
  serialized_start=478,
  serialized_end=546,
)


_GAUGESREQUEST = _descriptor.Descriptor(
  name='GaugesRequest',
  full_name='osmosis.incentives.GaugesRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='pagination', full_name='osmosis.incentives.GaugesRequest.pagination', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='pagination', file=DESCRIPTOR),
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
  serialized_start=548,
  serialized_end=635,
)


_GAUGESRESPONSE = _descriptor.Descriptor(
  name='GaugesResponse',
  full_name='osmosis.incentives.GaugesResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='data', full_name='osmosis.incentives.GaugesResponse.data', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000'), json_name='data', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='pagination', full_name='osmosis.incentives.GaugesResponse.pagination', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='pagination', file=DESCRIPTOR),
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
  serialized_start=638,
  serialized_end=780,
)


_ACTIVEGAUGESREQUEST = _descriptor.Descriptor(
  name='ActiveGaugesRequest',
  full_name='osmosis.incentives.ActiveGaugesRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='pagination', full_name='osmosis.incentives.ActiveGaugesRequest.pagination', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='pagination', file=DESCRIPTOR),
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
  serialized_start=782,
  serialized_end=875,
)


_ACTIVEGAUGESRESPONSE = _descriptor.Descriptor(
  name='ActiveGaugesResponse',
  full_name='osmosis.incentives.ActiveGaugesResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='data', full_name='osmosis.incentives.ActiveGaugesResponse.data', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000'), json_name='data', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='pagination', full_name='osmosis.incentives.ActiveGaugesResponse.pagination', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='pagination', file=DESCRIPTOR),
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
  serialized_start=878,
  serialized_end=1026,
)


_ACTIVEGAUGESPERDENOMREQUEST = _descriptor.Descriptor(
  name='ActiveGaugesPerDenomRequest',
  full_name='osmosis.incentives.ActiveGaugesPerDenomRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='denom', full_name='osmosis.incentives.ActiveGaugesPerDenomRequest.denom', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='denom', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='pagination', full_name='osmosis.incentives.ActiveGaugesPerDenomRequest.pagination', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='pagination', file=DESCRIPTOR),
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
  serialized_start=1028,
  serialized_end=1151,
)


_ACTIVEGAUGESPERDENOMRESPONSE = _descriptor.Descriptor(
  name='ActiveGaugesPerDenomResponse',
  full_name='osmosis.incentives.ActiveGaugesPerDenomResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='data', full_name='osmosis.incentives.ActiveGaugesPerDenomResponse.data', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000'), json_name='data', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='pagination', full_name='osmosis.incentives.ActiveGaugesPerDenomResponse.pagination', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='pagination', file=DESCRIPTOR),
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
  serialized_start=1154,
  serialized_end=1310,
)


_UPCOMINGGAUGESREQUEST = _descriptor.Descriptor(
  name='UpcomingGaugesRequest',
  full_name='osmosis.incentives.UpcomingGaugesRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='pagination', full_name='osmosis.incentives.UpcomingGaugesRequest.pagination', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='pagination', file=DESCRIPTOR),
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
  serialized_start=1312,
  serialized_end=1407,
)


_UPCOMINGGAUGESRESPONSE = _descriptor.Descriptor(
  name='UpcomingGaugesResponse',
  full_name='osmosis.incentives.UpcomingGaugesResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='data', full_name='osmosis.incentives.UpcomingGaugesResponse.data', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000'), json_name='data', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='pagination', full_name='osmosis.incentives.UpcomingGaugesResponse.pagination', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='pagination', file=DESCRIPTOR),
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
  serialized_start=1410,
  serialized_end=1560,
)


_UPCOMINGGAUGESPERDENOMREQUEST = _descriptor.Descriptor(
  name='UpcomingGaugesPerDenomRequest',
  full_name='osmosis.incentives.UpcomingGaugesPerDenomRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='denom', full_name='osmosis.incentives.UpcomingGaugesPerDenomRequest.denom', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='denom', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='pagination', full_name='osmosis.incentives.UpcomingGaugesPerDenomRequest.pagination', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='pagination', file=DESCRIPTOR),
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
  serialized_start=1562,
  serialized_end=1687,
)


_UPCOMINGGAUGESPERDENOMRESPONSE = _descriptor.Descriptor(
  name='UpcomingGaugesPerDenomResponse',
  full_name='osmosis.incentives.UpcomingGaugesPerDenomResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='upcoming_gauges', full_name='osmosis.incentives.UpcomingGaugesPerDenomResponse.upcoming_gauges', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000'), json_name='upcomingGauges', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='pagination', full_name='osmosis.incentives.UpcomingGaugesPerDenomResponse.pagination', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='pagination', file=DESCRIPTOR),
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
  serialized_start=1690,
  serialized_end=1869,
)


_REWARDSESTREQUEST = _descriptor.Descriptor(
  name='RewardsEstRequest',
  full_name='osmosis.incentives.RewardsEstRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='owner', full_name='osmosis.incentives.RewardsEstRequest.owner', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\362\336\037\014yaml:\"owner\"'), json_name='owner', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='lock_ids', full_name='osmosis.incentives.RewardsEstRequest.lock_ids', index=1,
      number=2, type=4, cpp_type=4, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='lockIds', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='end_epoch', full_name='osmosis.incentives.RewardsEstRequest.end_epoch', index=2,
      number=3, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='endEpoch', file=DESCRIPTOR),
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
  serialized_start=1871,
  serialized_end=1986,
)


_REWARDSESTRESPONSE = _descriptor.Descriptor(
  name='RewardsEstResponse',
  full_name='osmosis.incentives.RewardsEstResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='coins', full_name='osmosis.incentives.RewardsEstResponse.coins', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000\252\337\037(github.com/cosmos/cosmos-sdk/types.Coins'), json_name='coins', file=DESCRIPTOR),
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
  serialized_start=1988,
  serialized_end=2107,
)


_QUERYLOCKABLEDURATIONSREQUEST = _descriptor.Descriptor(
  name='QueryLockableDurationsRequest',
  full_name='osmosis.incentives.QueryLockableDurationsRequest',
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
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=2109,
  serialized_end=2140,
)


_QUERYLOCKABLEDURATIONSRESPONSE = _descriptor.Descriptor(
  name='QueryLockableDurationsResponse',
  full_name='osmosis.incentives.QueryLockableDurationsResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='lockable_durations', full_name='osmosis.incentives.QueryLockableDurationsResponse.lockable_durations', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000\362\336\037\031yaml:\"lockable_durations\"\230\337\037\001'), json_name='lockableDurations', file=DESCRIPTOR),
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
  serialized_start=2143,
  serialized_end=2288,
)

_MODULETODISTRIBUTECOINSRESPONSE.fields_by_name['coins'].message_type = cosmos_dot_base_dot_v1beta1_dot_coin__pb2._COIN
_GAUGEBYIDRESPONSE.fields_by_name['gauge'].message_type = osmosis_dot_incentives_dot_gauge__pb2._GAUGE
_GAUGESREQUEST.fields_by_name['pagination'].message_type = cosmos_dot_base_dot_query_dot_v1beta1_dot_pagination__pb2._PAGEREQUEST
_GAUGESRESPONSE.fields_by_name['data'].message_type = osmosis_dot_incentives_dot_gauge__pb2._GAUGE
_GAUGESRESPONSE.fields_by_name['pagination'].message_type = cosmos_dot_base_dot_query_dot_v1beta1_dot_pagination__pb2._PAGERESPONSE
_ACTIVEGAUGESREQUEST.fields_by_name['pagination'].message_type = cosmos_dot_base_dot_query_dot_v1beta1_dot_pagination__pb2._PAGEREQUEST
_ACTIVEGAUGESRESPONSE.fields_by_name['data'].message_type = osmosis_dot_incentives_dot_gauge__pb2._GAUGE
_ACTIVEGAUGESRESPONSE.fields_by_name['pagination'].message_type = cosmos_dot_base_dot_query_dot_v1beta1_dot_pagination__pb2._PAGERESPONSE
_ACTIVEGAUGESPERDENOMREQUEST.fields_by_name['pagination'].message_type = cosmos_dot_base_dot_query_dot_v1beta1_dot_pagination__pb2._PAGEREQUEST
_ACTIVEGAUGESPERDENOMRESPONSE.fields_by_name['data'].message_type = osmosis_dot_incentives_dot_gauge__pb2._GAUGE
_ACTIVEGAUGESPERDENOMRESPONSE.fields_by_name['pagination'].message_type = cosmos_dot_base_dot_query_dot_v1beta1_dot_pagination__pb2._PAGERESPONSE
_UPCOMINGGAUGESREQUEST.fields_by_name['pagination'].message_type = cosmos_dot_base_dot_query_dot_v1beta1_dot_pagination__pb2._PAGEREQUEST
_UPCOMINGGAUGESRESPONSE.fields_by_name['data'].message_type = osmosis_dot_incentives_dot_gauge__pb2._GAUGE
_UPCOMINGGAUGESRESPONSE.fields_by_name['pagination'].message_type = cosmos_dot_base_dot_query_dot_v1beta1_dot_pagination__pb2._PAGERESPONSE
_UPCOMINGGAUGESPERDENOMREQUEST.fields_by_name['pagination'].message_type = cosmos_dot_base_dot_query_dot_v1beta1_dot_pagination__pb2._PAGEREQUEST
_UPCOMINGGAUGESPERDENOMRESPONSE.fields_by_name['upcoming_gauges'].message_type = osmosis_dot_incentives_dot_gauge__pb2._GAUGE
_UPCOMINGGAUGESPERDENOMRESPONSE.fields_by_name['pagination'].message_type = cosmos_dot_base_dot_query_dot_v1beta1_dot_pagination__pb2._PAGERESPONSE
_REWARDSESTRESPONSE.fields_by_name['coins'].message_type = cosmos_dot_base_dot_v1beta1_dot_coin__pb2._COIN
_QUERYLOCKABLEDURATIONSRESPONSE.fields_by_name['lockable_durations'].message_type = google_dot_protobuf_dot_duration__pb2._DURATION
DESCRIPTOR.message_types_by_name['ModuleToDistributeCoinsRequest'] = _MODULETODISTRIBUTECOINSREQUEST
DESCRIPTOR.message_types_by_name['ModuleToDistributeCoinsResponse'] = _MODULETODISTRIBUTECOINSRESPONSE
DESCRIPTOR.message_types_by_name['GaugeByIDRequest'] = _GAUGEBYIDREQUEST
DESCRIPTOR.message_types_by_name['GaugeByIDResponse'] = _GAUGEBYIDRESPONSE
DESCRIPTOR.message_types_by_name['GaugesRequest'] = _GAUGESREQUEST
DESCRIPTOR.message_types_by_name['GaugesResponse'] = _GAUGESRESPONSE
DESCRIPTOR.message_types_by_name['ActiveGaugesRequest'] = _ACTIVEGAUGESREQUEST
DESCRIPTOR.message_types_by_name['ActiveGaugesResponse'] = _ACTIVEGAUGESRESPONSE
DESCRIPTOR.message_types_by_name['ActiveGaugesPerDenomRequest'] = _ACTIVEGAUGESPERDENOMREQUEST
DESCRIPTOR.message_types_by_name['ActiveGaugesPerDenomResponse'] = _ACTIVEGAUGESPERDENOMRESPONSE
DESCRIPTOR.message_types_by_name['UpcomingGaugesRequest'] = _UPCOMINGGAUGESREQUEST
DESCRIPTOR.message_types_by_name['UpcomingGaugesResponse'] = _UPCOMINGGAUGESRESPONSE
DESCRIPTOR.message_types_by_name['UpcomingGaugesPerDenomRequest'] = _UPCOMINGGAUGESPERDENOMREQUEST
DESCRIPTOR.message_types_by_name['UpcomingGaugesPerDenomResponse'] = _UPCOMINGGAUGESPERDENOMRESPONSE
DESCRIPTOR.message_types_by_name['RewardsEstRequest'] = _REWARDSESTREQUEST
DESCRIPTOR.message_types_by_name['RewardsEstResponse'] = _REWARDSESTRESPONSE
DESCRIPTOR.message_types_by_name['QueryLockableDurationsRequest'] = _QUERYLOCKABLEDURATIONSREQUEST
DESCRIPTOR.message_types_by_name['QueryLockableDurationsResponse'] = _QUERYLOCKABLEDURATIONSRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

ModuleToDistributeCoinsRequest = _reflection.GeneratedProtocolMessageType('ModuleToDistributeCoinsRequest', (_message.Message,), dict(
  DESCRIPTOR = _MODULETODISTRIBUTECOINSREQUEST,
  __module__ = 'osmosis.incentives.query_pb2'
  # @@protoc_insertion_point(class_scope:osmosis.incentives.ModuleToDistributeCoinsRequest)
  ))
_sym_db.RegisterMessage(ModuleToDistributeCoinsRequest)

ModuleToDistributeCoinsResponse = _reflection.GeneratedProtocolMessageType('ModuleToDistributeCoinsResponse', (_message.Message,), dict(
  DESCRIPTOR = _MODULETODISTRIBUTECOINSRESPONSE,
  __module__ = 'osmosis.incentives.query_pb2'
  # @@protoc_insertion_point(class_scope:osmosis.incentives.ModuleToDistributeCoinsResponse)
  ))
_sym_db.RegisterMessage(ModuleToDistributeCoinsResponse)

GaugeByIDRequest = _reflection.GeneratedProtocolMessageType('GaugeByIDRequest', (_message.Message,), dict(
  DESCRIPTOR = _GAUGEBYIDREQUEST,
  __module__ = 'osmosis.incentives.query_pb2'
  # @@protoc_insertion_point(class_scope:osmosis.incentives.GaugeByIDRequest)
  ))
_sym_db.RegisterMessage(GaugeByIDRequest)

GaugeByIDResponse = _reflection.GeneratedProtocolMessageType('GaugeByIDResponse', (_message.Message,), dict(
  DESCRIPTOR = _GAUGEBYIDRESPONSE,
  __module__ = 'osmosis.incentives.query_pb2'
  # @@protoc_insertion_point(class_scope:osmosis.incentives.GaugeByIDResponse)
  ))
_sym_db.RegisterMessage(GaugeByIDResponse)

GaugesRequest = _reflection.GeneratedProtocolMessageType('GaugesRequest', (_message.Message,), dict(
  DESCRIPTOR = _GAUGESREQUEST,
  __module__ = 'osmosis.incentives.query_pb2'
  # @@protoc_insertion_point(class_scope:osmosis.incentives.GaugesRequest)
  ))
_sym_db.RegisterMessage(GaugesRequest)

GaugesResponse = _reflection.GeneratedProtocolMessageType('GaugesResponse', (_message.Message,), dict(
  DESCRIPTOR = _GAUGESRESPONSE,
  __module__ = 'osmosis.incentives.query_pb2'
  # @@protoc_insertion_point(class_scope:osmosis.incentives.GaugesResponse)
  ))
_sym_db.RegisterMessage(GaugesResponse)

ActiveGaugesRequest = _reflection.GeneratedProtocolMessageType('ActiveGaugesRequest', (_message.Message,), dict(
  DESCRIPTOR = _ACTIVEGAUGESREQUEST,
  __module__ = 'osmosis.incentives.query_pb2'
  # @@protoc_insertion_point(class_scope:osmosis.incentives.ActiveGaugesRequest)
  ))
_sym_db.RegisterMessage(ActiveGaugesRequest)

ActiveGaugesResponse = _reflection.GeneratedProtocolMessageType('ActiveGaugesResponse', (_message.Message,), dict(
  DESCRIPTOR = _ACTIVEGAUGESRESPONSE,
  __module__ = 'osmosis.incentives.query_pb2'
  # @@protoc_insertion_point(class_scope:osmosis.incentives.ActiveGaugesResponse)
  ))
_sym_db.RegisterMessage(ActiveGaugesResponse)

ActiveGaugesPerDenomRequest = _reflection.GeneratedProtocolMessageType('ActiveGaugesPerDenomRequest', (_message.Message,), dict(
  DESCRIPTOR = _ACTIVEGAUGESPERDENOMREQUEST,
  __module__ = 'osmosis.incentives.query_pb2'
  # @@protoc_insertion_point(class_scope:osmosis.incentives.ActiveGaugesPerDenomRequest)
  ))
_sym_db.RegisterMessage(ActiveGaugesPerDenomRequest)

ActiveGaugesPerDenomResponse = _reflection.GeneratedProtocolMessageType('ActiveGaugesPerDenomResponse', (_message.Message,), dict(
  DESCRIPTOR = _ACTIVEGAUGESPERDENOMRESPONSE,
  __module__ = 'osmosis.incentives.query_pb2'
  # @@protoc_insertion_point(class_scope:osmosis.incentives.ActiveGaugesPerDenomResponse)
  ))
_sym_db.RegisterMessage(ActiveGaugesPerDenomResponse)

UpcomingGaugesRequest = _reflection.GeneratedProtocolMessageType('UpcomingGaugesRequest', (_message.Message,), dict(
  DESCRIPTOR = _UPCOMINGGAUGESREQUEST,
  __module__ = 'osmosis.incentives.query_pb2'
  # @@protoc_insertion_point(class_scope:osmosis.incentives.UpcomingGaugesRequest)
  ))
_sym_db.RegisterMessage(UpcomingGaugesRequest)

UpcomingGaugesResponse = _reflection.GeneratedProtocolMessageType('UpcomingGaugesResponse', (_message.Message,), dict(
  DESCRIPTOR = _UPCOMINGGAUGESRESPONSE,
  __module__ = 'osmosis.incentives.query_pb2'
  # @@protoc_insertion_point(class_scope:osmosis.incentives.UpcomingGaugesResponse)
  ))
_sym_db.RegisterMessage(UpcomingGaugesResponse)

UpcomingGaugesPerDenomRequest = _reflection.GeneratedProtocolMessageType('UpcomingGaugesPerDenomRequest', (_message.Message,), dict(
  DESCRIPTOR = _UPCOMINGGAUGESPERDENOMREQUEST,
  __module__ = 'osmosis.incentives.query_pb2'
  # @@protoc_insertion_point(class_scope:osmosis.incentives.UpcomingGaugesPerDenomRequest)
  ))
_sym_db.RegisterMessage(UpcomingGaugesPerDenomRequest)

UpcomingGaugesPerDenomResponse = _reflection.GeneratedProtocolMessageType('UpcomingGaugesPerDenomResponse', (_message.Message,), dict(
  DESCRIPTOR = _UPCOMINGGAUGESPERDENOMRESPONSE,
  __module__ = 'osmosis.incentives.query_pb2'
  # @@protoc_insertion_point(class_scope:osmosis.incentives.UpcomingGaugesPerDenomResponse)
  ))
_sym_db.RegisterMessage(UpcomingGaugesPerDenomResponse)

RewardsEstRequest = _reflection.GeneratedProtocolMessageType('RewardsEstRequest', (_message.Message,), dict(
  DESCRIPTOR = _REWARDSESTREQUEST,
  __module__ = 'osmosis.incentives.query_pb2'
  # @@protoc_insertion_point(class_scope:osmosis.incentives.RewardsEstRequest)
  ))
_sym_db.RegisterMessage(RewardsEstRequest)

RewardsEstResponse = _reflection.GeneratedProtocolMessageType('RewardsEstResponse', (_message.Message,), dict(
  DESCRIPTOR = _REWARDSESTRESPONSE,
  __module__ = 'osmosis.incentives.query_pb2'
  # @@protoc_insertion_point(class_scope:osmosis.incentives.RewardsEstResponse)
  ))
_sym_db.RegisterMessage(RewardsEstResponse)

QueryLockableDurationsRequest = _reflection.GeneratedProtocolMessageType('QueryLockableDurationsRequest', (_message.Message,), dict(
  DESCRIPTOR = _QUERYLOCKABLEDURATIONSREQUEST,
  __module__ = 'osmosis.incentives.query_pb2'
  # @@protoc_insertion_point(class_scope:osmosis.incentives.QueryLockableDurationsRequest)
  ))
_sym_db.RegisterMessage(QueryLockableDurationsRequest)

QueryLockableDurationsResponse = _reflection.GeneratedProtocolMessageType('QueryLockableDurationsResponse', (_message.Message,), dict(
  DESCRIPTOR = _QUERYLOCKABLEDURATIONSRESPONSE,
  __module__ = 'osmosis.incentives.query_pb2'
  # @@protoc_insertion_point(class_scope:osmosis.incentives.QueryLockableDurationsResponse)
  ))
_sym_db.RegisterMessage(QueryLockableDurationsResponse)


DESCRIPTOR._options = None
_MODULETODISTRIBUTECOINSRESPONSE.fields_by_name['coins']._options = None
_GAUGESRESPONSE.fields_by_name['data']._options = None
_ACTIVEGAUGESRESPONSE.fields_by_name['data']._options = None
_ACTIVEGAUGESPERDENOMRESPONSE.fields_by_name['data']._options = None
_UPCOMINGGAUGESRESPONSE.fields_by_name['data']._options = None
_UPCOMINGGAUGESPERDENOMRESPONSE.fields_by_name['upcoming_gauges']._options = None
_REWARDSESTREQUEST.fields_by_name['owner']._options = None
_REWARDSESTRESPONSE.fields_by_name['coins']._options = None
_QUERYLOCKABLEDURATIONSRESPONSE.fields_by_name['lockable_durations']._options = None

_QUERY = _descriptor.ServiceDescriptor(
  name='Query',
  full_name='osmosis.incentives.Query',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  serialized_start=2291,
  serialized_end=3785,
  methods=[
  _descriptor.MethodDescriptor(
    name='ModuleToDistributeCoins',
    full_name='osmosis.incentives.Query.ModuleToDistributeCoins',
    index=0,
    containing_service=None,
    input_type=_MODULETODISTRIBUTECOINSREQUEST,
    output_type=_MODULETODISTRIBUTECOINSRESPONSE,
    serialized_options=_b('\202\323\344\223\0028\0226/osmosis/incentives/v1beta1/module_to_distribute_coins'),
  ),
  _descriptor.MethodDescriptor(
    name='GaugeByID',
    full_name='osmosis.incentives.Query.GaugeByID',
    index=1,
    containing_service=None,
    input_type=_GAUGEBYIDREQUEST,
    output_type=_GAUGEBYIDRESPONSE,
    serialized_options=_b('\202\323\344\223\002.\022,/osmosis/incentives/v1beta1/gauge_by_id/{id}'),
  ),
  _descriptor.MethodDescriptor(
    name='Gauges',
    full_name='osmosis.incentives.Query.Gauges',
    index=2,
    containing_service=None,
    input_type=_GAUGESREQUEST,
    output_type=_GAUGESRESPONSE,
    serialized_options=_b('\202\323\344\223\002$\022\"/osmosis/incentives/v1beta1/gauges'),
  ),
  _descriptor.MethodDescriptor(
    name='ActiveGauges',
    full_name='osmosis.incentives.Query.ActiveGauges',
    index=3,
    containing_service=None,
    input_type=_ACTIVEGAUGESREQUEST,
    output_type=_ACTIVEGAUGESRESPONSE,
    serialized_options=_b('\202\323\344\223\002+\022)/osmosis/incentives/v1beta1/active_gauges'),
  ),
  _descriptor.MethodDescriptor(
    name='ActiveGaugesPerDenom',
    full_name='osmosis.incentives.Query.ActiveGaugesPerDenom',
    index=4,
    containing_service=None,
    input_type=_ACTIVEGAUGESPERDENOMREQUEST,
    output_type=_ACTIVEGAUGESPERDENOMRESPONSE,
    serialized_options=_b('\202\323\344\223\0025\0223/osmosis/incentives/v1beta1/active_gauges_per_denom'),
  ),
  _descriptor.MethodDescriptor(
    name='UpcomingGauges',
    full_name='osmosis.incentives.Query.UpcomingGauges',
    index=5,
    containing_service=None,
    input_type=_UPCOMINGGAUGESREQUEST,
    output_type=_UPCOMINGGAUGESRESPONSE,
    serialized_options=_b('\202\323\344\223\002-\022+/osmosis/incentives/v1beta1/upcoming_gauges'),
  ),
  _descriptor.MethodDescriptor(
    name='UpcomingGaugesPerDenom',
    full_name='osmosis.incentives.Query.UpcomingGaugesPerDenom',
    index=6,
    containing_service=None,
    input_type=_UPCOMINGGAUGESPERDENOMREQUEST,
    output_type=_UPCOMINGGAUGESPERDENOMRESPONSE,
    serialized_options=_b('\202\323\344\223\0027\0225/osmosis/incentives/v1beta1/upcoming_gauges_per_denom'),
  ),
  _descriptor.MethodDescriptor(
    name='RewardsEst',
    full_name='osmosis.incentives.Query.RewardsEst',
    index=7,
    containing_service=None,
    input_type=_REWARDSESTREQUEST,
    output_type=_REWARDSESTRESPONSE,
    serialized_options=_b('\202\323\344\223\0021\022//osmosis/incentives/v1beta1/rewards_est/{owner}'),
  ),
  _descriptor.MethodDescriptor(
    name='LockableDurations',
    full_name='osmosis.incentives.Query.LockableDurations',
    index=8,
    containing_service=None,
    input_type=_QUERYLOCKABLEDURATIONSREQUEST,
    output_type=_QUERYLOCKABLEDURATIONSRESPONSE,
    serialized_options=_b('\202\323\344\223\0020\022./osmosis/incentives/v1beta1/lockable_durations'),
  ),
])
_sym_db.RegisterServiceDescriptor(_QUERY)

DESCRIPTOR.services_by_name['Query'] = _QUERY

# @@protoc_insertion_point(module_scope)
