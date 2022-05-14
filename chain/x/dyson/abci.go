package dyson

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/org/dyson/x/dyson/keeper"
)

func EndBlocker(ctx sdk.Context, k keeper.Keeper) {

	k.RunSchedualedScripts(ctx)
}
