# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: cosmos/orm/v1/orm.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import descriptor_pb2 as google_dot_protobuf_dot_descriptor__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='cosmos/orm/v1/orm.proto',
  package='cosmos.orm.v1',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=_b('\n\x17\x63osmos/orm/v1/orm.proto\x12\rcosmos.orm.v1\x1a google/protobuf/descriptor.proto\"\xa6\x01\n\x0fTableDescriptor\x12\x44\n\x0bprimary_key\x18\x01 \x01(\x0b\x32#.cosmos.orm.v1.PrimaryKeyDescriptorR\nprimaryKey\x12=\n\x05index\x18\x02 \x03(\x0b\x32\'.cosmos.orm.v1.SecondaryIndexDescriptorR\x05index\x12\x0e\n\x02id\x18\x03 \x01(\rR\x02id\"U\n\x14PrimaryKeyDescriptor\x12\x16\n\x06\x66ields\x18\x01 \x01(\tR\x06\x66ields\x12%\n\x0e\x61uto_increment\x18\x02 \x01(\x08R\rautoIncrement\"Z\n\x18SecondaryIndexDescriptor\x12\x16\n\x06\x66ields\x18\x01 \x01(\tR\x06\x66ields\x12\x0e\n\x02id\x18\x02 \x01(\rR\x02id\x12\x16\n\x06unique\x18\x03 \x01(\x08R\x06unique\"%\n\x13SingletonDescriptor\x12\x0e\n\x02id\x18\x01 \x01(\rR\x02id:X\n\x05table\x12\x1f.google.protobuf.MessageOptions\x18\xee\xb3\xea\x31 \x01(\x0b\x32\x1e.cosmos.orm.v1.TableDescriptorR\x05table:d\n\tsingleton\x12\x1f.google.protobuf.MessageOptions\x18\xef\xb3\xea\x31 \x01(\x0b\x32\".cosmos.orm.v1.SingletonDescriptorR\tsingletonb\x06proto3')
  ,
  dependencies=[google_dot_protobuf_dot_descriptor__pb2.DESCRIPTOR,])


TABLE_FIELD_NUMBER = 104503790
table = _descriptor.FieldDescriptor(
  name='table', full_name='cosmos.orm.v1.table', index=0,
  number=104503790, type=11, cpp_type=10, label=1,
  has_default_value=False, default_value=None,
  message_type=None, enum_type=None, containing_type=None,
  is_extension=True, extension_scope=None,
  serialized_options=None, json_name='table', file=DESCRIPTOR)
SINGLETON_FIELD_NUMBER = 104503791
singleton = _descriptor.FieldDescriptor(
  name='singleton', full_name='cosmos.orm.v1.singleton', index=1,
  number=104503791, type=11, cpp_type=10, label=1,
  has_default_value=False, default_value=None,
  message_type=None, enum_type=None, containing_type=None,
  is_extension=True, extension_scope=None,
  serialized_options=None, json_name='singleton', file=DESCRIPTOR)


_TABLEDESCRIPTOR = _descriptor.Descriptor(
  name='TableDescriptor',
  full_name='cosmos.orm.v1.TableDescriptor',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='primary_key', full_name='cosmos.orm.v1.TableDescriptor.primary_key', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='primaryKey', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='index', full_name='cosmos.orm.v1.TableDescriptor.index', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='index', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='id', full_name='cosmos.orm.v1.TableDescriptor.id', index=2,
      number=3, type=13, cpp_type=3, label=1,
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
  serialized_start=77,
  serialized_end=243,
)


_PRIMARYKEYDESCRIPTOR = _descriptor.Descriptor(
  name='PrimaryKeyDescriptor',
  full_name='cosmos.orm.v1.PrimaryKeyDescriptor',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='fields', full_name='cosmos.orm.v1.PrimaryKeyDescriptor.fields', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='fields', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='auto_increment', full_name='cosmos.orm.v1.PrimaryKeyDescriptor.auto_increment', index=1,
      number=2, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='autoIncrement', file=DESCRIPTOR),
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
  serialized_start=245,
  serialized_end=330,
)


_SECONDARYINDEXDESCRIPTOR = _descriptor.Descriptor(
  name='SecondaryIndexDescriptor',
  full_name='cosmos.orm.v1.SecondaryIndexDescriptor',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='fields', full_name='cosmos.orm.v1.SecondaryIndexDescriptor.fields', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='fields', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='id', full_name='cosmos.orm.v1.SecondaryIndexDescriptor.id', index=1,
      number=2, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='id', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='unique', full_name='cosmos.orm.v1.SecondaryIndexDescriptor.unique', index=2,
      number=3, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='unique', file=DESCRIPTOR),
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
  serialized_start=332,
  serialized_end=422,
)


_SINGLETONDESCRIPTOR = _descriptor.Descriptor(
  name='SingletonDescriptor',
  full_name='cosmos.orm.v1.SingletonDescriptor',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='cosmos.orm.v1.SingletonDescriptor.id', index=0,
      number=1, type=13, cpp_type=3, label=1,
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
  serialized_start=424,
  serialized_end=461,
)

_TABLEDESCRIPTOR.fields_by_name['primary_key'].message_type = _PRIMARYKEYDESCRIPTOR
_TABLEDESCRIPTOR.fields_by_name['index'].message_type = _SECONDARYINDEXDESCRIPTOR
DESCRIPTOR.message_types_by_name['TableDescriptor'] = _TABLEDESCRIPTOR
DESCRIPTOR.message_types_by_name['PrimaryKeyDescriptor'] = _PRIMARYKEYDESCRIPTOR
DESCRIPTOR.message_types_by_name['SecondaryIndexDescriptor'] = _SECONDARYINDEXDESCRIPTOR
DESCRIPTOR.message_types_by_name['SingletonDescriptor'] = _SINGLETONDESCRIPTOR
DESCRIPTOR.extensions_by_name['table'] = table
DESCRIPTOR.extensions_by_name['singleton'] = singleton
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

TableDescriptor = _reflection.GeneratedProtocolMessageType('TableDescriptor', (_message.Message,), dict(
  DESCRIPTOR = _TABLEDESCRIPTOR,
  __module__ = 'cosmos.orm.v1.orm_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.orm.v1.TableDescriptor)
  ))
_sym_db.RegisterMessage(TableDescriptor)

PrimaryKeyDescriptor = _reflection.GeneratedProtocolMessageType('PrimaryKeyDescriptor', (_message.Message,), dict(
  DESCRIPTOR = _PRIMARYKEYDESCRIPTOR,
  __module__ = 'cosmos.orm.v1.orm_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.orm.v1.PrimaryKeyDescriptor)
  ))
_sym_db.RegisterMessage(PrimaryKeyDescriptor)

SecondaryIndexDescriptor = _reflection.GeneratedProtocolMessageType('SecondaryIndexDescriptor', (_message.Message,), dict(
  DESCRIPTOR = _SECONDARYINDEXDESCRIPTOR,
  __module__ = 'cosmos.orm.v1.orm_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.orm.v1.SecondaryIndexDescriptor)
  ))
_sym_db.RegisterMessage(SecondaryIndexDescriptor)

SingletonDescriptor = _reflection.GeneratedProtocolMessageType('SingletonDescriptor', (_message.Message,), dict(
  DESCRIPTOR = _SINGLETONDESCRIPTOR,
  __module__ = 'cosmos.orm.v1.orm_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.orm.v1.SingletonDescriptor)
  ))
_sym_db.RegisterMessage(SingletonDescriptor)

table.message_type = _TABLEDESCRIPTOR
google_dot_protobuf_dot_descriptor__pb2.MessageOptions.RegisterExtension(table)
singleton.message_type = _SINGLETONDESCRIPTOR
google_dot_protobuf_dot_descriptor__pb2.MessageOptions.RegisterExtension(singleton)

# @@protoc_insertion_point(module_scope)
