package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/org/dyson/testutil/keeper"
	"github.com/org/dyson/testutil/nullify"
	"github.com/org/dyson/x/names/keeper"
	"github.com/org/dyson/x/names/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNExpirations(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Expirations {
	items := make([]types.Expirations, n)
	for i := range items {
		items[i].BlockHeight = strconv.Itoa(i)

		keeper.SetExpirations(ctx, items[i])
	}
	return items
}

func TestExpirationsGet(t *testing.T) {
	keeper, ctx := keepertest.NamesKeeper(t)
	items := createNExpirations(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetExpirations(ctx,
			item.BlockHeight,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestExpirationsRemove(t *testing.T) {
	keeper, ctx := keepertest.NamesKeeper(t)
	items := createNExpirations(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveExpirations(ctx,
			item.BlockHeight,
		)
		_, found := keeper.GetExpirations(ctx,
			item.BlockHeight,
		)
		require.False(t, found)
	}
}

func TestExpirationsGetAll(t *testing.T) {
	keeper, ctx := keepertest.NamesKeeper(t)
	items := createNExpirations(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllExpirations(ctx)),
	)
}
