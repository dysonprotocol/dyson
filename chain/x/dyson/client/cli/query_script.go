package cli

import (
	"context"
	"encoding/json"
	"encoding/hex"

	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/gogo/protobuf/proto"

	"github.com/org/dyson/x/dyson/types"
	"github.com/spf13/cobra"

	_ "unsafe"
)

func CmdListScript() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-script",
		Short: "list all script",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllScriptRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.ScriptAll(context.Background(), params)
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

func CmdShowScript() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-script [index]",
		Short: "shows a script",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryGetScriptRequest{
				Index: args[0],
			}

			res, err := queryClient.Script(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowSchema() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-schema [index]",
		Short: "shows the jsonschema for the script",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryGetSchemaRequest{
				Index: args[0],
			}

			res, err := queryClient.Schema(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdWSGI() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "wsgi [index] [http request]",
		Short: "run the WSGI app of a script",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryWsgiRequest{
				Index:       args[0],
				Httprequest: args[1],
			}

			res, err := queryClient.Wsgi(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdDecodeRunResult() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "decode [index]",
		Short: "decode a runscript transction",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)
			var txMsgData sdk.TxMsgData

			data, err := hex.DecodeString(args[0])
			if err != nil {
				panic(err)
			}
			proto.Unmarshal(data, &txMsgData)
			// TODO: suppoort multiple messages in a transaction
			for _, msgData := range txMsgData.Data {
				var msg types.MsgRunResponse
				proto.Unmarshal(msgData.Data, &msg)
				return clientCtx.PrintProto(&msg)
			}

			return nil
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdExportInterfaces() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "export-interfaces",
		Short: "export interfaces and their concrete implementations as json",
		Args:  cobra.ExactArgs(0),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)
			datas := make(map[string][]string)
			allInterfaces := clientCtx.InterfaceRegistry.ListAllInterfaces()
			for _, i := range allInterfaces {
				impls := clientCtx.InterfaceRegistry.ListImplementations(i)
				datas[i] = impls
			}

			out, err := json.Marshal(datas)
			if err != nil {
				return err
			}

			return clientCtx.PrintBytes(out)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdEval() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "eval [script address] --function=foo --args=[1,2,3] --kwargs={\"bar\": \"baz\"} --extralines=\"print('hello world')\" --coins=1000dys,1000token",
		Short: "Runs script on this account",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {

			clientCtx, err := client.GetClientTxContext(cmd)

			if err != nil {
				return err
			}
			queryClient := types.NewQueryClient(clientCtx)

			address := string(args[0])
			argsFunctionName, err := cmd.Flags().GetString("function")
			if err != nil {
				return err
			}
			argsArgs, err := cmd.Flags().GetString("args")
			if err != nil {
				return err
			}
			argsKwargs, err := cmd.Flags().GetString("kwargs")
			if err != nil {
				return err
			}
			argsExtraLines, err := cmd.Flags().GetString("extralines")
			if err != nil {
				return err
			}

			coins, err := cmd.Flags().GetString("coins")
			if err != nil {
				return err
			}

			msg := types.NewMsgRun(clientCtx.GetFromAddress().String(), string(address), string(argsFunctionName), string(argsArgs), string(argsKwargs), string(argsExtraLines), string(coins))
			res, err := queryClient.QueryScript(context.Background(), msg)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddTxFlagsToCmd(cmd)
	cmd.PersistentFlags().String("function", "", "function in of the script to run")
	cmd.PersistentFlags().String("args", "", "json list of the positional argument to the function")
	cmd.PersistentFlags().String("kwargs", "", "json object of the keyword argument to the function")
	cmd.PersistentFlags().String("extralines", "", "Extra line to run (only for running the script that is signing the transaction)")
	cmd.PersistentFlags().String("coins", "", "Amount of coins to send (ignored if running the script that is signing the transaction)")

	return cmd
}
