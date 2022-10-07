package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/org/dyson/x/dyson/types"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdScheduledGasPriceAtBlock() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "sheduled-gas-price-at-block [block-height] [gas-wanted]",
		Short: "Query ShedaledGasPriceAtBlock",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {

			reqBlockHeight, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			reqGasWanted, err := strconv.ParseUint(args[1], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryScheduledGasPriceAndFeeAtBlockRequest{

				Blockheight: reqBlockHeight,
				Gaswanted:   reqGasWanted,
			}

			res, err := queryClient.ScheduledGasPriceAndFeeAtBlock(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
