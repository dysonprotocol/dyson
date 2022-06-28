package names

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/org/dyson/testutil/sample"
	namessimulation "github.com/org/dyson/x/names/simulation"
	"github.com/org/dyson/x/names/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = namessimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgRegister = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgRegister int = 100

	opWeightMsgCreateName = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateName int = 100

	opWeightMsgUpdateName = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateName int = 100

	opWeightMsgDeleteName = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteName int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	namesGenesis := types.GenesisState{
		NameList: []types.Name{
			{
				Owner: sample.AccAddress(),
				Name:  "0",
			},
			{
				Owner: sample.AccAddress(),
				Name:  "1",
			},
		},
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&namesGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgRegister int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgRegister, &weightMsgRegister, nil,
		func(_ *rand.Rand) {
			weightMsgRegister = defaultWeightMsgRegister
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgRegister,
		namessimulation.SimulateMsgRegister(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateName int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateName, &weightMsgCreateName, nil,
		func(_ *rand.Rand) {
			weightMsgCreateName = defaultWeightMsgCreateName
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateName,
		namessimulation.SimulateMsgCreateName(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateName int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateName, &weightMsgUpdateName, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateName = defaultWeightMsgUpdateName
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateName,
		namessimulation.SimulateMsgUpdateName(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteName int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteName, &weightMsgDeleteName, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteName = defaultWeightMsgDeleteName
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteName,
		namessimulation.SimulateMsgDeleteName(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
