# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: osmosis/mint/v1beta1/query.proto

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
from osmosis.mint.v1beta1 import mint_pb2 as osmosis_dot_mint_dot_v1beta1_dot_mint__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='osmosis/mint/v1beta1/query.proto',
  package='osmosis.mint.v1beta1',
  syntax='proto3',
  serialized_options=_b('Z0github.com/osmosis-labs/osmosis/v12/x/mint/types'),
  serialized_pb=_b('\n osmosis/mint/v1beta1/query.proto\x12\x14osmosis.mint.v1beta1\x1a\x14gogoproto/gogo.proto\x1a\x1cgoogle/api/annotations.proto\x1a\x1fosmosis/mint/v1beta1/mint.proto\"\x14\n\x12QueryParamsRequest\"Q\n\x13QueryParamsResponse\x12:\n\x06params\x18\x01 \x01(\x0b\x32\x1c.osmosis.mint.v1beta1.ParamsB\x04\xc8\xde\x1f\x00R\x06params\"\x1d\n\x1bQueryEpochProvisionsRequest\"y\n\x1cQueryEpochProvisionsResponse\x12Y\n\x10\x65poch_provisions\x18\x01 \x01(\x0c\x42.\xc8\xde\x1f\x00\xda\xde\x1f&github.com/cosmos/cosmos-sdk/types.DecR\x0f\x65pochProvisions2\xb8\x02\n\x05Query\x12\x83\x01\n\x06Params\x12(.osmosis.mint.v1beta1.QueryParamsRequest\x1a).osmosis.mint.v1beta1.QueryParamsResponse\"$\x82\xd3\xe4\x93\x02\x1e\x12\x1c/osmosis/mint/v1beta1/params\x12\xa8\x01\n\x0f\x45pochProvisions\x12\x31.osmosis.mint.v1beta1.QueryEpochProvisionsRequest\x1a\x32.osmosis.mint.v1beta1.QueryEpochProvisionsResponse\".\x82\xd3\xe4\x93\x02(\x12&/osmosis/mint/v1beta1/epoch_provisionsB2Z0github.com/osmosis-labs/osmosis/v12/x/mint/typesb\x06proto3')
  ,
  dependencies=[gogoproto_dot_gogo__pb2.DESCRIPTOR,google_dot_api_dot_annotations__pb2.DESCRIPTOR,osmosis_dot_mint_dot_v1beta1_dot_mint__pb2.DESCRIPTOR,])




_QUERYPARAMSREQUEST = _descriptor.Descriptor(
  name='QueryParamsRequest',
  full_name='osmosis.mint.v1beta1.QueryParamsRequest',
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
  serialized_start=143,
  serialized_end=163,
)


_QUERYPARAMSRESPONSE = _descriptor.Descriptor(
  name='QueryParamsResponse',
  full_name='osmosis.mint.v1beta1.QueryParamsResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='params', full_name='osmosis.mint.v1beta1.QueryParamsResponse.params', index=0,
      number=1, type=11, cpp_type=10, label=1,
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
  serialized_start=165,
  serialized_end=246,
)


_QUERYEPOCHPROVISIONSREQUEST = _descriptor.Descriptor(
  name='QueryEpochProvisionsRequest',
  full_name='osmosis.mint.v1beta1.QueryEpochProvisionsRequest',
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
  serialized_start=248,
  serialized_end=277,
)


_QUERYEPOCHPROVISIONSRESPONSE = _descriptor.Descriptor(
  name='QueryEpochProvisionsResponse',
  full_name='osmosis.mint.v1beta1.QueryEpochProvisionsResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='epoch_provisions', full_name='osmosis.mint.v1beta1.QueryEpochProvisionsResponse.epoch_provisions', index=0,
      number=1, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000\332\336\037&github.com/cosmos/cosmos-sdk/types.Dec'), json_name='epochProvisions', file=DESCRIPTOR),
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
  serialized_start=279,
  serialized_end=400,
)

_QUERYPARAMSRESPONSE.fields_by_name['params'].message_type = osmosis_dot_mint_dot_v1beta1_dot_mint__pb2._PARAMS
DESCRIPTOR.message_types_by_name['QueryParamsRequest'] = _QUERYPARAMSREQUEST
DESCRIPTOR.message_types_by_name['QueryParamsResponse'] = _QUERYPARAMSRESPONSE
DESCRIPTOR.message_types_by_name['QueryEpochProvisionsRequest'] = _QUERYEPOCHPROVISIONSREQUEST
DESCRIPTOR.message_types_by_name['QueryEpochProvisionsResponse'] = _QUERYEPOCHPROVISIONSRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

QueryParamsRequest = _reflection.GeneratedProtocolMessageType('QueryParamsRequest', (_message.Message,), dict(
  DESCRIPTOR = _QUERYPARAMSREQUEST,
  __module__ = 'osmosis.mint.v1beta1.query_pb2'
  # @@protoc_insertion_point(class_scope:osmosis.mint.v1beta1.QueryParamsRequest)
  ))
_sym_db.RegisterMessage(QueryParamsRequest)

QueryParamsResponse = _reflection.GeneratedProtocolMessageType('QueryParamsResponse', (_message.Message,), dict(
  DESCRIPTOR = _QUERYPARAMSRESPONSE,
  __module__ = 'osmosis.mint.v1beta1.query_pb2'
  # @@protoc_insertion_point(class_scope:osmosis.mint.v1beta1.QueryParamsResponse)
  ))
_sym_db.RegisterMessage(QueryParamsResponse)

QueryEpochProvisionsRequest = _reflection.GeneratedProtocolMessageType('QueryEpochProvisionsRequest', (_message.Message,), dict(
  DESCRIPTOR = _QUERYEPOCHPROVISIONSREQUEST,
  __module__ = 'osmosis.mint.v1beta1.query_pb2'
  # @@protoc_insertion_point(class_scope:osmosis.mint.v1beta1.QueryEpochProvisionsRequest)
  ))
_sym_db.RegisterMessage(QueryEpochProvisionsRequest)

QueryEpochProvisionsResponse = _reflection.GeneratedProtocolMessageType('QueryEpochProvisionsResponse', (_message.Message,), dict(
  DESCRIPTOR = _QUERYEPOCHPROVISIONSRESPONSE,
  __module__ = 'osmosis.mint.v1beta1.query_pb2'
  # @@protoc_insertion_point(class_scope:osmosis.mint.v1beta1.QueryEpochProvisionsResponse)
  ))
_sym_db.RegisterMessage(QueryEpochProvisionsResponse)


DESCRIPTOR._options = None
_QUERYPARAMSRESPONSE.fields_by_name['params']._options = None
_QUERYEPOCHPROVISIONSRESPONSE.fields_by_name['epoch_provisions']._options = None

_QUERY = _descriptor.ServiceDescriptor(
  name='Query',
  full_name='osmosis.mint.v1beta1.Query',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  serialized_start=403,
  serialized_end=715,
  methods=[
  _descriptor.MethodDescriptor(
    name='Params',
    full_name='osmosis.mint.v1beta1.Query.Params',
    index=0,
    containing_service=None,
    input_type=_QUERYPARAMSREQUEST,
    output_type=_QUERYPARAMSRESPONSE,
    serialized_options=_b('\202\323\344\223\002\036\022\034/osmosis/mint/v1beta1/params'),
  ),
  _descriptor.MethodDescriptor(
    name='EpochProvisions',
    full_name='osmosis.mint.v1beta1.Query.EpochProvisions',
    index=1,
    containing_service=None,
    input_type=_QUERYEPOCHPROVISIONSREQUEST,
    output_type=_QUERYEPOCHPROVISIONSRESPONSE,
    serialized_options=_b('\202\323\344\223\002(\022&/osmosis/mint/v1beta1/epoch_provisions'),
  ),
])
_sym_db.RegisterServiceDescriptor(_QUERY)

DESCRIPTOR.services_by_name['Query'] = _QUERY

# @@protoc_insertion_point(module_scope)