# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: ibc/applications/interchain_accounts/controller/v1/tx.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from gogoproto import gogo_pb2 as gogoproto_dot_gogo__pb2
from ibc.applications.interchain_accounts.v1 import packet_pb2 as ibc_dot_applications_dot_interchain__accounts_dot_v1_dot_packet__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='ibc/applications/interchain_accounts/controller/v1/tx.proto',
  package='ibc.applications.interchain_accounts.controller.v1',
  syntax='proto3',
  serialized_options=_b('ZPgithub.com/cosmos/ibc-go/v7/modules/apps/27-interchain-accounts/controller/types'),
  serialized_pb=_b('\n;ibc/applications/interchain_accounts/controller/v1/tx.proto\x12\x32ibc.applications.interchain_accounts.controller.v1\x1a\x14gogoproto/gogo.proto\x1a\x34ibc/applications/interchain_accounts/v1/packet.proto\"}\n\x1cMsgRegisterInterchainAccount\x12\x14\n\x05owner\x18\x01 \x01(\tR\x05owner\x12#\n\rconnection_id\x18\x02 \x01(\tR\x0c\x63onnectionId\x12\x18\n\x07version\x18\x03 \x01(\tR\x07version:\x08\x88\xa0\x1f\x00\xe8\xa0\x1f\x00\"^\n$MsgRegisterInterchainAccountResponse\x12\x1d\n\nchannel_id\x18\x01 \x01(\tR\tchannelId\x12\x17\n\x07port_id\x18\x02 \x01(\tR\x06portId\"\xe8\x01\n\tMsgSendTx\x12\x14\n\x05owner\x18\x01 \x01(\tR\x05owner\x12#\n\rconnection_id\x18\x02 \x01(\tR\x0c\x63onnectionId\x12k\n\x0bpacket_data\x18\x03 \x01(\x0b\x32\x44.ibc.applications.interchain_accounts.v1.InterchainAccountPacketDataB\x04\xc8\xde\x1f\x00R\npacketData\x12)\n\x10relative_timeout\x18\x04 \x01(\x04R\x0frelativeTimeout:\x08\x88\xa0\x1f\x00\xe8\xa0\x1f\x00\"/\n\x11MsgSendTxResponse\x12\x1a\n\x08sequence\x18\x01 \x01(\x04R\x08sequence2\xe0\x02\n\x03Msg\x12\xc7\x01\n\x19RegisterInterchainAccount\x12P.ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount\x1aX.ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccountResponse\x12\x8e\x01\n\x06SendTx\x12=.ibc.applications.interchain_accounts.controller.v1.MsgSendTx\x1a\x45.ibc.applications.interchain_accounts.controller.v1.MsgSendTxResponseBRZPgithub.com/cosmos/ibc-go/v7/modules/apps/27-interchain-accounts/controller/typesb\x06proto3')
  ,
  dependencies=[gogoproto_dot_gogo__pb2.DESCRIPTOR,ibc_dot_applications_dot_interchain__accounts_dot_v1_dot_packet__pb2.DESCRIPTOR,])




_MSGREGISTERINTERCHAINACCOUNT = _descriptor.Descriptor(
  name='MsgRegisterInterchainAccount',
  full_name='ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='owner', full_name='ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount.owner', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='owner', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='connection_id', full_name='ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount.connection_id', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='connectionId', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='version', full_name='ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount.version', index=2,
      number=3, type=9, cpp_type=9, label=1,
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
  serialized_options=_b('\210\240\037\000\350\240\037\000'),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=191,
  serialized_end=316,
)


_MSGREGISTERINTERCHAINACCOUNTRESPONSE = _descriptor.Descriptor(
  name='MsgRegisterInterchainAccountResponse',
  full_name='ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccountResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='channel_id', full_name='ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccountResponse.channel_id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='channelId', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='port_id', full_name='ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccountResponse.port_id', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='portId', file=DESCRIPTOR),
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
  serialized_start=318,
  serialized_end=412,
)


_MSGSENDTX = _descriptor.Descriptor(
  name='MsgSendTx',
  full_name='ibc.applications.interchain_accounts.controller.v1.MsgSendTx',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='owner', full_name='ibc.applications.interchain_accounts.controller.v1.MsgSendTx.owner', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='owner', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='connection_id', full_name='ibc.applications.interchain_accounts.controller.v1.MsgSendTx.connection_id', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='connectionId', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='packet_data', full_name='ibc.applications.interchain_accounts.controller.v1.MsgSendTx.packet_data', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000'), json_name='packetData', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='relative_timeout', full_name='ibc.applications.interchain_accounts.controller.v1.MsgSendTx.relative_timeout', index=3,
      number=4, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='relativeTimeout', file=DESCRIPTOR),
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
  serialized_start=415,
  serialized_end=647,
)


_MSGSENDTXRESPONSE = _descriptor.Descriptor(
  name='MsgSendTxResponse',
  full_name='ibc.applications.interchain_accounts.controller.v1.MsgSendTxResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='sequence', full_name='ibc.applications.interchain_accounts.controller.v1.MsgSendTxResponse.sequence', index=0,
      number=1, type=4, cpp_type=4, label=1,
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
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=649,
  serialized_end=696,
)

_MSGSENDTX.fields_by_name['packet_data'].message_type = ibc_dot_applications_dot_interchain__accounts_dot_v1_dot_packet__pb2._INTERCHAINACCOUNTPACKETDATA
DESCRIPTOR.message_types_by_name['MsgRegisterInterchainAccount'] = _MSGREGISTERINTERCHAINACCOUNT
DESCRIPTOR.message_types_by_name['MsgRegisterInterchainAccountResponse'] = _MSGREGISTERINTERCHAINACCOUNTRESPONSE
DESCRIPTOR.message_types_by_name['MsgSendTx'] = _MSGSENDTX
DESCRIPTOR.message_types_by_name['MsgSendTxResponse'] = _MSGSENDTXRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

MsgRegisterInterchainAccount = _reflection.GeneratedProtocolMessageType('MsgRegisterInterchainAccount', (_message.Message,), dict(
  DESCRIPTOR = _MSGREGISTERINTERCHAINACCOUNT,
  __module__ = 'ibc.applications.interchain_accounts.controller.v1.tx_pb2'
  # @@protoc_insertion_point(class_scope:ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount)
  ))
_sym_db.RegisterMessage(MsgRegisterInterchainAccount)

MsgRegisterInterchainAccountResponse = _reflection.GeneratedProtocolMessageType('MsgRegisterInterchainAccountResponse', (_message.Message,), dict(
  DESCRIPTOR = _MSGREGISTERINTERCHAINACCOUNTRESPONSE,
  __module__ = 'ibc.applications.interchain_accounts.controller.v1.tx_pb2'
  # @@protoc_insertion_point(class_scope:ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccountResponse)
  ))
_sym_db.RegisterMessage(MsgRegisterInterchainAccountResponse)

MsgSendTx = _reflection.GeneratedProtocolMessageType('MsgSendTx', (_message.Message,), dict(
  DESCRIPTOR = _MSGSENDTX,
  __module__ = 'ibc.applications.interchain_accounts.controller.v1.tx_pb2'
  # @@protoc_insertion_point(class_scope:ibc.applications.interchain_accounts.controller.v1.MsgSendTx)
  ))
_sym_db.RegisterMessage(MsgSendTx)

MsgSendTxResponse = _reflection.GeneratedProtocolMessageType('MsgSendTxResponse', (_message.Message,), dict(
  DESCRIPTOR = _MSGSENDTXRESPONSE,
  __module__ = 'ibc.applications.interchain_accounts.controller.v1.tx_pb2'
  # @@protoc_insertion_point(class_scope:ibc.applications.interchain_accounts.controller.v1.MsgSendTxResponse)
  ))
_sym_db.RegisterMessage(MsgSendTxResponse)


DESCRIPTOR._options = None
_MSGREGISTERINTERCHAINACCOUNT._options = None
_MSGSENDTX.fields_by_name['packet_data']._options = None
_MSGSENDTX._options = None

_MSG = _descriptor.ServiceDescriptor(
  name='Msg',
  full_name='ibc.applications.interchain_accounts.controller.v1.Msg',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  serialized_start=699,
  serialized_end=1051,
  methods=[
  _descriptor.MethodDescriptor(
    name='RegisterInterchainAccount',
    full_name='ibc.applications.interchain_accounts.controller.v1.Msg.RegisterInterchainAccount',
    index=0,
    containing_service=None,
    input_type=_MSGREGISTERINTERCHAINACCOUNT,
    output_type=_MSGREGISTERINTERCHAINACCOUNTRESPONSE,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='SendTx',
    full_name='ibc.applications.interchain_accounts.controller.v1.Msg.SendTx',
    index=1,
    containing_service=None,
    input_type=_MSGSENDTX,
    output_type=_MSGSENDTXRESPONSE,
    serialized_options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_MSG)

DESCRIPTOR.services_by_name['Msg'] = _MSG

# @@protoc_insertion_point(module_scope)
