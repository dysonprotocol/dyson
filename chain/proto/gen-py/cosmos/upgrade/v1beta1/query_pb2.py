# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: cosmos/upgrade/v1beta1/query.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from cosmos.upgrade.v1beta1 import upgrade_pb2 as cosmos_dot_upgrade_dot_v1beta1_dot_upgrade__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='cosmos/upgrade/v1beta1/query.proto',
  package='cosmos.upgrade.v1beta1',
  syntax='proto3',
  serialized_options=_b('Z\034cosmossdk.io/x/upgrade/types'),
  serialized_pb=_b('\n\"cosmos/upgrade/v1beta1/query.proto\x12\x16\x63osmos.upgrade.v1beta1\x1a\x1cgoogle/api/annotations.proto\x1a$cosmos/upgrade/v1beta1/upgrade.proto\"\x19\n\x17QueryCurrentPlanRequest\"L\n\x18QueryCurrentPlanResponse\x12\x30\n\x04plan\x18\x01 \x01(\x0b\x32\x1c.cosmos.upgrade.v1beta1.PlanR\x04plan\"-\n\x17QueryAppliedPlanRequest\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\"2\n\x18QueryAppliedPlanResponse\x12\x16\n\x06height\x18\x01 \x01(\x03R\x06height\"I\n\"QueryUpgradedConsensusStateRequest\x12\x1f\n\x0blast_height\x18\x01 \x01(\x03R\nlastHeight:\x02\x18\x01\"i\n#QueryUpgradedConsensusStateResponse\x12\x38\n\x18upgraded_consensus_state\x18\x02 \x01(\x0cR\x16upgradedConsensusState:\x02\x18\x01J\x04\x08\x01\x10\x02\"=\n\x1aQueryModuleVersionsRequest\x12\x1f\n\x0bmodule_name\x18\x01 \x01(\tR\nmoduleName\"m\n\x1bQueryModuleVersionsResponse\x12N\n\x0fmodule_versions\x18\x01 \x03(\x0b\x32%.cosmos.upgrade.v1beta1.ModuleVersionR\x0emoduleVersions\"\x17\n\x15QueryAuthorityRequest\"2\n\x16QueryAuthorityResponse\x12\x18\n\x07\x61\x64\x64ress\x18\x01 \x01(\tR\x07\x61\x64\x64ress2\xf4\x06\n\x05Query\x12\x9e\x01\n\x0b\x43urrentPlan\x12/.cosmos.upgrade.v1beta1.QueryCurrentPlanRequest\x1a\x30.cosmos.upgrade.v1beta1.QueryCurrentPlanResponse\",\x82\xd3\xe4\x93\x02&\x12$/cosmos/upgrade/v1beta1/current_plan\x12\xa5\x01\n\x0b\x41ppliedPlan\x12/.cosmos.upgrade.v1beta1.QueryAppliedPlanRequest\x1a\x30.cosmos.upgrade.v1beta1.QueryAppliedPlanResponse\"3\x82\xd3\xe4\x93\x02-\x12+/cosmos/upgrade/v1beta1/applied_plan/{name}\x12\xdc\x01\n\x16UpgradedConsensusState\x12:.cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest\x1a;.cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse\"I\x88\x02\x01\x82\xd3\xe4\x93\x02@\x12>/cosmos/upgrade/v1beta1/upgraded_consensus_state/{last_height}\x12\xaa\x01\n\x0eModuleVersions\x12\x32.cosmos.upgrade.v1beta1.QueryModuleVersionsRequest\x1a\x33.cosmos.upgrade.v1beta1.QueryModuleVersionsResponse\"/\x82\xd3\xe4\x93\x02)\x12\'/cosmos/upgrade/v1beta1/module_versions\x12\x95\x01\n\tAuthority\x12-.cosmos.upgrade.v1beta1.QueryAuthorityRequest\x1a..cosmos.upgrade.v1beta1.QueryAuthorityResponse\")\x82\xd3\xe4\x93\x02#\x12!/cosmos/upgrade/v1beta1/authorityB\x1eZ\x1c\x63osmossdk.io/x/upgrade/typesb\x06proto3')
  ,
  dependencies=[google_dot_api_dot_annotations__pb2.DESCRIPTOR,cosmos_dot_upgrade_dot_v1beta1_dot_upgrade__pb2.DESCRIPTOR,])




_QUERYCURRENTPLANREQUEST = _descriptor.Descriptor(
  name='QueryCurrentPlanRequest',
  full_name='cosmos.upgrade.v1beta1.QueryCurrentPlanRequest',
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
  serialized_start=130,
  serialized_end=155,
)


_QUERYCURRENTPLANRESPONSE = _descriptor.Descriptor(
  name='QueryCurrentPlanResponse',
  full_name='cosmos.upgrade.v1beta1.QueryCurrentPlanResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='plan', full_name='cosmos.upgrade.v1beta1.QueryCurrentPlanResponse.plan', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='plan', file=DESCRIPTOR),
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
  serialized_start=157,
  serialized_end=233,
)


_QUERYAPPLIEDPLANREQUEST = _descriptor.Descriptor(
  name='QueryAppliedPlanRequest',
  full_name='cosmos.upgrade.v1beta1.QueryAppliedPlanRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='cosmos.upgrade.v1beta1.QueryAppliedPlanRequest.name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='name', file=DESCRIPTOR),
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
  serialized_start=235,
  serialized_end=280,
)


_QUERYAPPLIEDPLANRESPONSE = _descriptor.Descriptor(
  name='QueryAppliedPlanResponse',
  full_name='cosmos.upgrade.v1beta1.QueryAppliedPlanResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='height', full_name='cosmos.upgrade.v1beta1.QueryAppliedPlanResponse.height', index=0,
      number=1, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='height', file=DESCRIPTOR),
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
  serialized_start=282,
  serialized_end=332,
)


_QUERYUPGRADEDCONSENSUSSTATEREQUEST = _descriptor.Descriptor(
  name='QueryUpgradedConsensusStateRequest',
  full_name='cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='last_height', full_name='cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest.last_height', index=0,
      number=1, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='lastHeight', file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=_b('\030\001'),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=334,
  serialized_end=407,
)


_QUERYUPGRADEDCONSENSUSSTATERESPONSE = _descriptor.Descriptor(
  name='QueryUpgradedConsensusStateResponse',
  full_name='cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='upgraded_consensus_state', full_name='cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse.upgraded_consensus_state', index=0,
      number=2, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='upgradedConsensusState', file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=_b('\030\001'),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=409,
  serialized_end=514,
)


_QUERYMODULEVERSIONSREQUEST = _descriptor.Descriptor(
  name='QueryModuleVersionsRequest',
  full_name='cosmos.upgrade.v1beta1.QueryModuleVersionsRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='module_name', full_name='cosmos.upgrade.v1beta1.QueryModuleVersionsRequest.module_name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='moduleName', file=DESCRIPTOR),
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
  serialized_start=516,
  serialized_end=577,
)


_QUERYMODULEVERSIONSRESPONSE = _descriptor.Descriptor(
  name='QueryModuleVersionsResponse',
  full_name='cosmos.upgrade.v1beta1.QueryModuleVersionsResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='module_versions', full_name='cosmos.upgrade.v1beta1.QueryModuleVersionsResponse.module_versions', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='moduleVersions', file=DESCRIPTOR),
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
  serialized_start=579,
  serialized_end=688,
)


_QUERYAUTHORITYREQUEST = _descriptor.Descriptor(
  name='QueryAuthorityRequest',
  full_name='cosmos.upgrade.v1beta1.QueryAuthorityRequest',
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
  serialized_start=690,
  serialized_end=713,
)


_QUERYAUTHORITYRESPONSE = _descriptor.Descriptor(
  name='QueryAuthorityResponse',
  full_name='cosmos.upgrade.v1beta1.QueryAuthorityResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='address', full_name='cosmos.upgrade.v1beta1.QueryAuthorityResponse.address', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='address', file=DESCRIPTOR),
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
  serialized_start=715,
  serialized_end=765,
)

_QUERYCURRENTPLANRESPONSE.fields_by_name['plan'].message_type = cosmos_dot_upgrade_dot_v1beta1_dot_upgrade__pb2._PLAN
_QUERYMODULEVERSIONSRESPONSE.fields_by_name['module_versions'].message_type = cosmos_dot_upgrade_dot_v1beta1_dot_upgrade__pb2._MODULEVERSION
DESCRIPTOR.message_types_by_name['QueryCurrentPlanRequest'] = _QUERYCURRENTPLANREQUEST
DESCRIPTOR.message_types_by_name['QueryCurrentPlanResponse'] = _QUERYCURRENTPLANRESPONSE
DESCRIPTOR.message_types_by_name['QueryAppliedPlanRequest'] = _QUERYAPPLIEDPLANREQUEST
DESCRIPTOR.message_types_by_name['QueryAppliedPlanResponse'] = _QUERYAPPLIEDPLANRESPONSE
DESCRIPTOR.message_types_by_name['QueryUpgradedConsensusStateRequest'] = _QUERYUPGRADEDCONSENSUSSTATEREQUEST
DESCRIPTOR.message_types_by_name['QueryUpgradedConsensusStateResponse'] = _QUERYUPGRADEDCONSENSUSSTATERESPONSE
DESCRIPTOR.message_types_by_name['QueryModuleVersionsRequest'] = _QUERYMODULEVERSIONSREQUEST
DESCRIPTOR.message_types_by_name['QueryModuleVersionsResponse'] = _QUERYMODULEVERSIONSRESPONSE
DESCRIPTOR.message_types_by_name['QueryAuthorityRequest'] = _QUERYAUTHORITYREQUEST
DESCRIPTOR.message_types_by_name['QueryAuthorityResponse'] = _QUERYAUTHORITYRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

QueryCurrentPlanRequest = _reflection.GeneratedProtocolMessageType('QueryCurrentPlanRequest', (_message.Message,), dict(
  DESCRIPTOR = _QUERYCURRENTPLANREQUEST,
  __module__ = 'cosmos.upgrade.v1beta1.query_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.upgrade.v1beta1.QueryCurrentPlanRequest)
  ))
_sym_db.RegisterMessage(QueryCurrentPlanRequest)

QueryCurrentPlanResponse = _reflection.GeneratedProtocolMessageType('QueryCurrentPlanResponse', (_message.Message,), dict(
  DESCRIPTOR = _QUERYCURRENTPLANRESPONSE,
  __module__ = 'cosmos.upgrade.v1beta1.query_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.upgrade.v1beta1.QueryCurrentPlanResponse)
  ))
_sym_db.RegisterMessage(QueryCurrentPlanResponse)

QueryAppliedPlanRequest = _reflection.GeneratedProtocolMessageType('QueryAppliedPlanRequest', (_message.Message,), dict(
  DESCRIPTOR = _QUERYAPPLIEDPLANREQUEST,
  __module__ = 'cosmos.upgrade.v1beta1.query_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.upgrade.v1beta1.QueryAppliedPlanRequest)
  ))
_sym_db.RegisterMessage(QueryAppliedPlanRequest)

QueryAppliedPlanResponse = _reflection.GeneratedProtocolMessageType('QueryAppliedPlanResponse', (_message.Message,), dict(
  DESCRIPTOR = _QUERYAPPLIEDPLANRESPONSE,
  __module__ = 'cosmos.upgrade.v1beta1.query_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.upgrade.v1beta1.QueryAppliedPlanResponse)
  ))
_sym_db.RegisterMessage(QueryAppliedPlanResponse)

QueryUpgradedConsensusStateRequest = _reflection.GeneratedProtocolMessageType('QueryUpgradedConsensusStateRequest', (_message.Message,), dict(
  DESCRIPTOR = _QUERYUPGRADEDCONSENSUSSTATEREQUEST,
  __module__ = 'cosmos.upgrade.v1beta1.query_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest)
  ))
_sym_db.RegisterMessage(QueryUpgradedConsensusStateRequest)

QueryUpgradedConsensusStateResponse = _reflection.GeneratedProtocolMessageType('QueryUpgradedConsensusStateResponse', (_message.Message,), dict(
  DESCRIPTOR = _QUERYUPGRADEDCONSENSUSSTATERESPONSE,
  __module__ = 'cosmos.upgrade.v1beta1.query_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse)
  ))
_sym_db.RegisterMessage(QueryUpgradedConsensusStateResponse)

QueryModuleVersionsRequest = _reflection.GeneratedProtocolMessageType('QueryModuleVersionsRequest', (_message.Message,), dict(
  DESCRIPTOR = _QUERYMODULEVERSIONSREQUEST,
  __module__ = 'cosmos.upgrade.v1beta1.query_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.upgrade.v1beta1.QueryModuleVersionsRequest)
  ))
_sym_db.RegisterMessage(QueryModuleVersionsRequest)

QueryModuleVersionsResponse = _reflection.GeneratedProtocolMessageType('QueryModuleVersionsResponse', (_message.Message,), dict(
  DESCRIPTOR = _QUERYMODULEVERSIONSRESPONSE,
  __module__ = 'cosmos.upgrade.v1beta1.query_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.upgrade.v1beta1.QueryModuleVersionsResponse)
  ))
_sym_db.RegisterMessage(QueryModuleVersionsResponse)

QueryAuthorityRequest = _reflection.GeneratedProtocolMessageType('QueryAuthorityRequest', (_message.Message,), dict(
  DESCRIPTOR = _QUERYAUTHORITYREQUEST,
  __module__ = 'cosmos.upgrade.v1beta1.query_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.upgrade.v1beta1.QueryAuthorityRequest)
  ))
_sym_db.RegisterMessage(QueryAuthorityRequest)

QueryAuthorityResponse = _reflection.GeneratedProtocolMessageType('QueryAuthorityResponse', (_message.Message,), dict(
  DESCRIPTOR = _QUERYAUTHORITYRESPONSE,
  __module__ = 'cosmos.upgrade.v1beta1.query_pb2'
  # @@protoc_insertion_point(class_scope:cosmos.upgrade.v1beta1.QueryAuthorityResponse)
  ))
_sym_db.RegisterMessage(QueryAuthorityResponse)


DESCRIPTOR._options = None
_QUERYUPGRADEDCONSENSUSSTATEREQUEST._options = None
_QUERYUPGRADEDCONSENSUSSTATERESPONSE._options = None

_QUERY = _descriptor.ServiceDescriptor(
  name='Query',
  full_name='cosmos.upgrade.v1beta1.Query',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  serialized_start=768,
  serialized_end=1652,
  methods=[
  _descriptor.MethodDescriptor(
    name='CurrentPlan',
    full_name='cosmos.upgrade.v1beta1.Query.CurrentPlan',
    index=0,
    containing_service=None,
    input_type=_QUERYCURRENTPLANREQUEST,
    output_type=_QUERYCURRENTPLANRESPONSE,
    serialized_options=_b('\202\323\344\223\002&\022$/cosmos/upgrade/v1beta1/current_plan'),
  ),
  _descriptor.MethodDescriptor(
    name='AppliedPlan',
    full_name='cosmos.upgrade.v1beta1.Query.AppliedPlan',
    index=1,
    containing_service=None,
    input_type=_QUERYAPPLIEDPLANREQUEST,
    output_type=_QUERYAPPLIEDPLANRESPONSE,
    serialized_options=_b('\202\323\344\223\002-\022+/cosmos/upgrade/v1beta1/applied_plan/{name}'),
  ),
  _descriptor.MethodDescriptor(
    name='UpgradedConsensusState',
    full_name='cosmos.upgrade.v1beta1.Query.UpgradedConsensusState',
    index=2,
    containing_service=None,
    input_type=_QUERYUPGRADEDCONSENSUSSTATEREQUEST,
    output_type=_QUERYUPGRADEDCONSENSUSSTATERESPONSE,
    serialized_options=_b('\210\002\001\202\323\344\223\002@\022>/cosmos/upgrade/v1beta1/upgraded_consensus_state/{last_height}'),
  ),
  _descriptor.MethodDescriptor(
    name='ModuleVersions',
    full_name='cosmos.upgrade.v1beta1.Query.ModuleVersions',
    index=3,
    containing_service=None,
    input_type=_QUERYMODULEVERSIONSREQUEST,
    output_type=_QUERYMODULEVERSIONSRESPONSE,
    serialized_options=_b('\202\323\344\223\002)\022\'/cosmos/upgrade/v1beta1/module_versions'),
  ),
  _descriptor.MethodDescriptor(
    name='Authority',
    full_name='cosmos.upgrade.v1beta1.Query.Authority',
    index=4,
    containing_service=None,
    input_type=_QUERYAUTHORITYREQUEST,
    output_type=_QUERYAUTHORITYRESPONSE,
    serialized_options=_b('\202\323\344\223\002#\022!/cosmos/upgrade/v1beta1/authority'),
  ),
])
_sym_db.RegisterServiceDescriptor(_QUERY)

DESCRIPTOR.services_by_name['Query'] = _QUERY

# @@protoc_insertion_point(module_scope)
