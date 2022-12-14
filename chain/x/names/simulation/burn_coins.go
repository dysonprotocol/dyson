package simulation

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	bankkeeper "github.com/cosmos/cosmos-sdk/x/bank/keeper"
	"github.com/org/dyson/x/names/keeper"
	"github.com/org/dyson/x/names/types"
)

func SimulateMsgBurnCoins(
	ak types.AccountKeeper,
	bk bankkeeper.Keeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgBurnCoins{
			Owner: simAccount.Address.String(),
		}

		// TODO: Handling the BurnCoins simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "BurnCoins simulation not implemented"), nil, nil
	}
}
