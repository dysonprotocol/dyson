package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	cosmosauthv1beta1types "github.com/cosmos/cosmos-sdk/x/auth/types"
	cosmosvestingv1beta1keeper "github.com/cosmos/cosmos-sdk/x/auth/vesting"
	cosmosvestingv1beta1types "github.com/cosmos/cosmos-sdk/x/auth/vesting/types"
	cosmosauthzv1beta1types "github.com/cosmos/cosmos-sdk/x/authz"
	cosmosbankv1beta1keeper "github.com/cosmos/cosmos-sdk/x/bank/keeper"
	cosmosbankv1beta1types "github.com/cosmos/cosmos-sdk/x/bank/types"
	cosmosdistributionv1beta1keeper "github.com/cosmos/cosmos-sdk/x/distribution/keeper"
	cosmosdistributionv1beta1types "github.com/cosmos/cosmos-sdk/x/distribution/types"
	cosmosfeegrantv1beta1types "github.com/cosmos/cosmos-sdk/x/feegrant"
	cosmosfeegrantv1beta1keeper "github.com/cosmos/cosmos-sdk/x/feegrant/keeper"
	cosmosgovv1keeper "github.com/cosmos/cosmos-sdk/x/gov/keeper"
	cosmosgovv1types "github.com/cosmos/cosmos-sdk/x/gov/types/v1"
	cosmosgovv1beta1types "github.com/cosmos/cosmos-sdk/x/gov/types/v1beta1"
	cosmosgroupv1types "github.com/cosmos/cosmos-sdk/x/group"
	cosmosmintv1beta1types "github.com/cosmos/cosmos-sdk/x/mint/types"
	cosmosparamsv1beta1types "github.com/cosmos/cosmos-sdk/x/params/types/proposal"
	cosmosslashingv1beta1keeper "github.com/cosmos/cosmos-sdk/x/slashing/keeper"
	cosmosslashingv1beta1types "github.com/cosmos/cosmos-sdk/x/slashing/types"
	cosmosstakingv1beta1keeper "github.com/cosmos/cosmos-sdk/x/staking/keeper"
	cosmosstakingv1beta1types "github.com/cosmos/cosmos-sdk/x/staking/types"
	cosmosupgradev1beta1keeper "github.com/cosmos/cosmos-sdk/x/upgrade/keeper"
	cosmosupgradev1beta1types "github.com/cosmos/cosmos-sdk/x/upgrade/types"
	ibcapplicationstransferv1types "github.com/cosmos/ibc-go/v5/modules/apps/transfer/types"
	"github.com/org/dyson/x/dyson/types"
	dysontypes "github.com/org/dyson/x/dyson/types"
	nameskeeper "github.com/org/dyson/x/names/keeper"
	namestypes "github.com/org/dyson/x/names/types"
	"net/http"
)

type RpcReq struct {
	S string
}

// Keeper: cosmosauthv1beta1keeper
// Types: cosmosauthv1beta1types
// github.com/cosmos/cosmos-sdk/x/auth/keeper
func (rpcservice *RpcService) Cosmosauthv1beta1queryaccounts(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosauthv1beta1types.QueryAccountsRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosauthv1beta1keeper.Accounts(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosauthv1beta1keeper
// Types: cosmosauthv1beta1types
// github.com/cosmos/cosmos-sdk/x/auth/keeper
func (rpcservice *RpcService) Cosmosauthv1beta1queryaccount(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosauthv1beta1types.QueryAccountRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosauthv1beta1keeper.Account(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosauthv1beta1keeper
// Types: cosmosauthv1beta1types
// github.com/cosmos/cosmos-sdk/x/auth/keeper
func (rpcservice *RpcService) Cosmosauthv1beta1queryaccountaddressbyid(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosauthv1beta1types.QueryAccountAddressByIDRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosauthv1beta1keeper.AccountAddressByID(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosauthv1beta1keeper
// Types: cosmosauthv1beta1types
// github.com/cosmos/cosmos-sdk/x/auth/keeper
func (rpcservice *RpcService) Cosmosauthv1beta1queryparams(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosauthv1beta1types.QueryParamsRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosauthv1beta1keeper.Params(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosauthv1beta1keeper
// Types: cosmosauthv1beta1types
// github.com/cosmos/cosmos-sdk/x/auth/keeper
func (rpcservice *RpcService) Cosmosauthv1beta1querymoduleaccounts(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosauthv1beta1types.QueryModuleAccountsRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosauthv1beta1keeper.ModuleAccounts(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosauthv1beta1keeper
// Types: cosmosauthv1beta1types
// github.com/cosmos/cosmos-sdk/x/auth/keeper
func (rpcservice *RpcService) Cosmosauthv1beta1querymoduleaccountbyname(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosauthv1beta1types.QueryModuleAccountByNameRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosauthv1beta1keeper.ModuleAccountByName(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosauthv1beta1keeper
// Types: cosmosauthv1beta1types
// github.com/cosmos/cosmos-sdk/x/auth/keeper
func (rpcservice *RpcService) Cosmosauthv1beta1querybech32prefix(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosauthv1beta1types.Bech32PrefixRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosauthv1beta1keeper.Bech32Prefix(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosauthv1beta1keeper
// Types: cosmosauthv1beta1types
// github.com/cosmos/cosmos-sdk/x/auth/keeper
func (rpcservice *RpcService) Cosmosauthv1beta1queryaddressbytestostring(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosauthv1beta1types.AddressBytesToStringRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosauthv1beta1keeper.AddressBytesToString(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosauthv1beta1keeper
// Types: cosmosauthv1beta1types
// github.com/cosmos/cosmos-sdk/x/auth/keeper
func (rpcservice *RpcService) Cosmosauthv1beta1queryaddressstringtobytes(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosauthv1beta1types.AddressStringToBytesRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosauthv1beta1keeper.AddressStringToBytes(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosauthzv1beta1keeper
// Types: cosmosauthzv1beta1types
// None
func (rpcservice *RpcService) Cosmosauthzv1beta1querygrants(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosauthzv1beta1types.QueryGrantsRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosauthzv1beta1keeper.Grants(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosauthzv1beta1keeper
// Types: cosmosauthzv1beta1types
// None
func (rpcservice *RpcService) Cosmosauthzv1beta1querygrantergrants(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosauthzv1beta1types.QueryGranterGrantsRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosauthzv1beta1keeper.GranterGrants(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosauthzv1beta1keeper
// Types: cosmosauthzv1beta1types
// None
func (rpcservice *RpcService) Cosmosauthzv1beta1querygranteegrants(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosauthzv1beta1types.QueryGranteeGrantsRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosauthzv1beta1keeper.GranteeGrants(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosauthzv1beta1keeper
// Types: cosmosauthzv1beta1types
// None
func (rpcservice *RpcService) Cosmosauthzv1beta1sendmsggrant(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosauthzv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosauthzv1beta1keeper).Grant
	var msg cosmosauthzv1beta1types.MsgGrant
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := rpcservice.k.cosmosauthzv1beta1keeper.Grant
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosauthzv1beta1keeper
// Types: cosmosauthzv1beta1types
// None
func (rpcservice *RpcService) Cosmosauthzv1beta1sendmsgexec(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosauthzv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosauthzv1beta1keeper).Exec
	var msg cosmosauthzv1beta1types.MsgExec
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := rpcservice.k.cosmosauthzv1beta1keeper.Exec
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosauthzv1beta1keeper
// Types: cosmosauthzv1beta1types
// None
func (rpcservice *RpcService) Cosmosauthzv1beta1sendmsgrevoke(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosauthzv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosauthzv1beta1keeper).Revoke
	var msg cosmosauthzv1beta1types.MsgRevoke
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := rpcservice.k.cosmosauthzv1beta1keeper.Revoke
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosbankv1beta1keeper
// Types: cosmosbankv1beta1types
// github.com/cosmos/cosmos-sdk/x/bank/keeper
func (rpcservice *RpcService) Cosmosbankv1beta1querybalance(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosbankv1beta1types.QueryBalanceRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosbankv1beta1keeper.Balance(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosbankv1beta1keeper
// Types: cosmosbankv1beta1types
// github.com/cosmos/cosmos-sdk/x/bank/keeper
func (rpcservice *RpcService) Cosmosbankv1beta1queryallbalances(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosbankv1beta1types.QueryAllBalancesRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosbankv1beta1keeper.AllBalances(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosbankv1beta1keeper
// Types: cosmosbankv1beta1types
// github.com/cosmos/cosmos-sdk/x/bank/keeper
func (rpcservice *RpcService) Cosmosbankv1beta1queryspendablebalances(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosbankv1beta1types.QuerySpendableBalancesRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosbankv1beta1keeper.SpendableBalances(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosbankv1beta1keeper
// Types: cosmosbankv1beta1types
// github.com/cosmos/cosmos-sdk/x/bank/keeper
func (rpcservice *RpcService) Cosmosbankv1beta1querytotalsupply(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosbankv1beta1types.QueryTotalSupplyRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosbankv1beta1keeper.TotalSupply(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosbankv1beta1keeper
// Types: cosmosbankv1beta1types
// github.com/cosmos/cosmos-sdk/x/bank/keeper
func (rpcservice *RpcService) Cosmosbankv1beta1querysupplyof(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosbankv1beta1types.QuerySupplyOfRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosbankv1beta1keeper.SupplyOf(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosbankv1beta1keeper
// Types: cosmosbankv1beta1types
// github.com/cosmos/cosmos-sdk/x/bank/keeper
func (rpcservice *RpcService) Cosmosbankv1beta1queryparams(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosbankv1beta1types.QueryParamsRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosbankv1beta1keeper.Params(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosbankv1beta1keeper
// Types: cosmosbankv1beta1types
// github.com/cosmos/cosmos-sdk/x/bank/keeper
func (rpcservice *RpcService) Cosmosbankv1beta1querydenommetadata(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosbankv1beta1types.QueryDenomMetadataRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosbankv1beta1keeper.DenomMetadata(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosbankv1beta1keeper
// Types: cosmosbankv1beta1types
// github.com/cosmos/cosmos-sdk/x/bank/keeper
func (rpcservice *RpcService) Cosmosbankv1beta1querydenomsmetadata(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosbankv1beta1types.QueryDenomsMetadataRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosbankv1beta1keeper.DenomsMetadata(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosbankv1beta1keeper
// Types: cosmosbankv1beta1types
// github.com/cosmos/cosmos-sdk/x/bank/keeper
func (rpcservice *RpcService) Cosmosbankv1beta1querydenomowners(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosbankv1beta1types.QueryDenomOwnersRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosbankv1beta1keeper.DenomOwners(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosbankv1beta1keeper
// Types: cosmosbankv1beta1types
// github.com/cosmos/cosmos-sdk/x/bank/keeper
func (rpcservice *RpcService) Cosmosbankv1beta1sendmsgsend(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosbankv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosbankv1beta1keeper).Send
	var msg cosmosbankv1beta1types.MsgSend
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := cosmosbankv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosbankv1beta1keeper).Send
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosbankv1beta1keeper
// Types: cosmosbankv1beta1types
// github.com/cosmos/cosmos-sdk/x/bank/keeper
func (rpcservice *RpcService) Cosmosbankv1beta1sendmsgmultisend(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosbankv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosbankv1beta1keeper).MultiSend
	var msg cosmosbankv1beta1types.MsgMultiSend
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := cosmosbankv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosbankv1beta1keeper).MultiSend
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosdistributionv1beta1keeper
// Types: cosmosdistributionv1beta1types
// github.com/cosmos/cosmos-sdk/x/distribution/keeper
func (rpcservice *RpcService) Cosmosdistributionv1beta1queryparams(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosdistributionv1beta1types.QueryParamsRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosdistributionv1beta1keeper.Params(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosdistributionv1beta1keeper
// Types: cosmosdistributionv1beta1types
// github.com/cosmos/cosmos-sdk/x/distribution/keeper
func (rpcservice *RpcService) Cosmosdistributionv1beta1queryvalidatoroutstandingrewards(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosdistributionv1beta1types.QueryValidatorOutstandingRewardsRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosdistributionv1beta1keeper.ValidatorOutstandingRewards(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosdistributionv1beta1keeper
// Types: cosmosdistributionv1beta1types
// github.com/cosmos/cosmos-sdk/x/distribution/keeper
func (rpcservice *RpcService) Cosmosdistributionv1beta1queryvalidatorcommission(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosdistributionv1beta1types.QueryValidatorCommissionRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosdistributionv1beta1keeper.ValidatorCommission(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosdistributionv1beta1keeper
// Types: cosmosdistributionv1beta1types
// github.com/cosmos/cosmos-sdk/x/distribution/keeper
func (rpcservice *RpcService) Cosmosdistributionv1beta1queryvalidatorslashes(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosdistributionv1beta1types.QueryValidatorSlashesRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosdistributionv1beta1keeper.ValidatorSlashes(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosdistributionv1beta1keeper
// Types: cosmosdistributionv1beta1types
// github.com/cosmos/cosmos-sdk/x/distribution/keeper
func (rpcservice *RpcService) Cosmosdistributionv1beta1querydelegationrewards(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosdistributionv1beta1types.QueryDelegationRewardsRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosdistributionv1beta1keeper.DelegationRewards(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosdistributionv1beta1keeper
// Types: cosmosdistributionv1beta1types
// github.com/cosmos/cosmos-sdk/x/distribution/keeper
func (rpcservice *RpcService) Cosmosdistributionv1beta1querydelegationtotalrewards(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosdistributionv1beta1types.QueryDelegationTotalRewardsRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosdistributionv1beta1keeper.DelegationTotalRewards(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosdistributionv1beta1keeper
// Types: cosmosdistributionv1beta1types
// github.com/cosmos/cosmos-sdk/x/distribution/keeper
func (rpcservice *RpcService) Cosmosdistributionv1beta1querydelegatorvalidators(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosdistributionv1beta1types.QueryDelegatorValidatorsRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosdistributionv1beta1keeper.DelegatorValidators(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosdistributionv1beta1keeper
// Types: cosmosdistributionv1beta1types
// github.com/cosmos/cosmos-sdk/x/distribution/keeper
func (rpcservice *RpcService) Cosmosdistributionv1beta1querydelegatorwithdrawaddress(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosdistributionv1beta1types.QueryDelegatorWithdrawAddressRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosdistributionv1beta1keeper.DelegatorWithdrawAddress(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosdistributionv1beta1keeper
// Types: cosmosdistributionv1beta1types
// github.com/cosmos/cosmos-sdk/x/distribution/keeper
func (rpcservice *RpcService) Cosmosdistributionv1beta1querycommunitypool(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosdistributionv1beta1types.QueryCommunityPoolRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosdistributionv1beta1keeper.CommunityPool(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosdistributionv1beta1keeper
// Types: cosmosdistributionv1beta1types
// github.com/cosmos/cosmos-sdk/x/distribution/keeper
func (rpcservice *RpcService) Cosmosdistributionv1beta1sendmsgsetwithdrawaddress(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosdistributionv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosdistributionv1beta1keeper).SetWithdrawAddress
	var msg cosmosdistributionv1beta1types.MsgSetWithdrawAddress
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := cosmosdistributionv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosdistributionv1beta1keeper).SetWithdrawAddress
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosdistributionv1beta1keeper
// Types: cosmosdistributionv1beta1types
// github.com/cosmos/cosmos-sdk/x/distribution/keeper
func (rpcservice *RpcService) Cosmosdistributionv1beta1sendmsgwithdrawdelegatorreward(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosdistributionv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosdistributionv1beta1keeper).WithdrawDelegatorReward
	var msg cosmosdistributionv1beta1types.MsgWithdrawDelegatorReward
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := cosmosdistributionv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosdistributionv1beta1keeper).WithdrawDelegatorReward
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosdistributionv1beta1keeper
// Types: cosmosdistributionv1beta1types
// github.com/cosmos/cosmos-sdk/x/distribution/keeper
func (rpcservice *RpcService) Cosmosdistributionv1beta1sendmsgwithdrawvalidatorcommission(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosdistributionv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosdistributionv1beta1keeper).WithdrawValidatorCommission
	var msg cosmosdistributionv1beta1types.MsgWithdrawValidatorCommission
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := cosmosdistributionv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosdistributionv1beta1keeper).WithdrawValidatorCommission
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosdistributionv1beta1keeper
// Types: cosmosdistributionv1beta1types
// github.com/cosmos/cosmos-sdk/x/distribution/keeper
func (rpcservice *RpcService) Cosmosdistributionv1beta1sendmsgfundcommunitypool(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosdistributionv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosdistributionv1beta1keeper).FundCommunityPool
	var msg cosmosdistributionv1beta1types.MsgFundCommunityPool
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := cosmosdistributionv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosdistributionv1beta1keeper).FundCommunityPool
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosfeegrantv1beta1keeper
// Types: cosmosfeegrantv1beta1types
// github.com/cosmos/cosmos-sdk/x/feegrant/keeper
func (rpcservice *RpcService) Cosmosfeegrantv1beta1queryallowance(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosfeegrantv1beta1types.QueryAllowanceRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosfeegrantv1beta1keeper.Allowance(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosfeegrantv1beta1keeper
// Types: cosmosfeegrantv1beta1types
// github.com/cosmos/cosmos-sdk/x/feegrant/keeper
func (rpcservice *RpcService) Cosmosfeegrantv1beta1queryallowances(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosfeegrantv1beta1types.QueryAllowancesRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosfeegrantv1beta1keeper.Allowances(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosfeegrantv1beta1keeper
// Types: cosmosfeegrantv1beta1types
// github.com/cosmos/cosmos-sdk/x/feegrant/keeper
func (rpcservice *RpcService) Cosmosfeegrantv1beta1queryallowancesbygranter(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosfeegrantv1beta1types.QueryAllowancesByGranterRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosfeegrantv1beta1keeper.AllowancesByGranter(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosfeegrantv1beta1keeper
// Types: cosmosfeegrantv1beta1types
// github.com/cosmos/cosmos-sdk/x/feegrant/keeper
func (rpcservice *RpcService) Cosmosfeegrantv1beta1sendmsggrantallowance(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosfeegrantv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosfeegrantv1beta1keeper).GrantAllowance
	var msg cosmosfeegrantv1beta1types.MsgGrantAllowance
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := cosmosfeegrantv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosfeegrantv1beta1keeper).GrantAllowance
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosfeegrantv1beta1keeper
// Types: cosmosfeegrantv1beta1types
// github.com/cosmos/cosmos-sdk/x/feegrant/keeper
func (rpcservice *RpcService) Cosmosfeegrantv1beta1sendmsgrevokeallowance(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosfeegrantv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosfeegrantv1beta1keeper).RevokeAllowance
	var msg cosmosfeegrantv1beta1types.MsgRevokeAllowance
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := cosmosfeegrantv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosfeegrantv1beta1keeper).RevokeAllowance
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgovv1beta1keeper
// Types: cosmosgovv1beta1types
// None
func (rpcservice *RpcService) Cosmosgovv1beta1queryproposal(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosgovv1beta1types.QueryProposalRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := cosmosgovv1keeper.NewLegacyQueryServer(rpcservice.k.cosmosgovv1keeper).Proposal(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgovv1beta1keeper
// Types: cosmosgovv1beta1types
// None
func (rpcservice *RpcService) Cosmosgovv1beta1queryproposals(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosgovv1beta1types.QueryProposalsRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := cosmosgovv1keeper.NewLegacyQueryServer(rpcservice.k.cosmosgovv1keeper).Proposals(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgovv1beta1keeper
// Types: cosmosgovv1beta1types
// None
func (rpcservice *RpcService) Cosmosgovv1beta1queryvote(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosgovv1beta1types.QueryVoteRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := cosmosgovv1keeper.NewLegacyQueryServer(rpcservice.k.cosmosgovv1keeper).Vote(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgovv1beta1keeper
// Types: cosmosgovv1beta1types
// None
func (rpcservice *RpcService) Cosmosgovv1beta1queryvotes(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosgovv1beta1types.QueryVotesRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := cosmosgovv1keeper.NewLegacyQueryServer(rpcservice.k.cosmosgovv1keeper).Votes(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgovv1beta1keeper
// Types: cosmosgovv1beta1types
// None
func (rpcservice *RpcService) Cosmosgovv1beta1queryparams(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosgovv1beta1types.QueryParamsRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := cosmosgovv1keeper.NewLegacyQueryServer(rpcservice.k.cosmosgovv1keeper).Params(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgovv1beta1keeper
// Types: cosmosgovv1beta1types
// None
func (rpcservice *RpcService) Cosmosgovv1beta1querydeposit(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosgovv1beta1types.QueryDepositRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := cosmosgovv1keeper.NewLegacyQueryServer(rpcservice.k.cosmosgovv1keeper).Deposit(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgovv1beta1keeper
// Types: cosmosgovv1beta1types
// None
func (rpcservice *RpcService) Cosmosgovv1beta1querydeposits(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosgovv1beta1types.QueryDepositsRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := cosmosgovv1keeper.NewLegacyQueryServer(rpcservice.k.cosmosgovv1keeper).Deposits(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgovv1beta1keeper
// Types: cosmosgovv1beta1types
// None
func (rpcservice *RpcService) Cosmosgovv1beta1querytallyresult(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosgovv1beta1types.QueryTallyResultRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := cosmosgovv1keeper.NewLegacyQueryServer(rpcservice.k.cosmosgovv1keeper).TallyResult(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgovv1beta1keeper
// Types: cosmosgovv1beta1types
// None
func (rpcservice *RpcService) Cosmosgovv1beta1sendmsgsubmitproposal(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosgovv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosgovv1beta1keeper).SubmitProposal
	var msg cosmosgovv1beta1types.MsgSubmitProposal
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	msgServer := cosmosgovv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgovv1keeper)
	handler := cosmosgovv1keeper.NewLegacyMsgServerImpl(rpcservice.k.accountKeeper.GetModuleAddress("gov").String(), msgServer).SubmitProposal
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgovv1beta1keeper
// Types: cosmosgovv1beta1types
// None
func (rpcservice *RpcService) Cosmosgovv1beta1sendmsgvote(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosgovv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosgovv1beta1keeper).Vote
	var msg cosmosgovv1beta1types.MsgVote
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	msgServer := cosmosgovv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgovv1keeper)
	handler := cosmosgovv1keeper.NewLegacyMsgServerImpl(rpcservice.k.accountKeeper.GetModuleAddress("gov").String(), msgServer).Vote
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgovv1beta1keeper
// Types: cosmosgovv1beta1types
// None
func (rpcservice *RpcService) Cosmosgovv1beta1sendmsgvoteweighted(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosgovv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosgovv1beta1keeper).VoteWeighted
	var msg cosmosgovv1beta1types.MsgVoteWeighted
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	msgServer := cosmosgovv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgovv1keeper)
	handler := cosmosgovv1keeper.NewLegacyMsgServerImpl(rpcservice.k.accountKeeper.GetModuleAddress("gov").String(), msgServer).VoteWeighted
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgovv1beta1keeper
// Types: cosmosgovv1beta1types
// None
func (rpcservice *RpcService) Cosmosgovv1beta1sendmsgdeposit(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosgovv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosgovv1beta1keeper).Deposit
	var msg cosmosgovv1beta1types.MsgDeposit
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	msgServer := cosmosgovv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgovv1keeper)
	handler := cosmosgovv1keeper.NewLegacyMsgServerImpl(rpcservice.k.accountKeeper.GetModuleAddress("gov").String(), msgServer).Deposit
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgovv1keeper
// Types: cosmosgovv1types
// None
func (rpcservice *RpcService) Cosmosgovv1queryproposal(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosgovv1types.QueryProposalRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosgovv1keeper.Proposal(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgovv1keeper
// Types: cosmosgovv1types
// None
func (rpcservice *RpcService) Cosmosgovv1queryproposals(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosgovv1types.QueryProposalsRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosgovv1keeper.Proposals(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgovv1keeper
// Types: cosmosgovv1types
// None
func (rpcservice *RpcService) Cosmosgovv1queryvote(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosgovv1types.QueryVoteRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosgovv1keeper.Vote(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgovv1keeper
// Types: cosmosgovv1types
// None
func (rpcservice *RpcService) Cosmosgovv1queryvotes(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosgovv1types.QueryVotesRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosgovv1keeper.Votes(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgovv1keeper
// Types: cosmosgovv1types
// None
func (rpcservice *RpcService) Cosmosgovv1queryparams(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosgovv1types.QueryParamsRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosgovv1keeper.Params(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgovv1keeper
// Types: cosmosgovv1types
// None
func (rpcservice *RpcService) Cosmosgovv1querydeposit(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosgovv1types.QueryDepositRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosgovv1keeper.Deposit(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgovv1keeper
// Types: cosmosgovv1types
// None
func (rpcservice *RpcService) Cosmosgovv1querydeposits(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosgovv1types.QueryDepositsRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosgovv1keeper.Deposits(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgovv1keeper
// Types: cosmosgovv1types
// None
func (rpcservice *RpcService) Cosmosgovv1querytallyresult(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosgovv1types.QueryTallyResultRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosgovv1keeper.TallyResult(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgovv1keeper
// Types: cosmosgovv1types
// github.com/cosmos/cosmos-sdk/x/gov/keeper
func (rpcservice *RpcService) Cosmosgovv1sendmsgsubmitproposal(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosgovv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgovv1keeper).SubmitProposal
	var msg cosmosgovv1types.MsgSubmitProposal
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := cosmosgovv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgovv1keeper).SubmitProposal
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgovv1keeper
// Types: cosmosgovv1types
// github.com/cosmos/cosmos-sdk/x/gov/keeper
func (rpcservice *RpcService) Cosmosgovv1sendmsgexeclegacycontent(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosgovv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgovv1keeper).ExecLegacyContent
	var msg cosmosgovv1types.MsgExecLegacyContent
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := cosmosgovv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgovv1keeper).ExecLegacyContent
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgovv1keeper
// Types: cosmosgovv1types
// github.com/cosmos/cosmos-sdk/x/gov/keeper
func (rpcservice *RpcService) Cosmosgovv1sendmsgvote(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosgovv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgovv1keeper).Vote
	var msg cosmosgovv1types.MsgVote
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := cosmosgovv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgovv1keeper).Vote
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgovv1keeper
// Types: cosmosgovv1types
// github.com/cosmos/cosmos-sdk/x/gov/keeper
func (rpcservice *RpcService) Cosmosgovv1sendmsgvoteweighted(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosgovv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgovv1keeper).VoteWeighted
	var msg cosmosgovv1types.MsgVoteWeighted
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := cosmosgovv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgovv1keeper).VoteWeighted
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgovv1keeper
// Types: cosmosgovv1types
// github.com/cosmos/cosmos-sdk/x/gov/keeper
func (rpcservice *RpcService) Cosmosgovv1sendmsgdeposit(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosgovv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgovv1keeper).Deposit
	var msg cosmosgovv1types.MsgDeposit
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := cosmosgovv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgovv1keeper).Deposit
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1querygroupinfo(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosgroupv1types.QueryGroupInfoRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosgroupv1keeper.GroupInfo(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1querygrouppolicyinfo(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosgroupv1types.QueryGroupPolicyInfoRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosgroupv1keeper.GroupPolicyInfo(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1querygroupmembers(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosgroupv1types.QueryGroupMembersRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosgroupv1keeper.GroupMembers(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1querygroupsbyadmin(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosgroupv1types.QueryGroupsByAdminRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosgroupv1keeper.GroupsByAdmin(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1querygrouppoliciesbygroup(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosgroupv1types.QueryGroupPoliciesByGroupRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosgroupv1keeper.GroupPoliciesByGroup(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1querygrouppoliciesbyadmin(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosgroupv1types.QueryGroupPoliciesByAdminRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosgroupv1keeper.GroupPoliciesByAdmin(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1queryproposal(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosgroupv1types.QueryProposalRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosgroupv1keeper.Proposal(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1queryproposalsbygrouppolicy(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosgroupv1types.QueryProposalsByGroupPolicyRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosgroupv1keeper.ProposalsByGroupPolicy(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1queryvotebyproposalvoter(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosgroupv1types.QueryVoteByProposalVoterRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosgroupv1keeper.VoteByProposalVoter(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1queryvotesbyproposal(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosgroupv1types.QueryVotesByProposalRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosgroupv1keeper.VotesByProposal(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1queryvotesbyvoter(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosgroupv1types.QueryVotesByVoterRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosgroupv1keeper.VotesByVoter(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1querygroupsbymember(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosgroupv1types.QueryGroupsByMemberRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosgroupv1keeper.GroupsByMember(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1querytallyresult(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosgroupv1types.QueryTallyResultRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosgroupv1keeper.TallyResult(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1sendmsgcreategroup(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosgroupv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgroupv1keeper).CreateGroup
	var msg cosmosgroupv1types.MsgCreateGroup
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := rpcservice.k.cosmosgroupv1keeper.CreateGroup
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1sendmsgupdategroupmembers(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosgroupv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgroupv1keeper).UpdateGroupMembers
	var msg cosmosgroupv1types.MsgUpdateGroupMembers
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := rpcservice.k.cosmosgroupv1keeper.UpdateGroupMembers
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1sendmsgupdategroupadmin(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosgroupv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgroupv1keeper).UpdateGroupAdmin
	var msg cosmosgroupv1types.MsgUpdateGroupAdmin
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := rpcservice.k.cosmosgroupv1keeper.UpdateGroupAdmin
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1sendmsgupdategroupmetadata(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosgroupv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgroupv1keeper).UpdateGroupMetadata
	var msg cosmosgroupv1types.MsgUpdateGroupMetadata
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := rpcservice.k.cosmosgroupv1keeper.UpdateGroupMetadata
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1sendmsgcreategrouppolicy(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosgroupv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgroupv1keeper).CreateGroupPolicy
	var msg cosmosgroupv1types.MsgCreateGroupPolicy
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := rpcservice.k.cosmosgroupv1keeper.CreateGroupPolicy
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1sendmsgcreategroupwithpolicy(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosgroupv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgroupv1keeper).CreateGroupWithPolicy
	var msg cosmosgroupv1types.MsgCreateGroupWithPolicy
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := rpcservice.k.cosmosgroupv1keeper.CreateGroupWithPolicy
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1sendmsgupdategrouppolicyadmin(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosgroupv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgroupv1keeper).UpdateGroupPolicyAdmin
	var msg cosmosgroupv1types.MsgUpdateGroupPolicyAdmin
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := rpcservice.k.cosmosgroupv1keeper.UpdateGroupPolicyAdmin
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1sendmsgupdategrouppolicydecisionpolicy(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosgroupv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgroupv1keeper).UpdateGroupPolicyDecisionPolicy
	var msg cosmosgroupv1types.MsgUpdateGroupPolicyDecisionPolicy
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := rpcservice.k.cosmosgroupv1keeper.UpdateGroupPolicyDecisionPolicy
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1sendmsgupdategrouppolicymetadata(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosgroupv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgroupv1keeper).UpdateGroupPolicyMetadata
	var msg cosmosgroupv1types.MsgUpdateGroupPolicyMetadata
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := rpcservice.k.cosmosgroupv1keeper.UpdateGroupPolicyMetadata
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1sendmsgsubmitproposal(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosgroupv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgroupv1keeper).SubmitProposal
	var msg cosmosgroupv1types.MsgSubmitProposal
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := rpcservice.k.cosmosgroupv1keeper.SubmitProposal
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1sendmsgwithdrawproposal(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosgroupv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgroupv1keeper).WithdrawProposal
	var msg cosmosgroupv1types.MsgWithdrawProposal
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := rpcservice.k.cosmosgroupv1keeper.WithdrawProposal
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1sendmsgvote(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosgroupv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgroupv1keeper).Vote
	var msg cosmosgroupv1types.MsgVote
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := rpcservice.k.cosmosgroupv1keeper.Vote
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1sendmsgexec(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosgroupv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgroupv1keeper).Exec
	var msg cosmosgroupv1types.MsgExec
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := rpcservice.k.cosmosgroupv1keeper.Exec
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1sendmsgleavegroup(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosgroupv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgroupv1keeper).LeaveGroup
	var msg cosmosgroupv1types.MsgLeaveGroup
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := rpcservice.k.cosmosgroupv1keeper.LeaveGroup
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosmintv1beta1keeper
// Types: cosmosmintv1beta1types
// github.com/cosmos/cosmos-sdk/x/mint/keeper
func (rpcservice *RpcService) Cosmosmintv1beta1queryparams(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosmintv1beta1types.QueryParamsRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosmintv1beta1keeper.Params(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosmintv1beta1keeper
// Types: cosmosmintv1beta1types
// github.com/cosmos/cosmos-sdk/x/mint/keeper
func (rpcservice *RpcService) Cosmosmintv1beta1queryinflation(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosmintv1beta1types.QueryInflationRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosmintv1beta1keeper.Inflation(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosmintv1beta1keeper
// Types: cosmosmintv1beta1types
// github.com/cosmos/cosmos-sdk/x/mint/keeper
func (rpcservice *RpcService) Cosmosmintv1beta1queryannualprovisions(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosmintv1beta1types.QueryAnnualProvisionsRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosmintv1beta1keeper.AnnualProvisions(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosparamsv1beta1keeper
// Types: cosmosparamsv1beta1types
// github.com/cosmos/cosmos-sdk/x/params/keeper/proposal
func (rpcservice *RpcService) Cosmosparamsv1beta1queryparams(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosparamsv1beta1types.QueryParamsRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosparamsv1beta1keeper.Params(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosparamsv1beta1keeper
// Types: cosmosparamsv1beta1types
// github.com/cosmos/cosmos-sdk/x/params/keeper/proposal
func (rpcservice *RpcService) Cosmosparamsv1beta1querysubspaces(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosparamsv1beta1types.QuerySubspacesRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosparamsv1beta1keeper.Subspaces(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosslashingv1beta1keeper
// Types: cosmosslashingv1beta1types
// github.com/cosmos/cosmos-sdk/x/slashing/keeper
func (rpcservice *RpcService) Cosmosslashingv1beta1queryparams(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosslashingv1beta1types.QueryParamsRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosslashingv1beta1keeper.Params(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosslashingv1beta1keeper
// Types: cosmosslashingv1beta1types
// github.com/cosmos/cosmos-sdk/x/slashing/keeper
func (rpcservice *RpcService) Cosmosslashingv1beta1querysigninginfo(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosslashingv1beta1types.QuerySigningInfoRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosslashingv1beta1keeper.SigningInfo(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosslashingv1beta1keeper
// Types: cosmosslashingv1beta1types
// github.com/cosmos/cosmos-sdk/x/slashing/keeper
func (rpcservice *RpcService) Cosmosslashingv1beta1querysigninginfos(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosslashingv1beta1types.QuerySigningInfosRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosslashingv1beta1keeper.SigningInfos(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosslashingv1beta1keeper
// Types: cosmosslashingv1beta1types
// github.com/cosmos/cosmos-sdk/x/slashing/keeper
func (rpcservice *RpcService) Cosmosslashingv1beta1sendmsgunjail(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosslashingv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosslashingv1beta1keeper).Unjail
	var msg cosmosslashingv1beta1types.MsgUnjail
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := cosmosslashingv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosslashingv1beta1keeper).Unjail
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosstakingv1beta1querier
// Types: cosmosstakingv1beta1types
// None
func (rpcservice *RpcService) Cosmosstakingv1beta1queryvalidators(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosstakingv1beta1types.QueryValidatorsRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosstakingv1beta1querier.Validators(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosstakingv1beta1querier
// Types: cosmosstakingv1beta1types
// None
func (rpcservice *RpcService) Cosmosstakingv1beta1queryvalidator(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosstakingv1beta1types.QueryValidatorRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosstakingv1beta1querier.Validator(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosstakingv1beta1querier
// Types: cosmosstakingv1beta1types
// None
func (rpcservice *RpcService) Cosmosstakingv1beta1queryvalidatordelegations(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosstakingv1beta1types.QueryValidatorDelegationsRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosstakingv1beta1querier.ValidatorDelegations(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosstakingv1beta1querier
// Types: cosmosstakingv1beta1types
// None
func (rpcservice *RpcService) Cosmosstakingv1beta1queryvalidatorunbondingdelegations(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosstakingv1beta1types.QueryValidatorUnbondingDelegationsRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosstakingv1beta1querier.ValidatorUnbondingDelegations(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosstakingv1beta1querier
// Types: cosmosstakingv1beta1types
// None
func (rpcservice *RpcService) Cosmosstakingv1beta1querydelegation(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosstakingv1beta1types.QueryDelegationRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosstakingv1beta1querier.Delegation(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosstakingv1beta1querier
// Types: cosmosstakingv1beta1types
// None
func (rpcservice *RpcService) Cosmosstakingv1beta1queryunbondingdelegation(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosstakingv1beta1types.QueryUnbondingDelegationRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosstakingv1beta1querier.UnbondingDelegation(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosstakingv1beta1querier
// Types: cosmosstakingv1beta1types
// None
func (rpcservice *RpcService) Cosmosstakingv1beta1querydelegatordelegations(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosstakingv1beta1types.QueryDelegatorDelegationsRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosstakingv1beta1querier.DelegatorDelegations(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosstakingv1beta1querier
// Types: cosmosstakingv1beta1types
// None
func (rpcservice *RpcService) Cosmosstakingv1beta1querydelegatorunbondingdelegations(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosstakingv1beta1types.QueryDelegatorUnbondingDelegationsRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosstakingv1beta1querier.DelegatorUnbondingDelegations(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosstakingv1beta1querier
// Types: cosmosstakingv1beta1types
// None
func (rpcservice *RpcService) Cosmosstakingv1beta1queryredelegations(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosstakingv1beta1types.QueryRedelegationsRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosstakingv1beta1querier.Redelegations(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosstakingv1beta1querier
// Types: cosmosstakingv1beta1types
// None
func (rpcservice *RpcService) Cosmosstakingv1beta1querydelegatorvalidators(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosstakingv1beta1types.QueryDelegatorValidatorsRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosstakingv1beta1querier.DelegatorValidators(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosstakingv1beta1querier
// Types: cosmosstakingv1beta1types
// None
func (rpcservice *RpcService) Cosmosstakingv1beta1querydelegatorvalidator(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosstakingv1beta1types.QueryDelegatorValidatorRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosstakingv1beta1querier.DelegatorValidator(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosstakingv1beta1querier
// Types: cosmosstakingv1beta1types
// None
func (rpcservice *RpcService) Cosmosstakingv1beta1queryhistoricalinfo(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosstakingv1beta1types.QueryHistoricalInfoRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosstakingv1beta1querier.HistoricalInfo(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosstakingv1beta1querier
// Types: cosmosstakingv1beta1types
// None
func (rpcservice *RpcService) Cosmosstakingv1beta1querypool(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosstakingv1beta1types.QueryPoolRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosstakingv1beta1querier.Pool(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosstakingv1beta1querier
// Types: cosmosstakingv1beta1types
// None
func (rpcservice *RpcService) Cosmosstakingv1beta1queryparams(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosstakingv1beta1types.QueryParamsRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosstakingv1beta1querier.Params(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosstakingv1beta1keeper
// Types: cosmosstakingv1beta1types
// github.com/cosmos/cosmos-sdk/x/staking/keeper
func (rpcservice *RpcService) Cosmosstakingv1beta1sendmsgcreatevalidator(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosstakingv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosstakingv1beta1keeper).CreateValidator
	var msg cosmosstakingv1beta1types.MsgCreateValidator
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := cosmosstakingv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosstakingv1beta1keeper).CreateValidator
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosstakingv1beta1keeper
// Types: cosmosstakingv1beta1types
// github.com/cosmos/cosmos-sdk/x/staking/keeper
func (rpcservice *RpcService) Cosmosstakingv1beta1sendmsgeditvalidator(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosstakingv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosstakingv1beta1keeper).EditValidator
	var msg cosmosstakingv1beta1types.MsgEditValidator
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := cosmosstakingv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosstakingv1beta1keeper).EditValidator
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosstakingv1beta1keeper
// Types: cosmosstakingv1beta1types
// github.com/cosmos/cosmos-sdk/x/staking/keeper
func (rpcservice *RpcService) Cosmosstakingv1beta1sendmsgdelegate(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosstakingv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosstakingv1beta1keeper).Delegate
	var msg cosmosstakingv1beta1types.MsgDelegate
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := cosmosstakingv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosstakingv1beta1keeper).Delegate
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosstakingv1beta1keeper
// Types: cosmosstakingv1beta1types
// github.com/cosmos/cosmos-sdk/x/staking/keeper
func (rpcservice *RpcService) Cosmosstakingv1beta1sendmsgbeginredelegate(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosstakingv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosstakingv1beta1keeper).BeginRedelegate
	var msg cosmosstakingv1beta1types.MsgBeginRedelegate
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := cosmosstakingv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosstakingv1beta1keeper).BeginRedelegate
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosstakingv1beta1keeper
// Types: cosmosstakingv1beta1types
// github.com/cosmos/cosmos-sdk/x/staking/keeper
func (rpcservice *RpcService) Cosmosstakingv1beta1sendmsgundelegate(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosstakingv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosstakingv1beta1keeper).Undelegate
	var msg cosmosstakingv1beta1types.MsgUndelegate
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := cosmosstakingv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosstakingv1beta1keeper).Undelegate
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosstakingv1beta1keeper
// Types: cosmosstakingv1beta1types
// github.com/cosmos/cosmos-sdk/x/staking/keeper
func (rpcservice *RpcService) Cosmosstakingv1beta1sendmsgcancelunbondingdelegation(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosstakingv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosstakingv1beta1keeper).CancelUnbondingDelegation
	var msg cosmosstakingv1beta1types.MsgCancelUnbondingDelegation
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := cosmosstakingv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosstakingv1beta1keeper).CancelUnbondingDelegation
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosupgradev1beta1keeper
// Types: cosmosupgradev1beta1types
// github.com/cosmos/cosmos-sdk/x/upgrade/keeper
func (rpcservice *RpcService) Cosmosupgradev1beta1querycurrentplan(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosupgradev1beta1types.QueryCurrentPlanRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosupgradev1beta1keeper.CurrentPlan(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosupgradev1beta1keeper
// Types: cosmosupgradev1beta1types
// github.com/cosmos/cosmos-sdk/x/upgrade/keeper
func (rpcservice *RpcService) Cosmosupgradev1beta1queryappliedplan(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosupgradev1beta1types.QueryAppliedPlanRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosupgradev1beta1keeper.AppliedPlan(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosupgradev1beta1keeper
// Types: cosmosupgradev1beta1types
// github.com/cosmos/cosmos-sdk/x/upgrade/keeper
func (rpcservice *RpcService) Cosmosupgradev1beta1queryupgradedconsensusstate(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosupgradev1beta1types.QueryUpgradedConsensusStateRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosupgradev1beta1keeper.UpgradedConsensusState(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosupgradev1beta1keeper
// Types: cosmosupgradev1beta1types
// github.com/cosmos/cosmos-sdk/x/upgrade/keeper
func (rpcservice *RpcService) Cosmosupgradev1beta1querymoduleversions(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosupgradev1beta1types.QueryModuleVersionsRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosupgradev1beta1keeper.ModuleVersions(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosupgradev1beta1keeper
// Types: cosmosupgradev1beta1types
// github.com/cosmos/cosmos-sdk/x/upgrade/keeper
func (rpcservice *RpcService) Cosmosupgradev1beta1queryauthority(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg cosmosupgradev1beta1types.QueryAuthorityRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.cosmosupgradev1beta1keeper.Authority(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosupgradev1beta1keeper
// Types: cosmosupgradev1beta1types
// github.com/cosmos/cosmos-sdk/x/upgrade/keeper
func (rpcservice *RpcService) Cosmosupgradev1beta1sendmsgsoftwareupgrade(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosupgradev1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosupgradev1beta1keeper).SoftwareUpgrade
	var msg cosmosupgradev1beta1types.MsgSoftwareUpgrade
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := cosmosupgradev1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosupgradev1beta1keeper).SoftwareUpgrade
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosupgradev1beta1keeper
// Types: cosmosupgradev1beta1types
// github.com/cosmos/cosmos-sdk/x/upgrade/keeper
func (rpcservice *RpcService) Cosmosupgradev1beta1sendmsgcancelupgrade(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosupgradev1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosupgradev1beta1keeper).CancelUpgrade
	var msg cosmosupgradev1beta1types.MsgCancelUpgrade
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := cosmosupgradev1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosupgradev1beta1keeper).CancelUpgrade
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosvestingv1beta1keeper
// Types: cosmosvestingv1beta1types
// github.com/cosmos/cosmos-sdk/x/auth/vesting
func (rpcservice *RpcService) Cosmosvestingv1beta1sendmsgcreatevestingaccount(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosvestingv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosvestingv1beta1keeper).CreateVestingAccount
	var msg cosmosvestingv1beta1types.MsgCreateVestingAccount
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := cosmosvestingv1beta1keeper.NewMsgServerImpl(rpcservice.k.accountKeeper, rpcservice.k.bankkeeper).CreateVestingAccount
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosvestingv1beta1keeper
// Types: cosmosvestingv1beta1types
// github.com/cosmos/cosmos-sdk/x/auth/vesting
func (rpcservice *RpcService) Cosmosvestingv1beta1sendmsgcreatepermanentlockedaccount(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosvestingv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosvestingv1beta1keeper).CreatePermanentLockedAccount
	var msg cosmosvestingv1beta1types.MsgCreatePermanentLockedAccount
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := cosmosvestingv1beta1keeper.NewMsgServerImpl(rpcservice.k.accountKeeper, rpcservice.k.bankkeeper).CreatePermanentLockedAccount
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: cosmosvestingv1beta1keeper
// Types: cosmosvestingv1beta1types
// github.com/cosmos/cosmos-sdk/x/auth/vesting
func (rpcservice *RpcService) Cosmosvestingv1beta1sendmsgcreateperiodicvestingaccount(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := cosmosvestingv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosvestingv1beta1keeper).CreatePeriodicVestingAccount
	var msg cosmosvestingv1beta1types.MsgCreatePeriodicVestingAccount
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := cosmosvestingv1beta1keeper.NewMsgServerImpl(rpcservice.k.accountKeeper, rpcservice.k.bankkeeper).CreatePeriodicVestingAccount
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: ibcapplicationstransferv1keeper
// Types: ibcapplicationstransferv1types
// None
func (rpcservice *RpcService) Ibcapplicationstransferv1querydenomtrace(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg ibcapplicationstransferv1types.QueryDenomTraceRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.ibcapplicationstransferv1keeper.DenomTrace(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: ibcapplicationstransferv1keeper
// Types: ibcapplicationstransferv1types
// None
func (rpcservice *RpcService) Ibcapplicationstransferv1querydenomtraces(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg ibcapplicationstransferv1types.QueryDenomTracesRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.ibcapplicationstransferv1keeper.DenomTraces(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: ibcapplicationstransferv1keeper
// Types: ibcapplicationstransferv1types
// None
func (rpcservice *RpcService) Ibcapplicationstransferv1queryparams(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg ibcapplicationstransferv1types.QueryParamsRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.ibcapplicationstransferv1keeper.Params(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: ibcapplicationstransferv1keeper
// Types: ibcapplicationstransferv1types
// None
func (rpcservice *RpcService) Ibcapplicationstransferv1querydenomhash(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg ibcapplicationstransferv1types.QueryDenomHashRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.ibcapplicationstransferv1keeper.DenomHash(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: ibcapplicationstransferv1keeper
// Types: ibcapplicationstransferv1types
// None
func (rpcservice *RpcService) Ibcapplicationstransferv1queryescrowaddress(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg ibcapplicationstransferv1types.QueryEscrowAddressRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.ibcapplicationstransferv1keeper.EscrowAddress(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: ibcapplicationstransferv1keeper
// Types: ibcapplicationstransferv1types
// None
func (rpcservice *RpcService) Ibcapplicationstransferv1sendmsgtransfer(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := ibcapplicationstransferv1keeper.NewMsgServerImpl(rpcservice.k.ibcapplicationstransferv1keeper).Transfer
	var msg ibcapplicationstransferv1types.MsgTransfer
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := rpcservice.k.ibcapplicationstransferv1keeper.Transfer
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonqueryscheduledrun(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg dysontypes.QueryGetScheduledRunRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.ScheduledRun(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonqueryscheduledrunall(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg dysontypes.QueryAllScheduledRunRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.ScheduledRunAll(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonquerystorage(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg dysontypes.QueryGetStorageRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.Storage(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonquerystorageall(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg dysontypes.QueryAllStorageRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.StorageAll(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonqueryscript(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg dysontypes.QueryGetScriptRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.Script(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonqueryschema(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg dysontypes.QueryGetSchemaRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.Schema(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonquerywsgi(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg dysontypes.QueryWsgiRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.Wsgi(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonqueryqueryscript(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg dysontypes.MsgRun
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.QueryScript(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonqueryscriptall(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg dysontypes.QueryAllScriptRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.ScriptAll(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonqueryprefixstorage(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg dysontypes.QueryPrefixStorageRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.PrefixStorage(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonqueryscheduledgaspriceandfeeatblock(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg dysontypes.QueryScheduledGasPriceAndFeeAtBlockRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.ScheduledGasPriceAndFeeAtBlock(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonquerycron(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg dysontypes.QueryGetCronRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.Cron(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonquerycronall(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg dysontypes.QueryAllCronRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.CronAll(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonqueryencodeprotoany(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg dysontypes.QueryEncodeProtoAnyRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.EncodeProtoAny(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonsendmsgcreatescheduledrun(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := dysonkeeper.NewMsgServerImpl(rpcservice.k.dysonkeeper).CreateScheduledRun
	var msg dysontypes.MsgCreateScheduledRun
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := rpcservice.m.CreateScheduledRun
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonsendmsgcreatestorage(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := dysonkeeper.NewMsgServerImpl(rpcservice.k.dysonkeeper).CreateStorage
	var msg dysontypes.MsgCreateStorage
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := rpcservice.m.CreateStorage
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonsendmsgupdatestorage(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := dysonkeeper.NewMsgServerImpl(rpcservice.k.dysonkeeper).UpdateStorage
	var msg dysontypes.MsgUpdateStorage
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := rpcservice.m.UpdateStorage
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonsendmsgdeletestorage(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := dysonkeeper.NewMsgServerImpl(rpcservice.k.dysonkeeper).DeleteStorage
	var msg dysontypes.MsgDeleteStorage
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := rpcservice.m.DeleteStorage
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonsendmsgdeployautonomousscript(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := dysonkeeper.NewMsgServerImpl(rpcservice.k.dysonkeeper).DeployAutonomousScript
	var msg dysontypes.MsgDeployAutonomousScript
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := rpcservice.m.DeployAutonomousScript
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonsendmsgupdatescript(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := dysonkeeper.NewMsgServerImpl(rpcservice.k.dysonkeeper).UpdateScript
	var msg dysontypes.MsgUpdateScript
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := rpcservice.m.UpdateScript
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonsendmsgdeletescript(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := dysonkeeper.NewMsgServerImpl(rpcservice.k.dysonkeeper).DeleteScript
	var msg dysontypes.MsgDeleteScript
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := rpcservice.m.DeleteScript
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonsendmsgrun(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := dysonkeeper.NewMsgServerImpl(rpcservice.k.dysonkeeper).Run
	var msg dysontypes.MsgRun
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := rpcservice.m.Run
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: nameskeeper
// Types: namestypes
// github.com/org/dyson/x/names/keeper
func (rpcservice *RpcService) Namesqueryparams(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg namestypes.QueryParamsRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.nameskeeper.Params(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: nameskeeper
// Types: namestypes
// github.com/org/dyson/x/names/keeper
func (rpcservice *RpcService) Namesqueryname(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg namestypes.QueryGetNameRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.nameskeeper.Name(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: nameskeeper
// Types: namestypes
// github.com/org/dyson/x/names/keeper
func (rpcservice *RpcService) Namesquerynameall(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg namestypes.QueryAllNameRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.nameskeeper.NameAll(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: nameskeeper
// Types: namestypes
// github.com/org/dyson/x/names/keeper
func (rpcservice *RpcService) Namesqueryresolve(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg namestypes.QueryResolveRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.nameskeeper.Resolve(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: nameskeeper
// Types: namestypes
// github.com/org/dyson/x/names/keeper
func (rpcservice *RpcService) Namesquerygeneratecommit(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg namestypes.QueryGenerateCommitRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.nameskeeper.GenerateCommit(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: nameskeeper
// Types: namestypes
// github.com/org/dyson/x/names/keeper
func (rpcservice *RpcService) Namesqueryexpirations(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg namestypes.QueryGetExpirationsRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.nameskeeper.Expirations(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: nameskeeper
// Types: namestypes
// github.com/org/dyson/x/names/keeper
func (rpcservice *RpcService) Namesqueryexpirationsall(_ *http.Request, req *RpcReq, response *string) (err error) {
	var msg namestypes.QueryAllExpirationsRequest
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	r, err := rpcservice.k.nameskeeper.ExpirationsAll(rpcservice.ctx, &msg)
	if err != nil {
		return err
	}
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: nameskeeper
// Types: namestypes
// github.com/org/dyson/x/names/keeper
func (rpcservice *RpcService) Namessendmsgregister(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := nameskeeper.NewMsgServerImpl(rpcservice.k.nameskeeper).Register
	var msg namestypes.MsgRegister
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := nameskeeper.NewMsgServerImpl(rpcservice.k.nameskeeper).Register
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: nameskeeper
// Types: namestypes
// github.com/org/dyson/x/names/keeper
func (rpcservice *RpcService) Namessendmsgupdatename(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := nameskeeper.NewMsgServerImpl(rpcservice.k.nameskeeper).UpdateName
	var msg namestypes.MsgUpdateName
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := nameskeeper.NewMsgServerImpl(rpcservice.k.nameskeeper).UpdateName
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: nameskeeper
// Types: namestypes
// github.com/org/dyson/x/names/keeper
func (rpcservice *RpcService) Namessendmsgdeletename(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := nameskeeper.NewMsgServerImpl(rpcservice.k.nameskeeper).DeleteName
	var msg namestypes.MsgDeleteName
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := nameskeeper.NewMsgServerImpl(rpcservice.k.nameskeeper).DeleteName
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: nameskeeper
// Types: namestypes
// github.com/org/dyson/x/names/keeper
func (rpcservice *RpcService) Namessendmsgreveal(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := nameskeeper.NewMsgServerImpl(rpcservice.k.nameskeeper).Reveal
	var msg namestypes.MsgReveal
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := nameskeeper.NewMsgServerImpl(rpcservice.k.nameskeeper).Reveal
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: nameskeeper
// Types: namestypes
// github.com/org/dyson/x/names/keeper
func (rpcservice *RpcService) Namessendmsgsetpriceandextend(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := nameskeeper.NewMsgServerImpl(rpcservice.k.nameskeeper).SetPriceAndExtend
	var msg namestypes.MsgSetPriceAndExtend
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := nameskeeper.NewMsgServerImpl(rpcservice.k.nameskeeper).SetPriceAndExtend
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: nameskeeper
// Types: namestypes
// github.com/org/dyson/x/names/keeper
func (rpcservice *RpcService) Namessendmsgofferto(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := nameskeeper.NewMsgServerImpl(rpcservice.k.nameskeeper).OfferTo
	var msg namestypes.MsgOfferTo
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := nameskeeper.NewMsgServerImpl(rpcservice.k.nameskeeper).OfferTo
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: nameskeeper
// Types: namestypes
// github.com/org/dyson/x/names/keeper
func (rpcservice *RpcService) Namessendmsgaccept(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := nameskeeper.NewMsgServerImpl(rpcservice.k.nameskeeper).Accept
	var msg namestypes.MsgAccept
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := nameskeeper.NewMsgServerImpl(rpcservice.k.nameskeeper).Accept
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: nameskeeper
// Types: namestypes
// github.com/org/dyson/x/names/keeper
func (rpcservice *RpcService) Namessendmsgbuy(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := nameskeeper.NewMsgServerImpl(rpcservice.k.nameskeeper).Buy
	var msg namestypes.MsgBuy
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := nameskeeper.NewMsgServerImpl(rpcservice.k.nameskeeper).Buy
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: nameskeeper
// Types: namestypes
// github.com/org/dyson/x/names/keeper
func (rpcservice *RpcService) Namessendmsgmintcoins(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := nameskeeper.NewMsgServerImpl(rpcservice.k.nameskeeper).MintCoins
	var msg namestypes.MsgMintCoins
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := nameskeeper.NewMsgServerImpl(rpcservice.k.nameskeeper).MintCoins
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: nameskeeper
// Types: namestypes
// github.com/org/dyson/x/names/keeper
func (rpcservice *RpcService) Namessendmsgburncoins(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := nameskeeper.NewMsgServerImpl(rpcservice.k.nameskeeper).BurnCoins
	var msg namestypes.MsgBurnCoins
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := nameskeeper.NewMsgServerImpl(rpcservice.k.nameskeeper).BurnCoins
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: nameskeeper
// Types: namestypes
// github.com/org/dyson/x/names/keeper
func (rpcservice *RpcService) Namessendmsgsetnftclass(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := nameskeeper.NewMsgServerImpl(rpcservice.k.nameskeeper).SetNftClass
	var msg namestypes.MsgSetNftClass
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := nameskeeper.NewMsgServerImpl(rpcservice.k.nameskeeper).SetNftClass
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: nameskeeper
// Types: namestypes
// github.com/org/dyson/x/names/keeper
func (rpcservice *RpcService) Namessendmsgmintnft(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := nameskeeper.NewMsgServerImpl(rpcservice.k.nameskeeper).MintNft
	var msg namestypes.MsgMintNft
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := nameskeeper.NewMsgServerImpl(rpcservice.k.nameskeeper).MintNft
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: nameskeeper
// Types: namestypes
// github.com/org/dyson/x/names/keeper
func (rpcservice *RpcService) Namessendmsgupdatenft(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := nameskeeper.NewMsgServerImpl(rpcservice.k.nameskeeper).UpdateNft
	var msg namestypes.MsgUpdateNft
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := nameskeeper.NewMsgServerImpl(rpcservice.k.nameskeeper).UpdateNft
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}

// Keeper: nameskeeper
// Types: namestypes
// github.com/org/dyson/x/names/keeper
func (rpcservice *RpcService) Namessendmsgburnnft(_ *http.Request, req *RpcReq, response *string) (err error) {
	//handler := nameskeeper.NewMsgServerImpl(rpcservice.k.nameskeeper).BurnNft
	var msg namestypes.MsgBurnNft
	err = rpcservice.k.cdc.UnmarshalJSON([]byte(req.S), &msg)
	if err != nil {
		return err
	}
	handler := nameskeeper.NewMsgServerImpl(rpcservice.k.nameskeeper).BurnNft
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "CHAIN ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
	}

	if len(msg.GetSigners()) != 1 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "this requires more than one signer and cannot be run from a script")
	}

	if !msg.GetSigners()[0].Equals(rpcservice.ScriptAddress) {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", rpcservice.ScriptAddress)
	}

	sdkCtx := sdk.UnwrapSDKContext(rpcservice.ctx)

	cachedCtx, Write := sdkCtx.CacheContext()

	r, err := handler(sdk.WrapSDKContext(cachedCtx), &msg)
	if err != nil {
		return err
	}
	Write()
	*response = string(rpcservice.k.cdc.MustMarshalJSON(r))
	return nil
}
