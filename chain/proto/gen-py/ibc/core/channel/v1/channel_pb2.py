# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: ibc/core/channel/v1/channel.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf.internal import enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from gogoproto import gogo_pb2 as gogoproto_dot_gogo__pb2
from ibc.core.client.v1 import client_pb2 as ibc_dot_core_dot_client_dot_v1_dot_client__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='ibc/core/channel/v1/channel.proto',
  package='ibc.core.channel.v1',
  syntax='proto3',
  serialized_options=_b('Z9github.com/cosmos/ibc-go/v7/modules/core/04-channel/types'),
  serialized_pb=_b('\n!ibc/core/channel/v1/channel.proto\x12\x13ibc.core.channel.v1\x1a\x14gogoproto/gogo.proto\x1a\x1fibc/core/client/v1/client.proto\"\x89\x02\n\x07\x43hannel\x12\x30\n\x05state\x18\x01 \x01(\x0e\x32\x1a.ibc.core.channel.v1.StateR\x05state\x12\x36\n\x08ordering\x18\x02 \x01(\x0e\x32\x1a.ibc.core.channel.v1.OrderR\x08ordering\x12K\n\x0c\x63ounterparty\x18\x03 \x01(\x0b\x32!.ibc.core.channel.v1.CounterpartyB\x04\xc8\xde\x1f\x00R\x0c\x63ounterparty\x12\'\n\x0f\x63onnection_hops\x18\x04 \x03(\tR\x0e\x63onnectionHops\x12\x18\n\x07version\x18\x05 \x01(\tR\x07version:\x04\x88\xa0\x1f\x00\"\xcb\x02\n\x11IdentifiedChannel\x12\x30\n\x05state\x18\x01 \x01(\x0e\x32\x1a.ibc.core.channel.v1.StateR\x05state\x12\x36\n\x08ordering\x18\x02 \x01(\x0e\x32\x1a.ibc.core.channel.v1.OrderR\x08ordering\x12K\n\x0c\x63ounterparty\x18\x03 \x01(\x0b\x32!.ibc.core.channel.v1.CounterpartyB\x04\xc8\xde\x1f\x00R\x0c\x63ounterparty\x12\'\n\x0f\x63onnection_hops\x18\x04 \x03(\tR\x0e\x63onnectionHops\x12\x18\n\x07version\x18\x05 \x01(\tR\x07version\x12\x17\n\x07port_id\x18\x06 \x01(\tR\x06portId\x12\x1d\n\nchannel_id\x18\x07 \x01(\tR\tchannelId:\x04\x88\xa0\x1f\x00\"L\n\x0c\x43ounterparty\x12\x17\n\x07port_id\x18\x01 \x01(\tR\x06portId\x12\x1d\n\nchannel_id\x18\x02 \x01(\tR\tchannelId:\x04\x88\xa0\x1f\x00\"\xd8\x02\n\x06Packet\x12\x1a\n\x08sequence\x18\x01 \x01(\x04R\x08sequence\x12\x1f\n\x0bsource_port\x18\x02 \x01(\tR\nsourcePort\x12%\n\x0esource_channel\x18\x03 \x01(\tR\rsourceChannel\x12)\n\x10\x64\x65stination_port\x18\x04 \x01(\tR\x0f\x64\x65stinationPort\x12/\n\x13\x64\x65stination_channel\x18\x05 \x01(\tR\x12\x64\x65stinationChannel\x12\x12\n\x04\x64\x61ta\x18\x06 \x01(\x0cR\x04\x64\x61ta\x12G\n\x0etimeout_height\x18\x07 \x01(\x0b\x32\x1a.ibc.core.client.v1.HeightB\x04\xc8\xde\x1f\x00R\rtimeoutHeight\x12+\n\x11timeout_timestamp\x18\x08 \x01(\x04R\x10timeoutTimestamp:\x04\x88\xa0\x1f\x00\"{\n\x0bPacketState\x12\x17\n\x07port_id\x18\x01 \x01(\tR\x06portId\x12\x1d\n\nchannel_id\x18\x02 \x01(\tR\tchannelId\x12\x1a\n\x08sequence\x18\x03 \x01(\x04R\x08sequence\x12\x12\n\x04\x64\x61ta\x18\x04 \x01(\x0cR\x04\x64\x61ta:\x04\x88\xa0\x1f\x00\"d\n\x08PacketId\x12\x17\n\x07port_id\x18\x01 \x01(\tR\x06portId\x12\x1d\n\nchannel_id\x18\x02 \x01(\tR\tchannelId\x12\x1a\n\x08sequence\x18\x03 \x01(\x04R\x08sequence:\x04\x88\xa0\x1f\x00\"O\n\x0f\x41\x63knowledgement\x12\x18\n\x06result\x18\x15 \x01(\x0cH\x00R\x06result\x12\x16\n\x05\x65rror\x18\x16 \x01(\tH\x00R\x05\x65rrorB\n\n\x08response*\xb7\x01\n\x05State\x12\x36\n\x1fSTATE_UNINITIALIZED_UNSPECIFIED\x10\x00\x1a\x11\x8a\x9d \rUNINITIALIZED\x12\x18\n\nSTATE_INIT\x10\x01\x1a\x08\x8a\x9d \x04INIT\x12\x1e\n\rSTATE_TRYOPEN\x10\x02\x1a\x0b\x8a\x9d \x07TRYOPEN\x12\x18\n\nSTATE_OPEN\x10\x03\x1a\x08\x8a\x9d \x04OPEN\x12\x1c\n\x0cSTATE_CLOSED\x10\x04\x1a\n\x8a\x9d \x06\x43LOSED\x1a\x04\x88\xa3\x1e\x00*w\n\x05Order\x12$\n\x16ORDER_NONE_UNSPECIFIED\x10\x00\x1a\x08\x8a\x9d \x04NONE\x12\"\n\x0fORDER_UNORDERED\x10\x01\x1a\r\x8a\x9d \tUNORDERED\x12\x1e\n\rORDER_ORDERED\x10\x02\x1a\x0b\x8a\x9d \x07ORDERED\x1a\x04\x88\xa3\x1e\x00\x42;Z9github.com/cosmos/ibc-go/v7/modules/core/04-channel/typesb\x06proto3')
  ,
  dependencies=[gogoproto_dot_gogo__pb2.DESCRIPTOR,ibc_dot_core_dot_client_dot_v1_dot_client__pb2.DESCRIPTOR,])

_STATE = _descriptor.EnumDescriptor(
  name='State',
  full_name='ibc.core.channel.v1.State',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='STATE_UNINITIALIZED_UNSPECIFIED', index=0, number=0,
      serialized_options=_b('\212\235 \rUNINITIALIZED'),
      type=None),
    _descriptor.EnumValueDescriptor(
      name='STATE_INIT', index=1, number=1,
      serialized_options=_b('\212\235 \004INIT'),
      type=None),
    _descriptor.EnumValueDescriptor(
      name='STATE_TRYOPEN', index=2, number=2,
      serialized_options=_b('\212\235 \007TRYOPEN'),
      type=None),
    _descriptor.EnumValueDescriptor(
      name='STATE_OPEN', index=3, number=3,
      serialized_options=_b('\212\235 \004OPEN'),
      type=None),
    _descriptor.EnumValueDescriptor(
      name='STATE_CLOSED', index=4, number=4,
      serialized_options=_b('\212\235 \006CLOSED'),
      type=None),
  ],
  containing_type=None,
  serialized_options=_b('\210\243\036\000'),
  serialized_start=1449,
  serialized_end=1632,
)
_sym_db.RegisterEnumDescriptor(_STATE)

State = enum_type_wrapper.EnumTypeWrapper(_STATE)
_ORDER = _descriptor.EnumDescriptor(
  name='Order',
  full_name='ibc.core.channel.v1.Order',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='ORDER_NONE_UNSPECIFIED', index=0, number=0,
      serialized_options=_b('\212\235 \004NONE'),
      type=None),
    _descriptor.EnumValueDescriptor(
      name='ORDER_UNORDERED', index=1, number=1,
      serialized_options=_b('\212\235 \tUNORDERED'),
      type=None),
    _descriptor.EnumValueDescriptor(
      name='ORDER_ORDERED', index=2, number=2,
      serialized_options=_b('\212\235 \007ORDERED'),
      type=None),
  ],
  containing_type=None,
  serialized_options=_b('\210\243\036\000'),
  serialized_start=1634,
  serialized_end=1753,
)
_sym_db.RegisterEnumDescriptor(_ORDER)

Order = enum_type_wrapper.EnumTypeWrapper(_ORDER)
STATE_UNINITIALIZED_UNSPECIFIED = 0
STATE_INIT = 1
STATE_TRYOPEN = 2
STATE_OPEN = 3
STATE_CLOSED = 4
ORDER_NONE_UNSPECIFIED = 0
ORDER_UNORDERED = 1
ORDER_ORDERED = 2



_CHANNEL = _descriptor.Descriptor(
  name='Channel',
  full_name='ibc.core.channel.v1.Channel',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='state', full_name='ibc.core.channel.v1.Channel.state', index=0,
      number=1, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='state', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='ordering', full_name='ibc.core.channel.v1.Channel.ordering', index=1,
      number=2, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='ordering', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='counterparty', full_name='ibc.core.channel.v1.Channel.counterparty', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000'), json_name='counterparty', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='connection_hops', full_name='ibc.core.channel.v1.Channel.connection_hops', index=3,
      number=4, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='connectionHops', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='version', full_name='ibc.core.channel.v1.Channel.version', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='version', file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=_b('\210\240\037\000'),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=114,
  serialized_end=379,
)


_IDENTIFIEDCHANNEL = _descriptor.Descriptor(
  name='IdentifiedChannel',
  full_name='ibc.core.channel.v1.IdentifiedChannel',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='state', full_name='ibc.core.channel.v1.IdentifiedChannel.state', index=0,
      number=1, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='state', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='ordering', full_name='ibc.core.channel.v1.IdentifiedChannel.ordering', index=1,
      number=2, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='ordering', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='counterparty', full_name='ibc.core.channel.v1.IdentifiedChannel.counterparty', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000'), json_name='counterparty', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='connection_hops', full_name='ibc.core.channel.v1.IdentifiedChannel.connection_hops', index=3,
      number=4, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='connectionHops', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='version', full_name='ibc.core.channel.v1.IdentifiedChannel.version', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='version', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='port_id', full_name='ibc.core.channel.v1.IdentifiedChannel.port_id', index=5,
      number=6, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='portId', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='channel_id', full_name='ibc.core.channel.v1.IdentifiedChannel.channel_id', index=6,
      number=7, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='channelId', file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=_b('\210\240\037\000'),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=382,
  serialized_end=713,
)


_COUNTERPARTY = _descriptor.Descriptor(
  name='Counterparty',
  full_name='ibc.core.channel.v1.Counterparty',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='port_id', full_name='ibc.core.channel.v1.Counterparty.port_id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='portId', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='channel_id', full_name='ibc.core.channel.v1.Counterparty.channel_id', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='channelId', file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=_b('\210\240\037\000'),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=715,
  serialized_end=791,
)


_PACKET = _descriptor.Descriptor(
  name='Packet',
  full_name='ibc.core.channel.v1.Packet',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='sequence', full_name='ibc.core.channel.v1.Packet.sequence', index=0,
      number=1, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='sequence', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='source_port', full_name='ibc.core.channel.v1.Packet.source_port', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='sourcePort', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='source_channel', full_name='ibc.core.channel.v1.Packet.source_channel', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='sourceChannel', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='destination_port', full_name='ibc.core.channel.v1.Packet.destination_port', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='destinationPort', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='destination_channel', full_name='ibc.core.channel.v1.Packet.destination_channel', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='destinationChannel', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='data', full_name='ibc.core.channel.v1.Packet.data', index=5,
      number=6, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='data', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='timeout_height', full_name='ibc.core.channel.v1.Packet.timeout_height', index=6,
      number=7, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000'), json_name='timeoutHeight', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='timeout_timestamp', full_name='ibc.core.channel.v1.Packet.timeout_timestamp', index=7,
      number=8, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='timeoutTimestamp', file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=_b('\210\240\037\000'),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=794,
  serialized_end=1138,
)


_PACKETSTATE = _descriptor.Descriptor(
  name='PacketState',
  full_name='ibc.core.channel.v1.PacketState',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='port_id', full_name='ibc.core.channel.v1.PacketState.port_id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='portId', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='channel_id', full_name='ibc.core.channel.v1.PacketState.channel_id', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='channelId', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='sequence', full_name='ibc.core.channel.v1.PacketState.sequence', index=2,
      number=3, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='sequence', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='data', full_name='ibc.core.channel.v1.PacketState.data', index=3,
      number=4, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='data', file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=_b('\210\240\037\000'),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1140,
  serialized_end=1263,
)


_PACKETID = _descriptor.Descriptor(
  name='PacketId',
  full_name='ibc.core.channel.v1.PacketId',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='port_id', full_name='ibc.core.channel.v1.PacketId.port_id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='portId', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='channel_id', full_name='ibc.core.channel.v1.PacketId.channel_id', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='channelId', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='sequence', full_name='ibc.core.channel.v1.PacketId.sequence', index=2,
      number=3, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='sequence', file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=_b('\210\240\037\000'),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1265,
  serialized_end=1365,
)


_ACKNOWLEDGEMENT = _descriptor.Descriptor(
  name='Acknowledgement',
  full_name='ibc.core.channel.v1.Acknowledgement',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='result', full_name='ibc.core.channel.v1.Acknowledgement.result', index=0,
      number=21, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='result', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='error', full_name='ibc.core.channel.v1.Acknowledgement.error', index=1,
      number=22, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='error', file=DESCRIPTOR),
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
    _descriptor.OneofDescriptor(
      name='response', full_name='ibc.core.channel.v1.Acknowledgement.response',
      index=0, containing_type=None, fields=[]),
  ],
  serialized_start=1367,
  serialized_end=1446,
)

_CHANNEL.fields_by_name['state'].enum_type = _STATE
_CHANNEL.fields_by_name['ordering'].enum_type = _ORDER
_CHANNEL.fields_by_name['counterparty'].message_type = _COUNTERPARTY
_IDENTIFIEDCHANNEL.fields_by_name['state'].enum_type = _STATE
_IDENTIFIEDCHANNEL.fields_by_name['ordering'].enum_type = _ORDER
_IDENTIFIEDCHANNEL.fields_by_name['counterparty'].message_type = _COUNTERPARTY
_PACKET.fields_by_name['timeout_height'].message_type = ibc_dot_core_dot_client_dot_v1_dot_client__pb2._HEIGHT
_ACKNOWLEDGEMENT.oneofs_by_name['response'].fields.append(
  _ACKNOWLEDGEMENT.fields_by_name['result'])
_ACKNOWLEDGEMENT.fields_by_name['result'].containing_oneof = _ACKNOWLEDGEMENT.oneofs_by_name['response']
_ACKNOWLEDGEMENT.oneofs_by_name['response'].fields.append(
  _ACKNOWLEDGEMENT.fields_by_name['error'])
_ACKNOWLEDGEMENT.fields_by_name['error'].containing_oneof = _ACKNOWLEDGEMENT.oneofs_by_name['response']
DESCRIPTOR.message_types_by_name['Channel'] = _CHANNEL
DESCRIPTOR.message_types_by_name['IdentifiedChannel'] = _IDENTIFIEDCHANNEL
DESCRIPTOR.message_types_by_name['Counterparty'] = _COUNTERPARTY
DESCRIPTOR.message_types_by_name['Packet'] = _PACKET
DESCRIPTOR.message_types_by_name['PacketState'] = _PACKETSTATE
DESCRIPTOR.message_types_by_name['PacketId'] = _PACKETID
DESCRIPTOR.message_types_by_name['Acknowledgement'] = _ACKNOWLEDGEMENT
DESCRIPTOR.enum_types_by_name['State'] = _STATE
DESCRIPTOR.enum_types_by_name['Order'] = _ORDER
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Channel = _reflection.GeneratedProtocolMessageType('Channel', (_message.Message,), dict(
  DESCRIPTOR = _CHANNEL,
  __module__ = 'ibc.core.channel.v1.channel_pb2'
  # @@protoc_insertion_point(class_scope:ibc.core.channel.v1.Channel)
  ))
_sym_db.RegisterMessage(Channel)

IdentifiedChannel = _reflection.GeneratedProtocolMessageType('IdentifiedChannel', (_message.Message,), dict(
  DESCRIPTOR = _IDENTIFIEDCHANNEL,
  __module__ = 'ibc.core.channel.v1.channel_pb2'
  # @@protoc_insertion_point(class_scope:ibc.core.channel.v1.IdentifiedChannel)
  ))
_sym_db.RegisterMessage(IdentifiedChannel)

Counterparty = _reflection.GeneratedProtocolMessageType('Counterparty', (_message.Message,), dict(
  DESCRIPTOR = _COUNTERPARTY,
  __module__ = 'ibc.core.channel.v1.channel_pb2'
  # @@protoc_insertion_point(class_scope:ibc.core.channel.v1.Counterparty)
  ))
_sym_db.RegisterMessage(Counterparty)

Packet = _reflection.GeneratedProtocolMessageType('Packet', (_message.Message,), dict(
  DESCRIPTOR = _PACKET,
  __module__ = 'ibc.core.channel.v1.channel_pb2'
  # @@protoc_insertion_point(class_scope:ibc.core.channel.v1.Packet)
  ))
_sym_db.RegisterMessage(Packet)

PacketState = _reflection.GeneratedProtocolMessageType('PacketState', (_message.Message,), dict(
  DESCRIPTOR = _PACKETSTATE,
  __module__ = 'ibc.core.channel.v1.channel_pb2'
  # @@protoc_insertion_point(class_scope:ibc.core.channel.v1.PacketState)
  ))
_sym_db.RegisterMessage(PacketState)

PacketId = _reflection.GeneratedProtocolMessageType('PacketId', (_message.Message,), dict(
  DESCRIPTOR = _PACKETID,
  __module__ = 'ibc.core.channel.v1.channel_pb2'
  # @@protoc_insertion_point(class_scope:ibc.core.channel.v1.PacketId)
  ))
_sym_db.RegisterMessage(PacketId)

Acknowledgement = _reflection.GeneratedProtocolMessageType('Acknowledgement', (_message.Message,), dict(
  DESCRIPTOR = _ACKNOWLEDGEMENT,
  __module__ = 'ibc.core.channel.v1.channel_pb2'
  # @@protoc_insertion_point(class_scope:ibc.core.channel.v1.Acknowledgement)
  ))
_sym_db.RegisterMessage(Acknowledgement)


DESCRIPTOR._options = None
_STATE._options = None
_STATE.values_by_name["STATE_UNINITIALIZED_UNSPECIFIED"]._options = None
_STATE.values_by_name["STATE_INIT"]._options = None
_STATE.values_by_name["STATE_TRYOPEN"]._options = None
_STATE.values_by_name["STATE_OPEN"]._options = None
_STATE.values_by_name["STATE_CLOSED"]._options = None
_ORDER._options = None
_ORDER.values_by_name["ORDER_NONE_UNSPECIFIED"]._options = None
_ORDER.values_by_name["ORDER_UNORDERED"]._options = None
_ORDER.values_by_name["ORDER_ORDERED"]._options = None
_CHANNEL.fields_by_name['counterparty']._options = None
_CHANNEL._options = None
_IDENTIFIEDCHANNEL.fields_by_name['counterparty']._options = None
_IDENTIFIEDCHANNEL._options = None
_COUNTERPARTY._options = None
_PACKET.fields_by_name['timeout_height']._options = None
_PACKET._options = None
_PACKETSTATE._options = None
_PACKETID._options = None
# @@protoc_insertion_point(module_scope)