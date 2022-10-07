package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/org/dyson/x/names/types"
	"github.com/spf13/cobra"
)

func CmdListExpirations() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-expirations",
		Short: "list all expirations",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllExpirationsRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.ExpirationsAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowExpirations() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-expirations [block-height]",
		Short: "shows a expirations",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argBlockHeight := args[0]

			params := &types.QueryGetExpirationsRequest{
				BlockHeight: argBlockHeight,
			}

			res, err := queryClient.Expirations(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
