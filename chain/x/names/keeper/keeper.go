package keeper

import (
	"fmt"

	"github.com/cosmos/cosmos-sdk/codec"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	authtypes "github.com/cosmos/cosmos-sdk/x/auth/types"
	bankkeeper "github.com/cosmos/cosmos-sdk/x/bank/keeper"
	nftkeeper "github.com/cosmos/cosmos-sdk/x/nft/keeper"
	paramtypes "github.com/cosmos/cosmos-sdk/x/params/types"
	"github.com/org/dyson/x/names/types"
	"github.com/tendermint/tendermint/libs/log"
)

type (
	Keeper struct {
		cdc        codec.BinaryCodec
		storeKey   storetypes.StoreKey
		memKey     storetypes.StoreKey
		paramstore paramtypes.Subspace

		accountKeeper types.AccountKeeper
		bankKeeper    bankkeeper.Keeper
		nftKeeper     nftkeeper.Keeper
	}
)

func NewKeeper(
	cdc codec.BinaryCodec,
	storeKey,
	memKey storetypes.StoreKey,
	ps paramtypes.Subspace,

	accountKeeper types.AccountKeeper,
	bankKeeper bankkeeper.Keeper,
	nftKeeper nftkeeper.Keeper,

) *Keeper {
	// set KeyTable if it has not already been set
	if !ps.HasKeyTable() {
		ps = ps.WithKeyTable(types.ParamKeyTable())
	}

	return &Keeper{

		cdc:           cdc,
		storeKey:      storeKey,
		memKey:        memKey,
		paramstore:    ps,
		accountKeeper: accountKeeper,
		bankKeeper:    bankKeeper,
		nftKeeper:     nftKeeper,
	}
}

func (k Keeper) Logger(ctx sdk.Context) log.Logger {
	return ctx.Logger().With("module", fmt.Sprintf("x/%s", types.ModuleName))
}

func (k Keeper) PayFee(ctx sdk.Context, from sdk.AccAddress, fees sdk.Coin) error {
	if !fees.IsValid() {
		return sdkerrors.Wrapf(sdkerrors.ErrInsufficientFee, "invalid fee amount: %s", fees)
	}

	err := k.bankKeeper.SendCoinsFromAccountToModule(ctx, from, authtypes.FeeCollectorName, sdk.Coins{fees})
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInsufficientFunds, err.Error())
	}

	return nil
}

func (k Keeper) ResolveIndex(ctx sdk.Context, index string) (destination string) {

	_, err := sdk.AccAddressFromBech32(index)
	if err != nil {
		name, found := k.GetName(ctx, index)
		if found {
			if name.ExpirationHeight > uint64(ctx.BlockHeight()) {
				return name.Destination
			}
		}
		return ""
	}
	return index
}

func (k Keeper) RenewOrDeleteExpiredNames(ctx sdk.Context) {
	h := uint64(ctx.BlockHeight())
	ctx.Logger().Info(fmt.Sprintf("RenewOrDeleteExpiredNames: %+v", h))
	experations, _ := k.GetExpirations(ctx, fmt.Sprint(h))
	for i := range experations.Names {
		name, found := k.GetName(ctx, experations.Names[i])
		if found && name.ExpirationHeight <= h {
			// if name is auto-renewable, renew it
			if name.AutoRenew {
				name.ExpirationHeight = h + REGISTER_BLOCKS
				k.SetName(ctx, name)
				ctx.Logger().Info(fmt.Sprintf("Renewing %+v", name))
				from, err := sdk.AccAddressFromBech32(name.Owner)
				if err != nil {
					ctx.Logger().Info(fmt.Sprintf("Deleting %+v because: %+v", name, err))
					k.RemoveName(ctx, name.Name)
				}
				coin, err := sdk.ParseCoinNormalized(name.Price)
				if err != nil {
					ctx.Logger().Info(fmt.Sprintf("Deleting %+v because: %+v", name, err))
					k.RemoveName(ctx, name.Name)
				}
				coin.Amount = (coin.Amount.QuoRaw(100)) // divide by 100
				err = k.PayFee(ctx, from, coin)
				if err != nil {
					ctx.Logger().Info(fmt.Sprintf("Deleting %+v because: %+v", name, err))
					k.RemoveName(ctx, name.Name)
				}
			} else {
				// otherwise, delete it
				ctx.Logger().Info(fmt.Sprintf("Deleting %+v auto renew is false", name))
				k.RemoveName(ctx, name.Name)
			}
		}
	}
	k.RemoveExpirations(ctx, fmt.Sprint(h))
}
