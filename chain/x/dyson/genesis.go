package dyson

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/org/dyson/x/dyson/keeper"
	"github.com/org/dyson/x/dyson/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the script
	for _, elem := range genState.ScriptList {
		k.SetScript(ctx, elem)
	}
	// Set all the storage
	for _, elem := range genState.StorageList {
		k.SetStorage(ctx, elem)
	}
	// Set all the foobar
	// Set all the scheduledRun
	for _, elem := range genState.ScheduledRunList {
		k.SetScheduledRun(ctx, elem)
	}
	// Set all the cron
for _, elem := range genState.CronList {
	k.SetCron(ctx, elem)
}
// this line is used by starport scaffolding # genesis/module/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	genesis.ScriptList = k.GetAllScript(ctx)
	genesis.StorageList = k.GetAllStorage(ctx)
	genesis.ScheduledRunList = k.GetAllScheduledRun(ctx)
	genesis.CronList = k.GetAllCron(ctx)
// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
