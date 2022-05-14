package cli

import (
	"fmt"
	"time"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/org/dyson/x/dyson/types"
)

var (
	DefaultRelativePacketTimeoutTimestamp = uint64((time.Duration(10) * time.Minute).Nanoseconds())
)

const (
	flagPacketTimeoutTimestamp = "packet-timeout-timestamp"
	listSeparator              = ","
)

// GetTxCmd returns the transaction commands for this module
func GetTxCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("%s transactions subcommands", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdCreateScript())
	cmd.AddCommand(CmdUpdateScript())
	cmd.AddCommand(CmdDeleteScript())
	cmd.AddCommand(CmdCreateStorage())
	cmd.AddCommand(CmdUpdateStorage())
	cmd.AddCommand(CmdDeleteStorage())
	cmd.AddCommand(CmdCreateSchedualedRun())
	//cmd.AddCommand(CmdUpdateSchedualedRun())
	//cmd.AddCommand(CmdDeleteSchedualedRun())
	// this line is used by starport scaffolding # 1
	cmd.AddCommand(CmdRun())

	return cmd
}
