package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/org/dyson/x/names/types"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdResolve() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "resolve [name]",
		Short: "Query resolve",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqName := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryResolveRequest{

				Name: reqName,
			}

			res, err := queryClient.Resolve(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
