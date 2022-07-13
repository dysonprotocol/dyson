package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/org/dyson/testutil/keeper"
	"github.com/org/dyson/testutil/nullify"
	"github.com/org/dyson/x/dyson/keeper"
	"github.com/org/dyson/x/dyson/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNSchedualedRun(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.SchedualedRun {
	items := make([]types.SchedualedRun, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetSchedualedRun(ctx, items[i])
	}
	return items
}

func TestSchedualedRunGet(t *testing.T) {
	keeper, ctx := keepertest.DysonKeeper(t)
	items := createNSchedualedRun(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetSchedualedRun(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestSchedualedRunRemove(t *testing.T) {
	keeper, ctx := keepertest.DysonKeeper(t)
	items := createNSchedualedRun(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveSchedualedRun(ctx,
			item.Index,
		)
		_, found := keeper.GetSchedualedRun(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestSchedualedRunGetAll(t *testing.T) {
	keeper, ctx := keepertest.DysonKeeper(t)
	items := createNSchedualedRun(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllSchedualedRun(ctx)),
	)
}
