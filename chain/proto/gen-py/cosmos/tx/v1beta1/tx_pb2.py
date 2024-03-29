# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: cosmos/tx/v1beta1/tx.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from gogoproto import gogo_pb2 as gogoproto_dot_gogo__pb2
from cosmos.crypto.multisig.v1beta1 import multisig_pb2 as cosmos_dot_crypto_dot_multisig_dot_v1beta1_dot_multisig__pb2
from cosmos.base.v1beta1 import coin_pb2 as cosmos_dot_base_dot_v1beta1_dot_coin__pb2
from cosmos.tx.signing.v1beta1 import signing_pb2 as cosmos_dot_tx_dot_signing_dot_v1beta1_dot_signing__pb2
from google.protobuf import any_pb2 as google_dot_protobuf_dot_any__pb2
from cosmos_proto import cosmos_pb2 as cosmos__proto_dot_cosmos__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='cosmos/tx/v1beta1/tx.proto',
  package='cosmos.tx.v1beta1',
  syntax='proto3',
  serialized_options=_b('Z%github.com/cosmos/cosmos-sdk/types/tx'),
  serialized_pb=_b('\n\x1a\x63osmos/tx/v1beta1/tx.proto\x12\x11\x63osmos.tx.v1beta1\x1a\x14gogoproto/gogo.proto\x1a-cosmos/crypto/multisig/v1beta1/multisig.proto\x1a\x1e\x63osmos/base/v1beta1/coin.proto\x1a\'cosmos/tx/signing/v1beta1/signing.proto\x1a\x19google/protobuf/any.proto\x1a\x19\x63osmos_proto/cosmos.proto\"\x8d\x01\n\x02Tx\x12-\n\x04\x62ody\x18\x01 \x01(\x0b\x32\x19.cosmos.tx.v1beta1.TxBodyR\x04\x62ody\x12\x38\n\tauth_info\x18\x02 \x01(\x0b\x32\x1b.cosmos.tx.v1beta1.AuthInfoR\x08\x61uthInfo\x12\x1e\n\nsignatures\x18\x03 \x03(\x0cR\nsignatures\"n\n\x05TxRaw\x12\x1d\n\nbody_bytes\x18\x01 \x01(\x0cR\tbodyBytes\x12&\n\x0f\x61uth_info_bytes\x18\x02 \x01(\x0cR\rauthInfoBytes\x12\x1e\n\nsignatures\x18\x03 \x03(\x0cR\nsignatures\"\x92\x01\n\x07SignDoc\x12\x1d\n\nbody_bytes\x18\x01 \x01(\x0cR\tbodyBytes\x12&\n\x0f\x61uth_info_bytes\x18\x02 \x01(\x0cR\rauthInfoBytes\x12\x19\n\x08\x63hain_id\x18\x03 \x01(\tR\x07\x63hainId\x12%\n\x0e\x61\x63\x63ount_number\x18\x04 \x01(\x04R\raccountNumber\"\xee\x01\n\x10SignDocDirectAux\x12\x1d\n\nbody_bytes\x18\x01 \x01(\x0cR\tbodyBytes\x12\x33\n\npublic_key\x18\x02 \x01(\x0b\x32\x14.google.protobuf.AnyR\tpublicKey\x12\x19\n\x08\x63hain_id\x18\x03 \x01(\tR\x07\x63hainId\x12%\n\x0e\x61\x63\x63ount_number\x18\x04 \x01(\x04R\raccountNumber\x12\x1a\n\x08sequence\x18\x05 \x01(\x04R\x08sequence\x12(\n\x03tip\x18\x06 \x01(\x0b\x32\x16.cosmos.tx.v1beta1.TipR\x03tip\"\x95\x02\n\x06TxBody\x12\x30\n\x08messages\x18\x01 \x03(\x0b\x32\x14.google.protobuf.AnyR\x08messages\x12\x12\n\x04memo\x18\x02 \x01(\tR\x04memo\x12%\n\x0etimeout_height\x18\x03 \x01(\x04R\rtimeoutHeight\x12\x42\n\x11\x65xtension_options\x18\xff\x07 \x03(\x0b\x32\x14.google.protobuf.AnyR\x10\x65xtensionOptions\x12Z\n\x1enon_critical_extension_options\x18\xff\x0f \x03(\x0b\x32\x14.google.protobuf.AnyR\x1bnonCriticalExtensionOptions\"\xa0\x01\n\x08\x41uthInfo\x12@\n\x0csigner_infos\x18\x01 \x03(\x0b\x32\x1d.cosmos.tx.v1beta1.SignerInfoR\x0bsignerInfos\x12(\n\x03\x66\x65\x65\x18\x02 \x01(\x0b\x32\x16.cosmos.tx.v1beta1.FeeR\x03\x66\x65\x65\x12(\n\x03tip\x18\x03 \x01(\x0b\x32\x16.cosmos.tx.v1beta1.TipR\x03tip\"\x97\x01\n\nSignerInfo\x12\x33\n\npublic_key\x18\x01 \x01(\x0b\x32\x14.google.protobuf.AnyR\tpublicKey\x12\x38\n\tmode_info\x18\x02 \x01(\x0b\x32\x1b.cosmos.tx.v1beta1.ModeInfoR\x08modeInfo\x12\x1a\n\x08sequence\x18\x03 \x01(\x04R\x08sequence\"\xe0\x02\n\x08ModeInfo\x12<\n\x06single\x18\x01 \x01(\x0b\x32\".cosmos.tx.v1beta1.ModeInfo.SingleH\x00R\x06single\x12\x39\n\x05multi\x18\x02 \x01(\x0b\x32!.cosmos.tx.v1beta1.ModeInfo.MultiH\x00R\x05multi\x1a\x41\n\x06Single\x12\x37\n\x04mode\x18\x01 \x01(\x0e\x32#.cosmos.tx.signing.v1beta1.SignModeR\x04mode\x1a\x90\x01\n\x05Multi\x12K\n\x08\x62itarray\x18\x01 \x01(\x0b\x32/.cosmos.crypto.multisig.v1beta1.CompactBitArrayR\x08\x62itarray\x12:\n\nmode_infos\x18\x02 \x03(\x0b\x32\x1b.cosmos.tx.v1beta1.ModeInfoR\tmodeInfosB\x05\n\x03sum\"\xeb\x01\n\x03\x46\x65\x65\x12\x63\n\x06\x61mount\x18\x01 \x03(\x0b\x32\x19.cosmos.base.v1beta1.CoinB0\xc8\xde\x1f\x00\xaa\xdf\x1f(github.com/cosmos/cosmos-sdk/types.CoinsR\x06\x61mount\x12\x1b\n\tgas_limit\x18\x02 \x01(\x04R\x08gasLimit\x12.\n\x05payer\x18\x03 \x01(\tB\x18\xd2\xb4-\x14\x63osmos.AddressStringR\x05payer\x12\x32\n\x07granter\x18\x04 \x01(\tB\x18\xd2\xb4-\x14\x63osmos.AddressStringR\x07granter\"\x9c\x01\n\x03Tip\x12\x63\n\x06\x61mount\x18\x01 \x03(\x0b\x32\x19.cosmos.base.v1beta1.CoinB0\xc8\xde\x1f\x00\xaa\xdf\x1f(github.com/cosmos/cosmos-sdk/types.CoinsR\x06\x61mount\x12\x30\n\x06tipper\x18\x02 \x01(\tB\x18\xd2\xb4-\x14\x63osmos.AddressStringR\x06tipper\"\xce\x01\n\rAuxSignerData\x12\x32\n\x07\x61\x64\x64ress\x18\x01 \x01(\tB\x18\xd2\xb4-\x14\x63osmos.AddressStringR\x07\x61\x64\x64ress\x12>\n\x08sign_doc\x18\x02 \x01(\x0b\x32#.cosmos.tx.v1beta1.SignDocDirectAuxR\x07signDoc\x12\x37\n\x04mode\x18\x03 \x01(\x0e\x32#.cosmos.tx.signing.v1beta1.SignModeR\x04mode\x12\x10\n\x03sig\x18\x04 \x01(\x0cR\x03sigB\'Z%github.com/cosmos/cosmos-sdk/types/txb\x06proto3')
  ,
  dependencies=[gogoproto_dot_gogo__pb2.DESCRIPTOR,cosmos_dot_crypto_dot_multisig_dot_v1beta1_dot_multisig__pb2.DESCRIPTOR,cosmos_dot_base_dot_v1beta1_dot_coin__pb2.DESCRIPTOR,cosmos_dot_tx_dot_signing_dot_v1beta1_dot_signing__pb2.DESCRIPTOR,google_dot_protobuf_dot_any__pb2.DESCRIPTOR,cosmos__proto_dot_cosmos__pb2.DESCRIPTOR,])




_TX = _descriptor.Descriptor(
  name='Tx',
  full_name='cosmos.tx.v1beta1.Tx',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='body', full_name='cosmos.tx.v1beta1.Tx.body', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='body', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='auth_info', full_name='cosmos.tx.v1beta1.Tx.auth_info', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='authInfo', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='signatures', full_name='cosmos.tx.v1beta1.Tx.signatures', index=2,
      number=3, type=12, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='signatures', file=DESCRIPTOR),
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
  serialized_start=246,
  serialized_end=387,
)


_TXRAW = _descriptor.Descriptor(
  name='TxRaw',
  full_name='cosmos.tx.v1beta1.TxRaw',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='body_bytes', full_name='cosmos.tx.v1beta1.TxRaw.body_bytes', index=0,
      number=1, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='bodyBytes', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='auth_info_bytes', full_name='cosmos.tx.v1beta1.TxRaw.auth_info_bytes', index=1,
      number=2, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='authInfoBytes', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='signatures', full_name='cosmos.tx.v1beta1.TxRaw.signatures', index=2,
      number=3, type=12, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='signatures', file=DESCRIPTOR),
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
  serialized_start=389,
  serialized_end=499,
)


_SIGNDOC = _descriptor.Descriptor(
  name='SignDoc',
  full_name='cosmos.tx.v1beta1.SignDoc',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='body_bytes', full_name='cosmos.tx.v1beta1.SignDoc.body_bytes', index=0,
      number=1, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='bodyBytes', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='auth_info_bytes', full_name='cosmos.tx.v1beta1.SignDoc.auth_info_bytes', index=1,
      number=2, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='authInfoBytes', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='chain_id', full_name='cosmos.tx.v1beta1.SignDoc.chain_id', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='chainId', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='account_number', full_name='cosmos.tx.v1beta1.SignDoc.account_number', index=3,
      number=4, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='accountNumber', file=DESCRIPTOR),
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
  serialized_start=502,
  serialized_end=648,
)


_SIGNDOCDIRECTAUX = _descriptor.Descriptor(
  name='SignDocDirectAux',
  full_name='cosmos.tx.v1beta1.SignDocDirectAux',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='body_bytes', full_name='cosmos.tx.v1beta1.SignDocDirectAux.body_bytes', index=0,
      number=1, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='bodyBytes', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='public_key', full_name='cosmos.tx.v1beta1.SignDocDirectAux.public_key', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='publicKey', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='chain_id', full_name='cosmos.tx.v1beta1.SignDocDirectAux.chain_id', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='chainId', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='account_number', full_name='cosmos.tx.v1beta1.SignDocDirectAux.account_number', index=3,
      number=4, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='accountNumber', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='sequence', full_name='cosmos.tx.v1beta1.SignDocDirectAux.sequence', index=4,
      number=5, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='sequence', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='tip', full_name='cosmos.tx.v1beta1.SignDocDirectAux.tip', index=5,
      number=6, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='tip', file=DESCRIPTOR),
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
  serialized_start=651,
  serialized_end=889,
)


_TXBODY = _descriptor.Descriptor(
  name='TxBody',
  full_name='cosmos.tx.v1beta1.TxBody',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='messages', full_name='cosmos.tx.v1beta1.TxBody.messages', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='messages', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='memo', full_name='cosmos.tx.v1beta1.TxBody.memo', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='memo', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='timeout_height', full_name='cosmos.tx.v1beta1.TxBody.timeout_height', index=2,
      number=3, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='timeoutHeight', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='extension_options', full_name='cosmos.tx.v1beta1.TxBody.extension_options', index=3,
      number=1023, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='extensionOptions', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='non_critical_extension_options', full_name='cosmos.tx.v1beta1.TxBody.non_critical_extension_options', index=4,
      number=2047, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='nonCriticalExtensionOptions', file=DESCRIPTOR),
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
  serialized_start=892,
  serialized_end=1169,
)


_AUTHINFO = _descriptor.Descriptor(
  name='AuthInfo',
  full_name='cosmos.tx.v1beta1.AuthInfo',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='signer_infos', full_name='cosmos.tx.v1beta1.AuthInfo.signer_infos', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='signerInfos', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='fee', full_name='cosmos.tx.v1beta1.AuthInfo.fee', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='fee', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='tip', full_name='cosmos.tx.v1beta1.AuthInfo.tip', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='tip', file=DESCRIPTOR),
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
  serialized_start=1172,
  serialized_end=1332,
)


_SIGNERINFO = _descriptor.Descriptor(
  name='SignerInfo',
  full_name='cosmos.tx.v1beta1.SignerInfo',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='public_key', full_name='cosmos.tx.v1beta1.SignerInfo.public_key', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='publicKey', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='mode_info', full_name='cosmos.tx.v1beta1.SignerInfo.mode_info', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='modeInfo', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='sequence', full_name='cosmos.tx.v1beta1.SignerInfo.sequence', index=2,
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
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1335,
  serialized_end=1486,
)


_MODEINFO_SINGLE = _descriptor.Descriptor(
  name='Single',
  full_name='cosmos.tx.v1beta1.ModeInfo.Single',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='mode', full_name='cosmos.tx.v1beta1.ModeInfo.Single.mode', index=0,
      number=1, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='mode', file=DESCRIPTOR),
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
  serialized_start=1622,
  serialized_end=1687,
)

_MODEINFO_MULTI = _descriptor.Descriptor(
  name='Multi',
  full_name='cosmos.tx.v1beta1.ModeInfo.Multi',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='bitarray', full_name='cosmos.tx.v1beta1.ModeInfo.Multi.bitarray', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='bitarray', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='mode_infos', full_name='cosmos.tx.v1beta1.ModeInfo.Multi.mode_infos', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='modeInfos', file=DESCRIPTOR),
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
  serialized_start=1690,
  serialized_end=1834,
)

_MODEINFO = _descriptor.Descriptor(
  name='ModeInfo',
  full_name='cosmos.tx.v1beta1.ModeInfo',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='single', full_name='cosmos.tx.v1beta1.ModeInfo.single', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='single', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='multi', full_name='cosmos.tx.v1beta1.ModeInfo.multi', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='multi', file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_MODEINFO_SINGLE, _MODEINFO_MULTI, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
    _descriptor.OneofDescriptor(
      name='sum', full_name='cosmos.tx.v1beta1.ModeInfo.sum',
      index=0, containing_type=None, fields=[]),
  ],
  serialized_start=1489,
  serialized_end=1841,
)


_FEE = _descriptor.Descriptor(
  name='Fee',
  full_name='cosmos.tx.v1beta1.Fee',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='amount', full_name='cosmos.tx.v1beta1.Fee.amount', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000\252\337\037(github.com/cosmos/cosmos-sdk/types.Coins'), json_name='amount', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='gas_limit', full_name='cosmos.tx.v1beta1.Fee.gas_limit', index=1,
      number=2, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='gasLimit', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='payer', full_name='cosmos.tx.v1beta1.Fee.payer', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\322\264-\024cosmos.AddressString'), json_name='payer', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='granter', full_name='cosmos.tx.v1beta1.Fee.granter', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\322\264-\024cosmos.AddressString'), json_name='granter', file=DESCRIPTOR),
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
  serialized_start=1844,
  serialized_end=2079,
)


_TIP = _descriptor.Descriptor(
  name='Tip',
  full_name='cosmos.tx.v1beta1.Tip',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='amount', full_name='cosmos.tx.v1beta1.Tip.amount', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000\252\337\037(github.com/cosmos/cosmos-sdk/types.Coins'), json_name='amount', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='tipper', full_name='cosmos.tx.v1beta1.Tip.tipper', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\322\264-\024cosmos.AddressString'), json_name='tipper', file=DESCRIPTOR),
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
  serialized_start=2082,
  serialized_end=2238,
)


_AUXSIGNERDATA = _descriptor.Descriptor(
  name='AuxSignerData',
  full_name='cosmos.tx.v1beta1.AuxSignerData',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='address', full_name='cosmos.tx.v1beta1.AuxSignerData.address', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\322\264-\024cosmos.AddressString'), json_name='address', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='sign_doc', full_name='cosmos.tx.v1beta1.AuxSignerData.sign_doc', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='signDoc', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='mode', full_name='cosmos.tx.v1beta1.AuxSignerData.mode', index=2,
      number=3, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='mode', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='sig', full_name='cosmos.tx.v1beta1.AuxSignerData.sig', index=3,
      number=4, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='sig', file=DESCRIPTOR),
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
  serialized_start=2241,
  serialized_end=2447,
)

_TX.fields_by_name['body'].message_type = _TXBODY
_TX.fields_by_name['auth_info'].message_type = _AUTHINFO
_SIGNDOCDIRECTAUX.fields_by_name['public_key'].message_type = google_dot_protobuf_dot_any__pb2._ANY
_SIGNDOCDIRECTAUX.fields_by_name['tip'].message_type = _TIP
_TXBODY.fields_by_name['messages'].message_type = google_dot_protobuf_dot_any__pb2._ANY
_TXBODY.fields_by_name['extension_options'].message_type = google_dot_protobuf_dot_any__pb2._ANY
_TXBODY.fields_by_name['non_critical_extension_options'].message_type = google_dot_protobuf_dot_any__pb2._ANY
_AUTHINFO.fields_by_name['signer_infos'].message_type = _SIGNERINFO
_AUTHINFO.fields_by_name['fee'].message_type = _FEE
_AUTHINFO.fields_by_name['tip'].message_type = _TIP
_SIGNERINFO.fields_by_name['public_key'].message_type = google_dot_protobuf_dot_any__pb2._ANY
_SIGNERINFO.fields_by_name['mode_info'].message_type = _MODEINFO
_MODEINFO_SINGLE.fields_by_name['mode'].enum_type = cosmos_dot_tx_dot_signing_dot_v1beta1_dot_signing__pb2._SIGNMODE
_MODEINFO_SINGLE.containing_type = _MODEINFO
_MODEINFO_MULTI.fields_by_name['bitarray'].message_type = cosmos_dot_crypto_dot_multisig_dot_v1beta1_dot_multisig__pb2._COMPACTBITARRAY
_MODEINFO_MULTI.fields_by_name['mode_infos'].message_type = _MODEINFO
_MODEINFO_MULTI.containing_type = _MODEINFO
_MODEINFO.fields_by_name['single'].message_type = _MODEINFO_SINGLE
_MODEINFO.fields_by_name['multi'].message_type = _MODEINFO_MULTI
_MODEINFO.oneofs_by_name['sum'].fields.append(
  _MODEINFO.fields_by_name['single'])
_MODEINFO.fields_by_name['single'].containing_oneof = _MODEINFO.oneofs_by_name['sum']
_MODEINFO.oneofs_by_name['sum'].fields.append(
  _MODEINFO.fields_by_name['multi'])
_MODEINFO.fields_by_name['multi'].containing_oneof = _MODEINFO.oneofs_by_name['sum']
_FEE.fields_by_name['amount'].message_type = cosmos_dot_base_dot_v1beta1_dot_coin__pb2._COIN
_TIP.fields_by_name['amount'].message_type = cosmos_dot_base_dot_v1beta1_dot_coin__pb2._COIN
_AUXSIGNERDATA.fields_by_name['sign_doc'].message_type = _SIGNDOCDIRECTAUX
_AUXSIGNERDATA.fields_by_name['mode'].enum_type = cosmos_dot_tx_dot_signing_dot_v1beta1_dot_signing__pb2._SIGNMODE
DESCRIPTOR.message_types_by_name['Tx'] = _TX
DESCRIPTOR.message_types_by_name['TxRaw'] = _TXRAW
DESCRIPTOR.message_types_by_name['SignDoc'] = _SIGNDOC
DESCRIPTOR.message_types_by_name['SignDocDirectAux'] = _SIGNDOCDIRECTAUX
DESCRIPTOR.message_types_by_name['TxBody'] = _TXBODY
DESCRIPTOR.message_types_by_name['AuthInfo'] = _AUTHINFO
DESCRIPTOR.message_types_by_name['SignerInfo'] = _SIGNERINFO
DESCRIPTOR.message_types_by_name['ModeInfo'] = _MODEINFO
DESCRIPTOR.message_types_by_name['Fee'] = _FEE
DESCRIPTOR.message_types_by_name['Tip'] = _TIP
DESCRIPTOR.message_types_by_name['AuxSignerData'] = _AUXSIGNERDATA
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Tx = _reflection.GeneratedProtocolMessageType('Tx', (_message.Message,), dict(
  DESCRIPTOR = _TX,
  __module__ = 'cosmos.tx.v1beta1.tx_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.tx.v1beta1.Tx)
  ))
_sym_db.RegisterMessage(Tx)

TxRaw = _reflection.GeneratedProtocolMessageType('TxRaw', (_message.Message,), dict(
  DESCRIPTOR = _TXRAW,
  __module__ = 'cosmos.tx.v1beta1.tx_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.tx.v1beta1.TxRaw)
  ))
_sym_db.RegisterMessage(TxRaw)

SignDoc = _reflection.GeneratedProtocolMessageType('SignDoc', (_message.Message,), dict(
  DESCRIPTOR = _SIGNDOC,
  __module__ = 'cosmos.tx.v1beta1.tx_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.tx.v1beta1.SignDoc)
  ))
_sym_db.RegisterMessage(SignDoc)

SignDocDirectAux = _reflection.GeneratedProtocolMessageType('SignDocDirectAux', (_message.Message,), dict(
  DESCRIPTOR = _SIGNDOCDIRECTAUX,
  __module__ = 'cosmos.tx.v1beta1.tx_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.tx.v1beta1.SignDocDirectAux)
  ))
_sym_db.RegisterMessage(SignDocDirectAux)

TxBody = _reflection.GeneratedProtocolMessageType('TxBody', (_message.Message,), dict(
  DESCRIPTOR = _TXBODY,
  __module__ = 'cosmos.tx.v1beta1.tx_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.tx.v1beta1.TxBody)
  ))
_sym_db.RegisterMessage(TxBody)

AuthInfo = _reflection.GeneratedProtocolMessageType('AuthInfo', (_message.Message,), dict(
  DESCRIPTOR = _AUTHINFO,
  __module__ = 'cosmos.tx.v1beta1.tx_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.tx.v1beta1.AuthInfo)
  ))
_sym_db.RegisterMessage(AuthInfo)

SignerInfo = _reflection.GeneratedProtocolMessageType('SignerInfo', (_message.Message,), dict(
  DESCRIPTOR = _SIGNERINFO,
  __module__ = 'cosmos.tx.v1beta1.tx_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.tx.v1beta1.SignerInfo)
  ))
_sym_db.RegisterMessage(SignerInfo)

ModeInfo = _reflection.GeneratedProtocolMessageType('ModeInfo', (_message.Message,), dict(

  Single = _reflection.GeneratedProtocolMessageType('Single', (_message.Message,), dict(
    DESCRIPTOR = _MODEINFO_SINGLE,
    __module__ = 'cosmos.tx.v1beta1.tx_pb2'
    # @@protoc_insertion_point(class_scope:cosmos.tx.v1beta1.ModeInfo.Single)
    ))
  ,

  Multi = _reflection.GeneratedProtocolMessageType('Multi', (_message.Message,), dict(
    DESCRIPTOR = _MODEINFO_MULTI,
    __module__ = 'cosmos.tx.v1beta1.tx_pb2'
    # @@protoc_insertion_point(class_scope:cosmos.tx.v1beta1.ModeInfo.Multi)
    ))
  ,
  DESCRIPTOR = _MODEINFO,
  __module__ = 'cosmos.tx.v1beta1.tx_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.tx.v1beta1.ModeInfo)
  ))
_sym_db.RegisterMessage(ModeInfo)
_sym_db.RegisterMessage(ModeInfo.Single)
_sym_db.RegisterMessage(ModeInfo.Multi)

Fee = _reflection.GeneratedProtocolMessageType('Fee', (_message.Message,), dict(
  DESCRIPTOR = _FEE,
  __module__ = 'cosmos.tx.v1beta1.tx_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.tx.v1beta1.Fee)
  ))
_sym_db.RegisterMessage(Fee)

Tip = _reflection.GeneratedProtocolMessageType('Tip', (_message.Message,), dict(
  DESCRIPTOR = _TIP,
  __module__ = 'cosmos.tx.v1beta1.tx_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.tx.v1beta1.Tip)
  ))
_sym_db.RegisterMessage(Tip)

AuxSignerData = _reflection.GeneratedProtocolMessageType('AuxSignerData', (_message.Message,), dict(
  DESCRIPTOR = _AUXSIGNERDATA,
  __module__ = 'cosmos.tx.v1beta1.tx_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.tx.v1beta1.AuxSignerData)
  ))
_sym_db.RegisterMessage(AuxSignerData)


DESCRIPTOR._options = None
_FEE.fields_by_name['amount']._options = None
_FEE.fields_by_name['payer']._options = None
_FEE.fields_by_name['granter']._options = None
_TIP.fields_by_name['amount']._options = None
_TIP.fields_by_name['tipper']._options = None
_AUXSIGNERDATA.fields_by_name['address']._options = None
# @@protoc_insertion_point(module_scope)
