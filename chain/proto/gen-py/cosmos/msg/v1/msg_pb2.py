# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: cosmos/msg/v1/msg.proto

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
  name='cosmos/msg/v1/msg.proto',
  package='cosmos.msg.v1',
  syntax='proto3',
  serialized_options=_b('Z-github.com/cosmos/cosmos-sdk/types/msgservice'),
  serialized_pb=_b('\n\x17\x63osmos/msg/v1/msg.proto\x12\rcosmos.msg.v1\x1a google/protobuf/descriptor.proto:<\n\x07service\x12\x1f.google.protobuf.ServiceOptions\x18\xf0\x8c\xa6\x05 \x01(\x08R\x07service::\n\x06signer\x12\x1f.google.protobuf.MessageOptions\x18\xf0\x8c\xa6\x05 \x03(\tR\x06signerB/Z-github.com/cosmos/cosmos-sdk/types/msgserviceb\x06proto3')
  ,
  dependencies=[google_dot_protobuf_dot_descriptor__pb2.DESCRIPTOR,])


SERVICE_FIELD_NUMBER = 11110000
service = _descriptor.FieldDescriptor(
  name='service', full_name='cosmos.msg.v1.service', index=0,
  number=11110000, type=8, cpp_type=7, label=1,
  has_default_value=False, default_value=False,
  message_type=None, enum_type=None, containing_type=None,
  is_extension=True, extension_scope=None,
  serialized_options=None, json_name='service', file=DESCRIPTOR)
SIGNER_FIELD_NUMBER = 11110000
signer = _descriptor.FieldDescriptor(
  name='signer', full_name='cosmos.msg.v1.signer', index=1,
  number=11110000, type=9, cpp_type=9, label=3,
  has_default_value=False, default_value=[],
  message_type=None, enum_type=None, containing_type=None,
  is_extension=True, extension_scope=None,
  serialized_options=None, json_name='signer', file=DESCRIPTOR)

DESCRIPTOR.extensions_by_name['service'] = service
DESCRIPTOR.extensions_by_name['signer'] = signer
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

google_dot_protobuf_dot_descriptor__pb2.ServiceOptions.RegisterExtension(service)
google_dot_protobuf_dot_descriptor__pb2.MessageOptions.RegisterExtension(signer)

DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
