package app

import (
	"strings"

	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	upgradetypes "github.com/cosmos/cosmos-sdk/x/upgrade/types"
	icacontrollertypes "github.com/cosmos/ibc-go/v6/modules/apps/27-interchain-accounts/controller/types"
	icahosttypes "github.com/cosmos/ibc-go/v6/modules/apps/27-interchain-accounts/host/types"

	_ "embed"
)

//go:embed TAG.txt
var Tag string

func (app App) RegisterUpgradeHandlers() {
	Tag = strings.TrimSpace(Tag)

	app.UpgradeKeeper.SetUpgradeHandler(Tag,
		func(ctx sdk.Context, plan upgradetypes.Plan, fromVM module.VersionMap) (module.VersionMap, error) {
			return app.mm.RunMigrations(ctx, app.configurator, fromVM)
		})

	upgradeInfo, err := app.UpgradeKeeper.ReadUpgradeInfoFromDisk()
	if err != nil {
		panic(err)
	}

	// TODO remove after adding nft module
	if upgradeInfo.Name == Tag && !app.UpgradeKeeper.IsSkipHeight(upgradeInfo.Height) {
		storeUpgrades := storetypes.StoreUpgrades{
			Added: []string{"nft", icacontrollertypes.StoreKey, icahosttypes.StoreKey},
		}

		// configure store loader that checks if version == upgradeHeight and applies store upgrades
		app.SetStoreLoader(upgradetypes.UpgradeStoreLoader(upgradeInfo.Height, &storeUpgrades))
	}
}
