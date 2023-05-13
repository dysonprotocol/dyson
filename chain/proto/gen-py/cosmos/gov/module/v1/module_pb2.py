# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: cosmos/gov/module/v1/module.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from cosmos.app.v1alpha1 import module_pb2 as cosmos_dot_app_dot_v1alpha1_dot_module__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='cosmos/gov/module/v1/module.proto',
  package='cosmos.gov.module.v1',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=_b('\n!cosmos/gov/module/v1/module.proto\x12\x14\x63osmos.gov.module.v1\x1a cosmos/app/v1alpha1/module.proto\"|\n\x06Module\x12(\n\x10max_metadata_len\x18\x01 \x01(\x04R\x0emaxMetadataLen\x12\x1c\n\tauthority\x18\x02 \x01(\tR\tauthority:*\xba\xc0\x96\xda\x01$\n\"github.com/cosmos/cosmos-sdk/x/govb\x06proto3')
  ,
  dependencies=[cosmos_dot_app_dot_v1alpha1_dot_module__pb2.DESCRIPTOR,])




_MODULE = _descriptor.Descriptor(
  name='Module',
  full_name='cosmos.gov.module.v1.Module',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='max_metadata_len', full_name='cosmos.gov.module.v1.Module.max_metadata_len', index=0,
      number=1, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='maxMetadataLen', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='authority', full_name='cosmos.gov.module.v1.Module.authority', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='authority', file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=_b('\272\300\226\332\001$\n\"github.com/cosmos/cosmos-sdk/x/gov'),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=93,
  serialized_end=217,
)

DESCRIPTOR.message_types_by_name['Module'] = _MODULE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Module = _reflection.GeneratedProtocolMessageType('Module', (_message.Message,), dict(
  DESCRIPTOR = _MODULE,
  __module__ = 'cosmos.gov.module.v1.module_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.gov.module.v1.Module)
  ))
_sym_db.RegisterMessage(Module)


_MODULE._options = None
# @@protoc_insertion_point(module_scope)
