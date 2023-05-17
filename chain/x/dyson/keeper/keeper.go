package keeper

import (
	"fmt"
	"runtime/debug"

	"github.com/tendermint/tendermint/libs/log"

	"github.com/cosmos/cosmos-sdk/codec"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	authkeeper "github.com/cosmos/cosmos-sdk/x/auth/keeper"
	authtypes "github.com/cosmos/cosmos-sdk/x/auth/types"
	cosmosauthzv1beta1keeper "github.com/cosmos/cosmos-sdk/x/authz/keeper"
	bankkeeper "github.com/cosmos/cosmos-sdk/x/bank/keeper"
	cosmoscrisisv1beta1keeper "github.com/cosmos/cosmos-sdk/x/crisis/keeper"
	cosmosdistributionv1beta1keeper "github.com/cosmos/cosmos-sdk/x/distribution/keeper"
	cosmosevidencev1beta1keeper "github.com/cosmos/cosmos-sdk/x/evidence/keeper"
	cosmosfeegrantv1beta1keeper "github.com/cosmos/cosmos-sdk/x/feegrant/keeper"
	cosmosgovv1keeper "github.com/cosmos/cosmos-sdk/x/gov/keeper"
	cosmosgroupv1keeper "github.com/cosmos/cosmos-sdk/x/group/keeper"
	cosmosmintv1beta1keeper "github.com/cosmos/cosmos-sdk/x/mint/keeper"
	nftkeeper "github.com/cosmos/cosmos-sdk/x/nft/keeper"
	cosmosparamsv1beta1keeper "github.com/cosmos/cosmos-sdk/x/params/keeper"
	cosmosslashingv1beta1keeper "github.com/cosmos/cosmos-sdk/x/slashing/keeper"
	cosmosstakingv1beta1keeper "github.com/cosmos/cosmos-sdk/x/staking/keeper"
	cosmosupgradev1beta1keeper "github.com/cosmos/cosmos-sdk/x/upgrade/keeper"
	ibcapplicationsinterchain_accountscontrollerv1keeper "github.com/cosmos/ibc-go/v6/modules/apps/27-interchain-accounts/controller/keeper"
	ibcapplicationsinterchain_accountshostv1keeper "github.com/cosmos/ibc-go/v6/modules/apps/27-interchain-accounts/host/keeper"
	ibcapplicationstransferv1keeper "github.com/cosmos/ibc-go/v6/modules/apps/transfer/keeper"
	ibckeeper "github.com/cosmos/ibc-go/v6/modules/core/keeper"

	"github.com/org/dyson/x/dyson/types"
	nameskeeper "github.com/org/dyson/x/names/keeper"

	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
)

type (
	Keeper struct {
		cdc                             codec.Codec
		storeKey                        storetypes.StoreKey
		memKey                          storetypes.StoreKey
		bankkeeper                      bankkeeper.Keeper
		accountKeeper                   authkeeper.AccountKeeper
		cosmosauthv1beta1keeper         authkeeper.AccountKeeper
		cosmosdistributionv1beta1keeper cosmosdistributionv1beta1keeper.Keeper
		cosmosevidencev1beta1keeper     cosmosevidencev1beta1keeper.Keeper
		cosmosfeegrantv1beta1keeper     cosmosfeegrantv1beta1keeper.Keeper
		cosmosgovv1keeper               cosmosgovv1keeper.Keeper
		cosmosgroupv1keeper             cosmosgroupv1keeper.Keeper

		cosmosslashingv1beta1keeper                          cosmosslashingv1beta1keeper.Keeper
		cosmosstakingv1beta1keeper                           cosmosstakingv1beta1keeper.Keeper
		cosmosstakingv1beta1querier                          cosmosstakingv1beta1keeper.Querier
		cosmosbankv1beta1keeper                              bankkeeper.Keeper
		cosmosauthzv1beta1keeper                             cosmosauthzv1beta1keeper.Keeper
		ibcapplicationstransferv1keeper                      ibcapplicationstransferv1keeper.Keeper
		nameskeeper                                          nameskeeper.Keeper
		cosmosmintv1beta1keeper                              cosmosmintv1beta1keeper.Keeper
		cosmosupgradev1beta1keeper                           cosmosupgradev1beta1keeper.Keeper
		cosmoscrisisv1beta1keeper                            cosmoscrisisv1beta1keeper.Keeper
		cosmosparamsv1beta1keeper                            cosmosparamsv1beta1keeper.Keeper
		cosmosnftv1beta1keeper                               nftkeeper.Keeper
		ibcapplicationsinterchain_accountscontrollerv1keeper *ibcapplicationsinterchain_accountscontrollerv1keeper.Keeper
		ibcapplicationsinterchain_accountshostv1keeper       *ibcapplicationsinterchain_accountshostv1keeper.Keeper

		ibckeeper *ibckeeper.Keeper

		registry cdctypes.InterfaceRegistry

		currentDepth int
	}
)

func NewKeeper(
	cdc codec.Codec,
	storeKey,
	memKey storetypes.StoreKey,
	bankkeeper bankkeeper.Keeper,
	accountKeeper authkeeper.AccountKeeper,
	cosmosdistributionv1beta1keeper cosmosdistributionv1beta1keeper.Keeper,
	cosmosevidencev1beta1keeper cosmosevidencev1beta1keeper.Keeper,
	cosmosfeegrantv1beta1keeper cosmosfeegrantv1beta1keeper.Keeper,
	cosmosgovv1keeper cosmosgovv1keeper.Keeper,
	cosmosgroupv1keeper cosmosgroupv1keeper.Keeper,
	cosmosslashingv1beta1keeper cosmosslashingv1beta1keeper.Keeper,
	cosmosstakingv1beta1keeper cosmosstakingv1beta1keeper.Keeper,
	cosmosstakingv1beta1querier cosmosstakingv1beta1keeper.Querier,
	cosmosbankv1beta1keeper bankkeeper.Keeper,
	cosmosauthzv1beta1keeper cosmosauthzv1beta1keeper.Keeper,
	ibcapplicationstransferv1keeper ibcapplicationstransferv1keeper.Keeper,
	nameskeeper nameskeeper.Keeper,
	cosmosmintv1beta1keeper cosmosmintv1beta1keeper.Keeper,
	cosmosupgradev1beta1keeper cosmosupgradev1beta1keeper.Keeper,
	cosmoscrisisv1beta1keeper cosmoscrisisv1beta1keeper.Keeper,
	cosmosparamsv1beta1keeper cosmosparamsv1beta1keeper.Keeper,
	cosmosnftv1beta1keeper nftkeeper.Keeper,
	ibcapplicationsinterchain_accountscontrollerv1keeper *ibcapplicationsinterchain_accountscontrollerv1keeper.Keeper,
	ibcapplicationsinterchain_accountshostv1keeper *ibcapplicationsinterchain_accountshostv1keeper.Keeper,
	ibckeeper *ibckeeper.Keeper,

	registry cdctypes.InterfaceRegistry,
) *Keeper {
	return &Keeper{
		cdc:                             cdc,
		storeKey:                        storeKey,
		memKey:                          memKey,
		bankkeeper:                      bankkeeper,
		accountKeeper:                   accountKeeper,
		cosmosauthv1beta1keeper:         accountKeeper,
		cosmosdistributionv1beta1keeper: cosmosdistributionv1beta1keeper,
		cosmosevidencev1beta1keeper:     cosmosevidencev1beta1keeper,
		cosmosfeegrantv1beta1keeper:     cosmosfeegrantv1beta1keeper,
		cosmosgovv1keeper:               cosmosgovv1keeper,
		cosmosgroupv1keeper:             cosmosgroupv1keeper,
		cosmosslashingv1beta1keeper:     cosmosslashingv1beta1keeper,
		cosmosstakingv1beta1keeper:      cosmosstakingv1beta1keeper,
		cosmosstakingv1beta1querier:     cosmosstakingv1beta1querier,
		cosmosbankv1beta1keeper:         cosmosbankv1beta1keeper,
		cosmosauthzv1beta1keeper:        cosmosauthzv1beta1keeper,
		ibcapplicationstransferv1keeper: ibcapplicationstransferv1keeper,
		nameskeeper:                     nameskeeper,
		cosmosmintv1beta1keeper:         cosmosmintv1beta1keeper,
		cosmosupgradev1beta1keeper:      cosmosupgradev1beta1keeper,
		cosmoscrisisv1beta1keeper:       cosmoscrisisv1beta1keeper,
		cosmosparamsv1beta1keeper:       cosmosparamsv1beta1keeper,
		cosmosnftv1beta1keeper:          cosmosnftv1beta1keeper,
		ibcapplicationsinterchain_accountscontrollerv1keeper: ibcapplicationsinterchain_accountscontrollerv1keeper,
		ibcapplicationsinterchain_accountshostv1keeper:       ibcapplicationsinterchain_accountshostv1keeper,
		ibckeeper: ibckeeper,

		registry: registry,

		currentDepth: 0,
	}
}

func (k Keeper) Logger(ctx sdk.Context) log.Logger {
	return ctx.Logger().With("module", fmt.Sprintf("x/%s", types.ModuleName))
}

func (k Keeper) GetScheduledGasPriceAndFee(ctx sdk.Context, blockHeight uint64, gasWanted uint64) (count int, gasPrice sdk.DecCoin, gasFee sdk.Coin) {

	if gasWanted < 1 {
		gasWanted = 1
	}

	// total := 0
	count = 1
	cron, found := k.GetCron(ctx, fmt.Sprint(blockHeight))
	if found {
		count += len(cron.Indexes)
	}

	minGasPrices := sdk.NewDecCoins(sdk.NewDecCoinFromDec("dys", sdk.MustNewDecFromStr("0.01")))
	gasPrices := minGasPrices.MulDec(sdk.NewDec(int64(count)))
	gasFees := gasPrices.MulDec(sdk.NewDec(int64(gasWanted)))
	k.Logger(ctx).Info(fmt.Sprintf("GetScheduledGasPricesAndFees: count %+v gasPrice %+v gasFees %+v", count, gasPrices, gasFees))
	return count, gasPrices[0], sdk.NewCoin(gasFees[0].Denom, gasFees[0].Amount.Ceil().RoundInt())
}

func (k Keeper) RunScheduledScripts(ctx sdk.Context) {
	blockHeight := fmt.Sprint(ctx.BlockHeight())

	m := &msgServer{Keeper: k}

	cron, found := k.GetCron(ctx, blockHeight)
	if !found {
		k.Logger(ctx).Info(fmt.Sprintf("no cron at block: %+v", blockHeight))
		return
	}

	for _, index := range cron.Indexes {

		scheduledRun, found := k.GetScheduledRun(ctx, index)
		if !found {
			continue
		}
		msg := scheduledRun.Msg

		cachedCtx, Write := ctx.CacheContext()
		startingGas := ctx.BlockGasMeter().GasConsumed()
		k.Logger(ctx).Info(fmt.Sprintf("startingGas: %+v", startingGas))

		cachedCtx = cachedCtx.WithGasMeter(sdk.NewGasMeter(scheduledRun.Gas))

		func() {
			// Panic recovery.
			defer func() {
				if r := recover(); r != nil {
					scheduledRun.Error = handleRecovery(r, cachedCtx)
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

			signers := msg.GetSigners()

			if len(signers) != 1 {
				err := sdkerrors.ErrInvalidRequest.Wrap("Msg must have one signer")
				k.Logger(ctx).Info(fmt.Sprintf("error: %+v", err))
				scheduledRun.Error = fmt.Sprintf("%+v", err)
				k.SetScheduledRun(ctx, scheduledRun)
				return
			}

			add, err := sdk.AccAddressFromBech32(scheduledRun.Creator)
			if err != nil {
				k.Logger(ctx).Info(fmt.Sprintf("error: %+v", err))
				scheduledRun.Error = fmt.Sprintf("bad scheduled script address %+v", err)
				k.SetScheduledRun(ctx, scheduledRun)
			}

			if !add.Equals(signers[0]) {
				err = sdkerrors.ErrInvalidRequest.Wrap("Invalid scheduled script signer")

				k.Logger(ctx).Info(fmt.Sprintf("error: %+v", err))
				scheduledRun.Error = fmt.Sprintf("%+v", err)
				k.SetScheduledRun(ctx, scheduledRun)
				return
			}

			r, err := m.Run(sdk.WrapSDKContext(cachedCtx), msg)
			if err != nil {

				k.Logger(ctx).Info(fmt.Sprintf("error: %+v", err))
				scheduledRun.Error = err.Error()
			} else {
				Write()
				scheduledRun.Resp = r
			}
		}()

		k.SetScheduledRun(ctx, scheduledRun)
		k.Logger(ctx).Info(fmt.Sprintf("RunScheduledScripts %v: %v %+v", blockHeight, index, scheduledRun))
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

func handleRecovery(r interface{}, cachedCtx sdk.Context) string {
	switch r := r.(type) {
	case sdk.ErrorOutOfGas:
		return fmt.Sprintf(
			"scheduled script out of gas: %v; gasWanted: %d",
			r.Descriptor, cachedCtx.GasMeter().Limit(),
		)

	default:
		// log the stack trace
		fmt.Printf("Unknown scheduled script error: %v\nstack:\n%v", r, string(debug.Stack()))

		return fmt.Sprintf("Unknown scheduled script error")

	}
}
