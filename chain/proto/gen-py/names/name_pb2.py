# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: names/name.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from gogoproto import gogo_pb2 as gogoproto_dot_gogo__pb2
from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='names/name.proto',
  package='names',
  syntax='proto3',
  serialized_options=_b('Z\"github.com/org/dyson/x/names/types'),
  serialized_pb=_b('\n\x10names/name.proto\x12\x05names\x1a\x14gogoproto/gogo.proto\x1a\x1fgoogle/protobuf/timestamp.proto\"\x85\x02\n\x04Name\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\x12 \n\x0b\x64\x65stination\x18\x02 \x01(\tR\x0b\x64\x65stination\x12\x14\n\x05price\x18\x03 \x01(\tR\x05price\x12\x1e\n\nauthorized\x18\x05 \x01(\tR\nauthorized\x12\x14\n\x05owner\x18\x08 \x01(\tR\x05owner\x12+\n\x11\x65xpiration_height\x18\x0b \x01(\x04R\x10\x65xpirationHeight\x12/\n\x13registration_height\x18\x0c \x01(\x04R\x12registrationHeight\x12\x1d\n\nauto_renew\x18\r \x01(\x08R\tautoRenewB$Z\"github.com/org/dyson/x/names/typesb\x06proto3')
  ,
  dependencies=[gogoproto_dot_gogo__pb2.DESCRIPTOR,google_dot_protobuf_dot_timestamp__pb2.DESCRIPTOR,])




_NAME = _descriptor.Descriptor(
  name='Name',
  full_name='names.Name',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='names.Name.name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='name', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='destination', full_name='names.Name.destination', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='destination', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='price', full_name='names.Name.price', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='price', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='authorized', full_name='names.Name.authorized', index=3,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='authorized', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='owner', full_name='names.Name.owner', index=4,
      number=8, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='owner', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='expiration_height', full_name='names.Name.expiration_height', index=5,
      number=11, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='expirationHeight', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='registration_height', full_name='names.Name.registration_height', index=6,
      number=12, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='registrationHeight', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='auto_renew', full_name='names.Name.auto_renew', index=7,
      number=13, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='autoRenew', file=DESCRIPTOR),
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
  serialized_start=83,
  serialized_end=344,
)

DESCRIPTOR.message_types_by_name['Name'] = _NAME
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Name = _reflection.GeneratedProtocolMessageType('Name', (_message.Message,), dict(
  DESCRIPTOR = _NAME,
  __module__ = 'names.name_pb2'
  # @@protoc_insertion_point(class_scope:names.Name)
  ))
_sym_db.RegisterMessage(Name)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)