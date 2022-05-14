package cli

import (
    "context"
	
    "github.com/spf13/cobra"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
    "github.com/org/dyson/x/dyson/types"
)

func CmdListSchedualedRun() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-schedualed-run",
		Short: "list all SchedualedRun",
		RunE: func(cmd *cobra.Command, args []string) error {
            clientCtx := client.GetClientContextFromCmd(cmd)

            pageReq, err := client.ReadPageRequest(cmd.Flags())
            if err != nil {
                return err
            }

            queryClient := types.NewQueryClient(clientCtx)

            params := &types.QueryAllSchedualedRunRequest{
                Pagination: pageReq,
            }

            res, err := queryClient.SchedualedRunAll(context.Background(), params)
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

func CmdShowSchedualedRun() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-schedualed-run [index]",
		Short: "shows a SchedualedRun",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
            clientCtx := client.GetClientContextFromCmd(cmd)

            queryClient := types.NewQueryClient(clientCtx)

             argIndex := args[0]
            
            params := &types.QueryGetSchedualedRunRequest{
                Index: argIndex,
                
            }

            res, err := queryClient.SchedualedRun(context.Background(), params)
            if err != nil {
                return err
            }

            return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

    return cmd
}
