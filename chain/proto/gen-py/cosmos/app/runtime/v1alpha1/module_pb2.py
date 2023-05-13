# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: cosmos/app/runtime/v1alpha1/module.proto

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
  name='cosmos/app/runtime/v1alpha1/module.proto',
  package='cosmos.app.runtime.v1alpha1',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=_b('\n(cosmos/app/runtime/v1alpha1/module.proto\x12\x1b\x63osmos.app.runtime.v1alpha1\x1a cosmos/app/v1alpha1/module.proto\"\xdc\x03\n\x06Module\x12\x19\n\x08\x61pp_name\x18\x01 \x01(\tR\x07\x61ppName\x12%\n\x0e\x62\x65gin_blockers\x18\x02 \x03(\tR\rbeginBlockers\x12!\n\x0c\x65nd_blockers\x18\x03 \x03(\tR\x0b\x65ndBlockers\x12!\n\x0cinit_genesis\x18\x04 \x03(\tR\x0binitGenesis\x12%\n\x0e\x65xport_genesis\x18\x05 \x03(\tR\rexportGenesis\x12[\n\x13override_store_keys\x18\x06 \x03(\x0b\x32+.cosmos.app.runtime.v1alpha1.StoreKeyConfigR\x11overrideStoreKeys\x12)\n\x10order_migrations\x18\x07 \x03(\tR\x0forderMigrations\x12\"\n\x0cprecommiters\x18\x08 \x03(\tR\x0cprecommiters\x12\x32\n\x15prepare_check_staters\x18\t \x03(\tR\x13prepareCheckStaters:C\xba\xc0\x96\xda\x01=\n$github.com/cosmos/cosmos-sdk/runtime\x12\x15\n\x13\x63osmos.app.v1alpha1\"S\n\x0eStoreKeyConfig\x12\x1f\n\x0bmodule_name\x18\x01 \x01(\tR\nmoduleName\x12 \n\x0ckv_store_key\x18\x02 \x01(\tR\nkvStoreKeyb\x06proto3')
  ,
  dependencies=[cosmos_dot_app_dot_v1alpha1_dot_module__pb2.DESCRIPTOR,])




_MODULE = _descriptor.Descriptor(
  name='Module',
  full_name='cosmos.app.runtime.v1alpha1.Module',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='app_name', full_name='cosmos.app.runtime.v1alpha1.Module.app_name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='appName', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='begin_blockers', full_name='cosmos.app.runtime.v1alpha1.Module.begin_blockers', index=1,
      number=2, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='beginBlockers', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='end_blockers', full_name='cosmos.app.runtime.v1alpha1.Module.end_blockers', index=2,
      number=3, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='endBlockers', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='init_genesis', full_name='cosmos.app.runtime.v1alpha1.Module.init_genesis', index=3,
      number=4, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='initGenesis', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='export_genesis', full_name='cosmos.app.runtime.v1alpha1.Module.export_genesis', index=4,
      number=5, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='exportGenesis', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='override_store_keys', full_name='cosmos.app.runtime.v1alpha1.Module.override_store_keys', index=5,
      number=6, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='overrideStoreKeys', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='order_migrations', full_name='cosmos.app.runtime.v1alpha1.Module.order_migrations', index=6,
      number=7, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='orderMigrations', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='precommiters', full_name='cosmos.app.runtime.v1alpha1.Module.precommiters', index=7,
      number=8, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='precommiters', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='prepare_check_staters', full_name='cosmos.app.runtime.v1alpha1.Module.prepare_check_staters', index=8,
      number=9, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='prepareCheckStaters', file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=_b('\272\300\226\332\001=\n$github.com/cosmos/cosmos-sdk/runtime\022\025\n\023cosmos.app.v1alpha1'),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=108,
  serialized_end=584,
)


_STOREKEYCONFIG = _descriptor.Descriptor(
  name='StoreKeyConfig',
  full_name='cosmos.app.runtime.v1alpha1.StoreKeyConfig',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='module_name', full_name='cosmos.app.runtime.v1alpha1.StoreKeyConfig.module_name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='moduleName', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='kv_store_key', full_name='cosmos.app.runtime.v1alpha1.StoreKeyConfig.kv_store_key', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='kvStoreKey', file=DESCRIPTOR),
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
  serialized_start=586,
  serialized_end=669,
)

_MODULE.fields_by_name['override_store_keys'].message_type = _STOREKEYCONFIG
DESCRIPTOR.message_types_by_name['Module'] = _MODULE
DESCRIPTOR.message_types_by_name['StoreKeyConfig'] = _STOREKEYCONFIG
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Module = _reflection.GeneratedProtocolMessageType('Module', (_message.Message,), dict(
  DESCRIPTOR = _MODULE,
  __module__ = 'cosmos.app.runtime.v1alpha1.module_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.app.runtime.v1alpha1.Module)
  ))
_sym_db.RegisterMessage(Module)

StoreKeyConfig = _reflection.GeneratedProtocolMessageType('StoreKeyConfig', (_message.Message,), dict(
  DESCRIPTOR = _STOREKEYCONFIG,
  __module__ = 'cosmos.app.runtime.v1alpha1.module_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.app.runtime.v1alpha1.StoreKeyConfig)
  ))
_sym_db.RegisterMessage(StoreKeyConfig)


_MODULE._options = None
# @@protoc_insertion_point(module_scope)