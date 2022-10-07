package keeper

import (
	"fmt"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/org/dyson/x/dyson/types"
)

func (k Keeper) SetScheduledRunCron(ctx sdk.Context, scheduledRun types.ScheduledRun) {
	cron, _ := k.GetCron(ctx, fmt.Sprint(scheduledRun.Height))
	cron.Indexes = append(cron.Indexes, scheduledRun.Index)
	k.SetCron(ctx, cron)

}

// SetScheduledRun set a specific scheduledRun in the store from its index
func (k Keeper) SetScheduledRun(ctx sdk.Context, scheduledRun types.ScheduledRun) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ScheduledRunKeyPrefix))
	b := k.cdc.MustMarshal(&scheduledRun)
	store.Set(types.ScheduledRunKey(
		scheduledRun.Index,
	), b)
	k.SetScheduledRunCron(ctx, scheduledRun)
}

// GetScheduledRun returns a scheduledRun from its index
func (k Keeper) GetScheduledRun(
	ctx sdk.Context,
	index string,

) (val types.ScheduledRun, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ScheduledRunKeyPrefix))

	b := store.Get(types.ScheduledRunKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

func (k Keeper) GetPrefixScheduledRun(
	ctx sdk.Context,
	path string,

) (list []types.ScheduledRun) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ScheduledRunKeyPrefix))

	iterator := sdk.KVStorePrefixIterator(store, []byte(path))

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.ScheduledRun
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// RemoveScheduledRun removes a scheduledRun from the store
func (k Keeper) RemoveScheduledRun(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ScheduledRunKeyPrefix))
	store.Delete(types.ScheduledRunKey(
		index,
	))
}

// GetAllScheduledRun returns all scheduledRun
func (k Keeper) GetAllScheduledRun(ctx sdk.Context) (list []types.ScheduledRun) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ScheduledRunKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.ScheduledRun
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
