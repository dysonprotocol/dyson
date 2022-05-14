package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/org/dyson/x/dyson/types"
)

// SetSchedualedRun set a specific schedualedRun in the store from its index
func (k Keeper) SetSchedualedRun(ctx sdk.Context, schedualedRun types.SchedualedRun) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SchedualedRunKeyPrefix))
	b := k.cdc.MustMarshal(&schedualedRun)
	store.Set(types.SchedualedRunKey(
		schedualedRun.Index,
	), b)
}

// GetSchedualedRun returns a schedualedRun from its index
func (k Keeper) GetSchedualedRun(
	ctx sdk.Context,
	index string,

) (val types.SchedualedRun, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SchedualedRunKeyPrefix))

	b := store.Get(types.SchedualedRunKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// GetStorage returns a storage from its
func (k Keeper) GetPrefixSchedualedRun(
	ctx sdk.Context,
	path string,

) (list []types.SchedualedRun) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SchedualedRunKeyPrefix))

	iterator := sdk.KVStorePrefixIterator(store, []byte(path))

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.SchedualedRun
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// RemoveSchedualedRun removes a schedualedRun from the store
func (k Keeper) RemoveSchedualedRun(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SchedualedRunKeyPrefix))
	store.Delete(types.SchedualedRunKey(
		index,
	))
}

// GetAllSchedualedRun returns all schedualedRun
func (k Keeper) GetAllSchedualedRun(ctx sdk.Context) (list []types.SchedualedRun) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SchedualedRunKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.SchedualedRun
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
