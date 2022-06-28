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

func createNName(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Name {
	items := make([]types.Name, n)
	for i := range items {
		items[i].Name = strconv.Itoa(i)

		keeper.SetName(ctx, items[i])
	}
	return items
}

func TestNameGet(t *testing.T) {
	keeper, ctx := keepertest.NamesKeeper(t)
	items := createNName(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetName(ctx,
			item.Name,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestNameRemove(t *testing.T) {
	keeper, ctx := keepertest.NamesKeeper(t)
	items := createNName(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveName(ctx,
			item.Name,
		)
		_, found := keeper.GetName(ctx,
			item.Name,
		)
		require.False(t, found)
	}
}

func TestNameGetAll(t *testing.T) {
	keeper, ctx := keepertest.NamesKeeper(t)
	items := createNName(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllName(ctx)),
	)
}
