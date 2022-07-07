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
	opWeightMsgSetPriceAndExtend = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgSetPriceAndExtend int = 100

	opWeightMsgOfferTo = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgOfferTo int = 100

	opWeightMsgAccept = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgAccept int = 100

	opWeightMsgBuy = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgBuy int = 100

	opWeightMsgMintCoins = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgMintCoins int = 100

	opWeightMsgBurnCoins = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgBurnCoins int = 100

	opWeightMsgForceTransfer = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgForceTransfer int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	namesGenesis := types.GenesisState{
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

	var weightMsgSetPriceAndExtend int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgSetPriceAndExtend, &weightMsgSetPriceAndExtend, nil,
		func(_ *rand.Rand) {
			weightMsgSetPriceAndExtend = defaultWeightMsgSetPriceAndExtend
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgSetPriceAndExtend,
		namessimulation.SimulateMsgSetPriceAndExtend(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgOfferTo int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgOfferTo, &weightMsgOfferTo, nil,
		func(_ *rand.Rand) {
			weightMsgOfferTo = defaultWeightMsgOfferTo
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgOfferTo,
		namessimulation.SimulateMsgOfferTo(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgAccept int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgAccept, &weightMsgAccept, nil,
		func(_ *rand.Rand) {
			weightMsgAccept = defaultWeightMsgAccept
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgAccept,
		namessimulation.SimulateMsgAccept(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgBuy int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgBuy, &weightMsgBuy, nil,
		func(_ *rand.Rand) {
			weightMsgBuy = defaultWeightMsgBuy
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgBuy,
		namessimulation.SimulateMsgBuy(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgMintCoins int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgMintCoins, &weightMsgMintCoins, nil,
		func(_ *rand.Rand) {
			weightMsgMintCoins = defaultWeightMsgMintCoins
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgMintCoins,
		namessimulation.SimulateMsgMintCoins(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgBurnCoins int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgBurnCoins, &weightMsgBurnCoins, nil,
		func(_ *rand.Rand) {
			weightMsgBurnCoins = defaultWeightMsgBurnCoins
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgBurnCoins,
		namessimulation.SimulateMsgBurnCoins(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgForceTransfer int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgForceTransfer, &weightMsgForceTransfer, nil,
		func(_ *rand.Rand) {
			weightMsgForceTransfer = defaultWeightMsgForceTransfer
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgForceTransfer,
		namessimulation.SimulateMsgForceTransfer(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
