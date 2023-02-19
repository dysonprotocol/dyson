package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/org/dyson/x/dyson/types"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdEncodeProtoAny() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "encode-proto-any [type-url] [json-value]",
		Short: "Query EncodeProtoAny",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqTypeUrl := args[0]
			reqJsonValue := args[1]

			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryEncodeProtoAnyRequest{

				TypeUrl:   reqTypeUrl,
				JsonValue: reqJsonValue,
			}

			res, err := queryClient.EncodeProtoAny(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
