# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: cosmos/msg/textual/v1/textual.proto

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
  name='cosmos/msg/textual/v1/textual.proto',
  package='cosmos.msg.textual.v1',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=_b('\n#cosmos/msg/textual/v1/textual.proto\x12\x15\x63osmos.msg.textual.v1\x1a google/protobuf/descriptor.proto:X\n\x16\x65xpert_custom_renderer\x12\x1f.google.protobuf.MessageOptions\x18\xf9\x8c\xa6\x05 \x01(\tR\x14\x65xpertCustomRendererb\x06proto3')
  ,
  dependencies=[google_dot_protobuf_dot_descriptor__pb2.DESCRIPTOR,])


EXPERT_CUSTOM_RENDERER_FIELD_NUMBER = 11110009
expert_custom_renderer = _descriptor.FieldDescriptor(
  name='expert_custom_renderer', full_name='cosmos.msg.textual.v1.expert_custom_renderer', index=0,
  number=11110009, type=9, cpp_type=9, label=1,
  has_default_value=False, default_value=_b("").decode('utf-8'),
  message_type=None, enum_type=None, containing_type=None,
  is_extension=True, extension_scope=None,
  serialized_options=None, json_name='expertCustomRenderer', file=DESCRIPTOR)

DESCRIPTOR.extensions_by_name['expert_custom_renderer'] = expert_custom_renderer
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

google_dot_protobuf_dot_descriptor__pb2.MessageOptions.RegisterExtension(expert_custom_renderer)

# @@protoc_insertion_point(module_scope)
