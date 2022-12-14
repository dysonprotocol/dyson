package names

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/org/dyson/x/names/keeper"
	"github.com/org/dyson/x/names/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the name
	for _, elem := range genState.NameList {
		k.SetName(ctx, elem)
	}
	// Set all the expirations
	for _, elem := range genState.ExpirationsList {
		k.SetExpirations(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.NameList = k.GetAllName(ctx)
	genesis.ExpirationsList = k.GetAllExpirations(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
