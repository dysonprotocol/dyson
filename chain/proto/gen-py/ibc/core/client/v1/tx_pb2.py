# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: ibc/core/client/v1/tx.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from gogoproto import gogo_pb2 as gogoproto_dot_gogo__pb2
from google.protobuf import any_pb2 as google_dot_protobuf_dot_any__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='ibc/core/client/v1/tx.proto',
  package='ibc.core.client.v1',
  syntax='proto3',
  serialized_options=_b('Z8github.com/cosmos/ibc-go/v7/modules/core/02-client/types'),
  serialized_pb=_b('\n\x1bibc/core/client/v1/tx.proto\x12\x12ibc.core.client.v1\x1a\x14gogoproto/gogo.proto\x1a\x19google/protobuf/any.proto\"\xab\x01\n\x0fMsgCreateClient\x12\x37\n\x0c\x63lient_state\x18\x01 \x01(\x0b\x32\x14.google.protobuf.AnyR\x0b\x63lientState\x12=\n\x0f\x63onsensus_state\x18\x02 \x01(\x0b\x32\x14.google.protobuf.AnyR\x0e\x63onsensusState\x12\x16\n\x06signer\x18\x03 \x01(\tR\x06signer:\x08\x88\xa0\x1f\x00\xe8\xa0\x1f\x00\"\x19\n\x17MsgCreateClientResponse\"\x8d\x01\n\x0fMsgUpdateClient\x12\x1b\n\tclient_id\x18\x01 \x01(\tR\x08\x63lientId\x12;\n\x0e\x63lient_message\x18\x02 \x01(\x0b\x32\x14.google.protobuf.AnyR\rclientMessage\x12\x16\n\x06signer\x18\x03 \x01(\tR\x06signer:\x08\x88\xa0\x1f\x00\xe8\xa0\x1f\x00\"\x19\n\x17MsgUpdateClientResponse\"\xbe\x02\n\x10MsgUpgradeClient\x12\x1b\n\tclient_id\x18\x01 \x01(\tR\x08\x63lientId\x12\x37\n\x0c\x63lient_state\x18\x02 \x01(\x0b\x32\x14.google.protobuf.AnyR\x0b\x63lientState\x12=\n\x0f\x63onsensus_state\x18\x03 \x01(\x0b\x32\x14.google.protobuf.AnyR\x0e\x63onsensusState\x12\x30\n\x14proof_upgrade_client\x18\x04 \x01(\x0cR\x12proofUpgradeClient\x12\x41\n\x1dproof_upgrade_consensus_state\x18\x05 \x01(\x0cR\x1aproofUpgradeConsensusState\x12\x16\n\x06signer\x18\x06 \x01(\tR\x06signer:\x08\x88\xa0\x1f\x00\xe8\xa0\x1f\x00\"\x1a\n\x18MsgUpgradeClientResponse\"\x9c\x01\n\x15MsgSubmitMisbehaviour\x12\x1f\n\tclient_id\x18\x01 \x01(\tB\x02\x18\x01R\x08\x63lientId\x12<\n\x0cmisbehaviour\x18\x02 \x01(\x0b\x32\x14.google.protobuf.AnyB\x02\x18\x01R\x0cmisbehaviour\x12\x1a\n\x06signer\x18\x03 \x01(\tB\x02\x18\x01R\x06signer:\x08\x88\xa0\x1f\x00\xe8\xa0\x1f\x00\"\x1f\n\x1dMsgSubmitMisbehaviourResponse2\xa2\x03\n\x03Msg\x12`\n\x0c\x43reateClient\x12#.ibc.core.client.v1.MsgCreateClient\x1a+.ibc.core.client.v1.MsgCreateClientResponse\x12`\n\x0cUpdateClient\x12#.ibc.core.client.v1.MsgUpdateClient\x1a+.ibc.core.client.v1.MsgUpdateClientResponse\x12\x63\n\rUpgradeClient\x12$.ibc.core.client.v1.MsgUpgradeClient\x1a,.ibc.core.client.v1.MsgUpgradeClientResponse\x12r\n\x12SubmitMisbehaviour\x12).ibc.core.client.v1.MsgSubmitMisbehaviour\x1a\x31.ibc.core.client.v1.MsgSubmitMisbehaviourResponseB:Z8github.com/cosmos/ibc-go/v7/modules/core/02-client/typesb\x06proto3')
  ,
  dependencies=[gogoproto_dot_gogo__pb2.DESCRIPTOR,google_dot_protobuf_dot_any__pb2.DESCRIPTOR,])




_MSGCREATECLIENT = _descriptor.Descriptor(
  name='MsgCreateClient',
  full_name='ibc.core.client.v1.MsgCreateClient',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='client_state', full_name='ibc.core.client.v1.MsgCreateClient.client_state', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='clientState', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='consensus_state', full_name='ibc.core.client.v1.MsgCreateClient.consensus_state', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='consensusState', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='signer', full_name='ibc.core.client.v1.MsgCreateClient.signer', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='signer', file=DESCRIPTOR),
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
  serialized_start=101,
  serialized_end=272,
)


_MSGCREATECLIENTRESPONSE = _descriptor.Descriptor(
  name='MsgCreateClientResponse',
  full_name='ibc.core.client.v1.MsgCreateClientResponse',
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
  serialized_start=274,
  serialized_end=299,
)


_MSGUPDATECLIENT = _descriptor.Descriptor(
  name='MsgUpdateClient',
  full_name='ibc.core.client.v1.MsgUpdateClient',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='client_id', full_name='ibc.core.client.v1.MsgUpdateClient.client_id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='clientId', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='client_message', full_name='ibc.core.client.v1.MsgUpdateClient.client_message', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='clientMessage', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='signer', full_name='ibc.core.client.v1.MsgUpdateClient.signer', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='signer', file=DESCRIPTOR),
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
  serialized_start=302,
  serialized_end=443,
)


_MSGUPDATECLIENTRESPONSE = _descriptor.Descriptor(
  name='MsgUpdateClientResponse',
  full_name='ibc.core.client.v1.MsgUpdateClientResponse',
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
  serialized_start=445,
  serialized_end=470,
)


_MSGUPGRADECLIENT = _descriptor.Descriptor(
  name='MsgUpgradeClient',
  full_name='ibc.core.client.v1.MsgUpgradeClient',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='client_id', full_name='ibc.core.client.v1.MsgUpgradeClient.client_id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='clientId', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='client_state', full_name='ibc.core.client.v1.MsgUpgradeClient.client_state', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='clientState', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='consensus_state', full_name='ibc.core.client.v1.MsgUpgradeClient.consensus_state', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='consensusState', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='proof_upgrade_client', full_name='ibc.core.client.v1.MsgUpgradeClient.proof_upgrade_client', index=3,
      number=4, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='proofUpgradeClient', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='proof_upgrade_consensus_state', full_name='ibc.core.client.v1.MsgUpgradeClient.proof_upgrade_consensus_state', index=4,
      number=5, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='proofUpgradeConsensusState', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='signer', full_name='ibc.core.client.v1.MsgUpgradeClient.signer', index=5,
      number=6, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='signer', file=DESCRIPTOR),
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
  serialized_start=473,
  serialized_end=791,
)


_MSGUPGRADECLIENTRESPONSE = _descriptor.Descriptor(
  name='MsgUpgradeClientResponse',
  full_name='ibc.core.client.v1.MsgUpgradeClientResponse',
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
  serialized_start=793,
  serialized_end=819,
)


_MSGSUBMITMISBEHAVIOUR = _descriptor.Descriptor(
  name='MsgSubmitMisbehaviour',
  full_name='ibc.core.client.v1.MsgSubmitMisbehaviour',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='client_id', full_name='ibc.core.client.v1.MsgSubmitMisbehaviour.client_id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\030\001'), json_name='clientId', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='misbehaviour', full_name='ibc.core.client.v1.MsgSubmitMisbehaviour.misbehaviour', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\030\001'), json_name='misbehaviour', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='signer', full_name='ibc.core.client.v1.MsgSubmitMisbehaviour.signer', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\030\001'), json_name='signer', file=DESCRIPTOR),
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
  serialized_start=822,
  serialized_end=978,
)


_MSGSUBMITMISBEHAVIOURRESPONSE = _descriptor.Descriptor(
  name='MsgSubmitMisbehaviourResponse',
  full_name='ibc.core.client.v1.MsgSubmitMisbehaviourResponse',
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
  serialized_start=980,
  serialized_end=1011,
)

_MSGCREATECLIENT.fields_by_name['client_state'].message_type = google_dot_protobuf_dot_any__pb2._ANY
_MSGCREATECLIENT.fields_by_name['consensus_state'].message_type = google_dot_protobuf_dot_any__pb2._ANY
_MSGUPDATECLIENT.fields_by_name['client_message'].message_type = google_dot_protobuf_dot_any__pb2._ANY
_MSGUPGRADECLIENT.fields_by_name['client_state'].message_type = google_dot_protobuf_dot_any__pb2._ANY
_MSGUPGRADECLIENT.fields_by_name['consensus_state'].message_type = google_dot_protobuf_dot_any__pb2._ANY
_MSGSUBMITMISBEHAVIOUR.fields_by_name['misbehaviour'].message_type = google_dot_protobuf_dot_any__pb2._ANY
DESCRIPTOR.message_types_by_name['MsgCreateClient'] = _MSGCREATECLIENT
DESCRIPTOR.message_types_by_name['MsgCreateClientResponse'] = _MSGCREATECLIENTRESPONSE
DESCRIPTOR.message_types_by_name['MsgUpdateClient'] = _MSGUPDATECLIENT
DESCRIPTOR.message_types_by_name['MsgUpdateClientResponse'] = _MSGUPDATECLIENTRESPONSE
DESCRIPTOR.message_types_by_name['MsgUpgradeClient'] = _MSGUPGRADECLIENT
DESCRIPTOR.message_types_by_name['MsgUpgradeClientResponse'] = _MSGUPGRADECLIENTRESPONSE
DESCRIPTOR.message_types_by_name['MsgSubmitMisbehaviour'] = _MSGSUBMITMISBEHAVIOUR
DESCRIPTOR.message_types_by_name['MsgSubmitMisbehaviourResponse'] = _MSGSUBMITMISBEHAVIOURRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

MsgCreateClient = _reflection.GeneratedProtocolMessageType('MsgCreateClient', (_message.Message,), dict(
  DESCRIPTOR = _MSGCREATECLIENT,
  __module__ = 'ibc.core.client.v1.tx_pb2'
  # @@protoc_insertion_point(class_scope:ibc.core.client.v1.MsgCreateClient)
  ))
_sym_db.RegisterMessage(MsgCreateClient)

MsgCreateClientResponse = _reflection.GeneratedProtocolMessageType('MsgCreateClientResponse', (_message.Message,), dict(
  DESCRIPTOR = _MSGCREATECLIENTRESPONSE,
  __module__ = 'ibc.core.client.v1.tx_pb2'
  # @@protoc_insertion_point(class_scope:ibc.core.client.v1.MsgCreateClientResponse)
  ))
_sym_db.RegisterMessage(MsgCreateClientResponse)

MsgUpdateClient = _reflection.GeneratedProtocolMessageType('MsgUpdateClient', (_message.Message,), dict(
  DESCRIPTOR = _MSGUPDATECLIENT,
  __module__ = 'ibc.core.client.v1.tx_pb2'
  # @@protoc_insertion_point(class_scope:ibc.core.client.v1.MsgUpdateClient)
  ))
_sym_db.RegisterMessage(MsgUpdateClient)

MsgUpdateClientResponse = _reflection.GeneratedProtocolMessageType('MsgUpdateClientResponse', (_message.Message,), dict(
  DESCRIPTOR = _MSGUPDATECLIENTRESPONSE,
  __module__ = 'ibc.core.client.v1.tx_pb2'
  # @@protoc_insertion_point(class_scope:ibc.core.client.v1.MsgUpdateClientResponse)
  ))
_sym_db.RegisterMessage(MsgUpdateClientResponse)

MsgUpgradeClient = _reflection.GeneratedProtocolMessageType('MsgUpgradeClient', (_message.Message,), dict(
  DESCRIPTOR = _MSGUPGRADECLIENT,
  __module__ = 'ibc.core.client.v1.tx_pb2'
  # @@protoc_insertion_point(class_scope:ibc.core.client.v1.MsgUpgradeClient)
  ))
_sym_db.RegisterMessage(MsgUpgradeClient)

MsgUpgradeClientResponse = _reflection.GeneratedProtocolMessageType('MsgUpgradeClientResponse', (_message.Message,), dict(
  DESCRIPTOR = _MSGUPGRADECLIENTRESPONSE,
  __module__ = 'ibc.core.client.v1.tx_pb2'
  # @@protoc_insertion_point(class_scope:ibc.core.client.v1.MsgUpgradeClientResponse)
  ))
_sym_db.RegisterMessage(MsgUpgradeClientResponse)

MsgSubmitMisbehaviour = _reflection.GeneratedProtocolMessageType('MsgSubmitMisbehaviour', (_message.Message,), dict(
  DESCRIPTOR = _MSGSUBMITMISBEHAVIOUR,
  __module__ = 'ibc.core.client.v1.tx_pb2'
  # @@protoc_insertion_point(class_scope:ibc.core.client.v1.MsgSubmitMisbehaviour)
  ))
_sym_db.RegisterMessage(MsgSubmitMisbehaviour)

MsgSubmitMisbehaviourResponse = _reflection.GeneratedProtocolMessageType('MsgSubmitMisbehaviourResponse', (_message.Message,), dict(
  DESCRIPTOR = _MSGSUBMITMISBEHAVIOURRESPONSE,
  __module__ = 'ibc.core.client.v1.tx_pb2'
  # @@protoc_insertion_point(class_scope:ibc.core.client.v1.MsgSubmitMisbehaviourResponse)
  ))
_sym_db.RegisterMessage(MsgSubmitMisbehaviourResponse)


DESCRIPTOR._options = None
_MSGCREATECLIENT._options = None
_MSGUPDATECLIENT._options = None
_MSGUPGRADECLIENT._options = None
_MSGSUBMITMISBEHAVIOUR.fields_by_name['client_id']._options = None
_MSGSUBMITMISBEHAVIOUR.fields_by_name['misbehaviour']._options = None
_MSGSUBMITMISBEHAVIOUR.fields_by_name['signer']._options = None
_MSGSUBMITMISBEHAVIOUR._options = None

_MSG = _descriptor.ServiceDescriptor(
  name='Msg',
  full_name='ibc.core.client.v1.Msg',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  serialized_start=1014,
  serialized_end=1432,
  methods=[
  _descriptor.MethodDescriptor(
    name='CreateClient',
    full_name='ibc.core.client.v1.Msg.CreateClient',
    index=0,
    containing_service=None,
    input_type=_MSGCREATECLIENT,
    output_type=_MSGCREATECLIENTRESPONSE,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateClient',
    full_name='ibc.core.client.v1.Msg.UpdateClient',
    index=1,
    containing_service=None,
    input_type=_MSGUPDATECLIENT,
    output_type=_MSGUPDATECLIENTRESPONSE,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='UpgradeClient',
    full_name='ibc.core.client.v1.Msg.UpgradeClient',
    index=2,
    containing_service=None,
    input_type=_MSGUPGRADECLIENT,
    output_type=_MSGUPGRADECLIENTRESPONSE,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='SubmitMisbehaviour',
    full_name='ibc.core.client.v1.Msg.SubmitMisbehaviour',
    index=3,
    containing_service=None,
    input_type=_MSGSUBMITMISBEHAVIOUR,
    output_type=_MSGSUBMITMISBEHAVIOURRESPONSE,
    serialized_options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_MSG)

DESCRIPTOR.services_by_name['Msg'] = _MSG

# @@protoc_insertion_point(module_scope)