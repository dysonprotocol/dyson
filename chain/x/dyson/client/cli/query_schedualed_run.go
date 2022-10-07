package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/org/dyson/x/dyson/types"
	"github.com/spf13/cobra"
)

func CmdListScheduledRun() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-scheduled-run",
		Short: "list all ScheduledRun",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllScheduledRunRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.ScheduledRunAll(context.Background(), params)
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

func CmdShowScheduledRun() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-scheduled-run [index]",
		Short: "shows a ScheduledRun",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argIndex := args[0]

			params := &types.QueryGetScheduledRunRequest{
				Index: argIndex,
			}

			res, err := queryClient.ScheduledRun(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
