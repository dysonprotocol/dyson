package keeper_test

import (
	"testing"

	testkeeper "github.com/org/dyson/testutil/keeper"
	"github.com/org/dyson/x/names/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.NamesKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
