package cli

import (
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/org/dyson/x/names/types"
	"github.com/spf13/cobra"
)

func CmdCreateName() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-name [name] [destination] [price] [expires] [authorized] [precommit] [salt]",
		Short: "Create a new name",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexName := args[0]

			// Get value arguments
			argDestination := args[1]
			argPrice := args[2]
			argExpires := args[3]
			argAuthorized := args[4]
			argPrecommit := args[5]
			argSalt := args[6]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateName(
				clientCtx.GetFromAddress().String(),
				indexName,
				argDestination,
				argPrice,
				argExpires,
				argAuthorized,
				argPrecommit,
				argSalt,
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

func CmdUpdateName() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-name [name] [destination] [price] [expires] [authorized] [precommit] [salt]",
		Short: "Update a name",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexName := args[0]

			// Get value arguments
			argDestination := args[1]
			argPrice := args[2]
			argExpires := args[3]
			argAuthorized := args[4]
			argPrecommit := args[5]
			argSalt := args[6]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateName(
				clientCtx.GetFromAddress().String(),
				indexName,
				argDestination,
				argPrice,
				argExpires,
				argAuthorized,
				argPrecommit,
				argSalt,
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

func CmdDeleteName() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-name [name]",
		Short: "Delete a name",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexName := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteName(
				clientCtx.GetFromAddress().String(),
				indexName,
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
