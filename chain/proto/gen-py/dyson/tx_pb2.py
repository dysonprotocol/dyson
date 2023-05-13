# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: dyson/tx.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from cosmos.base.v1beta1 import coin_pb2 as cosmos_dot_base_dot_v1beta1_dot_coin__pb2
from dyson import msgrun_pb2 as dyson_dot_msgrun__pb2
from dyson import scheduled_run_pb2 as dyson_dot_scheduled__run__pb2
from dyson import script_pb2 as dyson_dot_script__pb2
from dyson import storage_pb2 as dyson_dot_storage__pb2
from gogoproto import gogo_pb2 as gogoproto_dot_gogo__pb2
from cosmos_proto import cosmos_pb2 as cosmos__proto_dot_cosmos__pb2
from cosmos.msg.v1 import msg_pb2 as cosmos_dot_msg_dot_v1_dot_msg__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='dyson/tx.proto',
  package='dyson',
  syntax='proto3',
  serialized_options=_b('Z\"github.com/org/dyson/x/dyson/types'),
  serialized_pb=_b('\n\x0e\x64yson/tx.proto\x12\x05\x64yson\x1a\x1e\x63osmos/base/v1beta1/coin.proto\x1a\x12\x64yson/msgrun.proto\x1a\x19\x64yson/scheduled_run.proto\x1a\x12\x64yson/script.proto\x1a\x13\x64yson/storage.proto\x1a\x14gogoproto/gogo.proto\x1a\x19\x63osmos_proto/cosmos.proto\x1a\x17\x63osmos/msg/v1/msg.proto\"|\n\x15MsgCreateScheduledRun\x12\x18\n\x07\x63reator\x18\x01 \x01(\tR\x07\x63reator\x12\x16\n\x06height\x18\x02 \x01(\x04R\x06height\x12\x10\n\x03gas\x18\x03 \x01(\x04R\x03gas\x12\x1f\n\x03msg\x18\x04 \x01(\x0b\x32\r.dyson.MsgRunR\x03msg\"5\n\x1dMsgCreateScheduledRunResponse\x12\x14\n\x05index\x18\x01 \x01(\tR\x05index\"h\n\x15MsgUpdateScheduledRun\x12\x18\n\x07\x63reator\x18\x01 \x01(\tR\x07\x63reator\x12\x14\n\x05index\x18\x02 \x01(\tR\x05index\x12\x1f\n\x03msg\x18\x03 \x01(\x0b\x32\r.dyson.MsgRunR\x03msg\"\x1f\n\x1dMsgUpdateScheduledRunResponse\"G\n\x15MsgDeleteScheduledRun\x12\x18\n\x07\x63reator\x18\x01 \x01(\tR\x07\x63reator\x12\x14\n\x05index\x18\x02 \x01(\tR\x05index\"\x1f\n\x1dMsgDeleteScheduledRunResponse\"v\n\x10MsgCreateStorage\x12\x18\n\x07\x63reator\x18\x01 \x01(\tR\x07\x63reator\x12\x14\n\x05index\x18\x02 \x01(\tR\x05index\x12\x12\n\x04\x64\x61ta\x18\x03 \x01(\tR\x04\x64\x61ta\x12\x14\n\x05\x66orce\x18\x04 \x01(\x08R\x05\x66orce:\x08\x88\xa0\x1f\x00\xe8\xa0\x1f\x00\"\x1a\n\x18MsgCreateStorageResponse\"l\n\x10MsgUpdateStorage\x12\x18\n\x07\x63reator\x18\x01 \x01(\tR\x07\x63reator\x12\x14\n\x05index\x18\x02 \x01(\tR\x05index\x12\x12\n\x04\x64\x61ta\x18\x03 \x01(\tR\x04\x64\x61ta\x12\x14\n\x05\x66orce\x18\x04 \x01(\x08R\x05\x66orce\"\x1a\n\x18MsgUpdateStorageResponse\"B\n\x10MsgDeleteStorage\x12\x18\n\x07\x63reator\x18\x01 \x01(\tR\x07\x63reator\x12\x14\n\x05index\x18\x02 \x01(\tR\x05index\"\x1a\n\x18MsgDeleteStorageResponse\"I\n\x19MsgDeployAutonomousScript\x12\x18\n\x07\x63reator\x18\x01 \x01(\tR\x07\x63reator\x12\x12\n\x04\x63ode\x18\x03 \x01(\tR\x04\x63ode\"=\n!MsgDeployAutonomousScriptResponse\x12\x18\n\x07\x61\x64\x64ress\x18\x01 \x01(\tR\x07\x61\x64\x64ress\"?\n\x0fMsgUpdateScript\x12\x18\n\x07\x63reator\x18\x01 \x01(\tR\x07\x63reator\x12\x12\n\x04\x63ode\x18\x03 \x01(\tR\x04\x63ode\"3\n\x17MsgUpdateScriptResponse\x12\x18\n\x07\x61\x64\x64ress\x18\x01 \x01(\tR\x07\x61\x64\x64ress\"+\n\x0fMsgDeleteScript\x12\x18\n\x07\x63reator\x18\x01 \x01(\tR\x07\x63reator\"\x19\n\x17MsgDeleteScriptResponse2\xe3\x04\n\x03Msg\x12X\n\x12\x43reateScheduledRun\x12\x1c.dyson.MsgCreateScheduledRun\x1a$.dyson.MsgCreateScheduledRunResponse\x12I\n\rCreateStorage\x12\x17.dyson.MsgCreateStorage\x1a\x1f.dyson.MsgCreateStorageResponse\x12I\n\rUpdateStorage\x12\x17.dyson.MsgUpdateStorage\x1a\x1f.dyson.MsgUpdateStorageResponse\x12I\n\rDeleteStorage\x12\x17.dyson.MsgDeleteStorage\x1a\x1f.dyson.MsgDeleteStorageResponse\x12\x64\n\x16\x44\x65ployAutonomousScript\x12 .dyson.MsgDeployAutonomousScript\x1a(.dyson.MsgDeployAutonomousScriptResponse\x12\x46\n\x0cUpdateScript\x12\x16.dyson.MsgUpdateScript\x1a\x1e.dyson.MsgUpdateScriptResponse\x12\x46\n\x0c\x44\x65leteScript\x12\x16.dyson.MsgDeleteScript\x1a\x1e.dyson.MsgDeleteScriptResponse\x12+\n\x03Run\x12\r.dyson.MsgRun\x1a\x15.dyson.MsgRunResponseB$Z\"github.com/org/dyson/x/dyson/typesb\x06proto3')
  ,
  dependencies=[cosmos_dot_base_dot_v1beta1_dot_coin__pb2.DESCRIPTOR,dyson_dot_msgrun__pb2.DESCRIPTOR,dyson_dot_scheduled__run__pb2.DESCRIPTOR,dyson_dot_script__pb2.DESCRIPTOR,dyson_dot_storage__pb2.DESCRIPTOR,gogoproto_dot_gogo__pb2.DESCRIPTOR,cosmos__proto_dot_cosmos__pb2.DESCRIPTOR,cosmos_dot_msg_dot_v1_dot_msg__pb2.DESCRIPTOR,])




_MSGCREATESCHEDULEDRUN = _descriptor.Descriptor(
  name='MsgCreateScheduledRun',
  full_name='dyson.MsgCreateScheduledRun',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='creator', full_name='dyson.MsgCreateScheduledRun.creator', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='creator', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='height', full_name='dyson.MsgCreateScheduledRun.height', index=1,
      number=2, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='height', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='gas', full_name='dyson.MsgCreateScheduledRun.gas', index=2,
      number=3, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='gas', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='msg', full_name='dyson.MsgCreateScheduledRun.msg', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='msg', file=DESCRIPTOR),
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
  serialized_start=219,
  serialized_end=343,
)


_MSGCREATESCHEDULEDRUNRESPONSE = _descriptor.Descriptor(
  name='MsgCreateScheduledRunResponse',
  full_name='dyson.MsgCreateScheduledRunResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='index', full_name='dyson.MsgCreateScheduledRunResponse.index', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='index', file=DESCRIPTOR),
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
  serialized_start=345,
  serialized_end=398,
)


_MSGUPDATESCHEDULEDRUN = _descriptor.Descriptor(
  name='MsgUpdateScheduledRun',
  full_name='dyson.MsgUpdateScheduledRun',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='creator', full_name='dyson.MsgUpdateScheduledRun.creator', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='creator', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='index', full_name='dyson.MsgUpdateScheduledRun.index', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='index', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='msg', full_name='dyson.MsgUpdateScheduledRun.msg', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='msg', file=DESCRIPTOR),
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
  serialized_start=400,
  serialized_end=504,
)


_MSGUPDATESCHEDULEDRUNRESPONSE = _descriptor.Descriptor(
  name='MsgUpdateScheduledRunResponse',
  full_name='dyson.MsgUpdateScheduledRunResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
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
  serialized_start=506,
  serialized_end=537,
)


_MSGDELETESCHEDULEDRUN = _descriptor.Descriptor(
  name='MsgDeleteScheduledRun',
  full_name='dyson.MsgDeleteScheduledRun',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='creator', full_name='dyson.MsgDeleteScheduledRun.creator', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='creator', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='index', full_name='dyson.MsgDeleteScheduledRun.index', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='index', file=DESCRIPTOR),
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
  serialized_start=539,
  serialized_end=610,
)


_MSGDELETESCHEDULEDRUNRESPONSE = _descriptor.Descriptor(
  name='MsgDeleteScheduledRunResponse',
  full_name='dyson.MsgDeleteScheduledRunResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
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
  serialized_start=612,
  serialized_end=643,
)


_MSGCREATESTORAGE = _descriptor.Descriptor(
  name='MsgCreateStorage',
  full_name='dyson.MsgCreateStorage',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='creator', full_name='dyson.MsgCreateStorage.creator', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='creator', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='index', full_name='dyson.MsgCreateStorage.index', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='index', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='data', full_name='dyson.MsgCreateStorage.data', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='data', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='force', full_name='dyson.MsgCreateStorage.force', index=3,
      number=4, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='force', file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=_b('\210\240\037\000\350\240\037\000'),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=645,
  serialized_end=763,
)


_MSGCREATESTORAGERESPONSE = _descriptor.Descriptor(
  name='MsgCreateStorageResponse',
  full_name='dyson.MsgCreateStorageResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
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
  serialized_start=765,
  serialized_end=791,
)


_MSGUPDATESTORAGE = _descriptor.Descriptor(
  name='MsgUpdateStorage',
  full_name='dyson.MsgUpdateStorage',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='creator', full_name='dyson.MsgUpdateStorage.creator', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='creator', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='index', full_name='dyson.MsgUpdateStorage.index', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='index', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='data', full_name='dyson.MsgUpdateStorage.data', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='data', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='force', full_name='dyson.MsgUpdateStorage.force', index=3,
      number=4, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='force', file=DESCRIPTOR),
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
  serialized_start=793,
  serialized_end=901,
)


_MSGUPDATESTORAGERESPONSE = _descriptor.Descriptor(
  name='MsgUpdateStorageResponse',
  full_name='dyson.MsgUpdateStorageResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
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
  serialized_start=903,
  serialized_end=929,
)


_MSGDELETESTORAGE = _descriptor.Descriptor(
  name='MsgDeleteStorage',
  full_name='dyson.MsgDeleteStorage',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='creator', full_name='dyson.MsgDeleteStorage.creator', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='creator', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='index', full_name='dyson.MsgDeleteStorage.index', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='index', file=DESCRIPTOR),
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
  serialized_start=931,
  serialized_end=997,
)


_MSGDELETESTORAGERESPONSE = _descriptor.Descriptor(
  name='MsgDeleteStorageResponse',
  full_name='dyson.MsgDeleteStorageResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
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
  serialized_start=999,
  serialized_end=1025,
)


_MSGDEPLOYAUTONOMOUSSCRIPT = _descriptor.Descriptor(
  name='MsgDeployAutonomousScript',
  full_name='dyson.MsgDeployAutonomousScript',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='creator', full_name='dyson.MsgDeployAutonomousScript.creator', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='creator', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='code', full_name='dyson.MsgDeployAutonomousScript.code', index=1,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='code', file=DESCRIPTOR),
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
  serialized_start=1027,
  serialized_end=1100,
)


_MSGDEPLOYAUTONOMOUSSCRIPTRESPONSE = _descriptor.Descriptor(
  name='MsgDeployAutonomousScriptResponse',
  full_name='dyson.MsgDeployAutonomousScriptResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='address', full_name='dyson.MsgDeployAutonomousScriptResponse.address', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='address', file=DESCRIPTOR),
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
  serialized_start=1102,
  serialized_end=1163,
)


_MSGUPDATESCRIPT = _descriptor.Descriptor(
  name='MsgUpdateScript',
  full_name='dyson.MsgUpdateScript',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='creator', full_name='dyson.MsgUpdateScript.creator', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='creator', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='code', full_name='dyson.MsgUpdateScript.code', index=1,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='code', file=DESCRIPTOR),
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
  serialized_start=1165,
  serialized_end=1228,
)


_MSGUPDATESCRIPTRESPONSE = _descriptor.Descriptor(
  name='MsgUpdateScriptResponse',
  full_name='dyson.MsgUpdateScriptResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='address', full_name='dyson.MsgUpdateScriptResponse.address', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='address', file=DESCRIPTOR),
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
  serialized_start=1230,
  serialized_end=1281,
)


_MSGDELETESCRIPT = _descriptor.Descriptor(
  name='MsgDeleteScript',
  full_name='dyson.MsgDeleteScript',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='creator', full_name='dyson.MsgDeleteScript.creator', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='creator', file=DESCRIPTOR),
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
  serialized_start=1283,
  serialized_end=1326,
)


_MSGDELETESCRIPTRESPONSE = _descriptor.Descriptor(
  name='MsgDeleteScriptResponse',
  full_name='dyson.MsgDeleteScriptResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
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
  serialized_start=1328,
  serialized_end=1353,
)

_MSGCREATESCHEDULEDRUN.fields_by_name['msg'].message_type = dyson_dot_msgrun__pb2._MSGRUN
_MSGUPDATESCHEDULEDRUN.fields_by_name['msg'].message_type = dyson_dot_msgrun__pb2._MSGRUN
DESCRIPTOR.message_types_by_name['MsgCreateScheduledRun'] = _MSGCREATESCHEDULEDRUN
DESCRIPTOR.message_types_by_name['MsgCreateScheduledRunResponse'] = _MSGCREATESCHEDULEDRUNRESPONSE
DESCRIPTOR.message_types_by_name['MsgUpdateScheduledRun'] = _MSGUPDATESCHEDULEDRUN
DESCRIPTOR.message_types_by_name['MsgUpdateScheduledRunResponse'] = _MSGUPDATESCHEDULEDRUNRESPONSE
DESCRIPTOR.message_types_by_name['MsgDeleteScheduledRun'] = _MSGDELETESCHEDULEDRUN
DESCRIPTOR.message_types_by_name['MsgDeleteScheduledRunResponse'] = _MSGDELETESCHEDULEDRUNRESPONSE
DESCRIPTOR.message_types_by_name['MsgCreateStorage'] = _MSGCREATESTORAGE
DESCRIPTOR.message_types_by_name['MsgCreateStorageResponse'] = _MSGCREATESTORAGERESPONSE
DESCRIPTOR.message_types_by_name['MsgUpdateStorage'] = _MSGUPDATESTORAGE
DESCRIPTOR.message_types_by_name['MsgUpdateStorageResponse'] = _MSGUPDATESTORAGERESPONSE
DESCRIPTOR.message_types_by_name['MsgDeleteStorage'] = _MSGDELETESTORAGE
DESCRIPTOR.message_types_by_name['MsgDeleteStorageResponse'] = _MSGDELETESTORAGERESPONSE
DESCRIPTOR.message_types_by_name['MsgDeployAutonomousScript'] = _MSGDEPLOYAUTONOMOUSSCRIPT
DESCRIPTOR.message_types_by_name['MsgDeployAutonomousScriptResponse'] = _MSGDEPLOYAUTONOMOUSSCRIPTRESPONSE
DESCRIPTOR.message_types_by_name['MsgUpdateScript'] = _MSGUPDATESCRIPT
DESCRIPTOR.message_types_by_name['MsgUpdateScriptResponse'] = _MSGUPDATESCRIPTRESPONSE
DESCRIPTOR.message_types_by_name['MsgDeleteScript'] = _MSGDELETESCRIPT
DESCRIPTOR.message_types_by_name['MsgDeleteScriptResponse'] = _MSGDELETESCRIPTRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

MsgCreateScheduledRun = _reflection.GeneratedProtocolMessageType('MsgCreateScheduledRun', (_message.Message,), dict(
  DESCRIPTOR = _MSGCREATESCHEDULEDRUN,
  __module__ = 'dyson.tx_pb2'
  # @@protoc_insertion_point(class_scope:dyson.MsgCreateScheduledRun)
  ))
_sym_db.RegisterMessage(MsgCreateScheduledRun)

MsgCreateScheduledRunResponse = _reflection.GeneratedProtocolMessageType('MsgCreateScheduledRunResponse', (_message.Message,), dict(
  DESCRIPTOR = _MSGCREATESCHEDULEDRUNRESPONSE,
  __module__ = 'dyson.tx_pb2'
  # @@protoc_insertion_point(class_scope:dyson.MsgCreateScheduledRunResponse)
  ))
_sym_db.RegisterMessage(MsgCreateScheduledRunResponse)

MsgUpdateScheduledRun = _reflection.GeneratedProtocolMessageType('MsgUpdateScheduledRun', (_message.Message,), dict(
  DESCRIPTOR = _MSGUPDATESCHEDULEDRUN,
  __module__ = 'dyson.tx_pb2'
  # @@protoc_insertion_point(class_scope:dyson.MsgUpdateScheduledRun)
  ))
_sym_db.RegisterMessage(MsgUpdateScheduledRun)

MsgUpdateScheduledRunResponse = _reflection.GeneratedProtocolMessageType('MsgUpdateScheduledRunResponse', (_message.Message,), dict(
  DESCRIPTOR = _MSGUPDATESCHEDULEDRUNRESPONSE,
  __module__ = 'dyson.tx_pb2'
  # @@protoc_insertion_point(class_scope:dyson.MsgUpdateScheduledRunResponse)
  ))
_sym_db.RegisterMessage(MsgUpdateScheduledRunResponse)

MsgDeleteScheduledRun = _reflection.GeneratedProtocolMessageType('MsgDeleteScheduledRun', (_message.Message,), dict(
  DESCRIPTOR = _MSGDELETESCHEDULEDRUN,
  __module__ = 'dyson.tx_pb2'
  # @@protoc_insertion_point(class_scope:dyson.MsgDeleteScheduledRun)
  ))
_sym_db.RegisterMessage(MsgDeleteScheduledRun)

MsgDeleteScheduledRunResponse = _reflection.GeneratedProtocolMessageType('MsgDeleteScheduledRunResponse', (_message.Message,), dict(
  DESCRIPTOR = _MSGDELETESCHEDULEDRUNRESPONSE,
  __module__ = 'dyson.tx_pb2'
  # @@protoc_insertion_point(class_scope:dyson.MsgDeleteScheduledRunResponse)
  ))
_sym_db.RegisterMessage(MsgDeleteScheduledRunResponse)

MsgCreateStorage = _reflection.GeneratedProtocolMessageType('MsgCreateStorage', (_message.Message,), dict(
  DESCRIPTOR = _MSGCREATESTORAGE,
  __module__ = 'dyson.tx_pb2'
  # @@protoc_insertion_point(class_scope:dyson.MsgCreateStorage)
  ))
_sym_db.RegisterMessage(MsgCreateStorage)

MsgCreateStorageResponse = _reflection.GeneratedProtocolMessageType('MsgCreateStorageResponse', (_message.Message,), dict(
  DESCRIPTOR = _MSGCREATESTORAGERESPONSE,
  __module__ = 'dyson.tx_pb2'
  # @@protoc_insertion_point(class_scope:dyson.MsgCreateStorageResponse)
  ))
_sym_db.RegisterMessage(MsgCreateStorageResponse)

MsgUpdateStorage = _reflection.GeneratedProtocolMessageType('MsgUpdateStorage', (_message.Message,), dict(
  DESCRIPTOR = _MSGUPDATESTORAGE,
  __module__ = 'dyson.tx_pb2'
  # @@protoc_insertion_point(class_scope:dyson.MsgUpdateStorage)
  ))
_sym_db.RegisterMessage(MsgUpdateStorage)

MsgUpdateStorageResponse = _reflection.GeneratedProtocolMessageType('MsgUpdateStorageResponse', (_message.Message,), dict(
  DESCRIPTOR = _MSGUPDATESTORAGERESPONSE,
  __module__ = 'dyson.tx_pb2'
  # @@protoc_insertion_point(class_scope:dyson.MsgUpdateStorageResponse)
  ))
_sym_db.RegisterMessage(MsgUpdateStorageResponse)

MsgDeleteStorage = _reflection.GeneratedProtocolMessageType('MsgDeleteStorage', (_message.Message,), dict(
  DESCRIPTOR = _MSGDELETESTORAGE,
  __module__ = 'dyson.tx_pb2'
  # @@protoc_insertion_point(class_scope:dyson.MsgDeleteStorage)
  ))
_sym_db.RegisterMessage(MsgDeleteStorage)

MsgDeleteStorageResponse = _reflection.GeneratedProtocolMessageType('MsgDeleteStorageResponse', (_message.Message,), dict(
  DESCRIPTOR = _MSGDELETESTORAGERESPONSE,
  __module__ = 'dyson.tx_pb2'
  # @@protoc_insertion_point(class_scope:dyson.MsgDeleteStorageResponse)
  ))
_sym_db.RegisterMessage(MsgDeleteStorageResponse)

MsgDeployAutonomousScript = _reflection.GeneratedProtocolMessageType('MsgDeployAutonomousScript', (_message.Message,), dict(
  DESCRIPTOR = _MSGDEPLOYAUTONOMOUSSCRIPT,
  __module__ = 'dyson.tx_pb2'
  # @@protoc_insertion_point(class_scope:dyson.MsgDeployAutonomousScript)
  ))
_sym_db.RegisterMessage(MsgDeployAutonomousScript)

MsgDeployAutonomousScriptResponse = _reflection.GeneratedProtocolMessageType('MsgDeployAutonomousScriptResponse', (_message.Message,), dict(
  DESCRIPTOR = _MSGDEPLOYAUTONOMOUSSCRIPTRESPONSE,
  __module__ = 'dyson.tx_pb2'
  # @@protoc_insertion_point(class_scope:dyson.MsgDeployAutonomousScriptResponse)
  ))
_sym_db.RegisterMessage(MsgDeployAutonomousScriptResponse)

MsgUpdateScript = _reflection.GeneratedProtocolMessageType('MsgUpdateScript', (_message.Message,), dict(
  DESCRIPTOR = _MSGUPDATESCRIPT,
  __module__ = 'dyson.tx_pb2'
  # @@protoc_insertion_point(class_scope:dyson.MsgUpdateScript)
  ))
_sym_db.RegisterMessage(MsgUpdateScript)

MsgUpdateScriptResponse = _reflection.GeneratedProtocolMessageType('MsgUpdateScriptResponse', (_message.Message,), dict(
  DESCRIPTOR = _MSGUPDATESCRIPTRESPONSE,
  __module__ = 'dyson.tx_pb2'
  # @@protoc_insertion_point(class_scope:dyson.MsgUpdateScriptResponse)
  ))
_sym_db.RegisterMessage(MsgUpdateScriptResponse)

MsgDeleteScript = _reflection.GeneratedProtocolMessageType('MsgDeleteScript', (_message.Message,), dict(
  DESCRIPTOR = _MSGDELETESCRIPT,
  __module__ = 'dyson.tx_pb2'
  # @@protoc_insertion_point(class_scope:dyson.MsgDeleteScript)
  ))
_sym_db.RegisterMessage(MsgDeleteScript)

MsgDeleteScriptResponse = _reflection.GeneratedProtocolMessageType('MsgDeleteScriptResponse', (_message.Message,), dict(
  DESCRIPTOR = _MSGDELETESCRIPTRESPONSE,
  __module__ = 'dyson.tx_pb2'
  # @@protoc_insertion_point(class_scope:dyson.MsgDeleteScriptResponse)
  ))
_sym_db.RegisterMessage(MsgDeleteScriptResponse)


DESCRIPTOR._options = None
_MSGCREATESTORAGE._options = None

_MSG = _descriptor.ServiceDescriptor(
  name='Msg',
  full_name='dyson.Msg',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  serialized_start=1356,
  serialized_end=1967,
  methods=[
  _descriptor.MethodDescriptor(
    name='CreateScheduledRun',
    full_name='dyson.Msg.CreateScheduledRun',
    index=0,
    containing_service=None,
    input_type=_MSGCREATESCHEDULEDRUN,
    output_type=_MSGCREATESCHEDULEDRUNRESPONSE,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='CreateStorage',
    full_name='dyson.Msg.CreateStorage',
    index=1,
    containing_service=None,
    input_type=_MSGCREATESTORAGE,
    output_type=_MSGCREATESTORAGERESPONSE,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateStorage',
    full_name='dyson.Msg.UpdateStorage',
    index=2,
    containing_service=None,
    input_type=_MSGUPDATESTORAGE,
    output_type=_MSGUPDATESTORAGERESPONSE,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteStorage',
    full_name='dyson.Msg.DeleteStorage',
    index=3,
    containing_service=None,
    input_type=_MSGDELETESTORAGE,
    output_type=_MSGDELETESTORAGERESPONSE,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='DeployAutonomousScript',
    full_name='dyson.Msg.DeployAutonomousScript',
    index=4,
    containing_service=None,
    input_type=_MSGDEPLOYAUTONOMOUSSCRIPT,
    output_type=_MSGDEPLOYAUTONOMOUSSCRIPTRESPONSE,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateScript',
    full_name='dyson.Msg.UpdateScript',
    index=5,
    containing_service=None,
    input_type=_MSGUPDATESCRIPT,
    output_type=_MSGUPDATESCRIPTRESPONSE,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteScript',
    full_name='dyson.Msg.DeleteScript',
    index=6,
    containing_service=None,
    input_type=_MSGDELETESCRIPT,
    output_type=_MSGDELETESCRIPTRESPONSE,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='Run',
    full_name='dyson.Msg.Run',
    index=7,
    containing_service=None,
    input_type=dyson_dot_msgrun__pb2._MSGRUN,
    output_type=dyson_dot_msgrun__pb2._MSGRUNRESPONSE,
    serialized_options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_MSG)

DESCRIPTOR.services_by_name['Msg'] = _MSG

# @@protoc_insertion_point(module_scope)