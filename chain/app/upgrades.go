package app

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	upgradetypes "github.com/cosmos/cosmos-sdk/x/upgrade/types"
	"strings"
)

import _ "embed"

//go:embed TAG.txt
var Tag string

func (app App) RegisterUpgradeHandlers() {
	Tag = strings.TrimSpace(Tag)
	app.UpgradeKeeper.SetUpgradeHandler(Tag,
		func(ctx sdk.Context, plan upgradetypes.Plan, fromVM module.VersionMap) (module.VersionMap, error) {
			return app.mm.RunMigrations(ctx, app.configurator, fromVM)
		})
}
