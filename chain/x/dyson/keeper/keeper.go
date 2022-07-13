package keeper

import (
	"fmt"
	"runtime/debug"

	"github.com/tendermint/tendermint/libs/log"

	"github.com/cosmos/cosmos-sdk/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	authkeeper "github.com/cosmos/cosmos-sdk/x/auth/keeper"
	authtypes "github.com/cosmos/cosmos-sdk/x/auth/types"
	cosmosauthzv1beta1keeper "github.com/cosmos/cosmos-sdk/x/authz/keeper"
	bankkeeper "github.com/cosmos/cosmos-sdk/x/bank/keeper"
	cosmosdistributionv1beta1keeper "github.com/cosmos/cosmos-sdk/x/distribution/keeper"
	cosmosevidencev1beta1keeper "github.com/cosmos/cosmos-sdk/x/evidence/keeper"
	cosmosfeegrantv1beta1keeper "github.com/cosmos/cosmos-sdk/x/feegrant/keeper"
	cosmosgovv1beta1keeper "github.com/cosmos/cosmos-sdk/x/gov/keeper"
	cosmosslashingv1beta1keeper "github.com/cosmos/cosmos-sdk/x/slashing/keeper"
	cosmosstakingv1beta1keeper "github.com/cosmos/cosmos-sdk/x/staking/keeper"
	ibcapplicationstransferv1keeper "github.com/cosmos/ibc-go/modules/apps/transfer/keeper"
	"github.com/org/dyson/x/dyson/types"
	nameskeeper "github.com/org/dyson/x/names/keeper"
)

type (
	Keeper struct {
		cdc                             codec.BinaryCodec
		storeKey                        sdk.StoreKey
		memKey                          sdk.StoreKey
		bankkeeper                      bankkeeper.Keeper
		accountKeeper                   authkeeper.AccountKeeper
		cosmosdistributionv1beta1keeper cosmosdistributionv1beta1keeper.Keeper
		cosmosevidencev1beta1keeper     cosmosevidencev1beta1keeper.Keeper
		cosmosfeegrantv1beta1keeper     cosmosfeegrantv1beta1keeper.Keeper
		cosmosgovv1beta1keeper          cosmosgovv1beta1keeper.Keeper
		cosmosslashingv1beta1keeper     cosmosslashingv1beta1keeper.Keeper
		cosmosstakingv1beta1keeper      cosmosstakingv1beta1keeper.Keeper
		cosmosstakingv1beta1querier     cosmosstakingv1beta1keeper.Querier
		cosmosbankv1beta1keeper         bankkeeper.Keeper
		cosmosauthzv1beta1keeper        cosmosauthzv1beta1keeper.Keeper
		ibcapplicationstransferv1keeper ibcapplicationstransferv1keeper.Keeper
		nameskeeper                     nameskeeper.Keeper
		currentDepth                    int
	}
)

func NewKeeper(
	cdc codec.BinaryCodec,
	storeKey,
	memKey sdk.StoreKey,
	bankkeeper bankkeeper.Keeper,
	accountKeeper authkeeper.AccountKeeper,
	cosmosdistributionv1beta1keeper cosmosdistributionv1beta1keeper.Keeper,
	cosmosevidencev1beta1keeper cosmosevidencev1beta1keeper.Keeper,
	cosmosfeegrantv1beta1keeper cosmosfeegrantv1beta1keeper.Keeper,
	cosmosgovv1beta1keeper cosmosgovv1beta1keeper.Keeper,
	cosmosslashingv1beta1keeper cosmosslashingv1beta1keeper.Keeper,
	cosmosstakingv1beta1keeper cosmosstakingv1beta1keeper.Keeper,
	cosmosstakingv1beta1querier cosmosstakingv1beta1keeper.Querier,
	cosmosbankv1beta1keeper bankkeeper.Keeper,
	cosmosauthzv1beta1keeper cosmosauthzv1beta1keeper.Keeper,
	ibcapplicationstransferv1keeper ibcapplicationstransferv1keeper.Keeper,
	nameskeeper nameskeeper.Keeper,

) *Keeper {
	return &Keeper{

		cdc:                             cdc,
		storeKey:                        storeKey,
		memKey:                          memKey,
		bankkeeper:                      bankkeeper,
		accountKeeper:                   accountKeeper,
		cosmosdistributionv1beta1keeper: cosmosdistributionv1beta1keeper,
		cosmosevidencev1beta1keeper:     cosmosevidencev1beta1keeper,
		cosmosfeegrantv1beta1keeper:     cosmosfeegrantv1beta1keeper,
		cosmosgovv1beta1keeper:          cosmosgovv1beta1keeper,
		cosmosslashingv1beta1keeper:     cosmosslashingv1beta1keeper,
		cosmosstakingv1beta1keeper:      cosmosstakingv1beta1keeper,
		cosmosstakingv1beta1querier:     cosmosstakingv1beta1querier,
		cosmosbankv1beta1keeper:         cosmosbankv1beta1keeper,
		cosmosauthzv1beta1keeper:        cosmosauthzv1beta1keeper,
		ibcapplicationstransferv1keeper: ibcapplicationstransferv1keeper,
		nameskeeper:                     nameskeeper,

		currentDepth: 0,
	}
}

func (k Keeper) Logger(ctx sdk.Context) log.Logger {
	return ctx.Logger().With("module", fmt.Sprintf("x/%s", types.ModuleName))
}

func (k Keeper) getSchdeualedCountAndGasPrice(ctx sdk.Context, blockHeight uint64, gasWanted uint64) (int, sdk.Coin) {

	prefix := fmt.Sprintf("%v/", blockHeight)
	total := 0
	count := 0
	for _, schedualedRun := range k.GetPrefixSchedualedRun(ctx, prefix) {
		total += int(schedualedRun.Gas)
		count += 1
	}
	// TODO pull from settings
	var RATIO int64
	RATIO = 3
	fee := sdk.NewInt64Coin("dys", (int64(total)+int64(gasWanted))/RATIO)
	k.Logger(ctx).Info(fmt.Sprintf("---getSchdeualedCountAndGasPrice: count %+v total %+v fee %+v", count, total, fee))
	return count, fee
}

func (k Keeper) RunSchedualedScripts(ctx sdk.Context) {
	prefix := fmt.Sprintf("%v/", ctx.BlockHeight())

	m := &msgServer{Keeper: k}

	for index, schedualedRun := range k.GetPrefixSchedualedRun(ctx, prefix) {
		msg := schedualedRun.Msg
		signers := msg.GetSigners()

		if len(signers) != 1 {
			err := sdkerrors.ErrInvalidRequest.Wrap("Msg must have one signer")
			k.Logger(ctx).Info(fmt.Sprintf("error: %+v", err))
			schedualedRun.Error = fmt.Sprintf("%+v", err)
			k.SetSchedualedRun(ctx, schedualedRun)
			return
		}

		add, err := sdk.AccAddressFromBech32(schedualedRun.Creator)
		if err != nil {
			k.Logger(ctx).Info(fmt.Sprintf("error: %+v", err))
			schedualedRun.Error = fmt.Sprintf("bad schedualed script address %+v", err)
			k.SetSchedualedRun(ctx, schedualedRun)
		}

		if !add.Equals(signers[0]) {
			err = sdkerrors.ErrInvalidRequest.Wrap("Invalid schedual script signer")

			k.Logger(ctx).Info(fmt.Sprintf("error: %+v", err))
			schedualedRun.Error = fmt.Sprintf("%+v", err)
			k.SetSchedualedRun(ctx, schedualedRun)
			return
		}

		cachedCtx, Write := ctx.CacheContext()
		startingGas := ctx.BlockGasMeter().GasConsumed()
		k.Logger(ctx).Info(fmt.Sprintf("startingGas: %+v", startingGas))

		cachedCtx = cachedCtx.WithGasMeter(sdk.NewGasMeter(schedualedRun.Gas))

		func() {
			// Panic recovery.
			defer func() {
				if r := recover(); r != nil {
					schedualedRun.Error = handleRecovery(r, ctx)

				}
			}()

			// If BlockGasMeter() panics it will be caught by the above recover and will
			// return an error - in any case BlockGasMeter will consume gas past the limit.
			//
			// NOTE: This must exist in a separate defer function for the above recovery
			// to recover from this one.
			defer func() {
				ctx.GasMeter().ConsumeGas(
					cachedCtx.GasMeter().GasConsumedToLimit(), "block gas meter",
				)

				if ctx.GasMeter().GasConsumed() < startingGas {
					panic(sdk.ErrorGasOverflow{Descriptor: "tx gas summation"})
				}
			}()

			r, err := m.Run(sdk.WrapSDKContext(cachedCtx), msg)
			if err != nil {

				k.Logger(ctx).Info(fmt.Sprintf("error: %+v", err))
				schedualedRun.Error = err.Error()
			} else {
				Write()
				schedualedRun.Resp = r
			}
		}()

		k.SetSchedualedRun(ctx, schedualedRun)
		k.Logger(ctx).Info(fmt.Sprintf("RunSchedualedScripts %v: %v %+v", prefix, index, schedualedRun))
	}

}

// DeductFees deducts fees from the given account.
func (k Keeper) DeductFees(ctx sdk.Context, from sdk.AccAddress, fees sdk.Coins) error {
	if !fees.IsValid() {
		return sdkerrors.Wrapf(sdkerrors.ErrInsufficientFee, "invalid fee amount: %s", fees)
	}

	err := k.bankkeeper.SendCoinsFromAccountToModule(ctx, from, authtypes.FeeCollectorName, fees)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInsufficientFunds, err.Error())
	}

	return nil
}

func handleRecovery(r interface{}, sdkCtx sdk.Context) string {
	switch r := r.(type) {
	case sdk.ErrorOutOfGas:
		return fmt.Sprintf(
			"schedualed script out of gas in location: %v; gasWanted: %d, gasUsed: %d",
			r.Descriptor, sdkCtx.GasMeter().Limit(), sdkCtx.GasMeter().GasConsumed(),
		)

	default:
		panic(sdkerrors.ErrPanic.Wrapf(
			"schedualed script recovered: %v\nstack:\n%v", r, string(debug.Stack())))
	}
}
