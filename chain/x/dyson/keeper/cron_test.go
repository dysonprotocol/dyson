package keeper_test

import (
	"strconv"
	"testing"

	"github.com/org/dyson/x/dyson/keeper"
	"github.com/org/dyson/x/dyson/types"
	keepertest "github.com/org/dyson/testutil/keeper"
	"github.com/org/dyson/testutil/nullify"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNCron(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Cron {
	items := make([]types.Cron, n)
	for i := range items {
		items[i].BlockHeight = strconv.Itoa(i)
        
		keeper.SetCron(ctx, items[i])
	}
	return items
}

func TestCronGet(t *testing.T) {
	keeper, ctx := keepertest.DysonKeeper(t)
	items := createNCron(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetCron(ctx,
		    item.BlockHeight,
            
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestCronRemove(t *testing.T) {
	keeper, ctx := keepertest.DysonKeeper(t)
	items := createNCron(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveCron(ctx,
		    item.BlockHeight,
            
		)
		_, found := keeper.GetCron(ctx,
		    item.BlockHeight,
            
		)
		require.False(t, found)
	}
}

func TestCronGetAll(t *testing.T) {
	keeper, ctx := keepertest.DysonKeeper(t)
	items := createNCron(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllCron(ctx)),
	)
}
