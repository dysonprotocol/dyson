# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: cosmos/group/module/v1/module.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from cosmos.app.v1alpha1 import module_pb2 as cosmos_dot_app_dot_v1alpha1_dot_module__pb2
from gogoproto import gogo_pb2 as gogoproto_dot_gogo__pb2
from google.protobuf import duration_pb2 as google_dot_protobuf_dot_duration__pb2
from amino import amino_pb2 as amino_dot_amino__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='cosmos/group/module/v1/module.proto',
  package='cosmos.group.module.v1',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=_b('\n#cosmos/group/module/v1/module.proto\x12\x16\x63osmos.group.module.v1\x1a cosmos/app/v1alpha1/module.proto\x1a\x14gogoproto/gogo.proto\x1a\x1egoogle/protobuf/duration.proto\x1a\x11\x61mino/amino.proto\"\xbc\x01\n\x06Module\x12Z\n\x14max_execution_period\x18\x01 \x01(\x0b\x32\x19.google.protobuf.DurationB\r\xc8\xde\x1f\x00\x98\xdf\x1f\x01\xa8\xe7\xb0*\x01R\x12maxExecutionPeriod\x12(\n\x10max_metadata_len\x18\x02 \x01(\x04R\x0emaxMetadataLen:,\xba\xc0\x96\xda\x01&\n$github.com/cosmos/cosmos-sdk/x/groupb\x06proto3')
  ,
  dependencies=[cosmos_dot_app_dot_v1alpha1_dot_module__pb2.DESCRIPTOR,gogoproto_dot_gogo__pb2.DESCRIPTOR,google_dot_protobuf_dot_duration__pb2.DESCRIPTOR,amino_dot_amino__pb2.DESCRIPTOR,])




_MODULE = _descriptor.Descriptor(
  name='Module',
  full_name='cosmos.group.module.v1.Module',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='max_execution_period', full_name='cosmos.group.module.v1.Module.max_execution_period', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000\230\337\037\001\250\347\260*\001'), json_name='maxExecutionPeriod', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='max_metadata_len', full_name='cosmos.group.module.v1.Module.max_metadata_len', index=1,
      number=2, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='maxMetadataLen', file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=_b('\272\300\226\332\001&\n$github.com/cosmos/cosmos-sdk/x/group'),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=171,
  serialized_end=359,
)

_MODULE.fields_by_name['max_execution_period'].message_type = google_dot_protobuf_dot_duration__pb2._DURATION
DESCRIPTOR.message_types_by_name['Module'] = _MODULE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Module = _reflection.GeneratedProtocolMessageType('Module', (_message.Message,), dict(
  DESCRIPTOR = _MODULE,
  __module__ = 'cosmos.group.module.v1.module_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.group.module.v1.Module)
  ))
_sym_db.RegisterMessage(Module)


_MODULE.fields_by_name['max_execution_period']._options = None
_MODULE._options = None
# @@protoc_insertion_point(module_scope)
