package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/org/dyson/x/names/types"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdForceTransfer() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "force-transfer [from] [to] [amount] [denom]",
		Short: "The owner of the name can tranfer coins between two accounts",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argFrom := args[0]
			argTo := args[1]
			argAmount := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgForceTransfer(
				clientCtx.GetFromAddress().String(),
				argFrom,
				argTo,
				argAmount,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
