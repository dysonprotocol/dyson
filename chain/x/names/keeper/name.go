package keeper

import (
	"fmt"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/org/dyson/x/names/types"
)

func (k Keeper) SetNameExperation(ctx sdk.Context, name types.Name) {
	experations, _ := k.GetExpirations(ctx, fmt.Sprint(name.ExpirationHeight))
	experations.Names = append(experations.Names, name.Name)
	k.SetExpirations(ctx, experations)
}

// SetName set a specific name in the store from its index
func (k Keeper) SetName(ctx sdk.Context, name types.Name) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NameKeyPrefix))
	b := k.cdc.MustMarshal(&name)
	store.Set(types.NameKey(
		name.Name,
	), b)
	k.SetNameExperation(ctx, name)
}

// GetName returns a name from its index
func (k Keeper) GetName(
	ctx sdk.Context,
	name string,

) (val types.Name, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NameKeyPrefix))

	b := store.Get(types.NameKey(
		name,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveName removes a name from the store
func (k Keeper) RemoveName(
	ctx sdk.Context,
	name string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NameKeyPrefix))
	store.Delete(types.NameKey(
		name,
	))
}

// GetAllName returns all name
func (k Keeper) GetAllName(ctx sdk.Context) (list []types.Name) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NameKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Name
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

func (k Keeper) SetExpration(name types.Name) {

}
