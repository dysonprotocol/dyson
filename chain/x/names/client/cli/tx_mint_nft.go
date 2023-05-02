package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/org/dyson/x/names/types"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdMintNft() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "mint-nft [class-id] [id] [uri] [urihash]",
		Short: "Allows the owner of the Dys Name to mint an NFT",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argClassId := args[0]
			argId := args[1]
			argUri := args[2]
			argUrihash := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgMintNft(
				clientCtx.GetFromAddress().String(),
				argClassId,
				argId,
				argUri,
				argUrihash,
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
