# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: cosmos/vesting/v1beta1/tx.proto

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
from cosmos_proto import cosmos_pb2 as cosmos__proto_dot_cosmos__pb2
from cosmos.vesting.v1beta1 import vesting_pb2 as cosmos_dot_vesting_dot_v1beta1_dot_vesting__pb2
from cosmos.msg.v1 import msg_pb2 as cosmos_dot_msg_dot_v1_dot_msg__pb2
from amino import amino_pb2 as amino_dot_amino__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='cosmos/vesting/v1beta1/tx.proto',
  package='cosmos.vesting.v1beta1',
  syntax='proto3',
  serialized_options=_b('Z1github.com/cosmos/cosmos-sdk/x/auth/vesting/types'),
  serialized_pb=_b('\n\x1f\x63osmos/vesting/v1beta1/tx.proto\x12\x16\x63osmos.vesting.v1beta1\x1a\x14gogoproto/gogo.proto\x1a\x1e\x63osmos/base/v1beta1/coin.proto\x1a\x19\x63osmos_proto/cosmos.proto\x1a$cosmos/vesting/v1beta1/vesting.proto\x1a\x17\x63osmos/msg/v1/msg.proto\x1a\x11\x61mino/amino.proto\"\xfd\x02\n\x17MsgCreateVestingAccount\x12;\n\x0c\x66rom_address\x18\x01 \x01(\tB\x18\xd2\xb4-\x14\x63osmos.AddressStringR\x0b\x66romAddress\x12\x37\n\nto_address\x18\x02 \x01(\tB\x18\xd2\xb4-\x14\x63osmos.AddressStringR\ttoAddress\x12y\n\x06\x61mount\x18\x03 \x03(\x0b\x32\x19.cosmos.base.v1beta1.CoinBF\xc8\xde\x1f\x00\xaa\xdf\x1f(github.com/cosmos/cosmos-sdk/types.Coins\x9a\xe7\xb0*\x0clegacy_coins\xa8\xe7\xb0*\x01R\x06\x61mount\x12\x19\n\x08\x65nd_time\x18\x04 \x01(\x03R\x07\x65ndTime\x12\x18\n\x07\x64\x65layed\x18\x05 \x01(\x08R\x07\x64\x65layed:<\xe8\xa0\x1f\x01\x82\xe7\xb0*\x0c\x66rom_address\x8a\xe7\xb0*\"cosmos-sdk/MsgCreateVestingAccount\"!\n\x1fMsgCreateVestingAccountResponse\"\xcf\x02\n\x1fMsgCreatePermanentLockedAccount\x12:\n\x0c\x66rom_address\x18\x01 \x01(\tB\x17\xf2\xde\x1f\x13yaml:\"from_address\"R\x0b\x66romAddress\x12\x34\n\nto_address\x18\x02 \x01(\tB\x15\xf2\xde\x1f\x11yaml:\"to_address\"R\ttoAddress\x12y\n\x06\x61mount\x18\x03 \x03(\x0b\x32\x19.cosmos.base.v1beta1.CoinBF\xc8\xde\x1f\x00\xaa\xdf\x1f(github.com/cosmos/cosmos-sdk/types.Coins\x9a\xe7\xb0*\x0clegacy_coins\xa8\xe7\xb0*\x01R\x06\x61mount:?\xe8\xa0\x1f\x01\x82\xe7\xb0*\x0c\x66rom_address\x8a\xe7\xb0*%cosmos-sdk/MsgCreatePermLockedAccount\")\n\'MsgCreatePermanentLockedAccountResponse\"\x97\x02\n\x1fMsgCreatePeriodicVestingAccount\x12!\n\x0c\x66rom_address\x18\x01 \x01(\tR\x0b\x66romAddress\x12\x1d\n\nto_address\x18\x02 \x01(\tR\ttoAddress\x12\x1d\n\nstart_time\x18\x03 \x01(\x03R\tstartTime\x12R\n\x0fvesting_periods\x18\x04 \x03(\x0b\x32\x1e.cosmos.vesting.v1beta1.PeriodB\t\xc8\xde\x1f\x00\xa8\xe7\xb0*\x01R\x0evestingPeriods:?\xe8\xa0\x1f\x00\x82\xe7\xb0*\x0c\x66rom_address\x8a\xe7\xb0*%cosmos-sdk/MsgCreatePeriodVestAccount\")\n\'MsgCreatePeriodicVestingAccountResponse2\xc5\x03\n\x03Msg\x12\x80\x01\n\x14\x43reateVestingAccount\x12/.cosmos.vesting.v1beta1.MsgCreateVestingAccount\x1a\x37.cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse\x12\x98\x01\n\x1c\x43reatePermanentLockedAccount\x12\x37.cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount\x1a?.cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccountResponse\x12\x98\x01\n\x1c\x43reatePeriodicVestingAccount\x12\x37.cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount\x1a?.cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse\x1a\x05\x80\xe7\xb0*\x01\x42\x33Z1github.com/cosmos/cosmos-sdk/x/auth/vesting/typesb\x06proto3')
  ,
  dependencies=[gogoproto_dot_gogo__pb2.DESCRIPTOR,cosmos_dot_base_dot_v1beta1_dot_coin__pb2.DESCRIPTOR,cosmos__proto_dot_cosmos__pb2.DESCRIPTOR,cosmos_dot_vesting_dot_v1beta1_dot_vesting__pb2.DESCRIPTOR,cosmos_dot_msg_dot_v1_dot_msg__pb2.DESCRIPTOR,amino_dot_amino__pb2.DESCRIPTOR,])




_MSGCREATEVESTINGACCOUNT = _descriptor.Descriptor(
  name='MsgCreateVestingAccount',
  full_name='cosmos.vesting.v1beta1.MsgCreateVestingAccount',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='from_address', full_name='cosmos.vesting.v1beta1.MsgCreateVestingAccount.from_address', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\322\264-\024cosmos.AddressString'), json_name='fromAddress', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='to_address', full_name='cosmos.vesting.v1beta1.MsgCreateVestingAccount.to_address', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\322\264-\024cosmos.AddressString'), json_name='toAddress', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='amount', full_name='cosmos.vesting.v1beta1.MsgCreateVestingAccount.amount', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000\252\337\037(github.com/cosmos/cosmos-sdk/types.Coins\232\347\260*\014legacy_coins\250\347\260*\001'), json_name='amount', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='end_time', full_name='cosmos.vesting.v1beta1.MsgCreateVestingAccount.end_time', index=3,
      number=4, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='endTime', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='delayed', full_name='cosmos.vesting.v1beta1.MsgCreateVestingAccount.delayed', index=4,
      number=5, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='delayed', file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=_b('\350\240\037\001\202\347\260*\014from_address\212\347\260*\"cosmos-sdk/MsgCreateVestingAccount'),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=223,
  serialized_end=604,
)


_MSGCREATEVESTINGACCOUNTRESPONSE = _descriptor.Descriptor(
  name='MsgCreateVestingAccountResponse',
  full_name='cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse',
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
  serialized_start=606,
  serialized_end=639,
)


_MSGCREATEPERMANENTLOCKEDACCOUNT = _descriptor.Descriptor(
  name='MsgCreatePermanentLockedAccount',
  full_name='cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='from_address', full_name='cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount.from_address', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\362\336\037\023yaml:\"from_address\"'), json_name='fromAddress', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='to_address', full_name='cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount.to_address', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\362\336\037\021yaml:\"to_address\"'), json_name='toAddress', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='amount', full_name='cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount.amount', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000\252\337\037(github.com/cosmos/cosmos-sdk/types.Coins\232\347\260*\014legacy_coins\250\347\260*\001'), json_name='amount', file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=_b('\350\240\037\001\202\347\260*\014from_address\212\347\260*%cosmos-sdk/MsgCreatePermLockedAccount'),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=642,
  serialized_end=977,
)


_MSGCREATEPERMANENTLOCKEDACCOUNTRESPONSE = _descriptor.Descriptor(
  name='MsgCreatePermanentLockedAccountResponse',
  full_name='cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccountResponse',
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
  serialized_start=979,
  serialized_end=1020,
)


_MSGCREATEPERIODICVESTINGACCOUNT = _descriptor.Descriptor(
  name='MsgCreatePeriodicVestingAccount',
  full_name='cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='from_address', full_name='cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount.from_address', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='fromAddress', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='to_address', full_name='cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount.to_address', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='toAddress', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='start_time', full_name='cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount.start_time', index=2,
      number=3, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='startTime', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='vesting_periods', full_name='cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount.vesting_periods', index=3,
      number=4, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000\250\347\260*\001'), json_name='vestingPeriods', file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=_b('\350\240\037\000\202\347\260*\014from_address\212\347\260*%cosmos-sdk/MsgCreatePeriodVestAccount'),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1023,
  serialized_end=1302,
)


_MSGCREATEPERIODICVESTINGACCOUNTRESPONSE = _descriptor.Descriptor(
  name='MsgCreatePeriodicVestingAccountResponse',
  full_name='cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse',
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
  serialized_start=1304,
  serialized_end=1345,
)

_MSGCREATEVESTINGACCOUNT.fields_by_name['amount'].message_type = cosmos_dot_base_dot_v1beta1_dot_coin__pb2._COIN
_MSGCREATEPERMANENTLOCKEDACCOUNT.fields_by_name['amount'].message_type = cosmos_dot_base_dot_v1beta1_dot_coin__pb2._COIN
_MSGCREATEPERIODICVESTINGACCOUNT.fields_by_name['vesting_periods'].message_type = cosmos_dot_vesting_dot_v1beta1_dot_vesting__pb2._PERIOD
DESCRIPTOR.message_types_by_name['MsgCreateVestingAccount'] = _MSGCREATEVESTINGACCOUNT
DESCRIPTOR.message_types_by_name['MsgCreateVestingAccountResponse'] = _MSGCREATEVESTINGACCOUNTRESPONSE
DESCRIPTOR.message_types_by_name['MsgCreatePermanentLockedAccount'] = _MSGCREATEPERMANENTLOCKEDACCOUNT
DESCRIPTOR.message_types_by_name['MsgCreatePermanentLockedAccountResponse'] = _MSGCREATEPERMANENTLOCKEDACCOUNTRESPONSE
DESCRIPTOR.message_types_by_name['MsgCreatePeriodicVestingAccount'] = _MSGCREATEPERIODICVESTINGACCOUNT
DESCRIPTOR.message_types_by_name['MsgCreatePeriodicVestingAccountResponse'] = _MSGCREATEPERIODICVESTINGACCOUNTRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

MsgCreateVestingAccount = _reflection.GeneratedProtocolMessageType('MsgCreateVestingAccount', (_message.Message,), dict(
  DESCRIPTOR = _MSGCREATEVESTINGACCOUNT,
  __module__ = 'cosmos.vesting.v1beta1.tx_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.vesting.v1beta1.MsgCreateVestingAccount)
  ))
_sym_db.RegisterMessage(MsgCreateVestingAccount)

MsgCreateVestingAccountResponse = _reflection.GeneratedProtocolMessageType('MsgCreateVestingAccountResponse', (_message.Message,), dict(
  DESCRIPTOR = _MSGCREATEVESTINGACCOUNTRESPONSE,
  __module__ = 'cosmos.vesting.v1beta1.tx_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse)
  ))
_sym_db.RegisterMessage(MsgCreateVestingAccountResponse)

MsgCreatePermanentLockedAccount = _reflection.GeneratedProtocolMessageType('MsgCreatePermanentLockedAccount', (_message.Message,), dict(
  DESCRIPTOR = _MSGCREATEPERMANENTLOCKEDACCOUNT,
  __module__ = 'cosmos.vesting.v1beta1.tx_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount)
  ))
_sym_db.RegisterMessage(MsgCreatePermanentLockedAccount)

MsgCreatePermanentLockedAccountResponse = _reflection.GeneratedProtocolMessageType('MsgCreatePermanentLockedAccountResponse', (_message.Message,), dict(
  DESCRIPTOR = _MSGCREATEPERMANENTLOCKEDACCOUNTRESPONSE,
  __module__ = 'cosmos.vesting.v1beta1.tx_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccountResponse)
  ))
_sym_db.RegisterMessage(MsgCreatePermanentLockedAccountResponse)

MsgCreatePeriodicVestingAccount = _reflection.GeneratedProtocolMessageType('MsgCreatePeriodicVestingAccount', (_message.Message,), dict(
  DESCRIPTOR = _MSGCREATEPERIODICVESTINGACCOUNT,
  __module__ = 'cosmos.vesting.v1beta1.tx_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount)
  ))
_sym_db.RegisterMessage(MsgCreatePeriodicVestingAccount)

MsgCreatePeriodicVestingAccountResponse = _reflection.GeneratedProtocolMessageType('MsgCreatePeriodicVestingAccountResponse', (_message.Message,), dict(
  DESCRIPTOR = _MSGCREATEPERIODICVESTINGACCOUNTRESPONSE,
  __module__ = 'cosmos.vesting.v1beta1.tx_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse)
  ))
_sym_db.RegisterMessage(MsgCreatePeriodicVestingAccountResponse)


DESCRIPTOR._options = None
_MSGCREATEVESTINGACCOUNT.fields_by_name['from_address']._options = None
_MSGCREATEVESTINGACCOUNT.fields_by_name['to_address']._options = None
_MSGCREATEVESTINGACCOUNT.fields_by_name['amount']._options = None
_MSGCREATEVESTINGACCOUNT._options = None
_MSGCREATEPERMANENTLOCKEDACCOUNT.fields_by_name['from_address']._options = None
_MSGCREATEPERMANENTLOCKEDACCOUNT.fields_by_name['to_address']._options = None
_MSGCREATEPERMANENTLOCKEDACCOUNT.fields_by_name['amount']._options = None
_MSGCREATEPERMANENTLOCKEDACCOUNT._options = None
_MSGCREATEPERIODICVESTINGACCOUNT.fields_by_name['vesting_periods']._options = None
_MSGCREATEPERIODICVESTINGACCOUNT._options = None

_MSG = _descriptor.ServiceDescriptor(
  name='Msg',
  full_name='cosmos.vesting.v1beta1.Msg',
  file=DESCRIPTOR,
  index=0,
  serialized_options=_b('\200\347\260*\001'),
  serialized_start=1348,
  serialized_end=1801,
  methods=[
  _descriptor.MethodDescriptor(
    name='CreateVestingAccount',
    full_name='cosmos.vesting.v1beta1.Msg.CreateVestingAccount',
    index=0,
    containing_service=None,
    input_type=_MSGCREATEVESTINGACCOUNT,
    output_type=_MSGCREATEVESTINGACCOUNTRESPONSE,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='CreatePermanentLockedAccount',
    full_name='cosmos.vesting.v1beta1.Msg.CreatePermanentLockedAccount',
    index=1,
    containing_service=None,
    input_type=_MSGCREATEPERMANENTLOCKEDACCOUNT,
    output_type=_MSGCREATEPERMANENTLOCKEDACCOUNTRESPONSE,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='CreatePeriodicVestingAccount',
    full_name='cosmos.vesting.v1beta1.Msg.CreatePeriodicVestingAccount',
    index=2,
    containing_service=None,
    input_type=_MSGCREATEPERIODICVESTINGACCOUNT,
    output_type=_MSGCREATEPERIODICVESTINGACCOUNTRESPONSE,
    serialized_options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_MSG)

DESCRIPTOR.services_by_name['Msg'] = _MSG

# @@protoc_insertion_point(module_scope)
