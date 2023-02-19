package cli

import (
	"fmt"
	// "strings"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	// sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/org/dyson/x/dyson/types"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd(queryRoute string) *cobra.Command {
	// Group dyson queries under a subcommand
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("Querying commands for the %s module", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdListScript())
	cmd.AddCommand(CmdShowScript())
	cmd.AddCommand(CmdListStorage())
	cmd.AddCommand(CmdShowStorage())
	cmd.AddCommand(CmdListScheduledRun())
	cmd.AddCommand(CmdShowScheduledRun())
	cmd.AddCommand(CmdScheduledGasPriceAtBlock())

	cmd.AddCommand(CmdListCron())
	cmd.AddCommand(CmdShowCron())
	cmd.AddCommand(CmdEncodeProtoAny())

	// this line is used by starport scaffolding # 1

	cmd.AddCommand(CmdShowSchema())
	cmd.AddCommand(CmdWSGI())
	cmd.AddCommand(CmdEval())
	cmd.AddCommand(CmdDecodeRunResult())
	cmd.AddCommand(CmdExportInterfaces())
	return cmd
}
