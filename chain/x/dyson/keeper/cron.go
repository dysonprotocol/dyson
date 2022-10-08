package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/org/dyson/x/dyson/types"
)

// SetCron set a specific cron in the store from its index
func (k Keeper) SetCron(ctx sdk.Context, cron types.Cron) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CronKeyPrefix))
	b := k.cdc.MustMarshal(&cron)
	store.Set(types.CronKey(cron.BlockHeight), b)
}

// GetCron returns a cron from its index
func (k Keeper) GetCron(
	ctx sdk.Context,
	blockHeight string,

) (val types.Cron, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CronKeyPrefix))

	b := store.Get(types.CronKey(
		blockHeight,
	))
	if b == nil {
		val.BlockHeight = blockHeight
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveCron removes a cron from the store
func (k Keeper) RemoveCron(
	ctx sdk.Context,
	blockHeight string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CronKeyPrefix))
	store.Delete(types.CronKey(
		blockHeight,
	))
}

// GetAllCron returns all cron
func (k Keeper) GetAllCron(ctx sdk.Context) (list []types.Cron) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CronKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Cron
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
