# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: names/query.proto

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
from cosmos.base.query.v1beta1 import pagination_pb2 as cosmos_dot_base_dot_query_dot_v1beta1_dot_pagination__pb2
from names import params_pb2 as names_dot_params__pb2
from names import name_pb2 as names_dot_name__pb2
from names import expirations_pb2 as names_dot_expirations__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='names/query.proto',
  package='names',
  syntax='proto3',
  serialized_options=_b('Z\"github.com/org/dyson/x/names/types'),
  serialized_pb=_b('\n\x11names/query.proto\x12\x05names\x1a\x14gogoproto/gogo.proto\x1a\x1cgoogle/api/annotations.proto\x1a*cosmos/base/query/v1beta1/pagination.proto\x1a\x12names/params.proto\x1a\x10names/name.proto\x1a\x17names/expirations.proto\"\x14\n\x12QueryParamsRequest\"B\n\x13QueryParamsResponse\x12+\n\x06params\x18\x01 \x01(\x0b\x32\r.names.ParamsB\x04\xc8\xde\x1f\x00R\x06params\")\n\x13QueryGetNameRequest\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\"=\n\x14QueryGetNameResponse\x12%\n\x04name\x18\x01 \x01(\x0b\x32\x0b.names.NameB\x04\xc8\xde\x1f\x00R\x04name\"]\n\x13QueryAllNameRequest\x12\x46\n\npagination\x18\x01 \x01(\x0b\x32&.cosmos.base.query.v1beta1.PageRequestR\npagination\"\x86\x01\n\x14QueryAllNameResponse\x12%\n\x04name\x18\x01 \x03(\x0b\x32\x0b.names.NameB\x04\xc8\xde\x1f\x00R\x04name\x12G\n\npagination\x18\x02 \x01(\x0b\x32\'.cosmos.base.query.v1beta1.PageResponseR\npagination\")\n\x13QueryResolveRequest\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\"0\n\x14QueryResolveResponse\x12\x18\n\x07\x61\x64\x64ress\x18\x01 \x01(\tR\x07\x61\x64\x64ress\"Z\n\x1aQueryGenerateCommitRequest\x12\x14\n\x05owner\x18\x01 \x01(\tR\x05owner\x12\x12\n\x04name\x18\x02 \x01(\tR\x04name\x12\x12\n\x04salt\x18\x03 \x01(\tR\x04salt\"5\n\x1bQueryGenerateCommitResponse\x12\x16\n\x06\x63ommit\x18\x01 \x01(\tR\x06\x63ommit\">\n\x1aQueryGetExpirationsRequest\x12 \n\x0b\x62lockHeight\x18\x01 \x01(\tR\x0b\x62lockHeight\"Y\n\x1bQueryGetExpirationsResponse\x12:\n\x0b\x65xpirations\x18\x01 \x01(\x0b\x32\x12.names.ExpirationsB\x04\xc8\xde\x1f\x00R\x0b\x65xpirations\"d\n\x1aQueryAllExpirationsRequest\x12\x46\n\npagination\x18\x01 \x01(\x0b\x32&.cosmos.base.query.v1beta1.PageRequestR\npagination\"\xa2\x01\n\x1bQueryAllExpirationsResponse\x12:\n\x0b\x65xpirations\x18\x01 \x03(\x0b\x32\x12.names.ExpirationsB\x04\xc8\xde\x1f\x00R\x0b\x65xpirations\x12G\n\npagination\x18\x02 \x01(\x0b\x32\'.cosmos.base.query.v1beta1.PageResponseR\npagination2\xa3\x06\n\x05Query\x12`\n\x06Params\x12\x19.names.QueryParamsRequest\x1a\x1a.names.QueryParamsResponse\"\x1f\x82\xd3\xe4\x93\x02\x19\x12\x17/org/dyson/names/params\x12^\n\x04Name\x12\x1a.names.QueryGetNameRequest\x1a\x1b.names.QueryGetNameResponse\"\x1d\x82\xd3\xe4\x93\x02\x17\x12\x15/org/dyson/names/name\x12\x64\n\x07NameAll\x12\x1a.names.QueryAllNameRequest\x1a\x1b.names.QueryAllNameResponse\" \x82\xd3\xe4\x93\x02\x1a\x12\x18/org/dyson/names/nameall\x12\x64\n\x07Resolve\x12\x1a.names.QueryResolveRequest\x1a\x1b.names.QueryResolveResponse\" \x82\xd3\xe4\x93\x02\x1a\x12\x18/org/dyson/names/resolve\x12\x81\x01\n\x0eGenerateCommit\x12!.names.QueryGenerateCommitRequest\x1a\".names.QueryGenerateCommitResponse\"(\x82\xd3\xe4\x93\x02\"\x12 /org/dyson/names/generate_commit\x12\x88\x01\n\x0b\x45xpirations\x12!.names.QueryGetExpirationsRequest\x1a\".names.QueryGetExpirationsResponse\"2\x82\xd3\xe4\x93\x02,\x12*/org/dyson/names/expirations/{blockHeight}\x12}\n\x0e\x45xpirationsAll\x12!.names.QueryAllExpirationsRequest\x1a\".names.QueryAllExpirationsResponse\"$\x82\xd3\xe4\x93\x02\x1e\x12\x1c/org/dyson/names/expirationsB$Z\"github.com/org/dyson/x/names/typesb\x06proto3')
  ,
  dependencies=[gogoproto_dot_gogo__pb2.DESCRIPTOR,google_dot_api_dot_annotations__pb2.DESCRIPTOR,cosmos_dot_base_dot_query_dot_v1beta1_dot_pagination__pb2.DESCRIPTOR,names_dot_params__pb2.DESCRIPTOR,names_dot_name__pb2.DESCRIPTOR,names_dot_expirations__pb2.DESCRIPTOR,])




_QUERYPARAMSREQUEST = _descriptor.Descriptor(
  name='QueryParamsRequest',
  full_name='names.QueryParamsRequest',
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
  serialized_start=187,
  serialized_end=207,
)


_QUERYPARAMSRESPONSE = _descriptor.Descriptor(
  name='QueryParamsResponse',
  full_name='names.QueryParamsResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='params', full_name='names.QueryParamsResponse.params', index=0,
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
  serialized_start=209,
  serialized_end=275,
)


_QUERYGETNAMEREQUEST = _descriptor.Descriptor(
  name='QueryGetNameRequest',
  full_name='names.QueryGetNameRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='names.QueryGetNameRequest.name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='name', file=DESCRIPTOR),
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
  serialized_start=277,
  serialized_end=318,
)


_QUERYGETNAMERESPONSE = _descriptor.Descriptor(
  name='QueryGetNameResponse',
  full_name='names.QueryGetNameResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='names.QueryGetNameResponse.name', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000'), json_name='name', file=DESCRIPTOR),
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
  serialized_start=320,
  serialized_end=381,
)


_QUERYALLNAMEREQUEST = _descriptor.Descriptor(
  name='QueryAllNameRequest',
  full_name='names.QueryAllNameRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='pagination', full_name='names.QueryAllNameRequest.pagination', index=0,
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
  serialized_start=383,
  serialized_end=476,
)


_QUERYALLNAMERESPONSE = _descriptor.Descriptor(
  name='QueryAllNameResponse',
  full_name='names.QueryAllNameResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='names.QueryAllNameResponse.name', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000'), json_name='name', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='pagination', full_name='names.QueryAllNameResponse.pagination', index=1,
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
  serialized_start=479,
  serialized_end=613,
)


_QUERYRESOLVEREQUEST = _descriptor.Descriptor(
  name='QueryResolveRequest',
  full_name='names.QueryResolveRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='names.QueryResolveRequest.name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='name', file=DESCRIPTOR),
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
  serialized_start=615,
  serialized_end=656,
)


_QUERYRESOLVERESPONSE = _descriptor.Descriptor(
  name='QueryResolveResponse',
  full_name='names.QueryResolveResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='address', full_name='names.QueryResolveResponse.address', index=0,
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
  serialized_start=658,
  serialized_end=706,
)


_QUERYGENERATECOMMITREQUEST = _descriptor.Descriptor(
  name='QueryGenerateCommitRequest',
  full_name='names.QueryGenerateCommitRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='owner', full_name='names.QueryGenerateCommitRequest.owner', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='owner', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='name', full_name='names.QueryGenerateCommitRequest.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='name', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='salt', full_name='names.QueryGenerateCommitRequest.salt', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='salt', file=DESCRIPTOR),
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
  serialized_start=708,
  serialized_end=798,
)


_QUERYGENERATECOMMITRESPONSE = _descriptor.Descriptor(
  name='QueryGenerateCommitResponse',
  full_name='names.QueryGenerateCommitResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='commit', full_name='names.QueryGenerateCommitResponse.commit', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='commit', file=DESCRIPTOR),
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
  serialized_start=800,
  serialized_end=853,
)


_QUERYGETEXPIRATIONSREQUEST = _descriptor.Descriptor(
  name='QueryGetExpirationsRequest',
  full_name='names.QueryGetExpirationsRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='blockHeight', full_name='names.QueryGetExpirationsRequest.blockHeight', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='blockHeight', file=DESCRIPTOR),
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
  serialized_start=855,
  serialized_end=917,
)


_QUERYGETEXPIRATIONSRESPONSE = _descriptor.Descriptor(
  name='QueryGetExpirationsResponse',
  full_name='names.QueryGetExpirationsResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='expirations', full_name='names.QueryGetExpirationsResponse.expirations', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000'), json_name='expirations', file=DESCRIPTOR),
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
  serialized_start=919,
  serialized_end=1008,
)


_QUERYALLEXPIRATIONSREQUEST = _descriptor.Descriptor(
  name='QueryAllExpirationsRequest',
  full_name='names.QueryAllExpirationsRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='pagination', full_name='names.QueryAllExpirationsRequest.pagination', index=0,
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
  serialized_start=1010,
  serialized_end=1110,
)


_QUERYALLEXPIRATIONSRESPONSE = _descriptor.Descriptor(
  name='QueryAllExpirationsResponse',
  full_name='names.QueryAllExpirationsResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='expirations', full_name='names.QueryAllExpirationsResponse.expirations', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000'), json_name='expirations', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='pagination', full_name='names.QueryAllExpirationsResponse.pagination', index=1,
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
  serialized_start=1113,
  serialized_end=1275,
)

_QUERYPARAMSRESPONSE.fields_by_name['params'].message_type = names_dot_params__pb2._PARAMS
_QUERYGETNAMERESPONSE.fields_by_name['name'].message_type = names_dot_name__pb2._NAME
_QUERYALLNAMEREQUEST.fields_by_name['pagination'].message_type = cosmos_dot_base_dot_query_dot_v1beta1_dot_pagination__pb2._PAGEREQUEST
_QUERYALLNAMERESPONSE.fields_by_name['name'].message_type = names_dot_name__pb2._NAME
_QUERYALLNAMERESPONSE.fields_by_name['pagination'].message_type = cosmos_dot_base_dot_query_dot_v1beta1_dot_pagination__pb2._PAGERESPONSE
_QUERYGETEXPIRATIONSRESPONSE.fields_by_name['expirations'].message_type = names_dot_expirations__pb2._EXPIRATIONS
_QUERYALLEXPIRATIONSREQUEST.fields_by_name['pagination'].message_type = cosmos_dot_base_dot_query_dot_v1beta1_dot_pagination__pb2._PAGEREQUEST
_QUERYALLEXPIRATIONSRESPONSE.fields_by_name['expirations'].message_type = names_dot_expirations__pb2._EXPIRATIONS
_QUERYALLEXPIRATIONSRESPONSE.fields_by_name['pagination'].message_type = cosmos_dot_base_dot_query_dot_v1beta1_dot_pagination__pb2._PAGERESPONSE
DESCRIPTOR.message_types_by_name['QueryParamsRequest'] = _QUERYPARAMSREQUEST
DESCRIPTOR.message_types_by_name['QueryParamsResponse'] = _QUERYPARAMSRESPONSE
DESCRIPTOR.message_types_by_name['QueryGetNameRequest'] = _QUERYGETNAMEREQUEST
DESCRIPTOR.message_types_by_name['QueryGetNameResponse'] = _QUERYGETNAMERESPONSE
DESCRIPTOR.message_types_by_name['QueryAllNameRequest'] = _QUERYALLNAMEREQUEST
DESCRIPTOR.message_types_by_name['QueryAllNameResponse'] = _QUERYALLNAMERESPONSE
DESCRIPTOR.message_types_by_name['QueryResolveRequest'] = _QUERYRESOLVEREQUEST
DESCRIPTOR.message_types_by_name['QueryResolveResponse'] = _QUERYRESOLVERESPONSE
DESCRIPTOR.message_types_by_name['QueryGenerateCommitRequest'] = _QUERYGENERATECOMMITREQUEST
DESCRIPTOR.message_types_by_name['QueryGenerateCommitResponse'] = _QUERYGENERATECOMMITRESPONSE
DESCRIPTOR.message_types_by_name['QueryGetExpirationsRequest'] = _QUERYGETEXPIRATIONSREQUEST
DESCRIPTOR.message_types_by_name['QueryGetExpirationsResponse'] = _QUERYGETEXPIRATIONSRESPONSE
DESCRIPTOR.message_types_by_name['QueryAllExpirationsRequest'] = _QUERYALLEXPIRATIONSREQUEST
DESCRIPTOR.message_types_by_name['QueryAllExpirationsResponse'] = _QUERYALLEXPIRATIONSRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

QueryParamsRequest = _reflection.GeneratedProtocolMessageType('QueryParamsRequest', (_message.Message,), dict(
  DESCRIPTOR = _QUERYPARAMSREQUEST,
  __module__ = 'names.query_pb2'
  # @@protoc_insertion_point(class_scope:names.QueryParamsRequest)
  ))
_sym_db.RegisterMessage(QueryParamsRequest)

QueryParamsResponse = _reflection.GeneratedProtocolMessageType('QueryParamsResponse', (_message.Message,), dict(
  DESCRIPTOR = _QUERYPARAMSRESPONSE,
  __module__ = 'names.query_pb2'
  # @@protoc_insertion_point(class_scope:names.QueryParamsResponse)
  ))
_sym_db.RegisterMessage(QueryParamsResponse)

QueryGetNameRequest = _reflection.GeneratedProtocolMessageType('QueryGetNameRequest', (_message.Message,), dict(
  DESCRIPTOR = _QUERYGETNAMEREQUEST,
  __module__ = 'names.query_pb2'
  # @@protoc_insertion_point(class_scope:names.QueryGetNameRequest)
  ))
_sym_db.RegisterMessage(QueryGetNameRequest)

QueryGetNameResponse = _reflection.GeneratedProtocolMessageType('QueryGetNameResponse', (_message.Message,), dict(
  DESCRIPTOR = _QUERYGETNAMERESPONSE,
  __module__ = 'names.query_pb2'
  # @@protoc_insertion_point(class_scope:names.QueryGetNameResponse)
  ))
_sym_db.RegisterMessage(QueryGetNameResponse)

QueryAllNameRequest = _reflection.GeneratedProtocolMessageType('QueryAllNameRequest', (_message.Message,), dict(
  DESCRIPTOR = _QUERYALLNAMEREQUEST,
  __module__ = 'names.query_pb2'
  # @@protoc_insertion_point(class_scope:names.QueryAllNameRequest)
  ))
_sym_db.RegisterMessage(QueryAllNameRequest)

QueryAllNameResponse = _reflection.GeneratedProtocolMessageType('QueryAllNameResponse', (_message.Message,), dict(
  DESCRIPTOR = _QUERYALLNAMERESPONSE,
  __module__ = 'names.query_pb2'
  # @@protoc_insertion_point(class_scope:names.QueryAllNameResponse)
  ))
_sym_db.RegisterMessage(QueryAllNameResponse)

QueryResolveRequest = _reflection.GeneratedProtocolMessageType('QueryResolveRequest', (_message.Message,), dict(
  DESCRIPTOR = _QUERYRESOLVEREQUEST,
  __module__ = 'names.query_pb2'
  # @@protoc_insertion_point(class_scope:names.QueryResolveRequest)
  ))
_sym_db.RegisterMessage(QueryResolveRequest)

QueryResolveResponse = _reflection.GeneratedProtocolMessageType('QueryResolveResponse', (_message.Message,), dict(
  DESCRIPTOR = _QUERYRESOLVERESPONSE,
  __module__ = 'names.query_pb2'
  # @@protoc_insertion_point(class_scope:names.QueryResolveResponse)
  ))
_sym_db.RegisterMessage(QueryResolveResponse)

QueryGenerateCommitRequest = _reflection.GeneratedProtocolMessageType('QueryGenerateCommitRequest', (_message.Message,), dict(
  DESCRIPTOR = _QUERYGENERATECOMMITREQUEST,
  __module__ = 'names.query_pb2'
  # @@protoc_insertion_point(class_scope:names.QueryGenerateCommitRequest)
  ))
_sym_db.RegisterMessage(QueryGenerateCommitRequest)

QueryGenerateCommitResponse = _reflection.GeneratedProtocolMessageType('QueryGenerateCommitResponse', (_message.Message,), dict(
  DESCRIPTOR = _QUERYGENERATECOMMITRESPONSE,
  __module__ = 'names.query_pb2'
  # @@protoc_insertion_point(class_scope:names.QueryGenerateCommitResponse)
  ))
_sym_db.RegisterMessage(QueryGenerateCommitResponse)

QueryGetExpirationsRequest = _reflection.GeneratedProtocolMessageType('QueryGetExpirationsRequest', (_message.Message,), dict(
  DESCRIPTOR = _QUERYGETEXPIRATIONSREQUEST,
  __module__ = 'names.query_pb2'
  # @@protoc_insertion_point(class_scope:names.QueryGetExpirationsRequest)
  ))
_sym_db.RegisterMessage(QueryGetExpirationsRequest)

QueryGetExpirationsResponse = _reflection.GeneratedProtocolMessageType('QueryGetExpirationsResponse', (_message.Message,), dict(
  DESCRIPTOR = _QUERYGETEXPIRATIONSRESPONSE,
  __module__ = 'names.query_pb2'
  # @@protoc_insertion_point(class_scope:names.QueryGetExpirationsResponse)
  ))
_sym_db.RegisterMessage(QueryGetExpirationsResponse)

QueryAllExpirationsRequest = _reflection.GeneratedProtocolMessageType('QueryAllExpirationsRequest', (_message.Message,), dict(
  DESCRIPTOR = _QUERYALLEXPIRATIONSREQUEST,
  __module__ = 'names.query_pb2'
  # @@protoc_insertion_point(class_scope:names.QueryAllExpirationsRequest)
  ))
_sym_db.RegisterMessage(QueryAllExpirationsRequest)

QueryAllExpirationsResponse = _reflection.GeneratedProtocolMessageType('QueryAllExpirationsResponse', (_message.Message,), dict(
  DESCRIPTOR = _QUERYALLEXPIRATIONSRESPONSE,
  __module__ = 'names.query_pb2'
  # @@protoc_insertion_point(class_scope:names.QueryAllExpirationsResponse)
  ))
_sym_db.RegisterMessage(QueryAllExpirationsResponse)


DESCRIPTOR._options = None
_QUERYPARAMSRESPONSE.fields_by_name['params']._options = None
_QUERYGETNAMERESPONSE.fields_by_name['name']._options = None
_QUERYALLNAMERESPONSE.fields_by_name['name']._options = None
_QUERYGETEXPIRATIONSRESPONSE.fields_by_name['expirations']._options = None
_QUERYALLEXPIRATIONSRESPONSE.fields_by_name['expirations']._options = None

_QUERY = _descriptor.ServiceDescriptor(
  name='Query',
  full_name='names.Query',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  serialized_start=1278,
  serialized_end=2081,
  methods=[
  _descriptor.MethodDescriptor(
    name='Params',
    full_name='names.Query.Params',
    index=0,
    containing_service=None,
    input_type=_QUERYPARAMSREQUEST,
    output_type=_QUERYPARAMSRESPONSE,
    serialized_options=_b('\202\323\344\223\002\031\022\027/org/dyson/names/params'),
  ),
  _descriptor.MethodDescriptor(
    name='Name',
    full_name='names.Query.Name',
    index=1,
    containing_service=None,
    input_type=_QUERYGETNAMEREQUEST,
    output_type=_QUERYGETNAMERESPONSE,
    serialized_options=_b('\202\323\344\223\002\027\022\025/org/dyson/names/name'),
  ),
  _descriptor.MethodDescriptor(
    name='NameAll',
    full_name='names.Query.NameAll',
    index=2,
    containing_service=None,
    input_type=_QUERYALLNAMEREQUEST,
    output_type=_QUERYALLNAMERESPONSE,
    serialized_options=_b('\202\323\344\223\002\032\022\030/org/dyson/names/nameall'),
  ),
  _descriptor.MethodDescriptor(
    name='Resolve',
    full_name='names.Query.Resolve',
    index=3,
    containing_service=None,
    input_type=_QUERYRESOLVEREQUEST,
    output_type=_QUERYRESOLVERESPONSE,
    serialized_options=_b('\202\323\344\223\002\032\022\030/org/dyson/names/resolve'),
  ),
  _descriptor.MethodDescriptor(
    name='GenerateCommit',
    full_name='names.Query.GenerateCommit',
    index=4,
    containing_service=None,
    input_type=_QUERYGENERATECOMMITREQUEST,
    output_type=_QUERYGENERATECOMMITRESPONSE,
    serialized_options=_b('\202\323\344\223\002\"\022 /org/dyson/names/generate_commit'),
  ),
  _descriptor.MethodDescriptor(
    name='Expirations',
    full_name='names.Query.Expirations',
    index=5,
    containing_service=None,
    input_type=_QUERYGETEXPIRATIONSREQUEST,
    output_type=_QUERYGETEXPIRATIONSRESPONSE,
    serialized_options=_b('\202\323\344\223\002,\022*/org/dyson/names/expirations/{blockHeight}'),
  ),
  _descriptor.MethodDescriptor(
    name='ExpirationsAll',
    full_name='names.Query.ExpirationsAll',
    index=6,
    containing_service=None,
    input_type=_QUERYALLEXPIRATIONSREQUEST,
    output_type=_QUERYALLEXPIRATIONSRESPONSE,
    serialized_options=_b('\202\323\344\223\002\036\022\034/org/dyson/names/expirations'),
  ),
])
_sym_db.RegisterServiceDescriptor(_QUERY)

DESCRIPTOR.services_by_name['Query'] = _QUERY

# @@protoc_insertion_point(module_scope)
