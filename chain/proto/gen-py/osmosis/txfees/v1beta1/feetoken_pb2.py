# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: osmosis/txfees/v1beta1/feetoken.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from gogoproto import gogo_pb2 as gogoproto_dot_gogo__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='osmosis/txfees/v1beta1/feetoken.proto',
  package='osmosis.txfees.v1beta1',
  syntax='proto3',
  serialized_options=_b('Z2github.com/osmosis-labs/osmosis/v12/x/txfees/types'),
  serialized_pb=_b('\n%osmosis/txfees/v1beta1/feetoken.proto\x12\x16osmosis.txfees.v1beta1\x1a\x14gogoproto/gogo.proto\"d\n\x08\x46\x65\x65Token\x12&\n\x05\x64\x65nom\x18\x01 \x01(\tB\x10\xf2\xde\x1f\x0cyaml:\"denom\"R\x05\x64\x65nom\x12*\n\x06poolID\x18\x02 \x01(\x04\x42\x12\xf2\xde\x1f\x0eyaml:\"pool_id\"R\x06poolID:\x04\xe8\xa0\x1f\x01\x42\x34Z2github.com/osmosis-labs/osmosis/v12/x/txfees/typesb\x06proto3')
  ,
  dependencies=[gogoproto_dot_gogo__pb2.DESCRIPTOR,])




_FEETOKEN = _descriptor.Descriptor(
  name='FeeToken',
  full_name='osmosis.txfees.v1beta1.FeeToken',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='denom', full_name='osmosis.txfees.v1beta1.FeeToken.denom', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\362\336\037\014yaml:\"denom\"'), json_name='denom', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='poolID', full_name='osmosis.txfees.v1beta1.FeeToken.poolID', index=1,
      number=2, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\362\336\037\016yaml:\"pool_id\"'), json_name='poolID', file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=_b('\350\240\037\001'),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=87,
  serialized_end=187,
)

DESCRIPTOR.message_types_by_name['FeeToken'] = _FEETOKEN
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

FeeToken = _reflection.GeneratedProtocolMessageType('FeeToken', (_message.Message,), dict(
  DESCRIPTOR = _FEETOKEN,
  __module__ = 'osmosis.txfees.v1beta1.feetoken_pb2'
  # @@protoc_insertion_point(class_scope:osmosis.txfees.v1beta1.FeeToken)
  ))
_sym_db.RegisterMessage(FeeToken)


DESCRIPTOR._options = None
_FEETOKEN.fields_by_name['denom']._options = None
_FEETOKEN.fields_by_name['poolID']._options = None
_FEETOKEN._options = None
# @@protoc_insertion_point(module_scope)
