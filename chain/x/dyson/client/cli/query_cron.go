package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/org/dyson/x/dyson/types"
	"github.com/spf13/cobra"
)

func CmdListCron() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-cron",
		Short: "list all cron",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllCronRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.CronAll(context.Background(), params)
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

func CmdShowCron() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-cron [block-height]",
		Short: "shows a cron",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argBlockHeight := args[0]

			params := &types.QueryGetCronRequest{
				BlockHeight: argBlockHeight,
			}

			res, err := queryClient.Cron(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
