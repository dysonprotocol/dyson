package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/org/dyson/x/names/types"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdGenerateCommit() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "generate-commit [owner] [name] [salt]",
		Short: "helper to generate a valid commit has to register a name",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqOwner := args[0]
			reqName := args[1]
			reqSalt := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryGenerateCommitRequest{

				Owner: reqOwner,
				Name:  reqName,
				Salt:  reqSalt,
			}

			res, err := queryClient.GenerateCommit(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
