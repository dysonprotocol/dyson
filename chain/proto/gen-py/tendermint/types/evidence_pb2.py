# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: tendermint/types/evidence.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from gogoproto import gogo_pb2 as gogoproto_dot_gogo__pb2
from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2
from tendermint.types import types_pb2 as tendermint_dot_types_dot_types__pb2
from tendermint.types import validator_pb2 as tendermint_dot_types_dot_validator__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='tendermint/types/evidence.proto',
  package='tendermint.types',
  syntax='proto3',
  serialized_options=_b('Z3github.com/cometbft/cometbft/proto/tendermint/types'),
  serialized_pb=_b('\n\x1ftendermint/types/evidence.proto\x12\x10tendermint.types\x1a\x14gogoproto/gogo.proto\x1a\x1fgoogle/protobuf/timestamp.proto\x1a\x1ctendermint/types/types.proto\x1a tendermint/types/validator.proto\"\xe4\x01\n\x08\x45vidence\x12\x61\n\x17\x64uplicate_vote_evidence\x18\x01 \x01(\x0b\x32\'.tendermint.types.DuplicateVoteEvidenceH\x00R\x15\x64uplicateVoteEvidence\x12n\n\x1clight_client_attack_evidence\x18\x02 \x01(\x0b\x32+.tendermint.types.LightClientAttackEvidenceH\x00R\x19lightClientAttackEvidenceB\x05\n\x03sum\"\x90\x02\n\x15\x44uplicateVoteEvidence\x12-\n\x06vote_a\x18\x01 \x01(\x0b\x32\x16.tendermint.types.VoteR\x05voteA\x12-\n\x06vote_b\x18\x02 \x01(\x0b\x32\x16.tendermint.types.VoteR\x05voteB\x12,\n\x12total_voting_power\x18\x03 \x01(\x03R\x10totalVotingPower\x12\'\n\x0fvalidator_power\x18\x04 \x01(\x03R\x0evalidatorPower\x12\x42\n\ttimestamp\x18\x05 \x01(\x0b\x32\x1a.google.protobuf.TimestampB\x08\xc8\xde\x1f\x00\x90\xdf\x1f\x01R\ttimestamp\"\xcd\x02\n\x19LightClientAttackEvidence\x12I\n\x11\x63onflicting_block\x18\x01 \x01(\x0b\x32\x1c.tendermint.types.LightBlockR\x10\x63onflictingBlock\x12#\n\rcommon_height\x18\x02 \x01(\x03R\x0c\x63ommonHeight\x12N\n\x14\x62yzantine_validators\x18\x03 \x03(\x0b\x32\x1b.tendermint.types.ValidatorR\x13\x62yzantineValidators\x12,\n\x12total_voting_power\x18\x04 \x01(\x03R\x10totalVotingPower\x12\x42\n\ttimestamp\x18\x05 \x01(\x0b\x32\x1a.google.protobuf.TimestampB\x08\xc8\xde\x1f\x00\x90\xdf\x1f\x01R\ttimestamp\"L\n\x0c\x45videnceList\x12<\n\x08\x65vidence\x18\x01 \x03(\x0b\x32\x1a.tendermint.types.EvidenceB\x04\xc8\xde\x1f\x00R\x08\x65videnceB5Z3github.com/cometbft/cometbft/proto/tendermint/typesb\x06proto3')
  ,
  dependencies=[gogoproto_dot_gogo__pb2.DESCRIPTOR,google_dot_protobuf_dot_timestamp__pb2.DESCRIPTOR,tendermint_dot_types_dot_types__pb2.DESCRIPTOR,tendermint_dot_types_dot_validator__pb2.DESCRIPTOR,])




_EVIDENCE = _descriptor.Descriptor(
  name='Evidence',
  full_name='tendermint.types.Evidence',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='duplicate_vote_evidence', full_name='tendermint.types.Evidence.duplicate_vote_evidence', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='duplicateVoteEvidence', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='light_client_attack_evidence', full_name='tendermint.types.Evidence.light_client_attack_evidence', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='lightClientAttackEvidence', file=DESCRIPTOR),
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
    _descriptor.OneofDescriptor(
      name='sum', full_name='tendermint.types.Evidence.sum',
      index=0, containing_type=None, fields=[]),
  ],
  serialized_start=173,
  serialized_end=401,
)


_DUPLICATEVOTEEVIDENCE = _descriptor.Descriptor(
  name='DuplicateVoteEvidence',
  full_name='tendermint.types.DuplicateVoteEvidence',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='vote_a', full_name='tendermint.types.DuplicateVoteEvidence.vote_a', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='voteA', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='vote_b', full_name='tendermint.types.DuplicateVoteEvidence.vote_b', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='voteB', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='total_voting_power', full_name='tendermint.types.DuplicateVoteEvidence.total_voting_power', index=2,
      number=3, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='totalVotingPower', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='validator_power', full_name='tendermint.types.DuplicateVoteEvidence.validator_power', index=3,
      number=4, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='validatorPower', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='timestamp', full_name='tendermint.types.DuplicateVoteEvidence.timestamp', index=4,
      number=5, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000\220\337\037\001'), json_name='timestamp', file=DESCRIPTOR),
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
  serialized_start=404,
  serialized_end=676,
)


_LIGHTCLIENTATTACKEVIDENCE = _descriptor.Descriptor(
  name='LightClientAttackEvidence',
  full_name='tendermint.types.LightClientAttackEvidence',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='conflicting_block', full_name='tendermint.types.LightClientAttackEvidence.conflicting_block', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='conflictingBlock', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='common_height', full_name='tendermint.types.LightClientAttackEvidence.common_height', index=1,
      number=2, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='commonHeight', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='byzantine_validators', full_name='tendermint.types.LightClientAttackEvidence.byzantine_validators', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='byzantineValidators', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='total_voting_power', full_name='tendermint.types.LightClientAttackEvidence.total_voting_power', index=3,
      number=4, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='totalVotingPower', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='timestamp', full_name='tendermint.types.LightClientAttackEvidence.timestamp', index=4,
      number=5, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000\220\337\037\001'), json_name='timestamp', file=DESCRIPTOR),
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
  serialized_start=679,
  serialized_end=1012,
)


_EVIDENCELIST = _descriptor.Descriptor(
  name='EvidenceList',
  full_name='tendermint.types.EvidenceList',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='evidence', full_name='tendermint.types.EvidenceList.evidence', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000'), json_name='evidence', file=DESCRIPTOR),
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
  serialized_start=1014,
  serialized_end=1090,
)

_EVIDENCE.fields_by_name['duplicate_vote_evidence'].message_type = _DUPLICATEVOTEEVIDENCE
_EVIDENCE.fields_by_name['light_client_attack_evidence'].message_type = _LIGHTCLIENTATTACKEVIDENCE
_EVIDENCE.oneofs_by_name['sum'].fields.append(
  _EVIDENCE.fields_by_name['duplicate_vote_evidence'])
_EVIDENCE.fields_by_name['duplicate_vote_evidence'].containing_oneof = _EVIDENCE.oneofs_by_name['sum']
_EVIDENCE.oneofs_by_name['sum'].fields.append(
  _EVIDENCE.fields_by_name['light_client_attack_evidence'])
_EVIDENCE.fields_by_name['light_client_attack_evidence'].containing_oneof = _EVIDENCE.oneofs_by_name['sum']
_DUPLICATEVOTEEVIDENCE.fields_by_name['vote_a'].message_type = tendermint_dot_types_dot_types__pb2._VOTE
_DUPLICATEVOTEEVIDENCE.fields_by_name['vote_b'].message_type = tendermint_dot_types_dot_types__pb2._VOTE
_DUPLICATEVOTEEVIDENCE.fields_by_name['timestamp'].message_type = google_dot_protobuf_dot_timestamp__pb2._TIMESTAMP
_LIGHTCLIENTATTACKEVIDENCE.fields_by_name['conflicting_block'].message_type = tendermint_dot_types_dot_types__pb2._LIGHTBLOCK
_LIGHTCLIENTATTACKEVIDENCE.fields_by_name['byzantine_validators'].message_type = tendermint_dot_types_dot_validator__pb2._VALIDATOR
_LIGHTCLIENTATTACKEVIDENCE.fields_by_name['timestamp'].message_type = google_dot_protobuf_dot_timestamp__pb2._TIMESTAMP
_EVIDENCELIST.fields_by_name['evidence'].message_type = _EVIDENCE
DESCRIPTOR.message_types_by_name['Evidence'] = _EVIDENCE
DESCRIPTOR.message_types_by_name['DuplicateVoteEvidence'] = _DUPLICATEVOTEEVIDENCE
DESCRIPTOR.message_types_by_name['LightClientAttackEvidence'] = _LIGHTCLIENTATTACKEVIDENCE
DESCRIPTOR.message_types_by_name['EvidenceList'] = _EVIDENCELIST
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Evidence = _reflection.GeneratedProtocolMessageType('Evidence', (_message.Message,), dict(
  DESCRIPTOR = _EVIDENCE,
  __module__ = 'tendermint.types.evidence_pb2'
  # @@protoc_insertion_point(class_scope:tendermint.types.Evidence)
  ))
_sym_db.RegisterMessage(Evidence)

DuplicateVoteEvidence = _reflection.GeneratedProtocolMessageType('DuplicateVoteEvidence', (_message.Message,), dict(
  DESCRIPTOR = _DUPLICATEVOTEEVIDENCE,
  __module__ = 'tendermint.types.evidence_pb2'
  # @@protoc_insertion_point(class_scope:tendermint.types.DuplicateVoteEvidence)
  ))
_sym_db.RegisterMessage(DuplicateVoteEvidence)

LightClientAttackEvidence = _reflection.GeneratedProtocolMessageType('LightClientAttackEvidence', (_message.Message,), dict(
  DESCRIPTOR = _LIGHTCLIENTATTACKEVIDENCE,
  __module__ = 'tendermint.types.evidence_pb2'
  # @@protoc_insertion_point(class_scope:tendermint.types.LightClientAttackEvidence)
  ))
_sym_db.RegisterMessage(LightClientAttackEvidence)

EvidenceList = _reflection.GeneratedProtocolMessageType('EvidenceList', (_message.Message,), dict(
  DESCRIPTOR = _EVIDENCELIST,
  __module__ = 'tendermint.types.evidence_pb2'
  # @@protoc_insertion_point(class_scope:tendermint.types.EvidenceList)
  ))
_sym_db.RegisterMessage(EvidenceList)


DESCRIPTOR._options = None
_DUPLICATEVOTEEVIDENCE.fields_by_name['timestamp']._options = None
_LIGHTCLIENTATTACKEVIDENCE.fields_by_name['timestamp']._options = None
_EVIDENCELIST.fields_by_name['evidence']._options = None
# @@protoc_insertion_point(module_scope)
