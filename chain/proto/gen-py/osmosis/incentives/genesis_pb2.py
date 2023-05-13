# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: osmosis/incentives/genesis.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from gogoproto import gogo_pb2 as gogoproto_dot_gogo__pb2
from google.protobuf import duration_pb2 as google_dot_protobuf_dot_duration__pb2
from osmosis.incentives import params_pb2 as osmosis_dot_incentives_dot_params__pb2
from osmosis.incentives import gauge_pb2 as osmosis_dot_incentives_dot_gauge__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='osmosis/incentives/genesis.proto',
  package='osmosis.incentives',
  syntax='proto3',
  serialized_options=_b('Z6github.com/osmosis-labs/osmosis/v12/x/incentives/types'),
  serialized_pb=_b('\n osmosis/incentives/genesis.proto\x12\x12osmosis.incentives\x1a\x14gogoproto/gogo.proto\x1a\x1egoogle/protobuf/duration.proto\x1a\x1fosmosis/incentives/params.proto\x1a\x1eosmosis/incentives/gauge.proto\"\x96\x02\n\x0cGenesisState\x12\x38\n\x06params\x18\x01 \x01(\x0b\x32\x1a.osmosis.incentives.ParamsB\x04\xc8\xde\x1f\x00R\x06params\x12\x37\n\x06gauges\x18\x02 \x03(\x0b\x32\x19.osmosis.incentives.GaugeB\x04\xc8\xde\x1f\x00R\x06gauges\x12o\n\x12lockable_durations\x18\x03 \x03(\x0b\x32\x19.google.protobuf.DurationB%\xc8\xde\x1f\x00\xf2\xde\x1f\x19yaml:\"lockable_durations\"\x98\xdf\x1f\x01R\x11lockableDurations\x12\"\n\rlast_gauge_id\x18\x04 \x01(\x04R\x0blastGaugeIdB8Z6github.com/osmosis-labs/osmosis/v12/x/incentives/typesb\x06proto3')
  ,
  dependencies=[gogoproto_dot_gogo__pb2.DESCRIPTOR,google_dot_protobuf_dot_duration__pb2.DESCRIPTOR,osmosis_dot_incentives_dot_params__pb2.DESCRIPTOR,osmosis_dot_incentives_dot_gauge__pb2.DESCRIPTOR,])




_GENESISSTATE = _descriptor.Descriptor(
  name='GenesisState',
  full_name='osmosis.incentives.GenesisState',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='params', full_name='osmosis.incentives.GenesisState.params', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000'), json_name='params', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='gauges', full_name='osmosis.incentives.GenesisState.gauges', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000'), json_name='gauges', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='lockable_durations', full_name='osmosis.incentives.GenesisState.lockable_durations', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000\362\336\037\031yaml:\"lockable_durations\"\230\337\037\001'), json_name='lockableDurations', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='last_gauge_id', full_name='osmosis.incentives.GenesisState.last_gauge_id', index=3,
      number=4, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='lastGaugeId', file=DESCRIPTOR),
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
  serialized_start=176,
  serialized_end=454,
)

_GENESISSTATE.fields_by_name['params'].message_type = osmosis_dot_incentives_dot_params__pb2._PARAMS
_GENESISSTATE.fields_by_name['gauges'].message_type = osmosis_dot_incentives_dot_gauge__pb2._GAUGE
_GENESISSTATE.fields_by_name['lockable_durations'].message_type = google_dot_protobuf_dot_duration__pb2._DURATION
DESCRIPTOR.message_types_by_name['GenesisState'] = _GENESISSTATE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

GenesisState = _reflection.GeneratedProtocolMessageType('GenesisState', (_message.Message,), dict(
  DESCRIPTOR = _GENESISSTATE,
  __module__ = 'osmosis.incentives.genesis_pb2'
  # @@protoc_insertion_point(class_scope:osmosis.incentives.GenesisState)
  ))
_sym_db.RegisterMessage(GenesisState)


DESCRIPTOR._options = None
_GENESISSTATE.fields_by_name['params']._options = None
_GENESISSTATE.fields_by_name['gauges']._options = None
_GENESISSTATE.fields_by_name['lockable_durations']._options = None
# @@protoc_insertion_point(module_scope)
