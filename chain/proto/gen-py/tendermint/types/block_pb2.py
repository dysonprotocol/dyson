# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: tendermint/types/block.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from gogoproto import gogo_pb2 as gogoproto_dot_gogo__pb2
from tendermint.types import types_pb2 as tendermint_dot_types_dot_types__pb2
from tendermint.types import evidence_pb2 as tendermint_dot_types_dot_evidence__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='tendermint/types/block.proto',
  package='tendermint.types',
  syntax='proto3',
  serialized_options=_b('Z3github.com/cometbft/cometbft/proto/tendermint/types'),
  serialized_pb=_b('\n\x1ctendermint/types/block.proto\x12\x10tendermint.types\x1a\x14gogoproto/gogo.proto\x1a\x1ctendermint/types/types.proto\x1a\x1ftendermint/types/evidence.proto\"\xee\x01\n\x05\x42lock\x12\x36\n\x06header\x18\x01 \x01(\x0b\x32\x18.tendermint.types.HeaderB\x04\xc8\xde\x1f\x00R\x06header\x12\x30\n\x04\x64\x61ta\x18\x02 \x01(\x0b\x32\x16.tendermint.types.DataB\x04\xc8\xde\x1f\x00R\x04\x64\x61ta\x12@\n\x08\x65vidence\x18\x03 \x01(\x0b\x32\x1e.tendermint.types.EvidenceListB\x04\xc8\xde\x1f\x00R\x08\x65vidence\x12\x39\n\x0blast_commit\x18\x04 \x01(\x0b\x32\x18.tendermint.types.CommitR\nlastCommitB5Z3github.com/cometbft/cometbft/proto/tendermint/typesb\x06proto3')
  ,
  dependencies=[gogoproto_dot_gogo__pb2.DESCRIPTOR,tendermint_dot_types_dot_types__pb2.DESCRIPTOR,tendermint_dot_types_dot_evidence__pb2.DESCRIPTOR,])




_BLOCK = _descriptor.Descriptor(
  name='Block',
  full_name='tendermint.types.Block',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='header', full_name='tendermint.types.Block.header', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000'), json_name='header', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='data', full_name='tendermint.types.Block.data', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000'), json_name='data', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='evidence', full_name='tendermint.types.Block.evidence', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000'), json_name='evidence', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='last_commit', full_name='tendermint.types.Block.last_commit', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='lastCommit', file=DESCRIPTOR),
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
  serialized_start=136,
  serialized_end=374,
)

_BLOCK.fields_by_name['header'].message_type = tendermint_dot_types_dot_types__pb2._HEADER
_BLOCK.fields_by_name['data'].message_type = tendermint_dot_types_dot_types__pb2._DATA
_BLOCK.fields_by_name['evidence'].message_type = tendermint_dot_types_dot_evidence__pb2._EVIDENCELIST
_BLOCK.fields_by_name['last_commit'].message_type = tendermint_dot_types_dot_types__pb2._COMMIT
DESCRIPTOR.message_types_by_name['Block'] = _BLOCK
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Block = _reflection.GeneratedProtocolMessageType('Block', (_message.Message,), dict(
  DESCRIPTOR = _BLOCK,
  __module__ = 'tendermint.types.block_pb2'
  # @@protoc_insertion_point(class_scope:tendermint.types.Block)
  ))
_sym_db.RegisterMessage(Block)


DESCRIPTOR._options = None
_BLOCK.fields_by_name['header']._options = None
_BLOCK.fields_by_name['data']._options = None
_BLOCK.fields_by_name['evidence']._options = None
# @@protoc_insertion_point(module_scope)
