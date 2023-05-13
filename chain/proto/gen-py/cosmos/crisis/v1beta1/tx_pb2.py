# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: cosmos/crisis/v1beta1/tx.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from gogoproto import gogo_pb2 as gogoproto_dot_gogo__pb2
from cosmos_proto import cosmos_pb2 as cosmos__proto_dot_cosmos__pb2
from cosmos.msg.v1 import msg_pb2 as cosmos_dot_msg_dot_v1_dot_msg__pb2
from amino import amino_pb2 as amino_dot_amino__pb2
from cosmos.base.v1beta1 import coin_pb2 as cosmos_dot_base_dot_v1beta1_dot_coin__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='cosmos/crisis/v1beta1/tx.proto',
  package='cosmos.crisis.v1beta1',
  syntax='proto3',
  serialized_options=_b('Z+github.com/cosmos/cosmos-sdk/x/crisis/types'),
  serialized_pb=_b('\n\x1e\x63osmos/crisis/v1beta1/tx.proto\x12\x15\x63osmos.crisis.v1beta1\x1a\x14gogoproto/gogo.proto\x1a\x19\x63osmos_proto/cosmos.proto\x1a\x17\x63osmos/msg/v1/msg.proto\x1a\x11\x61mino/amino.proto\x1a\x1e\x63osmos/base/v1beta1/coin.proto\"\xda\x01\n\x12MsgVerifyInvariant\x12\x30\n\x06sender\x18\x01 \x01(\tB\x18\xd2\xb4-\x14\x63osmos.AddressStringR\x06sender\x12\x32\n\x15invariant_module_name\x18\x02 \x01(\tR\x13invariantModuleName\x12\'\n\x0finvariant_route\x18\x03 \x01(\tR\x0einvariantRoute:5\x88\xa0\x1f\x00\xe8\xa0\x1f\x00\x82\xe7\xb0*\x06sender\x8a\xe7\xb0*\x1d\x63osmos-sdk/MsgVerifyInvariant\"\x1c\n\x1aMsgVerifyInvariantResponse\"\xca\x01\n\x0fMsgUpdateParams\x12\x36\n\tauthority\x18\x01 \x01(\tB\x18\xd2\xb4-\x14\x63osmos.AddressStringR\tauthority\x12G\n\x0c\x63onstant_fee\x18\x02 \x01(\x0b\x32\x19.cosmos.base.v1beta1.CoinB\t\xc8\xde\x1f\x00\xa8\xe7\xb0*\x01R\x0b\x63onstantFee:6\x82\xe7\xb0*\tauthority\x8a\xe7\xb0*#cosmos-sdk/x/crisis/MsgUpdateParams\"\x19\n\x17MsgUpdateParamsResponse2\xe5\x01\n\x03Msg\x12o\n\x0fVerifyInvariant\x12).cosmos.crisis.v1beta1.MsgVerifyInvariant\x1a\x31.cosmos.crisis.v1beta1.MsgVerifyInvariantResponse\x12\x66\n\x0cUpdateParams\x12&.cosmos.crisis.v1beta1.MsgUpdateParams\x1a..cosmos.crisis.v1beta1.MsgUpdateParamsResponse\x1a\x05\x80\xe7\xb0*\x01\x42-Z+github.com/cosmos/cosmos-sdk/x/crisis/typesb\x06proto3')
  ,
  dependencies=[gogoproto_dot_gogo__pb2.DESCRIPTOR,cosmos__proto_dot_cosmos__pb2.DESCRIPTOR,cosmos_dot_msg_dot_v1_dot_msg__pb2.DESCRIPTOR,amino_dot_amino__pb2.DESCRIPTOR,cosmos_dot_base_dot_v1beta1_dot_coin__pb2.DESCRIPTOR,])




_MSGVERIFYINVARIANT = _descriptor.Descriptor(
  name='MsgVerifyInvariant',
  full_name='cosmos.crisis.v1beta1.MsgVerifyInvariant',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='sender', full_name='cosmos.crisis.v1beta1.MsgVerifyInvariant.sender', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\322\264-\024cosmos.AddressString'), json_name='sender', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='invariant_module_name', full_name='cosmos.crisis.v1beta1.MsgVerifyInvariant.invariant_module_name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='invariantModuleName', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='invariant_route', full_name='cosmos.crisis.v1beta1.MsgVerifyInvariant.invariant_route', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='invariantRoute', file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=_b('\210\240\037\000\350\240\037\000\202\347\260*\006sender\212\347\260*\035cosmos-sdk/MsgVerifyInvariant'),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=183,
  serialized_end=401,
)


_MSGVERIFYINVARIANTRESPONSE = _descriptor.Descriptor(
  name='MsgVerifyInvariantResponse',
  full_name='cosmos.crisis.v1beta1.MsgVerifyInvariantResponse',
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
  serialized_start=403,
  serialized_end=431,
)


_MSGUPDATEPARAMS = _descriptor.Descriptor(
  name='MsgUpdateParams',
  full_name='cosmos.crisis.v1beta1.MsgUpdateParams',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='authority', full_name='cosmos.crisis.v1beta1.MsgUpdateParams.authority', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\322\264-\024cosmos.AddressString'), json_name='authority', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='constant_fee', full_name='cosmos.crisis.v1beta1.MsgUpdateParams.constant_fee', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000\250\347\260*\001'), json_name='constantFee', file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=_b('\202\347\260*\tauthority\212\347\260*#cosmos-sdk/x/crisis/MsgUpdateParams'),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=434,
  serialized_end=636,
)


_MSGUPDATEPARAMSRESPONSE = _descriptor.Descriptor(
  name='MsgUpdateParamsResponse',
  full_name='cosmos.crisis.v1beta1.MsgUpdateParamsResponse',
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
  serialized_start=638,
  serialized_end=663,
)

_MSGUPDATEPARAMS.fields_by_name['constant_fee'].message_type = cosmos_dot_base_dot_v1beta1_dot_coin__pb2._COIN
DESCRIPTOR.message_types_by_name['MsgVerifyInvariant'] = _MSGVERIFYINVARIANT
DESCRIPTOR.message_types_by_name['MsgVerifyInvariantResponse'] = _MSGVERIFYINVARIANTRESPONSE
DESCRIPTOR.message_types_by_name['MsgUpdateParams'] = _MSGUPDATEPARAMS
DESCRIPTOR.message_types_by_name['MsgUpdateParamsResponse'] = _MSGUPDATEPARAMSRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

MsgVerifyInvariant = _reflection.GeneratedProtocolMessageType('MsgVerifyInvariant', (_message.Message,), dict(
  DESCRIPTOR = _MSGVERIFYINVARIANT,
  __module__ = 'cosmos.crisis.v1beta1.tx_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.crisis.v1beta1.MsgVerifyInvariant)
  ))
_sym_db.RegisterMessage(MsgVerifyInvariant)

MsgVerifyInvariantResponse = _reflection.GeneratedProtocolMessageType('MsgVerifyInvariantResponse', (_message.Message,), dict(
  DESCRIPTOR = _MSGVERIFYINVARIANTRESPONSE,
  __module__ = 'cosmos.crisis.v1beta1.tx_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.crisis.v1beta1.MsgVerifyInvariantResponse)
  ))
_sym_db.RegisterMessage(MsgVerifyInvariantResponse)

MsgUpdateParams = _reflection.GeneratedProtocolMessageType('MsgUpdateParams', (_message.Message,), dict(
  DESCRIPTOR = _MSGUPDATEPARAMS,
  __module__ = 'cosmos.crisis.v1beta1.tx_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.crisis.v1beta1.MsgUpdateParams)
  ))
_sym_db.RegisterMessage(MsgUpdateParams)

MsgUpdateParamsResponse = _reflection.GeneratedProtocolMessageType('MsgUpdateParamsResponse', (_message.Message,), dict(
  DESCRIPTOR = _MSGUPDATEPARAMSRESPONSE,
  __module__ = 'cosmos.crisis.v1beta1.tx_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.crisis.v1beta1.MsgUpdateParamsResponse)
  ))
_sym_db.RegisterMessage(MsgUpdateParamsResponse)


DESCRIPTOR._options = None
_MSGVERIFYINVARIANT.fields_by_name['sender']._options = None
_MSGVERIFYINVARIANT._options = None
_MSGUPDATEPARAMS.fields_by_name['authority']._options = None
_MSGUPDATEPARAMS.fields_by_name['constant_fee']._options = None
_MSGUPDATEPARAMS._options = None

_MSG = _descriptor.ServiceDescriptor(
  name='Msg',
  full_name='cosmos.crisis.v1beta1.Msg',
  file=DESCRIPTOR,
  index=0,
  serialized_options=_b('\200\347\260*\001'),
  serialized_start=666,
  serialized_end=895,
  methods=[
  _descriptor.MethodDescriptor(
    name='VerifyInvariant',
    full_name='cosmos.crisis.v1beta1.Msg.VerifyInvariant',
    index=0,
    containing_service=None,
    input_type=_MSGVERIFYINVARIANT,
    output_type=_MSGVERIFYINVARIANTRESPONSE,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateParams',
    full_name='cosmos.crisis.v1beta1.Msg.UpdateParams',
    index=1,
    containing_service=None,
    input_type=_MSGUPDATEPARAMS,
    output_type=_MSGUPDATEPARAMSRESPONSE,
    serialized_options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_MSG)

DESCRIPTOR.services_by_name['Msg'] = _MSG

# @@protoc_insertion_point(module_scope)
