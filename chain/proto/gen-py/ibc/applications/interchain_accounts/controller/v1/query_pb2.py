# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: ibc/applications/interchain_accounts/controller/v1/query.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from ibc.applications.interchain_accounts.controller.v1 import controller_pb2 as ibc_dot_applications_dot_interchain__accounts_dot_controller_dot_v1_dot_controller__pb2
from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='ibc/applications/interchain_accounts/controller/v1/query.proto',
  package='ibc.applications.interchain_accounts.controller.v1',
  syntax='proto3',
  serialized_options=_b('ZPgithub.com/cosmos/ibc-go/v7/modules/apps/27-interchain-accounts/controller/types'),
  serialized_pb=_b('\n>ibc/applications/interchain_accounts/controller/v1/query.proto\x12\x32ibc.applications.interchain_accounts.controller.v1\x1a\x43ibc/applications/interchain_accounts/controller/v1/controller.proto\x1a\x1cgoogle/api/annotations.proto\"Z\n\x1dQueryInterchainAccountRequest\x12\x14\n\x05owner\x18\x01 \x01(\tR\x05owner\x12#\n\rconnection_id\x18\x02 \x01(\tR\x0c\x63onnectionId\":\n\x1eQueryInterchainAccountResponse\x12\x18\n\x07\x61\x64\x64ress\x18\x01 \x01(\tR\x07\x61\x64\x64ress\"\x14\n\x12QueryParamsRequest\"i\n\x13QueryParamsResponse\x12R\n\x06params\x18\x01 \x01(\x0b\x32:.ibc.applications.interchain_accounts.controller.v1.ParamsR\x06params2\xfc\x03\n\x05Query\x12\x9a\x02\n\x11InterchainAccount\x12Q.ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountRequest\x1aR.ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountResponse\"^\x82\xd3\xe4\x93\x02X\x12V/ibc/apps/interchain_accounts/controller/v1/owners/{owner}/connections/{connection_id}\x12\xd5\x01\n\x06Params\x12\x46.ibc.applications.interchain_accounts.controller.v1.QueryParamsRequest\x1aG.ibc.applications.interchain_accounts.controller.v1.QueryParamsResponse\":\x82\xd3\xe4\x93\x02\x34\x12\x32/ibc/apps/interchain_accounts/controller/v1/paramsBRZPgithub.com/cosmos/ibc-go/v7/modules/apps/27-interchain-accounts/controller/typesb\x06proto3')
  ,
  dependencies=[ibc_dot_applications_dot_interchain__accounts_dot_controller_dot_v1_dot_controller__pb2.DESCRIPTOR,google_dot_api_dot_annotations__pb2.DESCRIPTOR,])




_QUERYINTERCHAINACCOUNTREQUEST = _descriptor.Descriptor(
  name='QueryInterchainAccountRequest',
  full_name='ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='owner', full_name='ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountRequest.owner', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='owner', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='connection_id', full_name='ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountRequest.connection_id', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='connectionId', file=DESCRIPTOR),
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
  serialized_start=217,
  serialized_end=307,
)


_QUERYINTERCHAINACCOUNTRESPONSE = _descriptor.Descriptor(
  name='QueryInterchainAccountResponse',
  full_name='ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='address', full_name='ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountResponse.address', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='address', file=DESCRIPTOR),
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
  serialized_start=309,
  serialized_end=367,
)


_QUERYPARAMSREQUEST = _descriptor.Descriptor(
  name='QueryParamsRequest',
  full_name='ibc.applications.interchain_accounts.controller.v1.QueryParamsRequest',
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
  serialized_start=369,
  serialized_end=389,
)


_QUERYPARAMSRESPONSE = _descriptor.Descriptor(
  name='QueryParamsResponse',
  full_name='ibc.applications.interchain_accounts.controller.v1.QueryParamsResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='params', full_name='ibc.applications.interchain_accounts.controller.v1.QueryParamsResponse.params', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='params', file=DESCRIPTOR),
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
  serialized_start=391,
  serialized_end=496,
)

_QUERYPARAMSRESPONSE.fields_by_name['params'].message_type = ibc_dot_applications_dot_interchain__accounts_dot_controller_dot_v1_dot_controller__pb2._PARAMS
DESCRIPTOR.message_types_by_name['QueryInterchainAccountRequest'] = _QUERYINTERCHAINACCOUNTREQUEST
DESCRIPTOR.message_types_by_name['QueryInterchainAccountResponse'] = _QUERYINTERCHAINACCOUNTRESPONSE
DESCRIPTOR.message_types_by_name['QueryParamsRequest'] = _QUERYPARAMSREQUEST
DESCRIPTOR.message_types_by_name['QueryParamsResponse'] = _QUERYPARAMSRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

QueryInterchainAccountRequest = _reflection.GeneratedProtocolMessageType('QueryInterchainAccountRequest', (_message.Message,), dict(
  DESCRIPTOR = _QUERYINTERCHAINACCOUNTREQUEST,
  __module__ = 'ibc.applications.interchain_accounts.controller.v1.query_pb2'
  # @@protoc_insertion_point(class_scope:ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountRequest)
  ))
_sym_db.RegisterMessage(QueryInterchainAccountRequest)

QueryInterchainAccountResponse = _reflection.GeneratedProtocolMessageType('QueryInterchainAccountResponse', (_message.Message,), dict(
  DESCRIPTOR = _QUERYINTERCHAINACCOUNTRESPONSE,
  __module__ = 'ibc.applications.interchain_accounts.controller.v1.query_pb2'
  # @@protoc_insertion_point(class_scope:ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountResponse)
  ))
_sym_db.RegisterMessage(QueryInterchainAccountResponse)

QueryParamsRequest = _reflection.GeneratedProtocolMessageType('QueryParamsRequest', (_message.Message,), dict(
  DESCRIPTOR = _QUERYPARAMSREQUEST,
  __module__ = 'ibc.applications.interchain_accounts.controller.v1.query_pb2'
  # @@protoc_insertion_point(class_scope:ibc.applications.interchain_accounts.controller.v1.QueryParamsRequest)
  ))
_sym_db.RegisterMessage(QueryParamsRequest)

QueryParamsResponse = _reflection.GeneratedProtocolMessageType('QueryParamsResponse', (_message.Message,), dict(
  DESCRIPTOR = _QUERYPARAMSRESPONSE,
  __module__ = 'ibc.applications.interchain_accounts.controller.v1.query_pb2'
  # @@protoc_insertion_point(class_scope:ibc.applications.interchain_accounts.controller.v1.QueryParamsResponse)
  ))
_sym_db.RegisterMessage(QueryParamsResponse)


DESCRIPTOR._options = None

_QUERY = _descriptor.ServiceDescriptor(
  name='Query',
  full_name='ibc.applications.interchain_accounts.controller.v1.Query',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  serialized_start=499,
  serialized_end=1007,
  methods=[
  _descriptor.MethodDescriptor(
    name='InterchainAccount',
    full_name='ibc.applications.interchain_accounts.controller.v1.Query.InterchainAccount',
    index=0,
    containing_service=None,
    input_type=_QUERYINTERCHAINACCOUNTREQUEST,
    output_type=_QUERYINTERCHAINACCOUNTRESPONSE,
    serialized_options=_b('\202\323\344\223\002X\022V/ibc/apps/interchain_accounts/controller/v1/owners/{owner}/connections/{connection_id}'),
  ),
  _descriptor.MethodDescriptor(
    name='Params',
    full_name='ibc.applications.interchain_accounts.controller.v1.Query.Params',
    index=1,
    containing_service=None,
    input_type=_QUERYPARAMSREQUEST,
    output_type=_QUERYPARAMSRESPONSE,
    serialized_options=_b('\202\323\344\223\0024\0222/ibc/apps/interchain_accounts/controller/v1/params'),
  ),
])
_sym_db.RegisterServiceDescriptor(_QUERY)

DESCRIPTOR.services_by_name['Query'] = _QUERY

# @@protoc_insertion_point(module_scope)