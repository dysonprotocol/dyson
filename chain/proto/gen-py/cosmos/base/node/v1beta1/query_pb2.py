# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: cosmos/base/node/v1beta1/query.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2
from gogoproto import gogo_pb2 as gogoproto_dot_gogo__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='cosmos/base/node/v1beta1/query.proto',
  package='cosmos.base.node.v1beta1',
  syntax='proto3',
  serialized_options=_b('Z-github.com/cosmos/cosmos-sdk/client/grpc/node'),
  serialized_pb=_b('\n$cosmos/base/node/v1beta1/query.proto\x12\x18\x63osmos.base.node.v1beta1\x1a\x1cgoogle/api/annotations.proto\x1a\x1fgoogle/protobuf/timestamp.proto\x1a\x14gogoproto/gogo.proto\"\x0f\n\rConfigRequest\"\x97\x01\n\x0e\x43onfigResponse\x12*\n\x11minimum_gas_price\x18\x01 \x01(\tR\x0fminimumGasPrice\x12.\n\x13pruning_keep_recent\x18\x02 \x01(\tR\x11pruningKeepRecent\x12)\n\x10pruning_interval\x18\x03 \x01(\tR\x0fpruningInterval\"\x0f\n\rStatusRequest\"\xde\x01\n\x0eStatusResponse\x12\x32\n\x15\x65\x61rliest_store_height\x18\x01 \x01(\x04R\x13\x65\x61rliestStoreHeight\x12\x16\n\x06height\x18\x02 \x01(\x04R\x06height\x12>\n\ttimestamp\x18\x03 \x01(\x0b\x32\x1a.google.protobuf.TimestampB\x04\x90\xdf\x1f\x01R\ttimestamp\x12\x19\n\x08\x61pp_hash\x18\x04 \x01(\x0cR\x07\x61ppHash\x12%\n\x0evalidator_hash\x18\x05 \x01(\x0cR\rvalidatorHash2\x99\x02\n\x07Service\x12\x85\x01\n\x06\x43onfig\x12\'.cosmos.base.node.v1beta1.ConfigRequest\x1a(.cosmos.base.node.v1beta1.ConfigResponse\"(\x82\xd3\xe4\x93\x02\"\x12 /cosmos/base/node/v1beta1/config\x12\x85\x01\n\x06Status\x12\'.cosmos.base.node.v1beta1.StatusRequest\x1a(.cosmos.base.node.v1beta1.StatusResponse\"(\x82\xd3\xe4\x93\x02\"\x12 /cosmos/base/node/v1beta1/statusB/Z-github.com/cosmos/cosmos-sdk/client/grpc/nodeb\x06proto3')
  ,
  dependencies=[google_dot_api_dot_annotations__pb2.DESCRIPTOR,google_dot_protobuf_dot_timestamp__pb2.DESCRIPTOR,gogoproto_dot_gogo__pb2.DESCRIPTOR,])




_CONFIGREQUEST = _descriptor.Descriptor(
  name='ConfigRequest',
  full_name='cosmos.base.node.v1beta1.ConfigRequest',
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
  serialized_start=151,
  serialized_end=166,
)


_CONFIGRESPONSE = _descriptor.Descriptor(
  name='ConfigResponse',
  full_name='cosmos.base.node.v1beta1.ConfigResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='minimum_gas_price', full_name='cosmos.base.node.v1beta1.ConfigResponse.minimum_gas_price', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='minimumGasPrice', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='pruning_keep_recent', full_name='cosmos.base.node.v1beta1.ConfigResponse.pruning_keep_recent', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='pruningKeepRecent', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='pruning_interval', full_name='cosmos.base.node.v1beta1.ConfigResponse.pruning_interval', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='pruningInterval', file=DESCRIPTOR),
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
  serialized_end=320,
)


_STATUSREQUEST = _descriptor.Descriptor(
  name='StatusRequest',
  full_name='cosmos.base.node.v1beta1.StatusRequest',
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
  serialized_start=322,
  serialized_end=337,
)


_STATUSRESPONSE = _descriptor.Descriptor(
  name='StatusResponse',
  full_name='cosmos.base.node.v1beta1.StatusResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='earliest_store_height', full_name='cosmos.base.node.v1beta1.StatusResponse.earliest_store_height', index=0,
      number=1, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='earliestStoreHeight', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='height', full_name='cosmos.base.node.v1beta1.StatusResponse.height', index=1,
      number=2, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='height', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='timestamp', full_name='cosmos.base.node.v1beta1.StatusResponse.timestamp', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\220\337\037\001'), json_name='timestamp', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='app_hash', full_name='cosmos.base.node.v1beta1.StatusResponse.app_hash', index=3,
      number=4, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='appHash', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='validator_hash', full_name='cosmos.base.node.v1beta1.StatusResponse.validator_hash', index=4,
      number=5, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='validatorHash', file=DESCRIPTOR),
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
  serialized_start=340,
  serialized_end=562,
)

_STATUSRESPONSE.fields_by_name['timestamp'].message_type = google_dot_protobuf_dot_timestamp__pb2._TIMESTAMP
DESCRIPTOR.message_types_by_name['ConfigRequest'] = _CONFIGREQUEST
DESCRIPTOR.message_types_by_name['ConfigResponse'] = _CONFIGRESPONSE
DESCRIPTOR.message_types_by_name['StatusRequest'] = _STATUSREQUEST
DESCRIPTOR.message_types_by_name['StatusResponse'] = _STATUSRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

ConfigRequest = _reflection.GeneratedProtocolMessageType('ConfigRequest', (_message.Message,), dict(
  DESCRIPTOR = _CONFIGREQUEST,
  __module__ = 'cosmos.base.node.v1beta1.query_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.base.node.v1beta1.ConfigRequest)
  ))
_sym_db.RegisterMessage(ConfigRequest)

ConfigResponse = _reflection.GeneratedProtocolMessageType('ConfigResponse', (_message.Message,), dict(
  DESCRIPTOR = _CONFIGRESPONSE,
  __module__ = 'cosmos.base.node.v1beta1.query_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.base.node.v1beta1.ConfigResponse)
  ))
_sym_db.RegisterMessage(ConfigResponse)

StatusRequest = _reflection.GeneratedProtocolMessageType('StatusRequest', (_message.Message,), dict(
  DESCRIPTOR = _STATUSREQUEST,
  __module__ = 'cosmos.base.node.v1beta1.query_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.base.node.v1beta1.StatusRequest)
  ))
_sym_db.RegisterMessage(StatusRequest)

StatusResponse = _reflection.GeneratedProtocolMessageType('StatusResponse', (_message.Message,), dict(
  DESCRIPTOR = _STATUSRESPONSE,
  __module__ = 'cosmos.base.node.v1beta1.query_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.base.node.v1beta1.StatusResponse)
  ))
_sym_db.RegisterMessage(StatusResponse)


DESCRIPTOR._options = None
_STATUSRESPONSE.fields_by_name['timestamp']._options = None

_SERVICE = _descriptor.ServiceDescriptor(
  name='Service',
  full_name='cosmos.base.node.v1beta1.Service',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  serialized_start=565,
  serialized_end=846,
  methods=[
  _descriptor.MethodDescriptor(
    name='Config',
    full_name='cosmos.base.node.v1beta1.Service.Config',
    index=0,
    containing_service=None,
    input_type=_CONFIGREQUEST,
    output_type=_CONFIGRESPONSE,
    serialized_options=_b('\202\323\344\223\002\"\022 /cosmos/base/node/v1beta1/config'),
  ),
  _descriptor.MethodDescriptor(
    name='Status',
    full_name='cosmos.base.node.v1beta1.Service.Status',
    index=1,
    containing_service=None,
    input_type=_STATUSREQUEST,
    output_type=_STATUSRESPONSE,
    serialized_options=_b('\202\323\344\223\002\"\022 /cosmos/base/node/v1beta1/status'),
  ),
])
_sym_db.RegisterServiceDescriptor(_SERVICE)

DESCRIPTOR.services_by_name['Service'] = _SERVICE

# @@protoc_insertion_point(module_scope)