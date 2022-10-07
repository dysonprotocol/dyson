package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	cosmosauthv1beta1types "github.com/cosmos/cosmos-sdk/x/auth/types"
	cosmosauthzv1beta1types "github.com/cosmos/cosmos-sdk/x/authz"
	cosmosbankv1beta1keeper "github.com/cosmos/cosmos-sdk/x/bank/keeper"
	cosmosbankv1beta1types "github.com/cosmos/cosmos-sdk/x/bank/types"
	cosmosdistributionv1beta1keeper "github.com/cosmos/cosmos-sdk/x/distribution/keeper"
	cosmosdistributionv1beta1types "github.com/cosmos/cosmos-sdk/x/distribution/types"
	cosmosfeegrantv1beta1types "github.com/cosmos/cosmos-sdk/x/feegrant"
	cosmosfeegrantv1beta1keeper "github.com/cosmos/cosmos-sdk/x/feegrant/keeper"
	cosmosgovv1keeper "github.com/cosmos/cosmos-sdk/x/gov/keeper"
	cosmosgovv1types "github.com/cosmos/cosmos-sdk/x/gov/types/v1"
	cosmosgroupv1types "github.com/cosmos/cosmos-sdk/x/group"
	cosmosmintv1beta1types "github.com/cosmos/cosmos-sdk/x/mint/types"
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

// Keeper: cosmosauthv1beta1keeper
// Types: cosmosauthv1beta1types
// github.com/cosmos/cosmos-sdk/x/auth/keeper
func (rpcservice *RpcService) Cosmosauthv1beta1queryaccounts(_ *http.Request, msg *cosmosauthv1beta1types.QueryAccountsRequest, response *cosmosauthv1beta1types.QueryAccountsResponse) (err error) {
	r, err := rpcservice.k.cosmosauthv1beta1keeper.Accounts(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosauthv1beta1keeper
// Types: cosmosauthv1beta1types
// github.com/cosmos/cosmos-sdk/x/auth/keeper
func (rpcservice *RpcService) Cosmosauthv1beta1queryaccount(_ *http.Request, msg *cosmosauthv1beta1types.QueryAccountRequest, response *cosmosauthv1beta1types.QueryAccountResponse) (err error) {
	r, err := rpcservice.k.cosmosauthv1beta1keeper.Account(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosauthv1beta1keeper
// Types: cosmosauthv1beta1types
// github.com/cosmos/cosmos-sdk/x/auth/keeper
func (rpcservice *RpcService) Cosmosauthv1beta1queryaccountaddressbyid(_ *http.Request, msg *cosmosauthv1beta1types.QueryAccountAddressByIDRequest, response *cosmosauthv1beta1types.QueryAccountAddressByIDResponse) (err error) {
	r, err := rpcservice.k.cosmosauthv1beta1keeper.AccountAddressByID(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosauthv1beta1keeper
// Types: cosmosauthv1beta1types
// github.com/cosmos/cosmos-sdk/x/auth/keeper
func (rpcservice *RpcService) Cosmosauthv1beta1queryparams(_ *http.Request, msg *cosmosauthv1beta1types.QueryParamsRequest, response *cosmosauthv1beta1types.QueryParamsResponse) (err error) {
	r, err := rpcservice.k.cosmosauthv1beta1keeper.Params(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosauthv1beta1keeper
// Types: cosmosauthv1beta1types
// github.com/cosmos/cosmos-sdk/x/auth/keeper
func (rpcservice *RpcService) Cosmosauthv1beta1querymoduleaccounts(_ *http.Request, msg *cosmosauthv1beta1types.QueryModuleAccountsRequest, response *cosmosauthv1beta1types.QueryModuleAccountsResponse) (err error) {
	r, err := rpcservice.k.cosmosauthv1beta1keeper.ModuleAccounts(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosauthv1beta1keeper
// Types: cosmosauthv1beta1types
// github.com/cosmos/cosmos-sdk/x/auth/keeper
func (rpcservice *RpcService) Cosmosauthv1beta1querybech32prefix(_ *http.Request, msg *cosmosauthv1beta1types.Bech32PrefixRequest, response *cosmosauthv1beta1types.Bech32PrefixResponse) (err error) {
	r, err := rpcservice.k.cosmosauthv1beta1keeper.Bech32Prefix(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosauthv1beta1keeper
// Types: cosmosauthv1beta1types
// github.com/cosmos/cosmos-sdk/x/auth/keeper
func (rpcservice *RpcService) Cosmosauthv1beta1queryaddressbytestostring(_ *http.Request, msg *cosmosauthv1beta1types.AddressBytesToStringRequest, response *cosmosauthv1beta1types.AddressBytesToStringResponse) (err error) {
	r, err := rpcservice.k.cosmosauthv1beta1keeper.AddressBytesToString(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosauthv1beta1keeper
// Types: cosmosauthv1beta1types
// github.com/cosmos/cosmos-sdk/x/auth/keeper
func (rpcservice *RpcService) Cosmosauthv1beta1queryaddressstringtobytes(_ *http.Request, msg *cosmosauthv1beta1types.AddressStringToBytesRequest, response *cosmosauthv1beta1types.AddressStringToBytesResponse) (err error) {
	r, err := rpcservice.k.cosmosauthv1beta1keeper.AddressStringToBytes(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosauthzv1beta1keeper
// Types: cosmosauthzv1beta1types
// None
func (rpcservice *RpcService) Cosmosauthzv1beta1querygrants(_ *http.Request, msg *cosmosauthzv1beta1types.QueryGrantsRequest, response *cosmosauthzv1beta1types.QueryGrantsResponse) (err error) {
	r, err := rpcservice.k.cosmosauthzv1beta1keeper.Grants(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosauthzv1beta1keeper
// Types: cosmosauthzv1beta1types
// None
func (rpcservice *RpcService) Cosmosauthzv1beta1querygrantergrants(_ *http.Request, msg *cosmosauthzv1beta1types.QueryGranterGrantsRequest, response *cosmosauthzv1beta1types.QueryGranterGrantsResponse) (err error) {
	r, err := rpcservice.k.cosmosauthzv1beta1keeper.GranterGrants(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosauthzv1beta1keeper
// Types: cosmosauthzv1beta1types
// None
func (rpcservice *RpcService) Cosmosauthzv1beta1querygranteegrants(_ *http.Request, msg *cosmosauthzv1beta1types.QueryGranteeGrantsRequest, response *cosmosauthzv1beta1types.QueryGranteeGrantsResponse) (err error) {
	r, err := rpcservice.k.cosmosauthzv1beta1keeper.GranteeGrants(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosauthzv1beta1keeper
// Types: cosmosauthzv1beta1types
// None
func (rpcservice *RpcService) Cosmosauthzv1beta1sendmsggrant(_ *http.Request, msg *cosmosauthzv1beta1types.MsgGrant, response *cosmosauthzv1beta1types.MsgGrantResponse) (err error) {
	//handler := cosmosauthzv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosauthzv1beta1keeper).Grant
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: cosmosauthzv1beta1keeper
// Types: cosmosauthzv1beta1types
// None
func (rpcservice *RpcService) Cosmosauthzv1beta1sendmsgexec(_ *http.Request, msg *cosmosauthzv1beta1types.MsgExec, response *cosmosauthzv1beta1types.MsgExecResponse) (err error) {
	//handler := cosmosauthzv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosauthzv1beta1keeper).Exec
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: cosmosauthzv1beta1keeper
// Types: cosmosauthzv1beta1types
// None
func (rpcservice *RpcService) Cosmosauthzv1beta1sendmsgrevoke(_ *http.Request, msg *cosmosauthzv1beta1types.MsgRevoke, response *cosmosauthzv1beta1types.MsgRevokeResponse) (err error) {
	//handler := cosmosauthzv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosauthzv1beta1keeper).Revoke
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: cosmosbankv1beta1keeper
// Types: cosmosbankv1beta1types
// github.com/cosmos/cosmos-sdk/x/bank/keeper
func (rpcservice *RpcService) Cosmosbankv1beta1querybalance(_ *http.Request, msg *cosmosbankv1beta1types.QueryBalanceRequest, response *cosmosbankv1beta1types.QueryBalanceResponse) (err error) {
	r, err := rpcservice.k.cosmosbankv1beta1keeper.Balance(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosbankv1beta1keeper
// Types: cosmosbankv1beta1types
// github.com/cosmos/cosmos-sdk/x/bank/keeper
func (rpcservice *RpcService) Cosmosbankv1beta1queryallbalances(_ *http.Request, msg *cosmosbankv1beta1types.QueryAllBalancesRequest, response *cosmosbankv1beta1types.QueryAllBalancesResponse) (err error) {
	r, err := rpcservice.k.cosmosbankv1beta1keeper.AllBalances(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosbankv1beta1keeper
// Types: cosmosbankv1beta1types
// github.com/cosmos/cosmos-sdk/x/bank/keeper
func (rpcservice *RpcService) Cosmosbankv1beta1queryspendablebalances(_ *http.Request, msg *cosmosbankv1beta1types.QuerySpendableBalancesRequest, response *cosmosbankv1beta1types.QuerySpendableBalancesResponse) (err error) {
	r, err := rpcservice.k.cosmosbankv1beta1keeper.SpendableBalances(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosbankv1beta1keeper
// Types: cosmosbankv1beta1types
// github.com/cosmos/cosmos-sdk/x/bank/keeper
func (rpcservice *RpcService) Cosmosbankv1beta1querytotalsupply(_ *http.Request, msg *cosmosbankv1beta1types.QueryTotalSupplyRequest, response *cosmosbankv1beta1types.QueryTotalSupplyResponse) (err error) {
	r, err := rpcservice.k.cosmosbankv1beta1keeper.TotalSupply(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosbankv1beta1keeper
// Types: cosmosbankv1beta1types
// github.com/cosmos/cosmos-sdk/x/bank/keeper
func (rpcservice *RpcService) Cosmosbankv1beta1querysupplyof(_ *http.Request, msg *cosmosbankv1beta1types.QuerySupplyOfRequest, response *cosmosbankv1beta1types.QuerySupplyOfResponse) (err error) {
	r, err := rpcservice.k.cosmosbankv1beta1keeper.SupplyOf(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosbankv1beta1keeper
// Types: cosmosbankv1beta1types
// github.com/cosmos/cosmos-sdk/x/bank/keeper
func (rpcservice *RpcService) Cosmosbankv1beta1queryparams(_ *http.Request, msg *cosmosbankv1beta1types.QueryParamsRequest, response *cosmosbankv1beta1types.QueryParamsResponse) (err error) {
	r, err := rpcservice.k.cosmosbankv1beta1keeper.Params(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosbankv1beta1keeper
// Types: cosmosbankv1beta1types
// github.com/cosmos/cosmos-sdk/x/bank/keeper
func (rpcservice *RpcService) Cosmosbankv1beta1querydenommetadata(_ *http.Request, msg *cosmosbankv1beta1types.QueryDenomMetadataRequest, response *cosmosbankv1beta1types.QueryDenomMetadataResponse) (err error) {
	r, err := rpcservice.k.cosmosbankv1beta1keeper.DenomMetadata(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosbankv1beta1keeper
// Types: cosmosbankv1beta1types
// github.com/cosmos/cosmos-sdk/x/bank/keeper
func (rpcservice *RpcService) Cosmosbankv1beta1querydenomsmetadata(_ *http.Request, msg *cosmosbankv1beta1types.QueryDenomsMetadataRequest, response *cosmosbankv1beta1types.QueryDenomsMetadataResponse) (err error) {
	r, err := rpcservice.k.cosmosbankv1beta1keeper.DenomsMetadata(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosbankv1beta1keeper
// Types: cosmosbankv1beta1types
// github.com/cosmos/cosmos-sdk/x/bank/keeper
func (rpcservice *RpcService) Cosmosbankv1beta1querydenomowners(_ *http.Request, msg *cosmosbankv1beta1types.QueryDenomOwnersRequest, response *cosmosbankv1beta1types.QueryDenomOwnersResponse) (err error) {
	r, err := rpcservice.k.cosmosbankv1beta1keeper.DenomOwners(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosbankv1beta1keeper
// Types: cosmosbankv1beta1types
// github.com/cosmos/cosmos-sdk/x/bank/keeper
func (rpcservice *RpcService) Cosmosbankv1beta1sendmsgsend(_ *http.Request, msg *cosmosbankv1beta1types.MsgSend, response *cosmosbankv1beta1types.MsgSendResponse) (err error) {
	//handler := cosmosbankv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosbankv1beta1keeper).Send
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: cosmosbankv1beta1keeper
// Types: cosmosbankv1beta1types
// github.com/cosmos/cosmos-sdk/x/bank/keeper
func (rpcservice *RpcService) Cosmosbankv1beta1sendmsgmultisend(_ *http.Request, msg *cosmosbankv1beta1types.MsgMultiSend, response *cosmosbankv1beta1types.MsgMultiSendResponse) (err error) {
	//handler := cosmosbankv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosbankv1beta1keeper).MultiSend
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: cosmosdistributionv1beta1keeper
// Types: cosmosdistributionv1beta1types
// github.com/cosmos/cosmos-sdk/x/distribution/keeper
func (rpcservice *RpcService) Cosmosdistributionv1beta1queryparams(_ *http.Request, msg *cosmosdistributionv1beta1types.QueryParamsRequest, response *cosmosdistributionv1beta1types.QueryParamsResponse) (err error) {
	r, err := rpcservice.k.cosmosdistributionv1beta1keeper.Params(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosdistributionv1beta1keeper
// Types: cosmosdistributionv1beta1types
// github.com/cosmos/cosmos-sdk/x/distribution/keeper
func (rpcservice *RpcService) Cosmosdistributionv1beta1queryvalidatoroutstandingrewards(_ *http.Request, msg *cosmosdistributionv1beta1types.QueryValidatorOutstandingRewardsRequest, response *cosmosdistributionv1beta1types.QueryValidatorOutstandingRewardsResponse) (err error) {
	r, err := rpcservice.k.cosmosdistributionv1beta1keeper.ValidatorOutstandingRewards(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosdistributionv1beta1keeper
// Types: cosmosdistributionv1beta1types
// github.com/cosmos/cosmos-sdk/x/distribution/keeper
func (rpcservice *RpcService) Cosmosdistributionv1beta1queryvalidatorcommission(_ *http.Request, msg *cosmosdistributionv1beta1types.QueryValidatorCommissionRequest, response *cosmosdistributionv1beta1types.QueryValidatorCommissionResponse) (err error) {
	r, err := rpcservice.k.cosmosdistributionv1beta1keeper.ValidatorCommission(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosdistributionv1beta1keeper
// Types: cosmosdistributionv1beta1types
// github.com/cosmos/cosmos-sdk/x/distribution/keeper
func (rpcservice *RpcService) Cosmosdistributionv1beta1queryvalidatorslashes(_ *http.Request, msg *cosmosdistributionv1beta1types.QueryValidatorSlashesRequest, response *cosmosdistributionv1beta1types.QueryValidatorSlashesResponse) (err error) {
	r, err := rpcservice.k.cosmosdistributionv1beta1keeper.ValidatorSlashes(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosdistributionv1beta1keeper
// Types: cosmosdistributionv1beta1types
// github.com/cosmos/cosmos-sdk/x/distribution/keeper
func (rpcservice *RpcService) Cosmosdistributionv1beta1querydelegationrewards(_ *http.Request, msg *cosmosdistributionv1beta1types.QueryDelegationRewardsRequest, response *cosmosdistributionv1beta1types.QueryDelegationRewardsResponse) (err error) {
	r, err := rpcservice.k.cosmosdistributionv1beta1keeper.DelegationRewards(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosdistributionv1beta1keeper
// Types: cosmosdistributionv1beta1types
// github.com/cosmos/cosmos-sdk/x/distribution/keeper
func (rpcservice *RpcService) Cosmosdistributionv1beta1querydelegationtotalrewards(_ *http.Request, msg *cosmosdistributionv1beta1types.QueryDelegationTotalRewardsRequest, response *cosmosdistributionv1beta1types.QueryDelegationTotalRewardsResponse) (err error) {
	r, err := rpcservice.k.cosmosdistributionv1beta1keeper.DelegationTotalRewards(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosdistributionv1beta1keeper
// Types: cosmosdistributionv1beta1types
// github.com/cosmos/cosmos-sdk/x/distribution/keeper
func (rpcservice *RpcService) Cosmosdistributionv1beta1querydelegatorvalidators(_ *http.Request, msg *cosmosdistributionv1beta1types.QueryDelegatorValidatorsRequest, response *cosmosdistributionv1beta1types.QueryDelegatorValidatorsResponse) (err error) {
	r, err := rpcservice.k.cosmosdistributionv1beta1keeper.DelegatorValidators(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosdistributionv1beta1keeper
// Types: cosmosdistributionv1beta1types
// github.com/cosmos/cosmos-sdk/x/distribution/keeper
func (rpcservice *RpcService) Cosmosdistributionv1beta1querydelegatorwithdrawaddress(_ *http.Request, msg *cosmosdistributionv1beta1types.QueryDelegatorWithdrawAddressRequest, response *cosmosdistributionv1beta1types.QueryDelegatorWithdrawAddressResponse) (err error) {
	r, err := rpcservice.k.cosmosdistributionv1beta1keeper.DelegatorWithdrawAddress(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosdistributionv1beta1keeper
// Types: cosmosdistributionv1beta1types
// github.com/cosmos/cosmos-sdk/x/distribution/keeper
func (rpcservice *RpcService) Cosmosdistributionv1beta1querycommunitypool(_ *http.Request, msg *cosmosdistributionv1beta1types.QueryCommunityPoolRequest, response *cosmosdistributionv1beta1types.QueryCommunityPoolResponse) (err error) {
	r, err := rpcservice.k.cosmosdistributionv1beta1keeper.CommunityPool(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosdistributionv1beta1keeper
// Types: cosmosdistributionv1beta1types
// github.com/cosmos/cosmos-sdk/x/distribution/keeper
func (rpcservice *RpcService) Cosmosdistributionv1beta1sendmsgsetwithdrawaddress(_ *http.Request, msg *cosmosdistributionv1beta1types.MsgSetWithdrawAddress, response *cosmosdistributionv1beta1types.MsgSetWithdrawAddressResponse) (err error) {
	//handler := cosmosdistributionv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosdistributionv1beta1keeper).SetWithdrawAddress
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: cosmosdistributionv1beta1keeper
// Types: cosmosdistributionv1beta1types
// github.com/cosmos/cosmos-sdk/x/distribution/keeper
func (rpcservice *RpcService) Cosmosdistributionv1beta1sendmsgwithdrawdelegatorreward(_ *http.Request, msg *cosmosdistributionv1beta1types.MsgWithdrawDelegatorReward, response *cosmosdistributionv1beta1types.MsgWithdrawDelegatorRewardResponse) (err error) {
	//handler := cosmosdistributionv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosdistributionv1beta1keeper).WithdrawDelegatorReward
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: cosmosdistributionv1beta1keeper
// Types: cosmosdistributionv1beta1types
// github.com/cosmos/cosmos-sdk/x/distribution/keeper
func (rpcservice *RpcService) Cosmosdistributionv1beta1sendmsgwithdrawvalidatorcommission(_ *http.Request, msg *cosmosdistributionv1beta1types.MsgWithdrawValidatorCommission, response *cosmosdistributionv1beta1types.MsgWithdrawValidatorCommissionResponse) (err error) {
	//handler := cosmosdistributionv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosdistributionv1beta1keeper).WithdrawValidatorCommission
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: cosmosdistributionv1beta1keeper
// Types: cosmosdistributionv1beta1types
// github.com/cosmos/cosmos-sdk/x/distribution/keeper
func (rpcservice *RpcService) Cosmosdistributionv1beta1sendmsgfundcommunitypool(_ *http.Request, msg *cosmosdistributionv1beta1types.MsgFundCommunityPool, response *cosmosdistributionv1beta1types.MsgFundCommunityPoolResponse) (err error) {
	//handler := cosmosdistributionv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosdistributionv1beta1keeper).FundCommunityPool
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: cosmosfeegrantv1beta1keeper
// Types: cosmosfeegrantv1beta1types
// github.com/cosmos/cosmos-sdk/x/feegrant/keeper
func (rpcservice *RpcService) Cosmosfeegrantv1beta1queryallowance(_ *http.Request, msg *cosmosfeegrantv1beta1types.QueryAllowanceRequest, response *cosmosfeegrantv1beta1types.QueryAllowanceResponse) (err error) {
	r, err := rpcservice.k.cosmosfeegrantv1beta1keeper.Allowance(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosfeegrantv1beta1keeper
// Types: cosmosfeegrantv1beta1types
// github.com/cosmos/cosmos-sdk/x/feegrant/keeper
func (rpcservice *RpcService) Cosmosfeegrantv1beta1queryallowances(_ *http.Request, msg *cosmosfeegrantv1beta1types.QueryAllowancesRequest, response *cosmosfeegrantv1beta1types.QueryAllowancesResponse) (err error) {
	r, err := rpcservice.k.cosmosfeegrantv1beta1keeper.Allowances(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosfeegrantv1beta1keeper
// Types: cosmosfeegrantv1beta1types
// github.com/cosmos/cosmos-sdk/x/feegrant/keeper
func (rpcservice *RpcService) Cosmosfeegrantv1beta1queryallowancesbygranter(_ *http.Request, msg *cosmosfeegrantv1beta1types.QueryAllowancesByGranterRequest, response *cosmosfeegrantv1beta1types.QueryAllowancesByGranterResponse) (err error) {
	r, err := rpcservice.k.cosmosfeegrantv1beta1keeper.AllowancesByGranter(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosfeegrantv1beta1keeper
// Types: cosmosfeegrantv1beta1types
// github.com/cosmos/cosmos-sdk/x/feegrant/keeper
func (rpcservice *RpcService) Cosmosfeegrantv1beta1sendmsggrantallowance(_ *http.Request, msg *cosmosfeegrantv1beta1types.MsgGrantAllowance, response *cosmosfeegrantv1beta1types.MsgGrantAllowanceResponse) (err error) {
	//handler := cosmosfeegrantv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosfeegrantv1beta1keeper).GrantAllowance
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: cosmosfeegrantv1beta1keeper
// Types: cosmosfeegrantv1beta1types
// github.com/cosmos/cosmos-sdk/x/feegrant/keeper
func (rpcservice *RpcService) Cosmosfeegrantv1beta1sendmsgrevokeallowance(_ *http.Request, msg *cosmosfeegrantv1beta1types.MsgRevokeAllowance, response *cosmosfeegrantv1beta1types.MsgRevokeAllowanceResponse) (err error) {
	//handler := cosmosfeegrantv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosfeegrantv1beta1keeper).RevokeAllowance
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: cosmosgovv1keeper
// Types: cosmosgovv1types
// github.com/cosmos/cosmos-sdk/x/feegrant/keeper
func (rpcservice *RpcService) Cosmosgovv1queryproposal(_ *http.Request, msg *cosmosgovv1types.QueryProposalRequest, response *cosmosgovv1types.QueryProposalResponse) (err error) {
	r, err := rpcservice.k.cosmosgovv1keeper.Proposal(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosgovv1keeper
// Types: cosmosgovv1types
// github.com/cosmos/cosmos-sdk/x/feegrant/keeper
func (rpcservice *RpcService) Cosmosgovv1queryproposals(_ *http.Request, msg *cosmosgovv1types.QueryProposalsRequest, response *cosmosgovv1types.QueryProposalsResponse) (err error) {
	r, err := rpcservice.k.cosmosgovv1keeper.Proposals(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosgovv1keeper
// Types: cosmosgovv1types
// github.com/cosmos/cosmos-sdk/x/feegrant/keeper
func (rpcservice *RpcService) Cosmosgovv1queryvote(_ *http.Request, msg *cosmosgovv1types.QueryVoteRequest, response *cosmosgovv1types.QueryVoteResponse) (err error) {
	r, err := rpcservice.k.cosmosgovv1keeper.Vote(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosgovv1keeper
// Types: cosmosgovv1types
// github.com/cosmos/cosmos-sdk/x/feegrant/keeper
func (rpcservice *RpcService) Cosmosgovv1queryvotes(_ *http.Request, msg *cosmosgovv1types.QueryVotesRequest, response *cosmosgovv1types.QueryVotesResponse) (err error) {
	r, err := rpcservice.k.cosmosgovv1keeper.Votes(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosgovv1keeper
// Types: cosmosgovv1types
// github.com/cosmos/cosmos-sdk/x/feegrant/keeper
func (rpcservice *RpcService) Cosmosgovv1queryparams(_ *http.Request, msg *cosmosgovv1types.QueryParamsRequest, response *cosmosgovv1types.QueryParamsResponse) (err error) {
	r, err := rpcservice.k.cosmosgovv1keeper.Params(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosgovv1keeper
// Types: cosmosgovv1types
// github.com/cosmos/cosmos-sdk/x/feegrant/keeper
func (rpcservice *RpcService) Cosmosgovv1querydeposit(_ *http.Request, msg *cosmosgovv1types.QueryDepositRequest, response *cosmosgovv1types.QueryDepositResponse) (err error) {
	r, err := rpcservice.k.cosmosgovv1keeper.Deposit(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosgovv1keeper
// Types: cosmosgovv1types
// github.com/cosmos/cosmos-sdk/x/feegrant/keeper
func (rpcservice *RpcService) Cosmosgovv1querydeposits(_ *http.Request, msg *cosmosgovv1types.QueryDepositsRequest, response *cosmosgovv1types.QueryDepositsResponse) (err error) {
	r, err := rpcservice.k.cosmosgovv1keeper.Deposits(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosgovv1keeper
// Types: cosmosgovv1types
// github.com/cosmos/cosmos-sdk/x/feegrant/keeper
func (rpcservice *RpcService) Cosmosgovv1querytallyresult(_ *http.Request, msg *cosmosgovv1types.QueryTallyResultRequest, response *cosmosgovv1types.QueryTallyResultResponse) (err error) {
	r, err := rpcservice.k.cosmosgovv1keeper.TallyResult(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosgovv1keeper
// Types: cosmosgovv1types
// github.com/cosmos/cosmos-sdk/x/gov/keeper
func (rpcservice *RpcService) Cosmosgovv1sendmsgsubmitproposal(_ *http.Request, msg *cosmosgovv1types.MsgSubmitProposal, response *cosmosgovv1types.MsgSubmitProposalResponse) (err error) {
	//handler := cosmosgovv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgovv1keeper).SubmitProposal
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: cosmosgovv1keeper
// Types: cosmosgovv1types
// github.com/cosmos/cosmos-sdk/x/gov/keeper
func (rpcservice *RpcService) Cosmosgovv1sendmsgexeclegacycontent(_ *http.Request, msg *cosmosgovv1types.MsgExecLegacyContent, response *cosmosgovv1types.MsgExecLegacyContentResponse) (err error) {
	//handler := cosmosgovv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgovv1keeper).ExecLegacyContent
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: cosmosgovv1keeper
// Types: cosmosgovv1types
// github.com/cosmos/cosmos-sdk/x/gov/keeper
func (rpcservice *RpcService) Cosmosgovv1sendmsgvote(_ *http.Request, msg *cosmosgovv1types.MsgVote, response *cosmosgovv1types.MsgVoteResponse) (err error) {
	//handler := cosmosgovv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgovv1keeper).Vote
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: cosmosgovv1keeper
// Types: cosmosgovv1types
// github.com/cosmos/cosmos-sdk/x/gov/keeper
func (rpcservice *RpcService) Cosmosgovv1sendmsgvoteweighted(_ *http.Request, msg *cosmosgovv1types.MsgVoteWeighted, response *cosmosgovv1types.MsgVoteWeightedResponse) (err error) {
	//handler := cosmosgovv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgovv1keeper).VoteWeighted
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: cosmosgovv1keeper
// Types: cosmosgovv1types
// github.com/cosmos/cosmos-sdk/x/gov/keeper
func (rpcservice *RpcService) Cosmosgovv1sendmsgdeposit(_ *http.Request, msg *cosmosgovv1types.MsgDeposit, response *cosmosgovv1types.MsgDepositResponse) (err error) {
	//handler := cosmosgovv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgovv1keeper).Deposit
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1querygroupinfo(_ *http.Request, msg *cosmosgroupv1types.QueryGroupInfoRequest, response *cosmosgroupv1types.QueryGroupInfoResponse) (err error) {
	r, err := rpcservice.k.cosmosgroupv1keeper.GroupInfo(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1querygrouppolicyinfo(_ *http.Request, msg *cosmosgroupv1types.QueryGroupPolicyInfoRequest, response *cosmosgroupv1types.QueryGroupPolicyInfoResponse) (err error) {
	r, err := rpcservice.k.cosmosgroupv1keeper.GroupPolicyInfo(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1querygroupmembers(_ *http.Request, msg *cosmosgroupv1types.QueryGroupMembersRequest, response *cosmosgroupv1types.QueryGroupMembersResponse) (err error) {
	r, err := rpcservice.k.cosmosgroupv1keeper.GroupMembers(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1querygroupsbyadmin(_ *http.Request, msg *cosmosgroupv1types.QueryGroupsByAdminRequest, response *cosmosgroupv1types.QueryGroupsByAdminResponse) (err error) {
	r, err := rpcservice.k.cosmosgroupv1keeper.GroupsByAdmin(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1querygrouppoliciesbygroup(_ *http.Request, msg *cosmosgroupv1types.QueryGroupPoliciesByGroupRequest, response *cosmosgroupv1types.QueryGroupPoliciesByGroupResponse) (err error) {
	r, err := rpcservice.k.cosmosgroupv1keeper.GroupPoliciesByGroup(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1querygrouppoliciesbyadmin(_ *http.Request, msg *cosmosgroupv1types.QueryGroupPoliciesByAdminRequest, response *cosmosgroupv1types.QueryGroupPoliciesByAdminResponse) (err error) {
	r, err := rpcservice.k.cosmosgroupv1keeper.GroupPoliciesByAdmin(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1queryproposal(_ *http.Request, msg *cosmosgroupv1types.QueryProposalRequest, response *cosmosgroupv1types.QueryProposalResponse) (err error) {
	r, err := rpcservice.k.cosmosgroupv1keeper.Proposal(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1queryproposalsbygrouppolicy(_ *http.Request, msg *cosmosgroupv1types.QueryProposalsByGroupPolicyRequest, response *cosmosgroupv1types.QueryProposalsByGroupPolicyResponse) (err error) {
	r, err := rpcservice.k.cosmosgroupv1keeper.ProposalsByGroupPolicy(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1queryvotebyproposalvoter(_ *http.Request, msg *cosmosgroupv1types.QueryVoteByProposalVoterRequest, response *cosmosgroupv1types.QueryVoteByProposalVoterResponse) (err error) {
	r, err := rpcservice.k.cosmosgroupv1keeper.VoteByProposalVoter(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1queryvotesbyproposal(_ *http.Request, msg *cosmosgroupv1types.QueryVotesByProposalRequest, response *cosmosgroupv1types.QueryVotesByProposalResponse) (err error) {
	r, err := rpcservice.k.cosmosgroupv1keeper.VotesByProposal(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1queryvotesbyvoter(_ *http.Request, msg *cosmosgroupv1types.QueryVotesByVoterRequest, response *cosmosgroupv1types.QueryVotesByVoterResponse) (err error) {
	r, err := rpcservice.k.cosmosgroupv1keeper.VotesByVoter(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1querygroupsbymember(_ *http.Request, msg *cosmosgroupv1types.QueryGroupsByMemberRequest, response *cosmosgroupv1types.QueryGroupsByMemberResponse) (err error) {
	r, err := rpcservice.k.cosmosgroupv1keeper.GroupsByMember(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1querytallyresult(_ *http.Request, msg *cosmosgroupv1types.QueryTallyResultRequest, response *cosmosgroupv1types.QueryTallyResultResponse) (err error) {
	r, err := rpcservice.k.cosmosgroupv1keeper.TallyResult(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1sendmsgcreategroup(_ *http.Request, msg *cosmosgroupv1types.MsgCreateGroup, response *cosmosgroupv1types.MsgCreateGroupResponse) (err error) {
	//handler := cosmosgroupv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgroupv1keeper).CreateGroup
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1sendmsgupdategroupmembers(_ *http.Request, msg *cosmosgroupv1types.MsgUpdateGroupMembers, response *cosmosgroupv1types.MsgUpdateGroupMembersResponse) (err error) {
	//handler := cosmosgroupv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgroupv1keeper).UpdateGroupMembers
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1sendmsgupdategroupadmin(_ *http.Request, msg *cosmosgroupv1types.MsgUpdateGroupAdmin, response *cosmosgroupv1types.MsgUpdateGroupAdminResponse) (err error) {
	//handler := cosmosgroupv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgroupv1keeper).UpdateGroupAdmin
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1sendmsgupdategroupmetadata(_ *http.Request, msg *cosmosgroupv1types.MsgUpdateGroupMetadata, response *cosmosgroupv1types.MsgUpdateGroupMetadataResponse) (err error) {
	//handler := cosmosgroupv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgroupv1keeper).UpdateGroupMetadata
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1sendmsgcreategrouppolicy(_ *http.Request, msg *cosmosgroupv1types.MsgCreateGroupPolicy, response *cosmosgroupv1types.MsgCreateGroupPolicyResponse) (err error) {
	//handler := cosmosgroupv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgroupv1keeper).CreateGroupPolicy
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1sendmsgcreategroupwithpolicy(_ *http.Request, msg *cosmosgroupv1types.MsgCreateGroupWithPolicy, response *cosmosgroupv1types.MsgCreateGroupWithPolicyResponse) (err error) {
	//handler := cosmosgroupv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgroupv1keeper).CreateGroupWithPolicy
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1sendmsgupdategrouppolicyadmin(_ *http.Request, msg *cosmosgroupv1types.MsgUpdateGroupPolicyAdmin, response *cosmosgroupv1types.MsgUpdateGroupPolicyAdminResponse) (err error) {
	//handler := cosmosgroupv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgroupv1keeper).UpdateGroupPolicyAdmin
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1sendmsgupdategrouppolicydecisionpolicy(_ *http.Request, msg *cosmosgroupv1types.MsgUpdateGroupPolicyDecisionPolicy, response *cosmosgroupv1types.MsgUpdateGroupPolicyDecisionPolicyResponse) (err error) {
	//handler := cosmosgroupv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgroupv1keeper).UpdateGroupPolicyDecisionPolicy
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1sendmsgupdategrouppolicymetadata(_ *http.Request, msg *cosmosgroupv1types.MsgUpdateGroupPolicyMetadata, response *cosmosgroupv1types.MsgUpdateGroupPolicyMetadataResponse) (err error) {
	//handler := cosmosgroupv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgroupv1keeper).UpdateGroupPolicyMetadata
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1sendmsgsubmitproposal(_ *http.Request, msg *cosmosgroupv1types.MsgSubmitProposal, response *cosmosgroupv1types.MsgSubmitProposalResponse) (err error) {
	//handler := cosmosgroupv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgroupv1keeper).SubmitProposal
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1sendmsgwithdrawproposal(_ *http.Request, msg *cosmosgroupv1types.MsgWithdrawProposal, response *cosmosgroupv1types.MsgWithdrawProposalResponse) (err error) {
	//handler := cosmosgroupv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgroupv1keeper).WithdrawProposal
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1sendmsgvote(_ *http.Request, msg *cosmosgroupv1types.MsgVote, response *cosmosgroupv1types.MsgVoteResponse) (err error) {
	//handler := cosmosgroupv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgroupv1keeper).Vote
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1sendmsgexec(_ *http.Request, msg *cosmosgroupv1types.MsgExec, response *cosmosgroupv1types.MsgExecResponse) (err error) {
	//handler := cosmosgroupv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgroupv1keeper).Exec
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: cosmosgroupv1keeper
// Types: cosmosgroupv1types
// None
func (rpcservice *RpcService) Cosmosgroupv1sendmsgleavegroup(_ *http.Request, msg *cosmosgroupv1types.MsgLeaveGroup, response *cosmosgroupv1types.MsgLeaveGroupResponse) (err error) {
	//handler := cosmosgroupv1keeper.NewMsgServerImpl(rpcservice.k.cosmosgroupv1keeper).LeaveGroup
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: cosmosmintv1beta1keeper
// Types: cosmosmintv1beta1types
// github.com/cosmos/cosmos-sdk/x/mint/keeper
func (rpcservice *RpcService) Cosmosmintv1beta1queryparams(_ *http.Request, msg *cosmosmintv1beta1types.QueryParamsRequest, response *cosmosmintv1beta1types.QueryParamsResponse) (err error) {
	r, err := rpcservice.k.cosmosmintv1beta1keeper.Params(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosmintv1beta1keeper
// Types: cosmosmintv1beta1types
// github.com/cosmos/cosmos-sdk/x/mint/keeper
func (rpcservice *RpcService) Cosmosmintv1beta1queryinflation(_ *http.Request, msg *cosmosmintv1beta1types.QueryInflationRequest, response *cosmosmintv1beta1types.QueryInflationResponse) (err error) {
	r, err := rpcservice.k.cosmosmintv1beta1keeper.Inflation(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosmintv1beta1keeper
// Types: cosmosmintv1beta1types
// github.com/cosmos/cosmos-sdk/x/mint/keeper
func (rpcservice *RpcService) Cosmosmintv1beta1queryannualprovisions(_ *http.Request, msg *cosmosmintv1beta1types.QueryAnnualProvisionsRequest, response *cosmosmintv1beta1types.QueryAnnualProvisionsResponse) (err error) {
	r, err := rpcservice.k.cosmosmintv1beta1keeper.AnnualProvisions(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosslashingv1beta1keeper
// Types: cosmosslashingv1beta1types
// github.com/cosmos/cosmos-sdk/x/slashing/keeper
func (rpcservice *RpcService) Cosmosslashingv1beta1queryparams(_ *http.Request, msg *cosmosslashingv1beta1types.QueryParamsRequest, response *cosmosslashingv1beta1types.QueryParamsResponse) (err error) {
	r, err := rpcservice.k.cosmosslashingv1beta1keeper.Params(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosslashingv1beta1keeper
// Types: cosmosslashingv1beta1types
// github.com/cosmos/cosmos-sdk/x/slashing/keeper
func (rpcservice *RpcService) Cosmosslashingv1beta1querysigninginfo(_ *http.Request, msg *cosmosslashingv1beta1types.QuerySigningInfoRequest, response *cosmosslashingv1beta1types.QuerySigningInfoResponse) (err error) {
	r, err := rpcservice.k.cosmosslashingv1beta1keeper.SigningInfo(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosslashingv1beta1keeper
// Types: cosmosslashingv1beta1types
// github.com/cosmos/cosmos-sdk/x/slashing/keeper
func (rpcservice *RpcService) Cosmosslashingv1beta1querysigninginfos(_ *http.Request, msg *cosmosslashingv1beta1types.QuerySigningInfosRequest, response *cosmosslashingv1beta1types.QuerySigningInfosResponse) (err error) {
	r, err := rpcservice.k.cosmosslashingv1beta1keeper.SigningInfos(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosslashingv1beta1keeper
// Types: cosmosslashingv1beta1types
// github.com/cosmos/cosmos-sdk/x/slashing/keeper
func (rpcservice *RpcService) Cosmosslashingv1beta1sendmsgunjail(_ *http.Request, msg *cosmosslashingv1beta1types.MsgUnjail, response *cosmosslashingv1beta1types.MsgUnjailResponse) (err error) {
	//handler := cosmosslashingv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosslashingv1beta1keeper).Unjail
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: cosmosstakingv1beta1querier
// Types: cosmosstakingv1beta1types
// None
func (rpcservice *RpcService) Cosmosstakingv1beta1queryvalidators(_ *http.Request, msg *cosmosstakingv1beta1types.QueryValidatorsRequest, response *cosmosstakingv1beta1types.QueryValidatorsResponse) (err error) {
	r, err := rpcservice.k.cosmosstakingv1beta1querier.Validators(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosstakingv1beta1querier
// Types: cosmosstakingv1beta1types
// None
func (rpcservice *RpcService) Cosmosstakingv1beta1queryvalidator(_ *http.Request, msg *cosmosstakingv1beta1types.QueryValidatorRequest, response *cosmosstakingv1beta1types.QueryValidatorResponse) (err error) {
	r, err := rpcservice.k.cosmosstakingv1beta1querier.Validator(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosstakingv1beta1querier
// Types: cosmosstakingv1beta1types
// None
func (rpcservice *RpcService) Cosmosstakingv1beta1queryvalidatordelegations(_ *http.Request, msg *cosmosstakingv1beta1types.QueryValidatorDelegationsRequest, response *cosmosstakingv1beta1types.QueryValidatorDelegationsResponse) (err error) {
	r, err := rpcservice.k.cosmosstakingv1beta1querier.ValidatorDelegations(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosstakingv1beta1querier
// Types: cosmosstakingv1beta1types
// None
func (rpcservice *RpcService) Cosmosstakingv1beta1queryvalidatorunbondingdelegations(_ *http.Request, msg *cosmosstakingv1beta1types.QueryValidatorUnbondingDelegationsRequest, response *cosmosstakingv1beta1types.QueryValidatorUnbondingDelegationsResponse) (err error) {
	r, err := rpcservice.k.cosmosstakingv1beta1querier.ValidatorUnbondingDelegations(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosstakingv1beta1querier
// Types: cosmosstakingv1beta1types
// None
func (rpcservice *RpcService) Cosmosstakingv1beta1querydelegation(_ *http.Request, msg *cosmosstakingv1beta1types.QueryDelegationRequest, response *cosmosstakingv1beta1types.QueryDelegationResponse) (err error) {
	r, err := rpcservice.k.cosmosstakingv1beta1querier.Delegation(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosstakingv1beta1querier
// Types: cosmosstakingv1beta1types
// None
func (rpcservice *RpcService) Cosmosstakingv1beta1queryunbondingdelegation(_ *http.Request, msg *cosmosstakingv1beta1types.QueryUnbondingDelegationRequest, response *cosmosstakingv1beta1types.QueryUnbondingDelegationResponse) (err error) {
	r, err := rpcservice.k.cosmosstakingv1beta1querier.UnbondingDelegation(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosstakingv1beta1querier
// Types: cosmosstakingv1beta1types
// None
func (rpcservice *RpcService) Cosmosstakingv1beta1querydelegatordelegations(_ *http.Request, msg *cosmosstakingv1beta1types.QueryDelegatorDelegationsRequest, response *cosmosstakingv1beta1types.QueryDelegatorDelegationsResponse) (err error) {
	r, err := rpcservice.k.cosmosstakingv1beta1querier.DelegatorDelegations(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosstakingv1beta1querier
// Types: cosmosstakingv1beta1types
// None
func (rpcservice *RpcService) Cosmosstakingv1beta1querydelegatorunbondingdelegations(_ *http.Request, msg *cosmosstakingv1beta1types.QueryDelegatorUnbondingDelegationsRequest, response *cosmosstakingv1beta1types.QueryDelegatorUnbondingDelegationsResponse) (err error) {
	r, err := rpcservice.k.cosmosstakingv1beta1querier.DelegatorUnbondingDelegations(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosstakingv1beta1querier
// Types: cosmosstakingv1beta1types
// None
func (rpcservice *RpcService) Cosmosstakingv1beta1queryredelegations(_ *http.Request, msg *cosmosstakingv1beta1types.QueryRedelegationsRequest, response *cosmosstakingv1beta1types.QueryRedelegationsResponse) (err error) {
	r, err := rpcservice.k.cosmosstakingv1beta1querier.Redelegations(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosstakingv1beta1querier
// Types: cosmosstakingv1beta1types
// None
func (rpcservice *RpcService) Cosmosstakingv1beta1querydelegatorvalidators(_ *http.Request, msg *cosmosstakingv1beta1types.QueryDelegatorValidatorsRequest, response *cosmosstakingv1beta1types.QueryDelegatorValidatorsResponse) (err error) {
	r, err := rpcservice.k.cosmosstakingv1beta1querier.DelegatorValidators(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosstakingv1beta1querier
// Types: cosmosstakingv1beta1types
// None
func (rpcservice *RpcService) Cosmosstakingv1beta1querydelegatorvalidator(_ *http.Request, msg *cosmosstakingv1beta1types.QueryDelegatorValidatorRequest, response *cosmosstakingv1beta1types.QueryDelegatorValidatorResponse) (err error) {
	r, err := rpcservice.k.cosmosstakingv1beta1querier.DelegatorValidator(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosstakingv1beta1querier
// Types: cosmosstakingv1beta1types
// None
func (rpcservice *RpcService) Cosmosstakingv1beta1queryhistoricalinfo(_ *http.Request, msg *cosmosstakingv1beta1types.QueryHistoricalInfoRequest, response *cosmosstakingv1beta1types.QueryHistoricalInfoResponse) (err error) {
	r, err := rpcservice.k.cosmosstakingv1beta1querier.HistoricalInfo(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosstakingv1beta1querier
// Types: cosmosstakingv1beta1types
// None
func (rpcservice *RpcService) Cosmosstakingv1beta1querypool(_ *http.Request, msg *cosmosstakingv1beta1types.QueryPoolRequest, response *cosmosstakingv1beta1types.QueryPoolResponse) (err error) {
	r, err := rpcservice.k.cosmosstakingv1beta1querier.Pool(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosstakingv1beta1querier
// Types: cosmosstakingv1beta1types
// None
func (rpcservice *RpcService) Cosmosstakingv1beta1queryparams(_ *http.Request, msg *cosmosstakingv1beta1types.QueryParamsRequest, response *cosmosstakingv1beta1types.QueryParamsResponse) (err error) {
	r, err := rpcservice.k.cosmosstakingv1beta1querier.Params(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosstakingv1beta1keeper
// Types: cosmosstakingv1beta1types
// github.com/cosmos/cosmos-sdk/x/staking/keeper
func (rpcservice *RpcService) Cosmosstakingv1beta1sendmsgcreatevalidator(_ *http.Request, msg *cosmosstakingv1beta1types.MsgCreateValidator, response *cosmosstakingv1beta1types.MsgCreateValidatorResponse) (err error) {
	//handler := cosmosstakingv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosstakingv1beta1keeper).CreateValidator
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: cosmosstakingv1beta1keeper
// Types: cosmosstakingv1beta1types
// github.com/cosmos/cosmos-sdk/x/staking/keeper
func (rpcservice *RpcService) Cosmosstakingv1beta1sendmsgeditvalidator(_ *http.Request, msg *cosmosstakingv1beta1types.MsgEditValidator, response *cosmosstakingv1beta1types.MsgEditValidatorResponse) (err error) {
	//handler := cosmosstakingv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosstakingv1beta1keeper).EditValidator
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: cosmosstakingv1beta1keeper
// Types: cosmosstakingv1beta1types
// github.com/cosmos/cosmos-sdk/x/staking/keeper
func (rpcservice *RpcService) Cosmosstakingv1beta1sendmsgdelegate(_ *http.Request, msg *cosmosstakingv1beta1types.MsgDelegate, response *cosmosstakingv1beta1types.MsgDelegateResponse) (err error) {
	//handler := cosmosstakingv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosstakingv1beta1keeper).Delegate
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: cosmosstakingv1beta1keeper
// Types: cosmosstakingv1beta1types
// github.com/cosmos/cosmos-sdk/x/staking/keeper
func (rpcservice *RpcService) Cosmosstakingv1beta1sendmsgbeginredelegate(_ *http.Request, msg *cosmosstakingv1beta1types.MsgBeginRedelegate, response *cosmosstakingv1beta1types.MsgBeginRedelegateResponse) (err error) {
	//handler := cosmosstakingv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosstakingv1beta1keeper).BeginRedelegate
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: cosmosstakingv1beta1keeper
// Types: cosmosstakingv1beta1types
// github.com/cosmos/cosmos-sdk/x/staking/keeper
func (rpcservice *RpcService) Cosmosstakingv1beta1sendmsgundelegate(_ *http.Request, msg *cosmosstakingv1beta1types.MsgUndelegate, response *cosmosstakingv1beta1types.MsgUndelegateResponse) (err error) {
	//handler := cosmosstakingv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosstakingv1beta1keeper).Undelegate
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: cosmosstakingv1beta1keeper
// Types: cosmosstakingv1beta1types
// github.com/cosmos/cosmos-sdk/x/staking/keeper
func (rpcservice *RpcService) Cosmosstakingv1beta1sendmsgcancelunbondingdelegation(_ *http.Request, msg *cosmosstakingv1beta1types.MsgCancelUnbondingDelegation, response *cosmosstakingv1beta1types.MsgCancelUnbondingDelegationResponse) (err error) {
	//handler := cosmosstakingv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosstakingv1beta1keeper).CancelUnbondingDelegation
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: cosmosupgradev1beta1keeper
// Types: cosmosupgradev1beta1types
// github.com/cosmos/cosmos-sdk/x/upgrade/keeper
func (rpcservice *RpcService) Cosmosupgradev1beta1querycurrentplan(_ *http.Request, msg *cosmosupgradev1beta1types.QueryCurrentPlanRequest, response *cosmosupgradev1beta1types.QueryCurrentPlanResponse) (err error) {
	r, err := rpcservice.k.cosmosupgradev1beta1keeper.CurrentPlan(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosupgradev1beta1keeper
// Types: cosmosupgradev1beta1types
// github.com/cosmos/cosmos-sdk/x/upgrade/keeper
func (rpcservice *RpcService) Cosmosupgradev1beta1queryappliedplan(_ *http.Request, msg *cosmosupgradev1beta1types.QueryAppliedPlanRequest, response *cosmosupgradev1beta1types.QueryAppliedPlanResponse) (err error) {
	r, err := rpcservice.k.cosmosupgradev1beta1keeper.AppliedPlan(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosupgradev1beta1keeper
// Types: cosmosupgradev1beta1types
// github.com/cosmos/cosmos-sdk/x/upgrade/keeper
func (rpcservice *RpcService) Cosmosupgradev1beta1queryupgradedconsensusstate(_ *http.Request, msg *cosmosupgradev1beta1types.QueryUpgradedConsensusStateRequest, response *cosmosupgradev1beta1types.QueryUpgradedConsensusStateResponse) (err error) {
	r, err := rpcservice.k.cosmosupgradev1beta1keeper.UpgradedConsensusState(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosupgradev1beta1keeper
// Types: cosmosupgradev1beta1types
// github.com/cosmos/cosmos-sdk/x/upgrade/keeper
func (rpcservice *RpcService) Cosmosupgradev1beta1querymoduleversions(_ *http.Request, msg *cosmosupgradev1beta1types.QueryModuleVersionsRequest, response *cosmosupgradev1beta1types.QueryModuleVersionsResponse) (err error) {
	r, err := rpcservice.k.cosmosupgradev1beta1keeper.ModuleVersions(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosupgradev1beta1keeper
// Types: cosmosupgradev1beta1types
// github.com/cosmos/cosmos-sdk/x/upgrade/keeper
func (rpcservice *RpcService) Cosmosupgradev1beta1queryauthority(_ *http.Request, msg *cosmosupgradev1beta1types.QueryAuthorityRequest, response *cosmosupgradev1beta1types.QueryAuthorityResponse) (err error) {
	r, err := rpcservice.k.cosmosupgradev1beta1keeper.Authority(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosupgradev1beta1keeper
// Types: cosmosupgradev1beta1types
// github.com/cosmos/cosmos-sdk/x/upgrade/keeper
func (rpcservice *RpcService) Cosmosupgradev1beta1sendmsgsoftwareupgrade(_ *http.Request, msg *cosmosupgradev1beta1types.MsgSoftwareUpgrade, response *cosmosupgradev1beta1types.MsgSoftwareUpgradeResponse) (err error) {
	//handler := cosmosupgradev1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosupgradev1beta1keeper).SoftwareUpgrade
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: cosmosupgradev1beta1keeper
// Types: cosmosupgradev1beta1types
// github.com/cosmos/cosmos-sdk/x/upgrade/keeper
func (rpcservice *RpcService) Cosmosupgradev1beta1sendmsgcancelupgrade(_ *http.Request, msg *cosmosupgradev1beta1types.MsgCancelUpgrade, response *cosmosupgradev1beta1types.MsgCancelUpgradeResponse) (err error) {
	//handler := cosmosupgradev1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosupgradev1beta1keeper).CancelUpgrade
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: ibcapplicationstransferv1keeper
// Types: ibcapplicationstransferv1types
// None
func (rpcservice *RpcService) Ibcapplicationstransferv1querydenomtrace(_ *http.Request, msg *ibcapplicationstransferv1types.QueryDenomTraceRequest, response *ibcapplicationstransferv1types.QueryDenomTraceResponse) (err error) {
	r, err := rpcservice.k.ibcapplicationstransferv1keeper.DenomTrace(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: ibcapplicationstransferv1keeper
// Types: ibcapplicationstransferv1types
// None
func (rpcservice *RpcService) Ibcapplicationstransferv1querydenomtraces(_ *http.Request, msg *ibcapplicationstransferv1types.QueryDenomTracesRequest, response *ibcapplicationstransferv1types.QueryDenomTracesResponse) (err error) {
	r, err := rpcservice.k.ibcapplicationstransferv1keeper.DenomTraces(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: ibcapplicationstransferv1keeper
// Types: ibcapplicationstransferv1types
// None
func (rpcservice *RpcService) Ibcapplicationstransferv1queryparams(_ *http.Request, msg *ibcapplicationstransferv1types.QueryParamsRequest, response *ibcapplicationstransferv1types.QueryParamsResponse) (err error) {
	r, err := rpcservice.k.ibcapplicationstransferv1keeper.Params(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: ibcapplicationstransferv1keeper
// Types: ibcapplicationstransferv1types
// None
func (rpcservice *RpcService) Ibcapplicationstransferv1querydenomhash(_ *http.Request, msg *ibcapplicationstransferv1types.QueryDenomHashRequest, response *ibcapplicationstransferv1types.QueryDenomHashResponse) (err error) {
	r, err := rpcservice.k.ibcapplicationstransferv1keeper.DenomHash(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: ibcapplicationstransferv1keeper
// Types: ibcapplicationstransferv1types
// None
func (rpcservice *RpcService) Ibcapplicationstransferv1queryescrowaddress(_ *http.Request, msg *ibcapplicationstransferv1types.QueryEscrowAddressRequest, response *ibcapplicationstransferv1types.QueryEscrowAddressResponse) (err error) {
	r, err := rpcservice.k.ibcapplicationstransferv1keeper.EscrowAddress(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: ibcapplicationstransferv1keeper
// Types: ibcapplicationstransferv1types
// None
func (rpcservice *RpcService) Ibcapplicationstransferv1sendmsgtransfer(_ *http.Request, msg *ibcapplicationstransferv1types.MsgTransfer, response *ibcapplicationstransferv1types.MsgTransferResponse) (err error) {
	//handler := ibcapplicationstransferv1keeper.NewMsgServerImpl(rpcservice.k.ibcapplicationstransferv1keeper).Transfer
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonqueryscheduledrun(_ *http.Request, msg *dysontypes.QueryGetScheduledRunRequest, response *dysontypes.QueryGetScheduledRunResponse) (err error) {
	r, err := rpcservice.k.ScheduledRun(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonqueryscheduledrunall(_ *http.Request, msg *dysontypes.QueryAllScheduledRunRequest, response *dysontypes.QueryAllScheduledRunResponse) (err error) {
	r, err := rpcservice.k.ScheduledRunAll(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonquerystorage(_ *http.Request, msg *dysontypes.QueryGetStorageRequest, response *dysontypes.QueryGetStorageResponse) (err error) {
	r, err := rpcservice.k.Storage(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonquerystorageall(_ *http.Request, msg *dysontypes.QueryAllStorageRequest, response *dysontypes.QueryAllStorageResponse) (err error) {
	r, err := rpcservice.k.StorageAll(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonqueryscript(_ *http.Request, msg *dysontypes.QueryGetScriptRequest, response *dysontypes.QueryGetScriptResponse) (err error) {
	r, err := rpcservice.k.Script(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonqueryschema(_ *http.Request, msg *dysontypes.QueryGetSchemaRequest, response *dysontypes.QueryGetSchemaResponse) (err error) {
	r, err := rpcservice.k.Schema(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonquerywsgi(_ *http.Request, msg *dysontypes.QueryWsgiRequest, response *dysontypes.QueryWsgiResponse) (err error) {
	r, err := rpcservice.k.Wsgi(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonqueryqueryscript(_ *http.Request, msg *dysontypes.MsgRun, response *dysontypes.MsgRunResponse) (err error) {
	r, err := rpcservice.k.QueryScript(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonqueryscriptall(_ *http.Request, msg *dysontypes.QueryAllScriptRequest, response *dysontypes.QueryAllScriptResponse) (err error) {
	r, err := rpcservice.k.ScriptAll(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonqueryprefixstorage(_ *http.Request, msg *dysontypes.QueryPrefixStorageRequest, response *dysontypes.QueryPrefixStorageResponse) (err error) {
	r, err := rpcservice.k.PrefixStorage(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonqueryscheduledgaspriceandfeeatblock(_ *http.Request, msg *dysontypes.QueryScheduledGasPriceAndFeeAtBlockRequest, response *dysontypes.QueryScheduledGasPriceAndFeeAtBlockResponse) (err error) {
	r, err := rpcservice.k.ScheduledGasPriceAndFeeAtBlock(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonquerycron(_ *http.Request, msg *dysontypes.QueryGetCronRequest, response *dysontypes.QueryGetCronResponse) (err error) {
	r, err := rpcservice.k.Cron(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonquerycronall(_ *http.Request, msg *dysontypes.QueryAllCronRequest, response *dysontypes.QueryAllCronResponse) (err error) {
	r, err := rpcservice.k.CronAll(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonsendmsgcreatescheduledrun(_ *http.Request, msg *dysontypes.MsgCreateScheduledRun, response *dysontypes.MsgCreateScheduledRunResponse) (err error) {
	//handler := dysonkeeper.NewMsgServerImpl(rpcservice.k.dysonkeeper).CreateScheduledRun
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonsendmsgcreatestorage(_ *http.Request, msg *dysontypes.MsgCreateStorage, response *dysontypes.MsgCreateStorageResponse) (err error) {
	//handler := dysonkeeper.NewMsgServerImpl(rpcservice.k.dysonkeeper).CreateStorage
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonsendmsgupdatestorage(_ *http.Request, msg *dysontypes.MsgUpdateStorage, response *dysontypes.MsgUpdateStorageResponse) (err error) {
	//handler := dysonkeeper.NewMsgServerImpl(rpcservice.k.dysonkeeper).UpdateStorage
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonsendmsgdeletestorage(_ *http.Request, msg *dysontypes.MsgDeleteStorage, response *dysontypes.MsgDeleteStorageResponse) (err error) {
	//handler := dysonkeeper.NewMsgServerImpl(rpcservice.k.dysonkeeper).DeleteStorage
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonsendmsgcreatescript(_ *http.Request, msg *dysontypes.MsgCreateScript, response *dysontypes.MsgCreateScriptResponse) (err error) {
	//handler := dysonkeeper.NewMsgServerImpl(rpcservice.k.dysonkeeper).CreateScript
	handler := rpcservice.m.CreateScript
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonsendmsgupdatescript(_ *http.Request, msg *dysontypes.MsgUpdateScript, response *dysontypes.MsgUpdateScriptResponse) (err error) {
	//handler := dysonkeeper.NewMsgServerImpl(rpcservice.k.dysonkeeper).UpdateScript
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonsendmsgdeletescript(_ *http.Request, msg *dysontypes.MsgDeleteScript, response *dysontypes.MsgDeleteScriptResponse) (err error) {
	//handler := dysonkeeper.NewMsgServerImpl(rpcservice.k.dysonkeeper).DeleteScript
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonsendmsgrun(_ *http.Request, msg *dysontypes.MsgRun, response *dysontypes.MsgRunResponse) (err error) {
	//handler := dysonkeeper.NewMsgServerImpl(rpcservice.k.dysonkeeper).Run
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: nameskeeper
// Types: namestypes
// github.com/org/dyson/x/names/keeper
func (rpcservice *RpcService) Namesqueryparams(_ *http.Request, msg *namestypes.QueryParamsRequest, response *namestypes.QueryParamsResponse) (err error) {
	r, err := rpcservice.k.nameskeeper.Params(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: nameskeeper
// Types: namestypes
// github.com/org/dyson/x/names/keeper
func (rpcservice *RpcService) Namesqueryname(_ *http.Request, msg *namestypes.QueryGetNameRequest, response *namestypes.QueryGetNameResponse) (err error) {
	r, err := rpcservice.k.nameskeeper.Name(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: nameskeeper
// Types: namestypes
// github.com/org/dyson/x/names/keeper
func (rpcservice *RpcService) Namesquerynameall(_ *http.Request, msg *namestypes.QueryAllNameRequest, response *namestypes.QueryAllNameResponse) (err error) {
	r, err := rpcservice.k.nameskeeper.NameAll(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: nameskeeper
// Types: namestypes
// github.com/org/dyson/x/names/keeper
func (rpcservice *RpcService) Namesqueryresolve(_ *http.Request, msg *namestypes.QueryResolveRequest, response *namestypes.QueryResolveResponse) (err error) {
	r, err := rpcservice.k.nameskeeper.Resolve(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: nameskeeper
// Types: namestypes
// github.com/org/dyson/x/names/keeper
func (rpcservice *RpcService) Namesquerygeneratecommit(_ *http.Request, msg *namestypes.QueryGenerateCommitRequest, response *namestypes.QueryGenerateCommitResponse) (err error) {
	r, err := rpcservice.k.nameskeeper.GenerateCommit(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: nameskeeper
// Types: namestypes
// github.com/org/dyson/x/names/keeper
func (rpcservice *RpcService) Namesqueryexpirations(_ *http.Request, msg *namestypes.QueryGetExpirationsRequest, response *namestypes.QueryGetExpirationsResponse) (err error) {
	r, err := rpcservice.k.nameskeeper.Expirations(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: nameskeeper
// Types: namestypes
// github.com/org/dyson/x/names/keeper
func (rpcservice *RpcService) Namesqueryexpirationsall(_ *http.Request, msg *namestypes.QueryAllExpirationsRequest, response *namestypes.QueryAllExpirationsResponse) (err error) {
	r, err := rpcservice.k.nameskeeper.ExpirationsAll(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: nameskeeper
// Types: namestypes
// github.com/org/dyson/x/names/keeper
func (rpcservice *RpcService) Namessendmsgregister(_ *http.Request, msg *namestypes.MsgRegister, response *namestypes.MsgRegisterResponse) (err error) {
	//handler := nameskeeper.NewMsgServerImpl(rpcservice.k.nameskeeper).Register
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: nameskeeper
// Types: namestypes
// github.com/org/dyson/x/names/keeper
func (rpcservice *RpcService) Namessendmsgupdatename(_ *http.Request, msg *namestypes.MsgUpdateName, response *namestypes.MsgUpdateNameResponse) (err error) {
	//handler := nameskeeper.NewMsgServerImpl(rpcservice.k.nameskeeper).UpdateName
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: nameskeeper
// Types: namestypes
// github.com/org/dyson/x/names/keeper
func (rpcservice *RpcService) Namessendmsgdeletename(_ *http.Request, msg *namestypes.MsgDeleteName, response *namestypes.MsgDeleteNameResponse) (err error) {
	//handler := nameskeeper.NewMsgServerImpl(rpcservice.k.nameskeeper).DeleteName
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: nameskeeper
// Types: namestypes
// github.com/org/dyson/x/names/keeper
func (rpcservice *RpcService) Namessendmsgreveal(_ *http.Request, msg *namestypes.MsgReveal, response *namestypes.MsgRevealResponse) (err error) {
	//handler := nameskeeper.NewMsgServerImpl(rpcservice.k.nameskeeper).Reveal
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: nameskeeper
// Types: namestypes
// github.com/org/dyson/x/names/keeper
func (rpcservice *RpcService) Namessendmsgsetpriceandextend(_ *http.Request, msg *namestypes.MsgSetPriceAndExtend, response *namestypes.MsgSetPriceAndExtendResponse) (err error) {
	//handler := nameskeeper.NewMsgServerImpl(rpcservice.k.nameskeeper).SetPriceAndExtend
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: nameskeeper
// Types: namestypes
// github.com/org/dyson/x/names/keeper
func (rpcservice *RpcService) Namessendmsgofferto(_ *http.Request, msg *namestypes.MsgOfferTo, response *namestypes.MsgOfferToResponse) (err error) {
	//handler := nameskeeper.NewMsgServerImpl(rpcservice.k.nameskeeper).OfferTo
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: nameskeeper
// Types: namestypes
// github.com/org/dyson/x/names/keeper
func (rpcservice *RpcService) Namessendmsgaccept(_ *http.Request, msg *namestypes.MsgAccept, response *namestypes.MsgAcceptResponse) (err error) {
	//handler := nameskeeper.NewMsgServerImpl(rpcservice.k.nameskeeper).Accept
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: nameskeeper
// Types: namestypes
// github.com/org/dyson/x/names/keeper
func (rpcservice *RpcService) Namessendmsgbuy(_ *http.Request, msg *namestypes.MsgBuy, response *namestypes.MsgBuyResponse) (err error) {
	//handler := nameskeeper.NewMsgServerImpl(rpcservice.k.nameskeeper).Buy
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: nameskeeper
// Types: namestypes
// github.com/org/dyson/x/names/keeper
func (rpcservice *RpcService) Namessendmsgmintcoins(_ *http.Request, msg *namestypes.MsgMintCoins, response *namestypes.MsgMintCoinsResponse) (err error) {
	//handler := nameskeeper.NewMsgServerImpl(rpcservice.k.nameskeeper).MintCoins
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}

// Keeper: nameskeeper
// Types: namestypes
// github.com/org/dyson/x/names/keeper
func (rpcservice *RpcService) Namessendmsgburncoins(_ *http.Request, msg *namestypes.MsgBurnCoins, response *namestypes.MsgBurnCoinsResponse) (err error) {
	//handler := nameskeeper.NewMsgServerImpl(rpcservice.k.nameskeeper).BurnCoins
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

	r, err := handler(sdk.WrapSDKContext(cachedCtx), msg)
	if err != nil {
		return err
	}
	Write()
	*response = *r
	return nil
}
