package names

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/org/dyson/x/names/keeper"
)

func EndBlocker(ctx sdk.Context, k keeper.Keeper) {
	k.RenewOrDeleteExpiredNames(ctx)
}
