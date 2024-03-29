# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: cosmos/circuit/v1/query.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from cosmos.base.query.v1beta1 import pagination_pb2 as cosmos_dot_base_dot_query_dot_v1beta1_dot_pagination__pb2
from cosmos.msg.v1 import msg_pb2 as cosmos_dot_msg_dot_v1_dot_msg__pb2
from cosmos.circuit.v1 import types_pb2 as cosmos_dot_circuit_dot_v1_dot_types__pb2
from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from cosmos.query.v1 import query_pb2 as cosmos_dot_query_dot_v1_dot_query__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='cosmos/circuit/v1/query.proto',
  package='cosmos.circuit.v1',
  syntax='proto3',
  serialized_options=_b('Z\034cosmossdk.io/x/circuit/types'),
  serialized_pb=_b('\n\x1d\x63osmos/circuit/v1/query.proto\x12\x11\x63osmos.circuit.v1\x1a*cosmos/base/query/v1beta1/pagination.proto\x1a\x17\x63osmos/msg/v1/msg.proto\x1a\x1d\x63osmos/circuit/v1/types.proto\x1a\x1cgoogle/api/annotations.proto\x1a\x1b\x63osmos/query/v1/query.proto\"/\n\x13QueryAccountRequest\x12\x18\n\x07\x61\x64\x64ress\x18\x01 \x01(\tR\x07\x61\x64\x64ress\"Q\n\x0f\x41\x63\x63ountResponse\x12>\n\npermission\x18\x01 \x01(\x0b\x32\x1e.cosmos.circuit.v1.PermissionsR\npermission\"^\n\x14QueryAccountsRequest\x12\x46\n\npagination\x18\x01 \x01(\x0b\x32&.cosmos.base.query.v1beta1.PageRequestR\npagination\"\xa5\x01\n\x10\x41\x63\x63ountsResponse\x12H\n\x08\x61\x63\x63ounts\x18\x01 \x03(\x0b\x32,.cosmos.circuit.v1.GenesisAccountPermissionsR\x08\x61\x63\x63ounts\x12G\n\npagination\x18\x02 \x01(\x0b\x32\'.cosmos.base.query.v1beta1.PageResponseR\npagination\"\x1a\n\x18QueryDisabledListRequest\";\n\x14\x44isabledListResponse\x12#\n\rdisabled_list\x18\x01 \x03(\tR\x0c\x64isabledList2\xb4\x03\n\x05Query\x12\x89\x01\n\x07\x41\x63\x63ount\x12&.cosmos.circuit.v1.QueryAccountRequest\x1a\".cosmos.circuit.v1.AccountResponse\"2\x88\xe7\xb0*\x01\x82\xd3\xe4\x93\x02\'\x12%/cosmos/circuit/v1/accounts/{address}\x12\x82\x01\n\x08\x41\x63\x63ounts\x12\'.cosmos.circuit.v1.QueryAccountsRequest\x1a#.cosmos.circuit.v1.AccountsResponse\"(\x88\xe7\xb0*\x01\x82\xd3\xe4\x93\x02\x1d\x12\x1b/cosmos/circuit/v1/accounts\x12\x92\x01\n\x0c\x44isabledList\x12+.cosmos.circuit.v1.QueryDisabledListRequest\x1a\'.cosmos.circuit.v1.DisabledListResponse\",\x88\xe7\xb0*\x01\x82\xd3\xe4\x93\x02!\x12\x1f/cosmos/circuit/v1/disable_list\x1a\x05\x80\xe7\xb0*\x01\x42\x1eZ\x1c\x63osmossdk.io/x/circuit/typesb\x06proto3')
  ,
  dependencies=[cosmos_dot_base_dot_query_dot_v1beta1_dot_pagination__pb2.DESCRIPTOR,cosmos_dot_msg_dot_v1_dot_msg__pb2.DESCRIPTOR,cosmos_dot_circuit_dot_v1_dot_types__pb2.DESCRIPTOR,google_dot_api_dot_annotations__pb2.DESCRIPTOR,cosmos_dot_query_dot_v1_dot_query__pb2.DESCRIPTOR,])




_QUERYACCOUNTREQUEST = _descriptor.Descriptor(
  name='QueryAccountRequest',
  full_name='cosmos.circuit.v1.QueryAccountRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='address', full_name='cosmos.circuit.v1.QueryAccountRequest.address', index=0,
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
  serialized_start=211,
  serialized_end=258,
)


_ACCOUNTRESPONSE = _descriptor.Descriptor(
  name='AccountResponse',
  full_name='cosmos.circuit.v1.AccountResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='permission', full_name='cosmos.circuit.v1.AccountResponse.permission', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='permission', file=DESCRIPTOR),
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
  serialized_start=260,
  serialized_end=341,
)


_QUERYACCOUNTSREQUEST = _descriptor.Descriptor(
  name='QueryAccountsRequest',
  full_name='cosmos.circuit.v1.QueryAccountsRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='pagination', full_name='cosmos.circuit.v1.QueryAccountsRequest.pagination', index=0,
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
  serialized_start=343,
  serialized_end=437,
)


_ACCOUNTSRESPONSE = _descriptor.Descriptor(
  name='AccountsResponse',
  full_name='cosmos.circuit.v1.AccountsResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='accounts', full_name='cosmos.circuit.v1.AccountsResponse.accounts', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='accounts', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='pagination', full_name='cosmos.circuit.v1.AccountsResponse.pagination', index=1,
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
  serialized_start=440,
  serialized_end=605,
)


_QUERYDISABLEDLISTREQUEST = _descriptor.Descriptor(
  name='QueryDisabledListRequest',
  full_name='cosmos.circuit.v1.QueryDisabledListRequest',
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
  serialized_start=607,
  serialized_end=633,
)


_DISABLEDLISTRESPONSE = _descriptor.Descriptor(
  name='DisabledListResponse',
  full_name='cosmos.circuit.v1.DisabledListResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='disabled_list', full_name='cosmos.circuit.v1.DisabledListResponse.disabled_list', index=0,
      number=1, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='disabledList', file=DESCRIPTOR),
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
  serialized_start=635,
  serialized_end=694,
)

_ACCOUNTRESPONSE.fields_by_name['permission'].message_type = cosmos_dot_circuit_dot_v1_dot_types__pb2._PERMISSIONS
_QUERYACCOUNTSREQUEST.fields_by_name['pagination'].message_type = cosmos_dot_base_dot_query_dot_v1beta1_dot_pagination__pb2._PAGEREQUEST
_ACCOUNTSRESPONSE.fields_by_name['accounts'].message_type = cosmos_dot_circuit_dot_v1_dot_types__pb2._GENESISACCOUNTPERMISSIONS
_ACCOUNTSRESPONSE.fields_by_name['pagination'].message_type = cosmos_dot_base_dot_query_dot_v1beta1_dot_pagination__pb2._PAGERESPONSE
DESCRIPTOR.message_types_by_name['QueryAccountRequest'] = _QUERYACCOUNTREQUEST
DESCRIPTOR.message_types_by_name['AccountResponse'] = _ACCOUNTRESPONSE
DESCRIPTOR.message_types_by_name['QueryAccountsRequest'] = _QUERYACCOUNTSREQUEST
DESCRIPTOR.message_types_by_name['AccountsResponse'] = _ACCOUNTSRESPONSE
DESCRIPTOR.message_types_by_name['QueryDisabledListRequest'] = _QUERYDISABLEDLISTREQUEST
DESCRIPTOR.message_types_by_name['DisabledListResponse'] = _DISABLEDLISTRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

QueryAccountRequest = _reflection.GeneratedProtocolMessageType('QueryAccountRequest', (_message.Message,), dict(
  DESCRIPTOR = _QUERYACCOUNTREQUEST,
  __module__ = 'cosmos.circuit.v1.query_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.circuit.v1.QueryAccountRequest)
  ))
_sym_db.RegisterMessage(QueryAccountRequest)

AccountResponse = _reflection.GeneratedProtocolMessageType('AccountResponse', (_message.Message,), dict(
  DESCRIPTOR = _ACCOUNTRESPONSE,
  __module__ = 'cosmos.circuit.v1.query_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.circuit.v1.AccountResponse)
  ))
_sym_db.RegisterMessage(AccountResponse)

QueryAccountsRequest = _reflection.GeneratedProtocolMessageType('QueryAccountsRequest', (_message.Message,), dict(
  DESCRIPTOR = _QUERYACCOUNTSREQUEST,
  __module__ = 'cosmos.circuit.v1.query_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.circuit.v1.QueryAccountsRequest)
  ))
_sym_db.RegisterMessage(QueryAccountsRequest)

AccountsResponse = _reflection.GeneratedProtocolMessageType('AccountsResponse', (_message.Message,), dict(
  DESCRIPTOR = _ACCOUNTSRESPONSE,
  __module__ = 'cosmos.circuit.v1.query_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.circuit.v1.AccountsResponse)
  ))
_sym_db.RegisterMessage(AccountsResponse)

QueryDisabledListRequest = _reflection.GeneratedProtocolMessageType('QueryDisabledListRequest', (_message.Message,), dict(
  DESCRIPTOR = _QUERYDISABLEDLISTREQUEST,
  __module__ = 'cosmos.circuit.v1.query_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.circuit.v1.QueryDisabledListRequest)
  ))
_sym_db.RegisterMessage(QueryDisabledListRequest)

DisabledListResponse = _reflection.GeneratedProtocolMessageType('DisabledListResponse', (_message.Message,), dict(
  DESCRIPTOR = _DISABLEDLISTRESPONSE,
  __module__ = 'cosmos.circuit.v1.query_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.circuit.v1.DisabledListResponse)
  ))
_sym_db.RegisterMessage(DisabledListResponse)


DESCRIPTOR._options = None

_QUERY = _descriptor.ServiceDescriptor(
  name='Query',
  full_name='cosmos.circuit.v1.Query',
  file=DESCRIPTOR,
  index=0,
  serialized_options=_b('\200\347\260*\001'),
  serialized_start=697,
  serialized_end=1133,
  methods=[
  _descriptor.MethodDescriptor(
    name='Account',
    full_name='cosmos.circuit.v1.Query.Account',
    index=0,
    containing_service=None,
    input_type=_QUERYACCOUNTREQUEST,
    output_type=_ACCOUNTRESPONSE,
    serialized_options=_b('\210\347\260*\001\202\323\344\223\002\'\022%/cosmos/circuit/v1/accounts/{address}'),
  ),
  _descriptor.MethodDescriptor(
    name='Accounts',
    full_name='cosmos.circuit.v1.Query.Accounts',
    index=1,
    containing_service=None,
    input_type=_QUERYACCOUNTSREQUEST,
    output_type=_ACCOUNTSRESPONSE,
    serialized_options=_b('\210\347\260*\001\202\323\344\223\002\035\022\033/cosmos/circuit/v1/accounts'),
  ),
  _descriptor.MethodDescriptor(
    name='DisabledList',
    full_name='cosmos.circuit.v1.Query.DisabledList',
    index=2,
    containing_service=None,
    input_type=_QUERYDISABLEDLISTREQUEST,
    output_type=_DISABLEDLISTRESPONSE,
    serialized_options=_b('\210\347\260*\001\202\323\344\223\002!\022\037/cosmos/circuit/v1/disable_list'),
  ),
])
_sym_db.RegisterServiceDescriptor(_QUERY)

DESCRIPTOR.services_by_name['Query'] = _QUERY

# @@protoc_insertion_point(module_scope)
