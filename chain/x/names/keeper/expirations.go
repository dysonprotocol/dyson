package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/org/dyson/x/names/types"
)

// SetExpirations set a specific expirations in the store from its index
func (k Keeper) SetExpirations(ctx sdk.Context, expirations types.Expirations) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ExpirationsKeyPrefix))
	b := k.cdc.MustMarshal(&expirations)
	store.Set(types.ExpirationsKey(
		expirations.BlockHeight,
	), b)
}

// GetExpirations returns a list of expiring names from the blockheight
func (k Keeper) GetExpirations(
	ctx sdk.Context,
	blockHeight string,

) (val types.Expirations, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ExpirationsKeyPrefix))

	b := store.Get(types.ExpirationsKey(
		blockHeight,
	))
	if b == nil {
		val.BlockHeight = blockHeight
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveExpirations removes expirations from the store
func (k Keeper) RemoveExpirations(
	ctx sdk.Context,
	blockHeight string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ExpirationsKeyPrefix))
	store.Delete(types.ExpirationsKey(
		blockHeight,
	))
}

// GetAllExpirations returns all expirations
func (k Keeper) GetAllExpirations(ctx sdk.Context) (list []types.Expirations) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ExpirationsKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Expirations
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
