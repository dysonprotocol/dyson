# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: ibc/applications/fee/v1/metadata.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='ibc/applications/fee/v1/metadata.proto',
  package='ibc.applications.fee.v1',
  syntax='proto3',
  serialized_options=_b('Z5github.com/cosmos/ibc-go/v7/modules/apps/29-fee/types'),
  serialized_pb=_b('\n&ibc/applications/fee/v1/metadata.proto\x12\x17ibc.applications.fee.v1\"L\n\x08Metadata\x12\x1f\n\x0b\x66\x65\x65_version\x18\x01 \x01(\tR\nfeeVersion\x12\x1f\n\x0b\x61pp_version\x18\x02 \x01(\tR\nappVersionB7Z5github.com/cosmos/ibc-go/v7/modules/apps/29-fee/typesb\x06proto3')
)




_METADATA = _descriptor.Descriptor(
  name='Metadata',
  full_name='ibc.applications.fee.v1.Metadata',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='fee_version', full_name='ibc.applications.fee.v1.Metadata.fee_version', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='feeVersion', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='app_version', full_name='ibc.applications.fee.v1.Metadata.app_version', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='appVersion', file=DESCRIPTOR),
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
  serialized_start=67,
  serialized_end=143,
)

DESCRIPTOR.message_types_by_name['Metadata'] = _METADATA
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Metadata = _reflection.GeneratedProtocolMessageType('Metadata', (_message.Message,), dict(
  DESCRIPTOR = _METADATA,
  __module__ = 'ibc.applications.fee.v1.metadata_pb2'
  # @@protoc_insertion_point(class_scope:ibc.applications.fee.v1.Metadata)
  ))
_sym_db.RegisterMessage(Metadata)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
