package cli

import (
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/org/dyson/x/dyson/types"
	"github.com/spf13/cobra"
)

func CmdRun() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "run [script address] --function=foo --args=[1,2,3] --kwargs={\"bar\": \"baz\"} --extralines=\"print('hello world')\" --coins=10000dys,500token",
		Short: "Runs script on this account",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			address := string(args[0])
			argsFunctionName, err := cmd.Flags().GetString("function")
			if err != nil {
				return err
			}
			argsArgs, err := cmd.Flags().GetString("args")
			if err != nil {
				return err
			}
			argsKwargs, err := cmd.Flags().GetString("kwargs")
			if err != nil {
				return err
			}
			argsExtraLines, err := cmd.Flags().GetString("extralines")
			if err != nil {
				return err
			}

			coins, err := cmd.Flags().GetString("coins")
			if err != nil {
				return err
			}

			msg := types.NewMsgRun(clientCtx.GetFromAddress().String(), string(address), string(argsFunctionName), string(argsArgs), string(argsKwargs), string(argsExtraLines), string(coins))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)
	cmd.PersistentFlags().String("function", "", "function in of the script to run")
	cmd.PersistentFlags().String("args", "", "json list of the positional argument to the function")
	cmd.PersistentFlags().String("kwargs", "", "json object of the keyword argument to the function")
	cmd.PersistentFlags().String("extralines", "", "Extra line to run (only for running the script that is signing the transaction)")
	cmd.PersistentFlags().String("coins", "", "Amount of coins to send (ignored if running the script that is signing the transaction)")

	return cmd
}
