# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: cosmos/gov/v1/tx.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from cosmos.base.v1beta1 import coin_pb2 as cosmos_dot_base_dot_v1beta1_dot_coin__pb2
from cosmos.gov.v1 import gov_pb2 as cosmos_dot_gov_dot_v1_dot_gov__pb2
from gogoproto import gogo_pb2 as gogoproto_dot_gogo__pb2
from cosmos_proto import cosmos_pb2 as cosmos__proto_dot_cosmos__pb2
from google.protobuf import any_pb2 as google_dot_protobuf_dot_any__pb2
from cosmos.msg.v1 import msg_pb2 as cosmos_dot_msg_dot_v1_dot_msg__pb2
from amino import amino_pb2 as amino_dot_amino__pb2
from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='cosmos/gov/v1/tx.proto',
  package='cosmos.gov.v1',
  syntax='proto3',
  serialized_options=_b('Z+github.com/cosmos/cosmos-sdk/x/gov/types/v1'),
  serialized_pb=_b('\n\x16\x63osmos/gov/v1/tx.proto\x12\rcosmos.gov.v1\x1a\x1e\x63osmos/base/v1beta1/coin.proto\x1a\x17\x63osmos/gov/v1/gov.proto\x1a\x14gogoproto/gogo.proto\x1a\x19\x63osmos_proto/cosmos.proto\x1a\x19google/protobuf/any.proto\x1a\x17\x63osmos/msg/v1/msg.proto\x1a\x11\x61mino/amino.proto\x1a\x1fgoogle/protobuf/timestamp.proto\"\xe7\x02\n\x11MsgSubmitProposal\x12\x30\n\x08messages\x18\x01 \x03(\x0b\x32\x14.google.protobuf.AnyR\x08messages\x12M\n\x0finitial_deposit\x18\x02 \x03(\x0b\x32\x19.cosmos.base.v1beta1.CoinB\t\xc8\xde\x1f\x00\xa8\xe7\xb0*\x01R\x0einitialDeposit\x12\x34\n\x08proposer\x18\x03 \x01(\tB\x18\xd2\xb4-\x14\x63osmos.AddressStringR\x08proposer\x12\x1a\n\x08metadata\x18\x04 \x01(\tR\x08metadata\x12\x14\n\x05title\x18\x05 \x01(\tR\x05title\x12\x18\n\x07summary\x18\x06 \x01(\tR\x07summary\x12\x1c\n\texpedited\x18\x07 \x01(\x08R\texpedited:1\x82\xe7\xb0*\x08proposer\x8a\xe7\xb0*\x1f\x63osmos-sdk/v1/MsgSubmitProposal\"<\n\x19MsgSubmitProposalResponse\x12\x1f\n\x0bproposal_id\x18\x01 \x01(\x04R\nproposalId\"\xbb\x01\n\x14MsgExecLegacyContent\x12N\n\x07\x63ontent\x18\x01 \x01(\x0b\x32\x14.google.protobuf.AnyB\x1e\xca\xb4-\x1a\x63osmos.gov.v1beta1.ContentR\x07\x63ontent\x12\x1c\n\tauthority\x18\x02 \x01(\tR\tauthority:5\x82\xe7\xb0*\tauthority\x8a\xe7\xb0*\"cosmos-sdk/v1/MsgExecLegacyContent\"\x1e\n\x1cMsgExecLegacyContentResponse\"\xe5\x01\n\x07MsgVote\x12\x35\n\x0bproposal_id\x18\x01 \x01(\x04\x42\x14\xea\xde\x1f\x0bproposal_id\xa8\xe7\xb0*\x01R\nproposalId\x12.\n\x05voter\x18\x02 \x01(\tB\x18\xd2\xb4-\x14\x63osmos.AddressStringR\x05voter\x12\x31\n\x06option\x18\x03 \x01(\x0e\x32\x19.cosmos.gov.v1.VoteOptionR\x06option\x12\x1a\n\x08metadata\x18\x04 \x01(\tR\x08metadata:$\x82\xe7\xb0*\x05voter\x8a\xe7\xb0*\x15\x63osmos-sdk/v1/MsgVote\"\x11\n\x0fMsgVoteResponse\"\xff\x01\n\x0fMsgVoteWeighted\x12\x35\n\x0bproposal_id\x18\x01 \x01(\x04\x42\x14\xea\xde\x1f\x0bproposal_id\xa8\xe7\xb0*\x01R\nproposalId\x12.\n\x05voter\x18\x02 \x01(\tB\x18\xd2\xb4-\x14\x63osmos.AddressStringR\x05voter\x12;\n\x07options\x18\x03 \x03(\x0b\x32!.cosmos.gov.v1.WeightedVoteOptionR\x07options\x12\x1a\n\x08metadata\x18\x04 \x01(\tR\x08metadata:,\x82\xe7\xb0*\x05voter\x8a\xe7\xb0*\x1d\x63osmos-sdk/v1/MsgVoteWeighted\"\x19\n\x17MsgVoteWeightedResponse\"\xe6\x01\n\nMsgDeposit\x12\x35\n\x0bproposal_id\x18\x01 \x01(\x04\x42\x14\xea\xde\x1f\x0bproposal_id\xa8\xe7\xb0*\x01R\nproposalId\x12\x36\n\tdepositor\x18\x02 \x01(\tB\x18\xd2\xb4-\x14\x63osmos.AddressStringR\tdepositor\x12<\n\x06\x61mount\x18\x03 \x03(\x0b\x32\x19.cosmos.base.v1beta1.CoinB\t\xc8\xde\x1f\x00\xa8\xe7\xb0*\x01R\x06\x61mount:+\x82\xe7\xb0*\tdepositor\x8a\xe7\xb0*\x18\x63osmos-sdk/v1/MsgDeposit\"\x14\n\x12MsgDepositResponse\"\xbb\x01\n\x0fMsgUpdateParams\x12\x36\n\tauthority\x18\x01 \x01(\tB\x18\xd2\xb4-\x14\x63osmos.AddressStringR\tauthority\x12\x38\n\x06params\x18\x02 \x01(\x0b\x32\x15.cosmos.gov.v1.ParamsB\t\xc8\xde\x1f\x00\xa8\xe7\xb0*\x01R\x06params:6\x82\xe7\xb0*\tauthority\x8a\xe7\xb0*#cosmos-sdk/x/gov/v1/MsgUpdateParams\"\x19\n\x17MsgUpdateParamsResponse\"\x8a\x01\n\x11MsgCancelProposal\x12\x30\n\x0bproposal_id\x18\x01 \x01(\x04\x42\x0f\xea\xde\x1f\x0bproposal_idR\nproposalId\x12\x34\n\x08proposer\x18\x02 \x01(\tB\x18\xd2\xb4-\x14\x63osmos.AddressStringR\x08proposer:\r\x82\xe7\xb0*\x08proposer\"\xc1\x01\n\x19MsgCancelProposalResponse\x12\x30\n\x0bproposal_id\x18\x01 \x01(\x04\x42\x0f\xea\xde\x1f\x0bproposal_idR\nproposalId\x12I\n\rcanceled_time\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.TimestampB\x08\xc8\xde\x1f\x00\x90\xdf\x1f\x01R\x0c\x63\x61nceledTime\x12\'\n\x0f\x63\x61nceled_height\x18\x03 \x01(\x04R\x0e\x63\x61nceledHeight2\xe8\x04\n\x03Msg\x12\\\n\x0eSubmitProposal\x12 .cosmos.gov.v1.MsgSubmitProposal\x1a(.cosmos.gov.v1.MsgSubmitProposalResponse\x12\x65\n\x11\x45xecLegacyContent\x12#.cosmos.gov.v1.MsgExecLegacyContent\x1a+.cosmos.gov.v1.MsgExecLegacyContentResponse\x12>\n\x04Vote\x12\x16.cosmos.gov.v1.MsgVote\x1a\x1e.cosmos.gov.v1.MsgVoteResponse\x12V\n\x0cVoteWeighted\x12\x1e.cosmos.gov.v1.MsgVoteWeighted\x1a&.cosmos.gov.v1.MsgVoteWeightedResponse\x12G\n\x07\x44\x65posit\x12\x19.cosmos.gov.v1.MsgDeposit\x1a!.cosmos.gov.v1.MsgDepositResponse\x12V\n\x0cUpdateParams\x12\x1e.cosmos.gov.v1.MsgUpdateParams\x1a&.cosmos.gov.v1.MsgUpdateParamsResponse\x12\\\n\x0e\x43\x61ncelProposal\x12 .cosmos.gov.v1.MsgCancelProposal\x1a(.cosmos.gov.v1.MsgCancelProposalResponse\x1a\x05\x80\xe7\xb0*\x01\x42-Z+github.com/cosmos/cosmos-sdk/x/gov/types/v1b\x06proto3')
  ,
  dependencies=[cosmos_dot_base_dot_v1beta1_dot_coin__pb2.DESCRIPTOR,cosmos_dot_gov_dot_v1_dot_gov__pb2.DESCRIPTOR,gogoproto_dot_gogo__pb2.DESCRIPTOR,cosmos__proto_dot_cosmos__pb2.DESCRIPTOR,google_dot_protobuf_dot_any__pb2.DESCRIPTOR,cosmos_dot_msg_dot_v1_dot_msg__pb2.DESCRIPTOR,amino_dot_amino__pb2.DESCRIPTOR,google_dot_protobuf_dot_timestamp__pb2.DESCRIPTOR,])




_MSGSUBMITPROPOSAL = _descriptor.Descriptor(
  name='MsgSubmitProposal',
  full_name='cosmos.gov.v1.MsgSubmitProposal',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='messages', full_name='cosmos.gov.v1.MsgSubmitProposal.messages', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='messages', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='initial_deposit', full_name='cosmos.gov.v1.MsgSubmitProposal.initial_deposit', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000\250\347\260*\001'), json_name='initialDeposit', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='proposer', full_name='cosmos.gov.v1.MsgSubmitProposal.proposer', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\322\264-\024cosmos.AddressString'), json_name='proposer', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='metadata', full_name='cosmos.gov.v1.MsgSubmitProposal.metadata', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='metadata', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='title', full_name='cosmos.gov.v1.MsgSubmitProposal.title', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='title', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='summary', full_name='cosmos.gov.v1.MsgSubmitProposal.summary', index=5,
      number=6, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='summary', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='expedited', full_name='cosmos.gov.v1.MsgSubmitProposal.expedited', index=6,
      number=7, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='expedited', file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=_b('\202\347\260*\010proposer\212\347\260*\037cosmos-sdk/v1/MsgSubmitProposal'),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=252,
  serialized_end=611,
)


_MSGSUBMITPROPOSALRESPONSE = _descriptor.Descriptor(
  name='MsgSubmitProposalResponse',
  full_name='cosmos.gov.v1.MsgSubmitProposalResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='proposal_id', full_name='cosmos.gov.v1.MsgSubmitProposalResponse.proposal_id', index=0,
      number=1, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='proposalId', file=DESCRIPTOR),
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
  serialized_start=613,
  serialized_end=673,
)


_MSGEXECLEGACYCONTENT = _descriptor.Descriptor(
  name='MsgExecLegacyContent',
  full_name='cosmos.gov.v1.MsgExecLegacyContent',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='content', full_name='cosmos.gov.v1.MsgExecLegacyContent.content', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\312\264-\032cosmos.gov.v1beta1.Content'), json_name='content', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='authority', full_name='cosmos.gov.v1.MsgExecLegacyContent.authority', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='authority', file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=_b('\202\347\260*\tauthority\212\347\260*\"cosmos-sdk/v1/MsgExecLegacyContent'),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=676,
  serialized_end=863,
)


_MSGEXECLEGACYCONTENTRESPONSE = _descriptor.Descriptor(
  name='MsgExecLegacyContentResponse',
  full_name='cosmos.gov.v1.MsgExecLegacyContentResponse',
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
  serialized_start=865,
  serialized_end=895,
)


_MSGVOTE = _descriptor.Descriptor(
  name='MsgVote',
  full_name='cosmos.gov.v1.MsgVote',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='proposal_id', full_name='cosmos.gov.v1.MsgVote.proposal_id', index=0,
      number=1, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\352\336\037\013proposal_id\250\347\260*\001'), json_name='proposalId', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='voter', full_name='cosmos.gov.v1.MsgVote.voter', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\322\264-\024cosmos.AddressString'), json_name='voter', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='option', full_name='cosmos.gov.v1.MsgVote.option', index=2,
      number=3, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='option', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='metadata', full_name='cosmos.gov.v1.MsgVote.metadata', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='metadata', file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=_b('\202\347\260*\005voter\212\347\260*\025cosmos-sdk/v1/MsgVote'),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=898,
  serialized_end=1127,
)


_MSGVOTERESPONSE = _descriptor.Descriptor(
  name='MsgVoteResponse',
  full_name='cosmos.gov.v1.MsgVoteResponse',
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
  serialized_start=1129,
  serialized_end=1146,
)


_MSGVOTEWEIGHTED = _descriptor.Descriptor(
  name='MsgVoteWeighted',
  full_name='cosmos.gov.v1.MsgVoteWeighted',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='proposal_id', full_name='cosmos.gov.v1.MsgVoteWeighted.proposal_id', index=0,
      number=1, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\352\336\037\013proposal_id\250\347\260*\001'), json_name='proposalId', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='voter', full_name='cosmos.gov.v1.MsgVoteWeighted.voter', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\322\264-\024cosmos.AddressString'), json_name='voter', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='options', full_name='cosmos.gov.v1.MsgVoteWeighted.options', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='options', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='metadata', full_name='cosmos.gov.v1.MsgVoteWeighted.metadata', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='metadata', file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=_b('\202\347\260*\005voter\212\347\260*\035cosmos-sdk/v1/MsgVoteWeighted'),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1149,
  serialized_end=1404,
)


_MSGVOTEWEIGHTEDRESPONSE = _descriptor.Descriptor(
  name='MsgVoteWeightedResponse',
  full_name='cosmos.gov.v1.MsgVoteWeightedResponse',
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
  serialized_start=1406,
  serialized_end=1431,
)


_MSGDEPOSIT = _descriptor.Descriptor(
  name='MsgDeposit',
  full_name='cosmos.gov.v1.MsgDeposit',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='proposal_id', full_name='cosmos.gov.v1.MsgDeposit.proposal_id', index=0,
      number=1, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\352\336\037\013proposal_id\250\347\260*\001'), json_name='proposalId', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='depositor', full_name='cosmos.gov.v1.MsgDeposit.depositor', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\322\264-\024cosmos.AddressString'), json_name='depositor', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='amount', full_name='cosmos.gov.v1.MsgDeposit.amount', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000\250\347\260*\001'), json_name='amount', file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=_b('\202\347\260*\tdepositor\212\347\260*\030cosmos-sdk/v1/MsgDeposit'),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1434,
  serialized_end=1664,
)


_MSGDEPOSITRESPONSE = _descriptor.Descriptor(
  name='MsgDepositResponse',
  full_name='cosmos.gov.v1.MsgDepositResponse',
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
  serialized_start=1666,
  serialized_end=1686,
)


_MSGUPDATEPARAMS = _descriptor.Descriptor(
  name='MsgUpdateParams',
  full_name='cosmos.gov.v1.MsgUpdateParams',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='authority', full_name='cosmos.gov.v1.MsgUpdateParams.authority', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\322\264-\024cosmos.AddressString'), json_name='authority', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='params', full_name='cosmos.gov.v1.MsgUpdateParams.params', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000\250\347\260*\001'), json_name='params', file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=_b('\202\347\260*\tauthority\212\347\260*#cosmos-sdk/x/gov/v1/MsgUpdateParams'),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1689,
  serialized_end=1876,
)


_MSGUPDATEPARAMSRESPONSE = _descriptor.Descriptor(
  name='MsgUpdateParamsResponse',
  full_name='cosmos.gov.v1.MsgUpdateParamsResponse',
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
  serialized_start=1878,
  serialized_end=1903,
)


_MSGCANCELPROPOSAL = _descriptor.Descriptor(
  name='MsgCancelProposal',
  full_name='cosmos.gov.v1.MsgCancelProposal',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='proposal_id', full_name='cosmos.gov.v1.MsgCancelProposal.proposal_id', index=0,
      number=1, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\352\336\037\013proposal_id'), json_name='proposalId', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='proposer', full_name='cosmos.gov.v1.MsgCancelProposal.proposer', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\322\264-\024cosmos.AddressString'), json_name='proposer', file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=_b('\202\347\260*\010proposer'),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1906,
  serialized_end=2044,
)


_MSGCANCELPROPOSALRESPONSE = _descriptor.Descriptor(
  name='MsgCancelProposalResponse',
  full_name='cosmos.gov.v1.MsgCancelProposalResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='proposal_id', full_name='cosmos.gov.v1.MsgCancelProposalResponse.proposal_id', index=0,
      number=1, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\352\336\037\013proposal_id'), json_name='proposalId', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='canceled_time', full_name='cosmos.gov.v1.MsgCancelProposalResponse.canceled_time', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000\220\337\037\001'), json_name='canceledTime', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='canceled_height', full_name='cosmos.gov.v1.MsgCancelProposalResponse.canceled_height', index=2,
      number=3, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='canceledHeight', file=DESCRIPTOR),
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
  serialized_start=2047,
  serialized_end=2240,
)

_MSGSUBMITPROPOSAL.fields_by_name['messages'].message_type = google_dot_protobuf_dot_any__pb2._ANY
_MSGSUBMITPROPOSAL.fields_by_name['initial_deposit'].message_type = cosmos_dot_base_dot_v1beta1_dot_coin__pb2._COIN
_MSGEXECLEGACYCONTENT.fields_by_name['content'].message_type = google_dot_protobuf_dot_any__pb2._ANY
_MSGVOTE.fields_by_name['option'].enum_type = cosmos_dot_gov_dot_v1_dot_gov__pb2._VOTEOPTION
_MSGVOTEWEIGHTED.fields_by_name['options'].message_type = cosmos_dot_gov_dot_v1_dot_gov__pb2._WEIGHTEDVOTEOPTION
_MSGDEPOSIT.fields_by_name['amount'].message_type = cosmos_dot_base_dot_v1beta1_dot_coin__pb2._COIN
_MSGUPDATEPARAMS.fields_by_name['params'].message_type = cosmos_dot_gov_dot_v1_dot_gov__pb2._PARAMS
_MSGCANCELPROPOSALRESPONSE.fields_by_name['canceled_time'].message_type = google_dot_protobuf_dot_timestamp__pb2._TIMESTAMP
DESCRIPTOR.message_types_by_name['MsgSubmitProposal'] = _MSGSUBMITPROPOSAL
DESCRIPTOR.message_types_by_name['MsgSubmitProposalResponse'] = _MSGSUBMITPROPOSALRESPONSE
DESCRIPTOR.message_types_by_name['MsgExecLegacyContent'] = _MSGEXECLEGACYCONTENT
DESCRIPTOR.message_types_by_name['MsgExecLegacyContentResponse'] = _MSGEXECLEGACYCONTENTRESPONSE
DESCRIPTOR.message_types_by_name['MsgVote'] = _MSGVOTE
DESCRIPTOR.message_types_by_name['MsgVoteResponse'] = _MSGVOTERESPONSE
DESCRIPTOR.message_types_by_name['MsgVoteWeighted'] = _MSGVOTEWEIGHTED
DESCRIPTOR.message_types_by_name['MsgVoteWeightedResponse'] = _MSGVOTEWEIGHTEDRESPONSE
DESCRIPTOR.message_types_by_name['MsgDeposit'] = _MSGDEPOSIT
DESCRIPTOR.message_types_by_name['MsgDepositResponse'] = _MSGDEPOSITRESPONSE
DESCRIPTOR.message_types_by_name['MsgUpdateParams'] = _MSGUPDATEPARAMS
DESCRIPTOR.message_types_by_name['MsgUpdateParamsResponse'] = _MSGUPDATEPARAMSRESPONSE
DESCRIPTOR.message_types_by_name['MsgCancelProposal'] = _MSGCANCELPROPOSAL
DESCRIPTOR.message_types_by_name['MsgCancelProposalResponse'] = _MSGCANCELPROPOSALRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

MsgSubmitProposal = _reflection.GeneratedProtocolMessageType('MsgSubmitProposal', (_message.Message,), dict(
  DESCRIPTOR = _MSGSUBMITPROPOSAL,
  __module__ = 'cosmos.gov.v1.tx_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.gov.v1.MsgSubmitProposal)
  ))
_sym_db.RegisterMessage(MsgSubmitProposal)

MsgSubmitProposalResponse = _reflection.GeneratedProtocolMessageType('MsgSubmitProposalResponse', (_message.Message,), dict(
  DESCRIPTOR = _MSGSUBMITPROPOSALRESPONSE,
  __module__ = 'cosmos.gov.v1.tx_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.gov.v1.MsgSubmitProposalResponse)
  ))
_sym_db.RegisterMessage(MsgSubmitProposalResponse)

MsgExecLegacyContent = _reflection.GeneratedProtocolMessageType('MsgExecLegacyContent', (_message.Message,), dict(
  DESCRIPTOR = _MSGEXECLEGACYCONTENT,
  __module__ = 'cosmos.gov.v1.tx_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.gov.v1.MsgExecLegacyContent)
  ))
_sym_db.RegisterMessage(MsgExecLegacyContent)

MsgExecLegacyContentResponse = _reflection.GeneratedProtocolMessageType('MsgExecLegacyContentResponse', (_message.Message,), dict(
  DESCRIPTOR = _MSGEXECLEGACYCONTENTRESPONSE,
  __module__ = 'cosmos.gov.v1.tx_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.gov.v1.MsgExecLegacyContentResponse)
  ))
_sym_db.RegisterMessage(MsgExecLegacyContentResponse)

MsgVote = _reflection.GeneratedProtocolMessageType('MsgVote', (_message.Message,), dict(
  DESCRIPTOR = _MSGVOTE,
  __module__ = 'cosmos.gov.v1.tx_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.gov.v1.MsgVote)
  ))
_sym_db.RegisterMessage(MsgVote)

MsgVoteResponse = _reflection.GeneratedProtocolMessageType('MsgVoteResponse', (_message.Message,), dict(
  DESCRIPTOR = _MSGVOTERESPONSE,
  __module__ = 'cosmos.gov.v1.tx_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.gov.v1.MsgVoteResponse)
  ))
_sym_db.RegisterMessage(MsgVoteResponse)

MsgVoteWeighted = _reflection.GeneratedProtocolMessageType('MsgVoteWeighted', (_message.Message,), dict(
  DESCRIPTOR = _MSGVOTEWEIGHTED,
  __module__ = 'cosmos.gov.v1.tx_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.gov.v1.MsgVoteWeighted)
  ))
_sym_db.RegisterMessage(MsgVoteWeighted)

MsgVoteWeightedResponse = _reflection.GeneratedProtocolMessageType('MsgVoteWeightedResponse', (_message.Message,), dict(
  DESCRIPTOR = _MSGVOTEWEIGHTEDRESPONSE,
  __module__ = 'cosmos.gov.v1.tx_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.gov.v1.MsgVoteWeightedResponse)
  ))
_sym_db.RegisterMessage(MsgVoteWeightedResponse)

MsgDeposit = _reflection.GeneratedProtocolMessageType('MsgDeposit', (_message.Message,), dict(
  DESCRIPTOR = _MSGDEPOSIT,
  __module__ = 'cosmos.gov.v1.tx_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.gov.v1.MsgDeposit)
  ))
_sym_db.RegisterMessage(MsgDeposit)

MsgDepositResponse = _reflection.GeneratedProtocolMessageType('MsgDepositResponse', (_message.Message,), dict(
  DESCRIPTOR = _MSGDEPOSITRESPONSE,
  __module__ = 'cosmos.gov.v1.tx_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.gov.v1.MsgDepositResponse)
  ))
_sym_db.RegisterMessage(MsgDepositResponse)

MsgUpdateParams = _reflection.GeneratedProtocolMessageType('MsgUpdateParams', (_message.Message,), dict(
  DESCRIPTOR = _MSGUPDATEPARAMS,
  __module__ = 'cosmos.gov.v1.tx_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.gov.v1.MsgUpdateParams)
  ))
_sym_db.RegisterMessage(MsgUpdateParams)

MsgUpdateParamsResponse = _reflection.GeneratedProtocolMessageType('MsgUpdateParamsResponse', (_message.Message,), dict(
  DESCRIPTOR = _MSGUPDATEPARAMSRESPONSE,
  __module__ = 'cosmos.gov.v1.tx_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.gov.v1.MsgUpdateParamsResponse)
  ))
_sym_db.RegisterMessage(MsgUpdateParamsResponse)

MsgCancelProposal = _reflection.GeneratedProtocolMessageType('MsgCancelProposal', (_message.Message,), dict(
  DESCRIPTOR = _MSGCANCELPROPOSAL,
  __module__ = 'cosmos.gov.v1.tx_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.gov.v1.MsgCancelProposal)
  ))
_sym_db.RegisterMessage(MsgCancelProposal)

MsgCancelProposalResponse = _reflection.GeneratedProtocolMessageType('MsgCancelProposalResponse', (_message.Message,), dict(
  DESCRIPTOR = _MSGCANCELPROPOSALRESPONSE,
  __module__ = 'cosmos.gov.v1.tx_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.gov.v1.MsgCancelProposalResponse)
  ))
_sym_db.RegisterMessage(MsgCancelProposalResponse)


DESCRIPTOR._options = None
_MSGSUBMITPROPOSAL.fields_by_name['initial_deposit']._options = None
_MSGSUBMITPROPOSAL.fields_by_name['proposer']._options = None
_MSGSUBMITPROPOSAL._options = None
_MSGEXECLEGACYCONTENT.fields_by_name['content']._options = None
_MSGEXECLEGACYCONTENT._options = None
_MSGVOTE.fields_by_name['proposal_id']._options = None
_MSGVOTE.fields_by_name['voter']._options = None
_MSGVOTE._options = None
_MSGVOTEWEIGHTED.fields_by_name['proposal_id']._options = None
_MSGVOTEWEIGHTED.fields_by_name['voter']._options = None
_MSGVOTEWEIGHTED._options = None
_MSGDEPOSIT.fields_by_name['proposal_id']._options = None
_MSGDEPOSIT.fields_by_name['depositor']._options = None
_MSGDEPOSIT.fields_by_name['amount']._options = None
_MSGDEPOSIT._options = None
_MSGUPDATEPARAMS.fields_by_name['authority']._options = None
_MSGUPDATEPARAMS.fields_by_name['params']._options = None
_MSGUPDATEPARAMS._options = None
_MSGCANCELPROPOSAL.fields_by_name['proposal_id']._options = None
_MSGCANCELPROPOSAL.fields_by_name['proposer']._options = None
_MSGCANCELPROPOSAL._options = None
_MSGCANCELPROPOSALRESPONSE.fields_by_name['proposal_id']._options = None
_MSGCANCELPROPOSALRESPONSE.fields_by_name['canceled_time']._options = None

_MSG = _descriptor.ServiceDescriptor(
  name='Msg',
  full_name='cosmos.gov.v1.Msg',
  file=DESCRIPTOR,
  index=0,
  serialized_options=_b('\200\347\260*\001'),
  serialized_start=2243,
  serialized_end=2859,
  methods=[
  _descriptor.MethodDescriptor(
    name='SubmitProposal',
    full_name='cosmos.gov.v1.Msg.SubmitProposal',
    index=0,
    containing_service=None,
    input_type=_MSGSUBMITPROPOSAL,
    output_type=_MSGSUBMITPROPOSALRESPONSE,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='ExecLegacyContent',
    full_name='cosmos.gov.v1.Msg.ExecLegacyContent',
    index=1,
    containing_service=None,
    input_type=_MSGEXECLEGACYCONTENT,
    output_type=_MSGEXECLEGACYCONTENTRESPONSE,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='Vote',
    full_name='cosmos.gov.v1.Msg.Vote',
    index=2,
    containing_service=None,
    input_type=_MSGVOTE,
    output_type=_MSGVOTERESPONSE,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='VoteWeighted',
    full_name='cosmos.gov.v1.Msg.VoteWeighted',
    index=3,
    containing_service=None,
    input_type=_MSGVOTEWEIGHTED,
    output_type=_MSGVOTEWEIGHTEDRESPONSE,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='Deposit',
    full_name='cosmos.gov.v1.Msg.Deposit',
    index=4,
    containing_service=None,
    input_type=_MSGDEPOSIT,
    output_type=_MSGDEPOSITRESPONSE,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateParams',
    full_name='cosmos.gov.v1.Msg.UpdateParams',
    index=5,
    containing_service=None,
    input_type=_MSGUPDATEPARAMS,
    output_type=_MSGUPDATEPARAMSRESPONSE,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='CancelProposal',
    full_name='cosmos.gov.v1.Msg.CancelProposal',
    index=6,
    containing_service=None,
    input_type=_MSGCANCELPROPOSAL,
    output_type=_MSGCANCELPROPOSALRESPONSE,
    serialized_options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_MSG)

DESCRIPTOR.services_by_name['Msg'] = _MSG

# @@protoc_insertion_point(module_scope)
