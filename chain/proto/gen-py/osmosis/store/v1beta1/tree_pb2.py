# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: osmosis/store/v1beta1/tree.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from gogoproto import gogo_pb2 as gogoproto_dot_gogo__pb2
from cosmos.base.v1beta1 import coin_pb2 as cosmos_dot_base_dot_v1beta1_dot_coin__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='osmosis/store/v1beta1/tree.proto',
  package='osmosis.store.v1beta1',
  syntax='proto3',
  serialized_options=_b('Z)github.com/osmosis-labs/osmosis/v12/store'),
  serialized_pb=_b('\n osmosis/store/v1beta1/tree.proto\x12\x15osmosis.store.v1beta1\x1a\x14gogoproto/gogo.proto\x1a\x1e\x63osmos/base/v1beta1/coin.proto\"@\n\x04Node\x12\x38\n\x08\x63hildren\x18\x01 \x03(\x0b\x32\x1c.osmosis.store.v1beta1.ChildR\x08\x63hildren\"q\n\x05\x43hild\x12\x14\n\x05index\x18\x01 \x01(\x0cR\x05index\x12R\n\x0c\x61\x63\x63umulation\x18\x02 \x01(\tB.\xc8\xde\x1f\x00\xda\xde\x1f&github.com/cosmos/cosmos-sdk/types.IntR\x0c\x61\x63\x63umulation\"8\n\x04Leaf\x12\x30\n\x04leaf\x18\x01 \x01(\x0b\x32\x1c.osmosis.store.v1beta1.ChildR\x04leafB+Z)github.com/osmosis-labs/osmosis/v12/storeb\x06proto3')
  ,
  dependencies=[gogoproto_dot_gogo__pb2.DESCRIPTOR,cosmos_dot_base_dot_v1beta1_dot_coin__pb2.DESCRIPTOR,])




_NODE = _descriptor.Descriptor(
  name='Node',
  full_name='osmosis.store.v1beta1.Node',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='children', full_name='osmosis.store.v1beta1.Node.children', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='children', file=DESCRIPTOR),
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
  serialized_start=113,
  serialized_end=177,
)


_CHILD = _descriptor.Descriptor(
  name='Child',
  full_name='osmosis.store.v1beta1.Child',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='index', full_name='osmosis.store.v1beta1.Child.index', index=0,
      number=1, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='index', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='accumulation', full_name='osmosis.store.v1beta1.Child.accumulation', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000\332\336\037&github.com/cosmos/cosmos-sdk/types.Int'), json_name='accumulation', file=DESCRIPTOR),
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
  serialized_start=179,
  serialized_end=292,
)


_LEAF = _descriptor.Descriptor(
  name='Leaf',
  full_name='osmosis.store.v1beta1.Leaf',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='leaf', full_name='osmosis.store.v1beta1.Leaf.leaf', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='leaf', file=DESCRIPTOR),
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
  serialized_start=294,
  serialized_end=350,
)

_NODE.fields_by_name['children'].message_type = _CHILD
_LEAF.fields_by_name['leaf'].message_type = _CHILD
DESCRIPTOR.message_types_by_name['Node'] = _NODE
DESCRIPTOR.message_types_by_name['Child'] = _CHILD
DESCRIPTOR.message_types_by_name['Leaf'] = _LEAF
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Node = _reflection.GeneratedProtocolMessageType('Node', (_message.Message,), dict(
  DESCRIPTOR = _NODE,
  __module__ = 'osmosis.store.v1beta1.tree_pb2'
  # @@protoc_insertion_point(class_scope:osmosis.store.v1beta1.Node)
  ))
_sym_db.RegisterMessage(Node)

Child = _reflection.GeneratedProtocolMessageType('Child', (_message.Message,), dict(
  DESCRIPTOR = _CHILD,
  __module__ = 'osmosis.store.v1beta1.tree_pb2'
  # @@protoc_insertion_point(class_scope:osmosis.store.v1beta1.Child)
  ))
_sym_db.RegisterMessage(Child)

Leaf = _reflection.GeneratedProtocolMessageType('Leaf', (_message.Message,), dict(
  DESCRIPTOR = _LEAF,
  __module__ = 'osmosis.store.v1beta1.tree_pb2'
  # @@protoc_insertion_point(class_scope:osmosis.store.v1beta1.Leaf)
  ))
_sym_db.RegisterMessage(Leaf)


DESCRIPTOR._options = None
_CHILD.fields_by_name['accumulation']._options = None
# @@protoc_insertion_point(module_scope)
