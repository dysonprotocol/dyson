# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: cosmos/authz/v1beta1/query.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from cosmos.base.query.v1beta1 import pagination_pb2 as cosmos_dot_base_dot_query_dot_v1beta1_dot_pagination__pb2
from cosmos.authz.v1beta1 import authz_pb2 as cosmos_dot_authz_dot_v1beta1_dot_authz__pb2
from cosmos_proto import cosmos_pb2 as cosmos__proto_dot_cosmos__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='cosmos/authz/v1beta1/query.proto',
  package='cosmos.authz.v1beta1',
  syntax='proto3',
  serialized_options=_b('Z$github.com/cosmos/cosmos-sdk/x/authz'),
  serialized_pb=_b('\n cosmos/authz/v1beta1/query.proto\x12\x14\x63osmos.authz.v1beta1\x1a\x1cgoogle/api/annotations.proto\x1a*cosmos/base/query/v1beta1/pagination.proto\x1a cosmos/authz/v1beta1/authz.proto\x1a\x19\x63osmos_proto/cosmos.proto\"\xe6\x01\n\x12QueryGrantsRequest\x12\x32\n\x07granter\x18\x01 \x01(\tB\x18\xd2\xb4-\x14\x63osmos.AddressStringR\x07granter\x12\x32\n\x07grantee\x18\x02 \x01(\tB\x18\xd2\xb4-\x14\x63osmos.AddressStringR\x07grantee\x12 \n\x0cmsg_type_url\x18\x03 \x01(\tR\nmsgTypeUrl\x12\x46\n\npagination\x18\x04 \x01(\x0b\x32&.cosmos.base.query.v1beta1.PageRequestR\npagination\"\x93\x01\n\x13QueryGrantsResponse\x12\x33\n\x06grants\x18\x01 \x03(\x0b\x32\x1b.cosmos.authz.v1beta1.GrantR\x06grants\x12G\n\npagination\x18\x02 \x01(\x0b\x32\'.cosmos.base.query.v1beta1.PageResponseR\npagination\"\x97\x01\n\x19QueryGranterGrantsRequest\x12\x32\n\x07granter\x18\x01 \x01(\tB\x18\xd2\xb4-\x14\x63osmos.AddressStringR\x07granter\x12\x46\n\npagination\x18\x02 \x01(\x0b\x32&.cosmos.base.query.v1beta1.PageRequestR\npagination\"\xa7\x01\n\x1aQueryGranterGrantsResponse\x12@\n\x06grants\x18\x01 \x03(\x0b\x32(.cosmos.authz.v1beta1.GrantAuthorizationR\x06grants\x12G\n\npagination\x18\x02 \x01(\x0b\x32\'.cosmos.base.query.v1beta1.PageResponseR\npagination\"\x97\x01\n\x19QueryGranteeGrantsRequest\x12\x32\n\x07grantee\x18\x01 \x01(\tB\x18\xd2\xb4-\x14\x63osmos.AddressStringR\x07grantee\x12\x46\n\npagination\x18\x02 \x01(\x0b\x32&.cosmos.base.query.v1beta1.PageRequestR\npagination\"\xa7\x01\n\x1aQueryGranteeGrantsResponse\x12@\n\x06grants\x18\x01 \x03(\x0b\x32(.cosmos.authz.v1beta1.GrantAuthorizationR\x06grants\x12G\n\npagination\x18\x02 \x01(\x0b\x32\'.cosmos.base.query.v1beta1.PageResponseR\npagination2\xe7\x03\n\x05Query\x12\x83\x01\n\x06Grants\x12(.cosmos.authz.v1beta1.QueryGrantsRequest\x1a).cosmos.authz.v1beta1.QueryGrantsResponse\"$\x82\xd3\xe4\x93\x02\x1e\x12\x1c/cosmos/authz/v1beta1/grants\x12\xaa\x01\n\rGranterGrants\x12/.cosmos.authz.v1beta1.QueryGranterGrantsRequest\x1a\x30.cosmos.authz.v1beta1.QueryGranterGrantsResponse\"6\x82\xd3\xe4\x93\x02\x30\x12./cosmos/authz/v1beta1/grants/granter/{granter}\x12\xaa\x01\n\rGranteeGrants\x12/.cosmos.authz.v1beta1.QueryGranteeGrantsRequest\x1a\x30.cosmos.authz.v1beta1.QueryGranteeGrantsResponse\"6\x82\xd3\xe4\x93\x02\x30\x12./cosmos/authz/v1beta1/grants/grantee/{grantee}B&Z$github.com/cosmos/cosmos-sdk/x/authzb\x06proto3')
  ,
  dependencies=[google_dot_api_dot_annotations__pb2.DESCRIPTOR,cosmos_dot_base_dot_query_dot_v1beta1_dot_pagination__pb2.DESCRIPTOR,cosmos_dot_authz_dot_v1beta1_dot_authz__pb2.DESCRIPTOR,cosmos__proto_dot_cosmos__pb2.DESCRIPTOR,])




_QUERYGRANTSREQUEST = _descriptor.Descriptor(
  name='QueryGrantsRequest',
  full_name='cosmos.authz.v1beta1.QueryGrantsRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='granter', full_name='cosmos.authz.v1beta1.QueryGrantsRequest.granter', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\322\264-\024cosmos.AddressString'), json_name='granter', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='grantee', full_name='cosmos.authz.v1beta1.QueryGrantsRequest.grantee', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\322\264-\024cosmos.AddressString'), json_name='grantee', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='msg_type_url', full_name='cosmos.authz.v1beta1.QueryGrantsRequest.msg_type_url', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='msgTypeUrl', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='pagination', full_name='cosmos.authz.v1beta1.QueryGrantsRequest.pagination', index=3,
      number=4, type=11, cpp_type=10, label=1,
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
  serialized_start=194,
  serialized_end=424,
)


_QUERYGRANTSRESPONSE = _descriptor.Descriptor(
  name='QueryGrantsResponse',
  full_name='cosmos.authz.v1beta1.QueryGrantsResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='grants', full_name='cosmos.authz.v1beta1.QueryGrantsResponse.grants', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='grants', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='pagination', full_name='cosmos.authz.v1beta1.QueryGrantsResponse.pagination', index=1,
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
  serialized_start=427,
  serialized_end=574,
)


_QUERYGRANTERGRANTSREQUEST = _descriptor.Descriptor(
  name='QueryGranterGrantsRequest',
  full_name='cosmos.authz.v1beta1.QueryGranterGrantsRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='granter', full_name='cosmos.authz.v1beta1.QueryGranterGrantsRequest.granter', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\322\264-\024cosmos.AddressString'), json_name='granter', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='pagination', full_name='cosmos.authz.v1beta1.QueryGranterGrantsRequest.pagination', index=1,
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
  serialized_start=577,
  serialized_end=728,
)


_QUERYGRANTERGRANTSRESPONSE = _descriptor.Descriptor(
  name='QueryGranterGrantsResponse',
  full_name='cosmos.authz.v1beta1.QueryGranterGrantsResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='grants', full_name='cosmos.authz.v1beta1.QueryGranterGrantsResponse.grants', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='grants', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='pagination', full_name='cosmos.authz.v1beta1.QueryGranterGrantsResponse.pagination', index=1,
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
  serialized_start=731,
  serialized_end=898,
)


_QUERYGRANTEEGRANTSREQUEST = _descriptor.Descriptor(
  name='QueryGranteeGrantsRequest',
  full_name='cosmos.authz.v1beta1.QueryGranteeGrantsRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='grantee', full_name='cosmos.authz.v1beta1.QueryGranteeGrantsRequest.grantee', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\322\264-\024cosmos.AddressString'), json_name='grantee', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='pagination', full_name='cosmos.authz.v1beta1.QueryGranteeGrantsRequest.pagination', index=1,
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
  serialized_start=901,
  serialized_end=1052,
)


_QUERYGRANTEEGRANTSRESPONSE = _descriptor.Descriptor(
  name='QueryGranteeGrantsResponse',
  full_name='cosmos.authz.v1beta1.QueryGranteeGrantsResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='grants', full_name='cosmos.authz.v1beta1.QueryGranteeGrantsResponse.grants', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='grants', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='pagination', full_name='cosmos.authz.v1beta1.QueryGranteeGrantsResponse.pagination', index=1,
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
  serialized_start=1055,
  serialized_end=1222,
)

_QUERYGRANTSREQUEST.fields_by_name['pagination'].message_type = cosmos_dot_base_dot_query_dot_v1beta1_dot_pagination__pb2._PAGEREQUEST
_QUERYGRANTSRESPONSE.fields_by_name['grants'].message_type = cosmos_dot_authz_dot_v1beta1_dot_authz__pb2._GRANT
_QUERYGRANTSRESPONSE.fields_by_name['pagination'].message_type = cosmos_dot_base_dot_query_dot_v1beta1_dot_pagination__pb2._PAGERESPONSE
_QUERYGRANTERGRANTSREQUEST.fields_by_name['pagination'].message_type = cosmos_dot_base_dot_query_dot_v1beta1_dot_pagination__pb2._PAGEREQUEST
_QUERYGRANTERGRANTSRESPONSE.fields_by_name['grants'].message_type = cosmos_dot_authz_dot_v1beta1_dot_authz__pb2._GRANTAUTHORIZATION
_QUERYGRANTERGRANTSRESPONSE.fields_by_name['pagination'].message_type = cosmos_dot_base_dot_query_dot_v1beta1_dot_pagination__pb2._PAGERESPONSE
_QUERYGRANTEEGRANTSREQUEST.fields_by_name['pagination'].message_type = cosmos_dot_base_dot_query_dot_v1beta1_dot_pagination__pb2._PAGEREQUEST
_QUERYGRANTEEGRANTSRESPONSE.fields_by_name['grants'].message_type = cosmos_dot_authz_dot_v1beta1_dot_authz__pb2._GRANTAUTHORIZATION
_QUERYGRANTEEGRANTSRESPONSE.fields_by_name['pagination'].message_type = cosmos_dot_base_dot_query_dot_v1beta1_dot_pagination__pb2._PAGERESPONSE
DESCRIPTOR.message_types_by_name['QueryGrantsRequest'] = _QUERYGRANTSREQUEST
DESCRIPTOR.message_types_by_name['QueryGrantsResponse'] = _QUERYGRANTSRESPONSE
DESCRIPTOR.message_types_by_name['QueryGranterGrantsRequest'] = _QUERYGRANTERGRANTSREQUEST
DESCRIPTOR.message_types_by_name['QueryGranterGrantsResponse'] = _QUERYGRANTERGRANTSRESPONSE
DESCRIPTOR.message_types_by_name['QueryGranteeGrantsRequest'] = _QUERYGRANTEEGRANTSREQUEST
DESCRIPTOR.message_types_by_name['QueryGranteeGrantsResponse'] = _QUERYGRANTEEGRANTSRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

QueryGrantsRequest = _reflection.GeneratedProtocolMessageType('QueryGrantsRequest', (_message.Message,), dict(
  DESCRIPTOR = _QUERYGRANTSREQUEST,
  __module__ = 'cosmos.authz.v1beta1.query_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.authz.v1beta1.QueryGrantsRequest)
  ))
_sym_db.RegisterMessage(QueryGrantsRequest)

QueryGrantsResponse = _reflection.GeneratedProtocolMessageType('QueryGrantsResponse', (_message.Message,), dict(
  DESCRIPTOR = _QUERYGRANTSRESPONSE,
  __module__ = 'cosmos.authz.v1beta1.query_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.authz.v1beta1.QueryGrantsResponse)
  ))
_sym_db.RegisterMessage(QueryGrantsResponse)

QueryGranterGrantsRequest = _reflection.GeneratedProtocolMessageType('QueryGranterGrantsRequest', (_message.Message,), dict(
  DESCRIPTOR = _QUERYGRANTERGRANTSREQUEST,
  __module__ = 'cosmos.authz.v1beta1.query_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.authz.v1beta1.QueryGranterGrantsRequest)
  ))
_sym_db.RegisterMessage(QueryGranterGrantsRequest)

QueryGranterGrantsResponse = _reflection.GeneratedProtocolMessageType('QueryGranterGrantsResponse', (_message.Message,), dict(
  DESCRIPTOR = _QUERYGRANTERGRANTSRESPONSE,
  __module__ = 'cosmos.authz.v1beta1.query_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.authz.v1beta1.QueryGranterGrantsResponse)
  ))
_sym_db.RegisterMessage(QueryGranterGrantsResponse)

QueryGranteeGrantsRequest = _reflection.GeneratedProtocolMessageType('QueryGranteeGrantsRequest', (_message.Message,), dict(
  DESCRIPTOR = _QUERYGRANTEEGRANTSREQUEST,
  __module__ = 'cosmos.authz.v1beta1.query_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.authz.v1beta1.QueryGranteeGrantsRequest)
  ))
_sym_db.RegisterMessage(QueryGranteeGrantsRequest)

QueryGranteeGrantsResponse = _reflection.GeneratedProtocolMessageType('QueryGranteeGrantsResponse', (_message.Message,), dict(
  DESCRIPTOR = _QUERYGRANTEEGRANTSRESPONSE,
  __module__ = 'cosmos.authz.v1beta1.query_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.authz.v1beta1.QueryGranteeGrantsResponse)
  ))
_sym_db.RegisterMessage(QueryGranteeGrantsResponse)


DESCRIPTOR._options = None
_QUERYGRANTSREQUEST.fields_by_name['granter']._options = None
_QUERYGRANTSREQUEST.fields_by_name['grantee']._options = None
_QUERYGRANTERGRANTSREQUEST.fields_by_name['granter']._options = None
_QUERYGRANTEEGRANTSREQUEST.fields_by_name['grantee']._options = None

_QUERY = _descriptor.ServiceDescriptor(
  name='Query',
  full_name='cosmos.authz.v1beta1.Query',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  serialized_start=1225,
  serialized_end=1712,
  methods=[
  _descriptor.MethodDescriptor(
    name='Grants',
    full_name='cosmos.authz.v1beta1.Query.Grants',
    index=0,
    containing_service=None,
    input_type=_QUERYGRANTSREQUEST,
    output_type=_QUERYGRANTSRESPONSE,
    serialized_options=_b('\202\323\344\223\002\036\022\034/cosmos/authz/v1beta1/grants'),
  ),
  _descriptor.MethodDescriptor(
    name='GranterGrants',
    full_name='cosmos.authz.v1beta1.Query.GranterGrants',
    index=1,
    containing_service=None,
    input_type=_QUERYGRANTERGRANTSREQUEST,
    output_type=_QUERYGRANTERGRANTSRESPONSE,
    serialized_options=_b('\202\323\344\223\0020\022./cosmos/authz/v1beta1/grants/granter/{granter}'),
  ),
  _descriptor.MethodDescriptor(
    name='GranteeGrants',
    full_name='cosmos.authz.v1beta1.Query.GranteeGrants',
    index=2,
    containing_service=None,
    input_type=_QUERYGRANTEEGRANTSREQUEST,
    output_type=_QUERYGRANTEEGRANTSRESPONSE,
    serialized_options=_b('\202\323\344\223\0020\022./cosmos/authz/v1beta1/grants/grantee/{grantee}'),
  ),
])
_sym_db.RegisterServiceDescriptor(_QUERY)

DESCRIPTOR.services_by_name['Query'] = _QUERY

# @@protoc_insertion_point(module_scope)
