package cli

import (
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/org/dyson/x/dyson/types"
	"github.com/spf13/cobra"
)

func CmdCreateScheduledRun() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-scheduled-run [index] [address]",
		Short: "Create a new ScheduledRun",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			address := string(args[0])

			height, err := cmd.Flags().GetUint64("height")
			if err != nil {
				return err
			}

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
			gas, err := cmd.Flags().GetUint64("scheduledgaslimit")
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateScheduledRun(
				clientCtx.GetFromAddress().String(),
				height,
				gas,
				string(address),
				string(argsFunctionName),
				string(argsArgs),
				string(argsKwargs),
				string(argsExtraLines),
				string(coins),
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)
	cmd.PersistentFlags().Uint64("height", 0, "block height to run this script")
	cmd.PersistentFlags().Uint64("scheduledgaslimit", 234, "amount of gas your scheduled script will reserve")
	cmd.PersistentFlags().String("function", "", "function in of the script to run")
	cmd.PersistentFlags().String("args", "", "json list of the positional argument to the function")
	cmd.PersistentFlags().String("kwargs", "", "json object of the keyword argument to the function")
	cmd.PersistentFlags().String("extralines", "", "Extra line to run (only for running the script that is signing the transaction)")
	cmd.PersistentFlags().String("coins", "", "Amount of coins to send (ignored if running the script that is signing the transaction)")

	return cmd
}

func CmdUpdateScheduledRun() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-scheduled-run [index]",
		Short: "Update a ScheduledRun",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexIndex := args[0]

			// Get value arguments

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateScheduledRun(
				clientCtx.GetFromAddress().String(),
				indexIndex,
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

func CmdDeleteScheduledRun() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-scheduled-run [index]",
		Short: "Delete a ScheduledRun",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexIndex := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteScheduledRun(
				clientCtx.GetFromAddress().String(),
				indexIndex,
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
