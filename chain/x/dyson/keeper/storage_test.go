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

func createNStorage(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Storage {
	items := make([]types.Storage, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)
        
		keeper.SetStorage(ctx, items[i])
	}
	return items
}

func TestStorageGet(t *testing.T) {
	keeper, ctx := keepertest.DysonKeeper(t)
	items := createNStorage(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetStorage(ctx,
		    item.Index,
            
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestStorageRemove(t *testing.T) {
	keeper, ctx := keepertest.DysonKeeper(t)
	items := createNStorage(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveStorage(ctx,
		    item.Index,
            
		)
		_, found := keeper.GetStorage(ctx,
		    item.Index,
            
		)
		require.False(t, found)
	}
}

func TestStorageGetAll(t *testing.T) {
	keeper, ctx := keepertest.DysonKeeper(t)
	items := createNStorage(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllStorage(ctx)),
	)
}
