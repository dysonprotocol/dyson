# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: cosmos/evidence/v1beta1/evidence.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from amino import amino_pb2 as amino_dot_amino__pb2
from gogoproto import gogo_pb2 as gogoproto_dot_gogo__pb2
from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2
from cosmos_proto import cosmos_pb2 as cosmos__proto_dot_cosmos__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='cosmos/evidence/v1beta1/evidence.proto',
  package='cosmos.evidence.v1beta1',
  syntax='proto3',
  serialized_options=_b('Z\035cosmossdk.io/x/evidence/types\250\342\036\001'),
  serialized_pb=_b('\n&cosmos/evidence/v1beta1/evidence.proto\x12\x17\x63osmos.evidence.v1beta1\x1a\x11\x61mino/amino.proto\x1a\x14gogoproto/gogo.proto\x1a\x1fgoogle/protobuf/timestamp.proto\x1a\x19\x63osmos_proto/cosmos.proto\"\xe8\x01\n\x0c\x45quivocation\x12\x16\n\x06height\x18\x01 \x01(\x03R\x06height\x12=\n\x04time\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.TimestampB\r\xc8\xde\x1f\x00\x90\xdf\x1f\x01\xa8\xe7\xb0*\x01R\x04time\x12\x14\n\x05power\x18\x03 \x01(\x03R\x05power\x12\x45\n\x11\x63onsensus_address\x18\x04 \x01(\tB\x18\xd2\xb4-\x14\x63osmos.AddressStringR\x10\x63onsensusAddress:$\x88\xa0\x1f\x00\xe8\xa0\x1f\x00\x8a\xe7\xb0*\x17\x63osmos-sdk/EquivocationB#Z\x1d\x63osmossdk.io/x/evidence/types\xa8\xe2\x1e\x01\x62\x06proto3')
  ,
  dependencies=[amino_dot_amino__pb2.DESCRIPTOR,gogoproto_dot_gogo__pb2.DESCRIPTOR,google_dot_protobuf_dot_timestamp__pb2.DESCRIPTOR,cosmos__proto_dot_cosmos__pb2.DESCRIPTOR,])




_EQUIVOCATION = _descriptor.Descriptor(
  name='Equivocation',
  full_name='cosmos.evidence.v1beta1.Equivocation',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='height', full_name='cosmos.evidence.v1beta1.Equivocation.height', index=0,
      number=1, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='height', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='time', full_name='cosmos.evidence.v1beta1.Equivocation.time', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000\220\337\037\001\250\347\260*\001'), json_name='time', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='power', full_name='cosmos.evidence.v1beta1.Equivocation.power', index=2,
      number=3, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='power', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='consensus_address', full_name='cosmos.evidence.v1beta1.Equivocation.consensus_address', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\322\264-\024cosmos.AddressString'), json_name='consensusAddress', file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=_b('\210\240\037\000\350\240\037\000\212\347\260*\027cosmos-sdk/Equivocation'),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=169,
  serialized_end=401,
)

_EQUIVOCATION.fields_by_name['time'].message_type = google_dot_protobuf_dot_timestamp__pb2._TIMESTAMP
DESCRIPTOR.message_types_by_name['Equivocation'] = _EQUIVOCATION
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Equivocation = _reflection.GeneratedProtocolMessageType('Equivocation', (_message.Message,), dict(
  DESCRIPTOR = _EQUIVOCATION,
  __module__ = 'cosmos.evidence.v1beta1.evidence_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.evidence.v1beta1.Equivocation)
  ))
_sym_db.RegisterMessage(Equivocation)


DESCRIPTOR._options = None
_EQUIVOCATION.fields_by_name['time']._options = None
_EQUIVOCATION.fields_by_name['consensus_address']._options = None
_EQUIVOCATION._options = None
# @@protoc_insertion_point(module_scope)