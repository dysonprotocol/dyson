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

func CmdSetPriceAndExtend() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "set-price-and-extend [name] [price]",
		Short: "Set a new price of the name and extend for one year. Will also charge fee of 1% of new price.",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argName := args[0]
			argPrice := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgSetPriceAndExtend(
				clientCtx.GetFromAddress().String(),
				argName,
				argPrice,
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
