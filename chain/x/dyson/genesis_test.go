package dyson_test

import (
	"testing"

	keepertest "github.com/org/dyson/testutil/keeper"
	"github.com/org/dyson/testutil/nullify"
	"github.com/org/dyson/x/dyson"
	"github.com/org/dyson/x/dyson/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{

		ScriptList: []types.Script{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		StorageList: []types.Storage{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		ScheduledRunList: []types.ScheduledRun{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		CronList: []types.Cron{
		{
			BlockHeight: "0",
},
		{
			BlockHeight: "1",
},
	},
	// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.DysonKeeper(t)
	dyson.InitGenesis(ctx, *k, genesisState)
	got := dyson.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.ScriptList, got.ScriptList)
	require.ElementsMatch(t, genesisState.StorageList, got.StorageList)
	require.ElementsMatch(t, genesisState.ScheduledRunList, got.ScheduledRunList)
	require.ElementsMatch(t, genesisState.CronList, got.CronList)
// this line is used by starport scaffolding # genesis/test/assert
}
