# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: cosmos/orm/query/v1alpha1/query.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2
from google.protobuf import duration_pb2 as google_dot_protobuf_dot_duration__pb2
from google.protobuf import any_pb2 as google_dot_protobuf_dot_any__pb2
from cosmos.base.query.v1beta1 import pagination_pb2 as cosmos_dot_base_dot_query_dot_v1beta1_dot_pagination__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='cosmos/orm/query/v1alpha1/query.proto',
  package='cosmos.orm.query.v1alpha1',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=_b('\n%cosmos/orm/query/v1alpha1/query.proto\x12\x19\x63osmos.orm.query.v1alpha1\x1a\x1fgoogle/protobuf/timestamp.proto\x1a\x1egoogle/protobuf/duration.proto\x1a\x19google/protobuf/any.proto\x1a*cosmos/base/query/v1beta1/pagination.proto\"\x84\x01\n\nGetRequest\x12!\n\x0cmessage_name\x18\x01 \x01(\tR\x0bmessageName\x12\x14\n\x05index\x18\x02 \x01(\tR\x05index\x12=\n\x06values\x18\x03 \x03(\x0b\x32%.cosmos.orm.query.v1alpha1.IndexValueR\x06values\";\n\x0bGetResponse\x12,\n\x06result\x18\x01 \x01(\x0b\x32\x14.google.protobuf.AnyR\x06result\"\xee\x03\n\x0bListRequest\x12!\n\x0cmessage_name\x18\x01 \x01(\tR\x0bmessageName\x12\x14\n\x05index\x18\x02 \x01(\tR\x05index\x12G\n\x06prefix\x18\x03 \x01(\x0b\x32-.cosmos.orm.query.v1alpha1.ListRequest.PrefixH\x00R\x06prefix\x12\x44\n\x05range\x18\x04 \x01(\x0b\x32,.cosmos.orm.query.v1alpha1.ListRequest.RangeH\x00R\x05range\x12\x46\n\npagination\x18\x05 \x01(\x0b\x32&.cosmos.base.query.v1beta1.PageRequestR\npagination\x1aG\n\x06Prefix\x12=\n\x06values\x18\x01 \x03(\x0b\x32%.cosmos.orm.query.v1alpha1.IndexValueR\x06values\x1a}\n\x05Range\x12;\n\x05start\x18\x01 \x03(\x0b\x32%.cosmos.orm.query.v1alpha1.IndexValueR\x05start\x12\x37\n\x03\x65nd\x18\x02 \x03(\x0b\x32%.cosmos.orm.query.v1alpha1.IndexValueR\x03\x65ndB\x07\n\x05query\"\x87\x01\n\x0cListResponse\x12.\n\x07results\x18\x01 \x03(\x0b\x32\x14.google.protobuf.AnyR\x07results\x12G\n\npagination\x18\x05 \x01(\x0b\x32\'.cosmos.base.query.v1beta1.PageResponseR\npagination\"\x8c\x02\n\nIndexValue\x12\x14\n\x04uint\x18\x01 \x01(\x04H\x00R\x04uint\x12\x12\n\x03int\x18\x02 \x01(\x03H\x00R\x03int\x12\x12\n\x03str\x18\x03 \x01(\tH\x00R\x03str\x12\x16\n\x05\x62ytes\x18\x04 \x01(\x0cH\x00R\x05\x62ytes\x12\x14\n\x04\x65num\x18\x05 \x01(\tH\x00R\x04\x65num\x12\x14\n\x04\x62ool\x18\x06 \x01(\x08H\x00R\x04\x62ool\x12:\n\ttimestamp\x18\x07 \x01(\x0b\x32\x1a.google.protobuf.TimestampH\x00R\ttimestamp\x12\x37\n\x08\x64uration\x18\x08 \x01(\x0b\x32\x19.google.protobuf.DurationH\x00R\x08\x64urationB\x07\n\x05value2\xb6\x01\n\x05Query\x12T\n\x03Get\x12%.cosmos.orm.query.v1alpha1.GetRequest\x1a&.cosmos.orm.query.v1alpha1.GetResponse\x12W\n\x04List\x12&.cosmos.orm.query.v1alpha1.ListRequest\x1a\'.cosmos.orm.query.v1alpha1.ListResponseb\x06proto3')
  ,
  dependencies=[google_dot_protobuf_dot_timestamp__pb2.DESCRIPTOR,google_dot_protobuf_dot_duration__pb2.DESCRIPTOR,google_dot_protobuf_dot_any__pb2.DESCRIPTOR,cosmos_dot_base_dot_query_dot_v1beta1_dot_pagination__pb2.DESCRIPTOR,])




_GETREQUEST = _descriptor.Descriptor(
  name='GetRequest',
  full_name='cosmos.orm.query.v1alpha1.GetRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='message_name', full_name='cosmos.orm.query.v1alpha1.GetRequest.message_name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='messageName', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='index', full_name='cosmos.orm.query.v1alpha1.GetRequest.index', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='index', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='values', full_name='cosmos.orm.query.v1alpha1.GetRequest.values', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='values', file=DESCRIPTOR),
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
  serialized_start=205,
  serialized_end=337,
)


_GETRESPONSE = _descriptor.Descriptor(
  name='GetResponse',
  full_name='cosmos.orm.query.v1alpha1.GetResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='result', full_name='cosmos.orm.query.v1alpha1.GetResponse.result', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='result', file=DESCRIPTOR),
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
  serialized_start=339,
  serialized_end=398,
)


_LISTREQUEST_PREFIX = _descriptor.Descriptor(
  name='Prefix',
  full_name='cosmos.orm.query.v1alpha1.ListRequest.Prefix',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='values', full_name='cosmos.orm.query.v1alpha1.ListRequest.Prefix.values', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='values', file=DESCRIPTOR),
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
  serialized_start=688,
  serialized_end=759,
)

_LISTREQUEST_RANGE = _descriptor.Descriptor(
  name='Range',
  full_name='cosmos.orm.query.v1alpha1.ListRequest.Range',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='start', full_name='cosmos.orm.query.v1alpha1.ListRequest.Range.start', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='start', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='end', full_name='cosmos.orm.query.v1alpha1.ListRequest.Range.end', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='end', file=DESCRIPTOR),
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
  serialized_start=761,
  serialized_end=886,
)

_LISTREQUEST = _descriptor.Descriptor(
  name='ListRequest',
  full_name='cosmos.orm.query.v1alpha1.ListRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='message_name', full_name='cosmos.orm.query.v1alpha1.ListRequest.message_name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='messageName', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='index', full_name='cosmos.orm.query.v1alpha1.ListRequest.index', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='index', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='prefix', full_name='cosmos.orm.query.v1alpha1.ListRequest.prefix', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='prefix', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='range', full_name='cosmos.orm.query.v1alpha1.ListRequest.range', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='range', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='pagination', full_name='cosmos.orm.query.v1alpha1.ListRequest.pagination', index=4,
      number=5, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='pagination', file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_LISTREQUEST_PREFIX, _LISTREQUEST_RANGE, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
    _descriptor.OneofDescriptor(
      name='query', full_name='cosmos.orm.query.v1alpha1.ListRequest.query',
      index=0, containing_type=None, fields=[]),
  ],
  serialized_start=401,
  serialized_end=895,
)


_LISTRESPONSE = _descriptor.Descriptor(
  name='ListResponse',
  full_name='cosmos.orm.query.v1alpha1.ListResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='results', full_name='cosmos.orm.query.v1alpha1.ListResponse.results', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='results', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='pagination', full_name='cosmos.orm.query.v1alpha1.ListResponse.pagination', index=1,
      number=5, type=11, cpp_type=10, label=1,
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
  serialized_start=898,
  serialized_end=1033,
)


_INDEXVALUE = _descriptor.Descriptor(
  name='IndexValue',
  full_name='cosmos.orm.query.v1alpha1.IndexValue',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='uint', full_name='cosmos.orm.query.v1alpha1.IndexValue.uint', index=0,
      number=1, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='uint', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='int', full_name='cosmos.orm.query.v1alpha1.IndexValue.int', index=1,
      number=2, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='int', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='str', full_name='cosmos.orm.query.v1alpha1.IndexValue.str', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='str', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='bytes', full_name='cosmos.orm.query.v1alpha1.IndexValue.bytes', index=3,
      number=4, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='bytes', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='enum', full_name='cosmos.orm.query.v1alpha1.IndexValue.enum', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='enum', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='bool', full_name='cosmos.orm.query.v1alpha1.IndexValue.bool', index=5,
      number=6, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='bool', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='timestamp', full_name='cosmos.orm.query.v1alpha1.IndexValue.timestamp', index=6,
      number=7, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='timestamp', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='duration', full_name='cosmos.orm.query.v1alpha1.IndexValue.duration', index=7,
      number=8, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='duration', file=DESCRIPTOR),
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
    _descriptor.OneofDescriptor(
      name='value', full_name='cosmos.orm.query.v1alpha1.IndexValue.value',
      index=0, containing_type=None, fields=[]),
  ],
  serialized_start=1036,
  serialized_end=1304,
)

_GETREQUEST.fields_by_name['values'].message_type = _INDEXVALUE
_GETRESPONSE.fields_by_name['result'].message_type = google_dot_protobuf_dot_any__pb2._ANY
_LISTREQUEST_PREFIX.fields_by_name['values'].message_type = _INDEXVALUE
_LISTREQUEST_PREFIX.containing_type = _LISTREQUEST
_LISTREQUEST_RANGE.fields_by_name['start'].message_type = _INDEXVALUE
_LISTREQUEST_RANGE.fields_by_name['end'].message_type = _INDEXVALUE
_LISTREQUEST_RANGE.containing_type = _LISTREQUEST
_LISTREQUEST.fields_by_name['prefix'].message_type = _LISTREQUEST_PREFIX
_LISTREQUEST.fields_by_name['range'].message_type = _LISTREQUEST_RANGE
_LISTREQUEST.fields_by_name['pagination'].message_type = cosmos_dot_base_dot_query_dot_v1beta1_dot_pagination__pb2._PAGEREQUEST
_LISTREQUEST.oneofs_by_name['query'].fields.append(
  _LISTREQUEST.fields_by_name['prefix'])
_LISTREQUEST.fields_by_name['prefix'].containing_oneof = _LISTREQUEST.oneofs_by_name['query']
_LISTREQUEST.oneofs_by_name['query'].fields.append(
  _LISTREQUEST.fields_by_name['range'])
_LISTREQUEST.fields_by_name['range'].containing_oneof = _LISTREQUEST.oneofs_by_name['query']
_LISTRESPONSE.fields_by_name['results'].message_type = google_dot_protobuf_dot_any__pb2._ANY
_LISTRESPONSE.fields_by_name['pagination'].message_type = cosmos_dot_base_dot_query_dot_v1beta1_dot_pagination__pb2._PAGERESPONSE
_INDEXVALUE.fields_by_name['timestamp'].message_type = google_dot_protobuf_dot_timestamp__pb2._TIMESTAMP
_INDEXVALUE.fields_by_name['duration'].message_type = google_dot_protobuf_dot_duration__pb2._DURATION
_INDEXVALUE.oneofs_by_name['value'].fields.append(
  _INDEXVALUE.fields_by_name['uint'])
_INDEXVALUE.fields_by_name['uint'].containing_oneof = _INDEXVALUE.oneofs_by_name['value']
_INDEXVALUE.oneofs_by_name['value'].fields.append(
  _INDEXVALUE.fields_by_name['int'])
_INDEXVALUE.fields_by_name['int'].containing_oneof = _INDEXVALUE.oneofs_by_name['value']
_INDEXVALUE.oneofs_by_name['value'].fields.append(
  _INDEXVALUE.fields_by_name['str'])
_INDEXVALUE.fields_by_name['str'].containing_oneof = _INDEXVALUE.oneofs_by_name['value']
_INDEXVALUE.oneofs_by_name['value'].fields.append(
  _INDEXVALUE.fields_by_name['bytes'])
_INDEXVALUE.fields_by_name['bytes'].containing_oneof = _INDEXVALUE.oneofs_by_name['value']
_INDEXVALUE.oneofs_by_name['value'].fields.append(
  _INDEXVALUE.fields_by_name['enum'])
_INDEXVALUE.fields_by_name['enum'].containing_oneof = _INDEXVALUE.oneofs_by_name['value']
_INDEXVALUE.oneofs_by_name['value'].fields.append(
  _INDEXVALUE.fields_by_name['bool'])
_INDEXVALUE.fields_by_name['bool'].containing_oneof = _INDEXVALUE.oneofs_by_name['value']
_INDEXVALUE.oneofs_by_name['value'].fields.append(
  _INDEXVALUE.fields_by_name['timestamp'])
_INDEXVALUE.fields_by_name['timestamp'].containing_oneof = _INDEXVALUE.oneofs_by_name['value']
_INDEXVALUE.oneofs_by_name['value'].fields.append(
  _INDEXVALUE.fields_by_name['duration'])
_INDEXVALUE.fields_by_name['duration'].containing_oneof = _INDEXVALUE.oneofs_by_name['value']
DESCRIPTOR.message_types_by_name['GetRequest'] = _GETREQUEST
DESCRIPTOR.message_types_by_name['GetResponse'] = _GETRESPONSE
DESCRIPTOR.message_types_by_name['ListRequest'] = _LISTREQUEST
DESCRIPTOR.message_types_by_name['ListResponse'] = _LISTRESPONSE
DESCRIPTOR.message_types_by_name['IndexValue'] = _INDEXVALUE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

GetRequest = _reflection.GeneratedProtocolMessageType('GetRequest', (_message.Message,), dict(
  DESCRIPTOR = _GETREQUEST,
  __module__ = 'cosmos.orm.query.v1alpha1.query_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.orm.query.v1alpha1.GetRequest)
  ))
_sym_db.RegisterMessage(GetRequest)

GetResponse = _reflection.GeneratedProtocolMessageType('GetResponse', (_message.Message,), dict(
  DESCRIPTOR = _GETRESPONSE,
  __module__ = 'cosmos.orm.query.v1alpha1.query_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.orm.query.v1alpha1.GetResponse)
  ))
_sym_db.RegisterMessage(GetResponse)

ListRequest = _reflection.GeneratedProtocolMessageType('ListRequest', (_message.Message,), dict(

  Prefix = _reflection.GeneratedProtocolMessageType('Prefix', (_message.Message,), dict(
    DESCRIPTOR = _LISTREQUEST_PREFIX,
    __module__ = 'cosmos.orm.query.v1alpha1.query_pb2'
    # @@protoc_insertion_point(class_scope:cosmos.orm.query.v1alpha1.ListRequest.Prefix)
    ))
  ,

  Range = _reflection.GeneratedProtocolMessageType('Range', (_message.Message,), dict(
    DESCRIPTOR = _LISTREQUEST_RANGE,
    __module__ = 'cosmos.orm.query.v1alpha1.query_pb2'
    # @@protoc_insertion_point(class_scope:cosmos.orm.query.v1alpha1.ListRequest.Range)
    ))
  ,
  DESCRIPTOR = _LISTREQUEST,
  __module__ = 'cosmos.orm.query.v1alpha1.query_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.orm.query.v1alpha1.ListRequest)
  ))
_sym_db.RegisterMessage(ListRequest)
_sym_db.RegisterMessage(ListRequest.Prefix)
_sym_db.RegisterMessage(ListRequest.Range)

ListResponse = _reflection.GeneratedProtocolMessageType('ListResponse', (_message.Message,), dict(
  DESCRIPTOR = _LISTRESPONSE,
  __module__ = 'cosmos.orm.query.v1alpha1.query_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.orm.query.v1alpha1.ListResponse)
  ))
_sym_db.RegisterMessage(ListResponse)

IndexValue = _reflection.GeneratedProtocolMessageType('IndexValue', (_message.Message,), dict(
  DESCRIPTOR = _INDEXVALUE,
  __module__ = 'cosmos.orm.query.v1alpha1.query_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.orm.query.v1alpha1.IndexValue)
  ))
_sym_db.RegisterMessage(IndexValue)



_QUERY = _descriptor.ServiceDescriptor(
  name='Query',
  full_name='cosmos.orm.query.v1alpha1.Query',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  serialized_start=1307,
  serialized_end=1489,
  methods=[
  _descriptor.MethodDescriptor(
    name='Get',
    full_name='cosmos.orm.query.v1alpha1.Query.Get',
    index=0,
    containing_service=None,
    input_type=_GETREQUEST,
    output_type=_GETRESPONSE,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='List',
    full_name='cosmos.orm.query.v1alpha1.Query.List',
    index=1,
    containing_service=None,
    input_type=_LISTREQUEST,
    output_type=_LISTRESPONSE,
    serialized_options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_QUERY)

DESCRIPTOR.services_by_name['Query'] = _QUERY

# @@protoc_insertion_point(module_scope)
