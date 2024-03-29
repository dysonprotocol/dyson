# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: cosmos/crypto/secp256k1/keys.proto

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


DESCRIPTOR = _descriptor.FileDescriptor(
  name='cosmos/crypto/secp256k1/keys.proto',
  package='cosmos.crypto.secp256k1',
  syntax='proto3',
  serialized_options=_b('Z2github.com/cosmos/cosmos-sdk/crypto/keys/secp256k1'),
  serialized_pb=_b('\n\"cosmos/crypto/secp256k1/keys.proto\x12\x17\x63osmos.crypto.secp256k1\x1a\x11\x61mino/amino.proto\x1a\x14gogoproto/gogo.proto\"M\n\x06PubKey\x12\x10\n\x03key\x18\x01 \x01(\x0cR\x03key:1\x98\xa0\x1f\x00\x8a\xe7\xb0*\x1atendermint/PubKeySecp256k1\x92\xe7\xb0*\tkey_field\"K\n\x07PrivKey\x12\x10\n\x03key\x18\x01 \x01(\x0cR\x03key:.\x8a\xe7\xb0*\x1btendermint/PrivKeySecp256k1\x92\xe7\xb0*\tkey_fieldB4Z2github.com/cosmos/cosmos-sdk/crypto/keys/secp256k1b\x06proto3')
  ,
  dependencies=[amino_dot_amino__pb2.DESCRIPTOR,gogoproto_dot_gogo__pb2.DESCRIPTOR,])




_PUBKEY = _descriptor.Descriptor(
  name='PubKey',
  full_name='cosmos.crypto.secp256k1.PubKey',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='cosmos.crypto.secp256k1.PubKey.key', index=0,
      number=1, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='key', file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=_b('\230\240\037\000\212\347\260*\032tendermint/PubKeySecp256k1\222\347\260*\tkey_field'),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=104,
  serialized_end=181,
)


_PRIVKEY = _descriptor.Descriptor(
  name='PrivKey',
  full_name='cosmos.crypto.secp256k1.PrivKey',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='cosmos.crypto.secp256k1.PrivKey.key', index=0,
      number=1, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='key', file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=_b('\212\347\260*\033tendermint/PrivKeySecp256k1\222\347\260*\tkey_field'),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=183,
  serialized_end=258,
)

DESCRIPTOR.message_types_by_name['PubKey'] = _PUBKEY
DESCRIPTOR.message_types_by_name['PrivKey'] = _PRIVKEY
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

PubKey = _reflection.GeneratedProtocolMessageType('PubKey', (_message.Message,), dict(
  DESCRIPTOR = _PUBKEY,
  __module__ = 'cosmos.crypto.secp256k1.keys_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.crypto.secp256k1.PubKey)
  ))
_sym_db.RegisterMessage(PubKey)

PrivKey = _reflection.GeneratedProtocolMessageType('PrivKey', (_message.Message,), dict(
  DESCRIPTOR = _PRIVKEY,
  __module__ = 'cosmos.crypto.secp256k1.keys_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.crypto.secp256k1.PrivKey)
  ))
_sym_db.RegisterMessage(PrivKey)


DESCRIPTOR._options = None
_PUBKEY._options = None
_PRIVKEY._options = None
# @@protoc_insertion_point(module_scope)
