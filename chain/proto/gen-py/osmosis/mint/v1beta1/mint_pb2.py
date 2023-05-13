# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: osmosis/mint/v1beta1/mint.proto

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
from google.protobuf import any_pb2 as google_dot_protobuf_dot_any__pb2
from google.protobuf import duration_pb2 as google_dot_protobuf_dot_duration__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='osmosis/mint/v1beta1/mint.proto',
  package='osmosis.mint.v1beta1',
  syntax='proto3',
  serialized_options=_b('Z0github.com/osmosis-labs/osmosis/v12/x/mint/types'),
  serialized_pb=_b('\n\x1fosmosis/mint/v1beta1/mint.proto\x12\x14osmosis.mint.v1beta1\x1a\x14gogoproto/gogo.proto\x1a\x1fgoogle/protobuf/timestamp.proto\x1a\x19google/protobuf/any.proto\x1a\x1egoogle/protobuf/duration.proto\"~\n\x06Minter\x12t\n\x10\x65poch_provisions\x18\x01 \x01(\tBI\xc8\xde\x1f\x00\xda\xde\x1f&github.com/cosmos/cosmos-sdk/types.Dec\xf2\xde\x1f\x17yaml:\"epoch_provisions\"R\x0f\x65pochProvisions\"\x98\x01\n\x0fWeightedAddress\x12,\n\x07\x61\x64\x64ress\x18\x01 \x01(\tB\x12\xf2\xde\x1f\x0eyaml:\"address\"R\x07\x61\x64\x64ress\x12W\n\x06weight\x18\x02 \x01(\tB?\xc8\xde\x1f\x00\xda\xde\x1f&github.com/cosmos/cosmos-sdk/types.Dec\xf2\xde\x1f\ryaml:\"weight\"R\x06weight\"\xd1\x03\n\x17\x44istributionProportions\x12Z\n\x07staking\x18\x01 \x01(\tB@\xc8\xde\x1f\x00\xda\xde\x1f&github.com/cosmos/cosmos-sdk/types.Dec\xf2\xde\x1f\x0eyaml:\"staking\"R\x07staking\x12q\n\x0fpool_incentives\x18\x02 \x01(\tBH\xc8\xde\x1f\x00\xda\xde\x1f&github.com/cosmos/cosmos-sdk/types.Dec\xf2\xde\x1f\x16yaml:\"pool_incentives\"R\x0epoolIncentives\x12w\n\x11\x64\x65veloper_rewards\x18\x03 \x01(\tBJ\xc8\xde\x1f\x00\xda\xde\x1f&github.com/cosmos/cosmos-sdk/types.Dec\xf2\xde\x1f\x18yaml:\"developer_rewards\"R\x10\x64\x65veloperRewards\x12n\n\x0e\x63ommunity_pool\x18\x04 \x01(\tBG\xc8\xde\x1f\x00\xda\xde\x1f&github.com/cosmos/cosmos-sdk/types.Dec\xf2\xde\x1f\x15yaml:\"community_pool\"R\rcommunityPool\"\xff\x06\n\x06Params\x12\x1d\n\nmint_denom\x18\x01 \x01(\tR\tmintDenom\x12\x8b\x01\n\x18genesis_epoch_provisions\x18\x02 \x01(\tBQ\xc8\xde\x1f\x00\xda\xde\x1f&github.com/cosmos/cosmos-sdk/types.Dec\xf2\xde\x1f\x1fyaml:\"genesis_epoch_provisions\"R\x16genesisEpochProvisions\x12\x46\n\x10\x65poch_identifier\x18\x03 \x01(\tB\x1b\xf2\xde\x1f\x17yaml:\"epoch_identifier\"R\x0f\x65pochIdentifier\x12\x62\n\x1areduction_period_in_epochs\x18\x04 \x01(\x03\x42%\xf2\xde\x1f!yaml:\"reduction_period_in_epochs\"R\x17reductionPeriodInEpochs\x12t\n\x10reduction_factor\x18\x05 \x01(\tBI\xc8\xde\x1f\x00\xda\xde\x1f&github.com/cosmos/cosmos-sdk/types.Dec\xf2\xde\x1f\x17yaml:\"reduction_factor\"R\x0freductionFactor\x12n\n\x18\x64istribution_proportions\x18\x06 \x01(\x0b\x32-.osmosis.mint.v1beta1.DistributionProportionsB\x04\xc8\xde\x1f\x00R\x17\x64istributionProportions\x12\xa1\x01\n$weighted_developer_rewards_receivers\x18\x07 \x03(\x0b\x32%.osmosis.mint.v1beta1.WeightedAddressB)\xc8\xde\x1f\x00\xf2\xde\x1f!yaml:\"developer_rewards_receiver\"R!weightedDeveloperRewardsReceivers\x12\x8b\x01\n(minting_rewards_distribution_start_epoch\x18\x08 \x01(\x03\x42\x33\xf2\xde\x1f/yaml:\"minting_rewards_distribution_start_epoch\"R$mintingRewardsDistributionStartEpoch:\x04\x98\xa0\x1f\x00\x42\x32Z0github.com/osmosis-labs/osmosis/v12/x/mint/typesb\x06proto3')
  ,
  dependencies=[gogoproto_dot_gogo__pb2.DESCRIPTOR,google_dot_protobuf_dot_timestamp__pb2.DESCRIPTOR,google_dot_protobuf_dot_any__pb2.DESCRIPTOR,google_dot_protobuf_dot_duration__pb2.DESCRIPTOR,])




_MINTER = _descriptor.Descriptor(
  name='Minter',
  full_name='osmosis.mint.v1beta1.Minter',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='epoch_provisions', full_name='osmosis.mint.v1beta1.Minter.epoch_provisions', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000\332\336\037&github.com/cosmos/cosmos-sdk/types.Dec\362\336\037\027yaml:\"epoch_provisions\"'), json_name='epochProvisions', file=DESCRIPTOR),
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
  serialized_start=171,
  serialized_end=297,
)


_WEIGHTEDADDRESS = _descriptor.Descriptor(
  name='WeightedAddress',
  full_name='osmosis.mint.v1beta1.WeightedAddress',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='address', full_name='osmosis.mint.v1beta1.WeightedAddress.address', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\362\336\037\016yaml:\"address\"'), json_name='address', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='weight', full_name='osmosis.mint.v1beta1.WeightedAddress.weight', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000\332\336\037&github.com/cosmos/cosmos-sdk/types.Dec\362\336\037\ryaml:\"weight\"'), json_name='weight', file=DESCRIPTOR),
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
  serialized_start=300,
  serialized_end=452,
)


_DISTRIBUTIONPROPORTIONS = _descriptor.Descriptor(
  name='DistributionProportions',
  full_name='osmosis.mint.v1beta1.DistributionProportions',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='staking', full_name='osmosis.mint.v1beta1.DistributionProportions.staking', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000\332\336\037&github.com/cosmos/cosmos-sdk/types.Dec\362\336\037\016yaml:\"staking\"'), json_name='staking', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='pool_incentives', full_name='osmosis.mint.v1beta1.DistributionProportions.pool_incentives', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000\332\336\037&github.com/cosmos/cosmos-sdk/types.Dec\362\336\037\026yaml:\"pool_incentives\"'), json_name='poolIncentives', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='developer_rewards', full_name='osmosis.mint.v1beta1.DistributionProportions.developer_rewards', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000\332\336\037&github.com/cosmos/cosmos-sdk/types.Dec\362\336\037\030yaml:\"developer_rewards\"'), json_name='developerRewards', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='community_pool', full_name='osmosis.mint.v1beta1.DistributionProportions.community_pool', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000\332\336\037&github.com/cosmos/cosmos-sdk/types.Dec\362\336\037\025yaml:\"community_pool\"'), json_name='communityPool', file=DESCRIPTOR),
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
  serialized_start=455,
  serialized_end=920,
)


_PARAMS = _descriptor.Descriptor(
  name='Params',
  full_name='osmosis.mint.v1beta1.Params',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='mint_denom', full_name='osmosis.mint.v1beta1.Params.mint_denom', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='mintDenom', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='genesis_epoch_provisions', full_name='osmosis.mint.v1beta1.Params.genesis_epoch_provisions', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000\332\336\037&github.com/cosmos/cosmos-sdk/types.Dec\362\336\037\037yaml:\"genesis_epoch_provisions\"'), json_name='genesisEpochProvisions', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='epoch_identifier', full_name='osmosis.mint.v1beta1.Params.epoch_identifier', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\362\336\037\027yaml:\"epoch_identifier\"'), json_name='epochIdentifier', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='reduction_period_in_epochs', full_name='osmosis.mint.v1beta1.Params.reduction_period_in_epochs', index=3,
      number=4, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\362\336\037!yaml:\"reduction_period_in_epochs\"'), json_name='reductionPeriodInEpochs', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='reduction_factor', full_name='osmosis.mint.v1beta1.Params.reduction_factor', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000\332\336\037&github.com/cosmos/cosmos-sdk/types.Dec\362\336\037\027yaml:\"reduction_factor\"'), json_name='reductionFactor', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='distribution_proportions', full_name='osmosis.mint.v1beta1.Params.distribution_proportions', index=5,
      number=6, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000'), json_name='distributionProportions', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='weighted_developer_rewards_receivers', full_name='osmosis.mint.v1beta1.Params.weighted_developer_rewards_receivers', index=6,
      number=7, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\310\336\037\000\362\336\037!yaml:\"developer_rewards_receiver\"'), json_name='weightedDeveloperRewardsReceivers', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='minting_rewards_distribution_start_epoch', full_name='osmosis.mint.v1beta1.Params.minting_rewards_distribution_start_epoch', index=7,
      number=8, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=_b('\362\336\037/yaml:\"minting_rewards_distribution_start_epoch\"'), json_name='mintingRewardsDistributionStartEpoch', file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=_b('\230\240\037\000'),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=923,
  serialized_end=1818,
)

_PARAMS.fields_by_name['distribution_proportions'].message_type = _DISTRIBUTIONPROPORTIONS
_PARAMS.fields_by_name['weighted_developer_rewards_receivers'].message_type = _WEIGHTEDADDRESS
DESCRIPTOR.message_types_by_name['Minter'] = _MINTER
DESCRIPTOR.message_types_by_name['WeightedAddress'] = _WEIGHTEDADDRESS
DESCRIPTOR.message_types_by_name['DistributionProportions'] = _DISTRIBUTIONPROPORTIONS
DESCRIPTOR.message_types_by_name['Params'] = _PARAMS
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Minter = _reflection.GeneratedProtocolMessageType('Minter', (_message.Message,), dict(
  DESCRIPTOR = _MINTER,
  __module__ = 'osmosis.mint.v1beta1.mint_pb2'
  # @@protoc_insertion_point(class_scope:osmosis.mint.v1beta1.Minter)
  ))
_sym_db.RegisterMessage(Minter)

WeightedAddress = _reflection.GeneratedProtocolMessageType('WeightedAddress', (_message.Message,), dict(
  DESCRIPTOR = _WEIGHTEDADDRESS,
  __module__ = 'osmosis.mint.v1beta1.mint_pb2'
  # @@protoc_insertion_point(class_scope:osmosis.mint.v1beta1.WeightedAddress)
  ))
_sym_db.RegisterMessage(WeightedAddress)

DistributionProportions = _reflection.GeneratedProtocolMessageType('DistributionProportions', (_message.Message,), dict(
  DESCRIPTOR = _DISTRIBUTIONPROPORTIONS,
  __module__ = 'osmosis.mint.v1beta1.mint_pb2'
  # @@protoc_insertion_point(class_scope:osmosis.mint.v1beta1.DistributionProportions)
  ))
_sym_db.RegisterMessage(DistributionProportions)

Params = _reflection.GeneratedProtocolMessageType('Params', (_message.Message,), dict(
  DESCRIPTOR = _PARAMS,
  __module__ = 'osmosis.mint.v1beta1.mint_pb2'
  # @@protoc_insertion_point(class_scope:osmosis.mint.v1beta1.Params)
  ))
_sym_db.RegisterMessage(Params)


DESCRIPTOR._options = None
_MINTER.fields_by_name['epoch_provisions']._options = None
_WEIGHTEDADDRESS.fields_by_name['address']._options = None
_WEIGHTEDADDRESS.fields_by_name['weight']._options = None
_DISTRIBUTIONPROPORTIONS.fields_by_name['staking']._options = None
_DISTRIBUTIONPROPORTIONS.fields_by_name['pool_incentives']._options = None
_DISTRIBUTIONPROPORTIONS.fields_by_name['developer_rewards']._options = None
_DISTRIBUTIONPROPORTIONS.fields_by_name['community_pool']._options = None
_PARAMS.fields_by_name['genesis_epoch_provisions']._options = None
_PARAMS.fields_by_name['epoch_identifier']._options = None
_PARAMS.fields_by_name['reduction_period_in_epochs']._options = None
_PARAMS.fields_by_name['reduction_factor']._options = None
_PARAMS.fields_by_name['distribution_proportions']._options = None
_PARAMS.fields_by_name['weighted_developer_rewards_receivers']._options = None
_PARAMS.fields_by_name['minting_rewards_distribution_start_epoch']._options = None
_PARAMS._options = None
# @@protoc_insertion_point(module_scope)
