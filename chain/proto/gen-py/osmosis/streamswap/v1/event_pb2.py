# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: osmosis/streamswap/v1/event.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from cosmos.base.v1beta1 import coin_pb2 as cosmos_dot_base_dot_v1beta1_dot_coin__pb2
from cosmos_proto import cosmos_pb2 as cosmos__proto_dot_cosmos__pb2
from gogoproto import gogo_pb2 as gogoproto_dot_gogo__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='osmosis/streamswap/v1/event.proto',
  package='osmosis.streamswap.v1',
  syntax='proto3',
  serialized_options=_b('Z6github.com/osmosis-labs/osmosis/v12/x/streamswap/types\310\341\036\000'),
  serialized_pb=_b('\n!osmosis/streamswap/v1/event.proto\x12\x15osmosis.streamswap.v1\x1a\x1e\x63osmos/base/v1beta1/coin.proto\x1a\x19\x63osmos_proto/cosmos.proto\x1a\x14gogoproto/gogo.proto\"\x94\x01\n\x0f\x45ventCreateSale\x12\x0e\n\x02id\x18\x01 \x01(\x04R\x02id\x12\x18\n\x07\x63reator\x18\x02 \x01(\tR\x07\x63reator\x12\x19\n\x08token_in\x18\x03 \x01(\tR\x07tokenIn\x12<\n\ttoken_out\x18\x04 \x01(\x0b\x32\x19.cosmos.base.v1beta1.CoinB\x04\xc8\xde\x1f\x00R\x08tokenOut\"Y\n\x0e\x45ventSubscribe\x12\x16\n\x06sender\x18\x01 \x01(\tR\x06sender\x12\x17\n\x07sale_id\x18\x02 \x01(\x04R\x06saleId\x12\x16\n\x06\x61mount\x18\x03 \x01(\tR\x06\x61mount\"X\n\rEventWithdraw\x12\x16\n\x06sender\x18\x01 \x01(\tR\x06sender\x12\x17\n\x07sale_id\x18\x02 \x01(\x04R\x06saleId\x12\x16\n\x06\x61mount\x18\x03 \x01(\tR\x06\x61mount\"Z\n\tEventExit\x12\x16\n\x06sender\x18\x01 \x01(\tR\x06sender\x12\x17\n\x07sale_id\x18\x02 \x01(\x04R\x06saleId\x12\x1c\n\tpurchased\x18\x03 \x01(\tR\tpurchased\"D\n\x11\x45ventFinalizeSale\x12\x17\n\x07sale_id\x18\x01 \x01(\x04R\x06saleId\x12\x16\n\x06income\x18\x03 \x01(\tR\x06incomeB<Z6github.com/osmosis-labs/osmosis/v12/x/streamswap/types\xc8\xe1\x1e\x00\x62\x06proto3')
  ,
  dependencies=[cosmos_dot_base_dot_v1beta1_dot_coin__pb2.DESCRIPTOR,cosmos__proto_dot_cosmos__pb2.DESCRIPTOR,gogoproto_dot_gogo__pb2.DESCRIPTOR,])




_EVENTCREATESALE = _descriptor.Descriptor(
  name='EventCreateSale',
  full_name='osmosis.streamswap.v1.EventCreateSale',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='osmosis.streamswap.v1.EventCreateSale.id', index=0,
      number=1, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='id', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='creator', full_name='osmosis.streamswap.v1.EventCreateSale.creator', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='creator', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='token_in', full_name='osmosis.streamswap.v1.EventCreateSale.token_in', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='tokenIn', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='token_out', full_name='osmosis.streamswap.v1.EventCreateSale.token_out', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000'), json_name='tokenOut', file=DESCRIPTOR),
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
  serialized_start=142,
  serialized_end=290,
)


_EVENTSUBSCRIBE = _descriptor.Descriptor(
  name='EventSubscribe',
  full_name='osmosis.streamswap.v1.EventSubscribe',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='sender', full_name='osmosis.streamswap.v1.EventSubscribe.sender', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='sender', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='sale_id', full_name='osmosis.streamswap.v1.EventSubscribe.sale_id', index=1,
      number=2, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='saleId', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='amount', full_name='osmosis.streamswap.v1.EventSubscribe.amount', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='amount', file=DESCRIPTOR),
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
  serialized_start=292,
  serialized_end=381,
)


_EVENTWITHDRAW = _descriptor.Descriptor(
  name='EventWithdraw',
  full_name='osmosis.streamswap.v1.EventWithdraw',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='sender', full_name='osmosis.streamswap.v1.EventWithdraw.sender', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='sender', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='sale_id', full_name='osmosis.streamswap.v1.EventWithdraw.sale_id', index=1,
      number=2, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='saleId', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='amount', full_name='osmosis.streamswap.v1.EventWithdraw.amount', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='amount', file=DESCRIPTOR),
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
  serialized_start=383,
  serialized_end=471,
)


_EVENTEXIT = _descriptor.Descriptor(
  name='EventExit',
  full_name='osmosis.streamswap.v1.EventExit',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='sender', full_name='osmosis.streamswap.v1.EventExit.sender', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='sender', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='sale_id', full_name='osmosis.streamswap.v1.EventExit.sale_id', index=1,
      number=2, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='saleId', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='purchased', full_name='osmosis.streamswap.v1.EventExit.purchased', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='purchased', file=DESCRIPTOR),
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
  serialized_start=473,
  serialized_end=563,
)


_EVENTFINALIZESALE = _descriptor.Descriptor(
  name='EventFinalizeSale',
  full_name='osmosis.streamswap.v1.EventFinalizeSale',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='sale_id', full_name='osmosis.streamswap.v1.EventFinalizeSale.sale_id', index=0,
      number=1, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='saleId', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='income', full_name='osmosis.streamswap.v1.EventFinalizeSale.income', index=1,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='income', file=DESCRIPTOR),
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
  serialized_start=565,
  serialized_end=633,
)

_EVENTCREATESALE.fields_by_name['token_out'].message_type = cosmos_dot_base_dot_v1beta1_dot_coin__pb2._COIN
DESCRIPTOR.message_types_by_name['EventCreateSale'] = _EVENTCREATESALE
DESCRIPTOR.message_types_by_name['EventSubscribe'] = _EVENTSUBSCRIBE
DESCRIPTOR.message_types_by_name['EventWithdraw'] = _EVENTWITHDRAW
DESCRIPTOR.message_types_by_name['EventExit'] = _EVENTEXIT
DESCRIPTOR.message_types_by_name['EventFinalizeSale'] = _EVENTFINALIZESALE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

EventCreateSale = _reflection.GeneratedProtocolMessageType('EventCreateSale', (_message.Message,), dict(
  DESCRIPTOR = _EVENTCREATESALE,
  __module__ = 'osmosis.streamswap.v1.event_pb2'
  # @@protoc_insertion_point(class_scope:osmosis.streamswap.v1.EventCreateSale)
  ))
_sym_db.RegisterMessage(EventCreateSale)

EventSubscribe = _reflection.GeneratedProtocolMessageType('EventSubscribe', (_message.Message,), dict(
  DESCRIPTOR = _EVENTSUBSCRIBE,
  __module__ = 'osmosis.streamswap.v1.event_pb2'
  # @@protoc_insertion_point(class_scope:osmosis.streamswap.v1.EventSubscribe)
  ))
_sym_db.RegisterMessage(EventSubscribe)

EventWithdraw = _reflection.GeneratedProtocolMessageType('EventWithdraw', (_message.Message,), dict(
  DESCRIPTOR = _EVENTWITHDRAW,
  __module__ = 'osmosis.streamswap.v1.event_pb2'
  # @@protoc_insertion_point(class_scope:osmosis.streamswap.v1.EventWithdraw)
  ))
_sym_db.RegisterMessage(EventWithdraw)

EventExit = _reflection.GeneratedProtocolMessageType('EventExit', (_message.Message,), dict(
  DESCRIPTOR = _EVENTEXIT,
  __module__ = 'osmosis.streamswap.v1.event_pb2'
  # @@protoc_insertion_point(class_scope:osmosis.streamswap.v1.EventExit)
  ))
_sym_db.RegisterMessage(EventExit)

EventFinalizeSale = _reflection.GeneratedProtocolMessageType('EventFinalizeSale', (_message.Message,), dict(
  DESCRIPTOR = _EVENTFINALIZESALE,
  __module__ = 'osmosis.streamswap.v1.event_pb2'
  # @@protoc_insertion_point(class_scope:osmosis.streamswap.v1.EventFinalizeSale)
  ))
_sym_db.RegisterMessage(EventFinalizeSale)


DESCRIPTOR._options = None
_EVENTCREATESALE.fields_by_name['token_out']._options = None
# @@protoc_insertion_point(module_scope)