package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	cosmosvestingv1beta1keeper "github.com/cosmos/cosmos-sdk/x/auth/vesting"
	cosmosvestingv1beta1types "github.com/cosmos/cosmos-sdk/x/auth/vesting/types"
	cosmosauthzv1beta1types "github.com/cosmos/cosmos-sdk/x/authz"
	cosmosbankv1beta1keeper "github.com/cosmos/cosmos-sdk/x/bank/keeper"
	cosmosbankv1beta1types "github.com/cosmos/cosmos-sdk/x/bank/types"
	cosmosdistributionv1beta1keeper "github.com/cosmos/cosmos-sdk/x/distribution/keeper"
	cosmosdistributionv1beta1types "github.com/cosmos/cosmos-sdk/x/distribution/types"
	cosmosevidencev1beta1keeper "github.com/cosmos/cosmos-sdk/x/evidence/keeper"
	cosmosevidencev1beta1types "github.com/cosmos/cosmos-sdk/x/evidence/types"
	cosmosfeegrantv1beta1types "github.com/cosmos/cosmos-sdk/x/feegrant"
	cosmosfeegrantv1beta1keeper "github.com/cosmos/cosmos-sdk/x/feegrant/keeper"
	cosmosgovv1beta1keeper "github.com/cosmos/cosmos-sdk/x/gov/keeper"
	cosmosgovv1beta1types "github.com/cosmos/cosmos-sdk/x/gov/types"
	cosmosslashingv1beta1keeper "github.com/cosmos/cosmos-sdk/x/slashing/keeper"
	cosmosslashingv1beta1types "github.com/cosmos/cosmos-sdk/x/slashing/types"
	cosmosstakingv1beta1keeper "github.com/cosmos/cosmos-sdk/x/staking/keeper"
	cosmosstakingv1beta1types "github.com/cosmos/cosmos-sdk/x/staking/types"
	ibcapplicationstransferv1types "github.com/cosmos/ibc-go/modules/apps/transfer/types"
	"github.com/org/dyson/x/dyson/types"
	dysontypes "github.com/org/dyson/x/dyson/types"
	nameskeeper "github.com/org/dyson/x/names/keeper"
	namestypes "github.com/org/dyson/x/names/types"
	"net/http"
)

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
func (rpcservice *RpcService) Cosmosauthzv1beta1sendmsggrant(_ *http.Request, msg *cosmosauthzv1beta1types.MsgGrant, response *cosmosauthzv1beta1types.MsgGrantResponse) (err error) {
	//handler := cosmosauthzv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosauthzv1beta1keeper).Grant
	handler := rpcservice.k.cosmosauthzv1beta1keeper.Grant
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "RPC ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
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

			err = sdkerrors.Wrapf(types.RpcError, "RPC ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
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

			err = sdkerrors.Wrapf(types.RpcError, "RPC ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
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
func (rpcservice *RpcService) Cosmosbankv1beta1sendmsgsend(_ *http.Request, msg *cosmosbankv1beta1types.MsgSend, response *cosmosbankv1beta1types.MsgSendResponse) (err error) {
	//handler := cosmosbankv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosbankv1beta1keeper).Send
	handler := cosmosbankv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosbankv1beta1keeper).Send
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "RPC ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
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

			err = sdkerrors.Wrapf(types.RpcError, "RPC ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
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

			err = sdkerrors.Wrapf(types.RpcError, "RPC ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
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

			err = sdkerrors.Wrapf(types.RpcError, "RPC ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
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

			err = sdkerrors.Wrapf(types.RpcError, "RPC ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
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

			err = sdkerrors.Wrapf(types.RpcError, "RPC ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
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

// Keeper: cosmosevidencev1beta1keeper
// Types: cosmosevidencev1beta1types
// github.com/cosmos/cosmos-sdk/x/evidence/keeper
func (rpcservice *RpcService) Cosmosevidencev1beta1queryevidence(_ *http.Request, msg *cosmosevidencev1beta1types.QueryEvidenceRequest, response *cosmosevidencev1beta1types.QueryEvidenceResponse) (err error) {
	r, err := rpcservice.k.cosmosevidencev1beta1keeper.Evidence(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosevidencev1beta1keeper
// Types: cosmosevidencev1beta1types
// github.com/cosmos/cosmos-sdk/x/evidence/keeper
func (rpcservice *RpcService) Cosmosevidencev1beta1queryallevidence(_ *http.Request, msg *cosmosevidencev1beta1types.QueryAllEvidenceRequest, response *cosmosevidencev1beta1types.QueryAllEvidenceResponse) (err error) {
	r, err := rpcservice.k.cosmosevidencev1beta1keeper.AllEvidence(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosevidencev1beta1keeper
// Types: cosmosevidencev1beta1types
// github.com/cosmos/cosmos-sdk/x/evidence/keeper
func (rpcservice *RpcService) Cosmosevidencev1beta1sendmsgsubmitevidence(_ *http.Request, msg *cosmosevidencev1beta1types.MsgSubmitEvidence, response *cosmosevidencev1beta1types.MsgSubmitEvidenceResponse) (err error) {
	//handler := cosmosevidencev1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosevidencev1beta1keeper).SubmitEvidence
	handler := cosmosevidencev1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosevidencev1beta1keeper).SubmitEvidence
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "RPC ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
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
func (rpcservice *RpcService) Cosmosfeegrantv1beta1sendmsggrantallowance(_ *http.Request, msg *cosmosfeegrantv1beta1types.MsgGrantAllowance, response *cosmosfeegrantv1beta1types.MsgGrantAllowanceResponse) (err error) {
	//handler := cosmosfeegrantv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosfeegrantv1beta1keeper).GrantAllowance
	handler := cosmosfeegrantv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosfeegrantv1beta1keeper).GrantAllowance
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "RPC ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
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

			err = sdkerrors.Wrapf(types.RpcError, "RPC ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
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

// Keeper: cosmosgovv1beta1keeper
// Types: cosmosgovv1beta1types
// github.com/cosmos/cosmos-sdk/x/gov/keeper
func (rpcservice *RpcService) Cosmosgovv1beta1queryproposal(_ *http.Request, msg *cosmosgovv1beta1types.QueryProposalRequest, response *cosmosgovv1beta1types.QueryProposalResponse) (err error) {
	r, err := rpcservice.k.cosmosgovv1beta1keeper.Proposal(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosgovv1beta1keeper
// Types: cosmosgovv1beta1types
// github.com/cosmos/cosmos-sdk/x/gov/keeper
func (rpcservice *RpcService) Cosmosgovv1beta1queryproposals(_ *http.Request, msg *cosmosgovv1beta1types.QueryProposalsRequest, response *cosmosgovv1beta1types.QueryProposalsResponse) (err error) {
	r, err := rpcservice.k.cosmosgovv1beta1keeper.Proposals(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosgovv1beta1keeper
// Types: cosmosgovv1beta1types
// github.com/cosmos/cosmos-sdk/x/gov/keeper
func (rpcservice *RpcService) Cosmosgovv1beta1queryvote(_ *http.Request, msg *cosmosgovv1beta1types.QueryVoteRequest, response *cosmosgovv1beta1types.QueryVoteResponse) (err error) {
	r, err := rpcservice.k.cosmosgovv1beta1keeper.Vote(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosgovv1beta1keeper
// Types: cosmosgovv1beta1types
// github.com/cosmos/cosmos-sdk/x/gov/keeper
func (rpcservice *RpcService) Cosmosgovv1beta1queryvotes(_ *http.Request, msg *cosmosgovv1beta1types.QueryVotesRequest, response *cosmosgovv1beta1types.QueryVotesResponse) (err error) {
	r, err := rpcservice.k.cosmosgovv1beta1keeper.Votes(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosgovv1beta1keeper
// Types: cosmosgovv1beta1types
// github.com/cosmos/cosmos-sdk/x/gov/keeper
func (rpcservice *RpcService) Cosmosgovv1beta1queryparams(_ *http.Request, msg *cosmosgovv1beta1types.QueryParamsRequest, response *cosmosgovv1beta1types.QueryParamsResponse) (err error) {
	r, err := rpcservice.k.cosmosgovv1beta1keeper.Params(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosgovv1beta1keeper
// Types: cosmosgovv1beta1types
// github.com/cosmos/cosmos-sdk/x/gov/keeper
func (rpcservice *RpcService) Cosmosgovv1beta1querydeposit(_ *http.Request, msg *cosmosgovv1beta1types.QueryDepositRequest, response *cosmosgovv1beta1types.QueryDepositResponse) (err error) {
	r, err := rpcservice.k.cosmosgovv1beta1keeper.Deposit(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosgovv1beta1keeper
// Types: cosmosgovv1beta1types
// github.com/cosmos/cosmos-sdk/x/gov/keeper
func (rpcservice *RpcService) Cosmosgovv1beta1querydeposits(_ *http.Request, msg *cosmosgovv1beta1types.QueryDepositsRequest, response *cosmosgovv1beta1types.QueryDepositsResponse) (err error) {
	r, err := rpcservice.k.cosmosgovv1beta1keeper.Deposits(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosgovv1beta1keeper
// Types: cosmosgovv1beta1types
// github.com/cosmos/cosmos-sdk/x/gov/keeper
func (rpcservice *RpcService) Cosmosgovv1beta1querytallyresult(_ *http.Request, msg *cosmosgovv1beta1types.QueryTallyResultRequest, response *cosmosgovv1beta1types.QueryTallyResultResponse) (err error) {
	r, err := rpcservice.k.cosmosgovv1beta1keeper.TallyResult(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: cosmosgovv1beta1keeper
// Types: cosmosgovv1beta1types
// github.com/cosmos/cosmos-sdk/x/gov/keeper
func (rpcservice *RpcService) Cosmosgovv1beta1sendmsgsubmitproposal(_ *http.Request, msg *cosmosgovv1beta1types.MsgSubmitProposal, response *cosmosgovv1beta1types.MsgSubmitProposalResponse) (err error) {
	//handler := cosmosgovv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosgovv1beta1keeper).SubmitProposal
	handler := cosmosgovv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosgovv1beta1keeper).SubmitProposal
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "RPC ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
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

// Keeper: cosmosgovv1beta1keeper
// Types: cosmosgovv1beta1types
// github.com/cosmos/cosmos-sdk/x/gov/keeper
func (rpcservice *RpcService) Cosmosgovv1beta1sendmsgvote(_ *http.Request, msg *cosmosgovv1beta1types.MsgVote, response *cosmosgovv1beta1types.MsgVoteResponse) (err error) {
	//handler := cosmosgovv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosgovv1beta1keeper).Vote
	handler := cosmosgovv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosgovv1beta1keeper).Vote
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "RPC ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
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

// Keeper: cosmosgovv1beta1keeper
// Types: cosmosgovv1beta1types
// github.com/cosmos/cosmos-sdk/x/gov/keeper
func (rpcservice *RpcService) Cosmosgovv1beta1sendmsgvoteweighted(_ *http.Request, msg *cosmosgovv1beta1types.MsgVoteWeighted, response *cosmosgovv1beta1types.MsgVoteWeightedResponse) (err error) {
	//handler := cosmosgovv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosgovv1beta1keeper).VoteWeighted
	handler := cosmosgovv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosgovv1beta1keeper).VoteWeighted
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "RPC ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
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

// Keeper: cosmosgovv1beta1keeper
// Types: cosmosgovv1beta1types
// github.com/cosmos/cosmos-sdk/x/gov/keeper
func (rpcservice *RpcService) Cosmosgovv1beta1sendmsgdeposit(_ *http.Request, msg *cosmosgovv1beta1types.MsgDeposit, response *cosmosgovv1beta1types.MsgDepositResponse) (err error) {
	//handler := cosmosgovv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosgovv1beta1keeper).Deposit
	handler := cosmosgovv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosgovv1beta1keeper).Deposit
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "RPC ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
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

			err = sdkerrors.Wrapf(types.RpcError, "RPC ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
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

			err = sdkerrors.Wrapf(types.RpcError, "RPC ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
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

			err = sdkerrors.Wrapf(types.RpcError, "RPC ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
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

			err = sdkerrors.Wrapf(types.RpcError, "RPC ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
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

			err = sdkerrors.Wrapf(types.RpcError, "RPC ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
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

			err = sdkerrors.Wrapf(types.RpcError, "RPC ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
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

// Keeper: cosmosvestingv1beta1keeper
// Types: cosmosvestingv1beta1types
// github.com/cosmos/cosmos-sdk/x/auth/vesting
func (rpcservice *RpcService) Cosmosvestingv1beta1sendmsgcreatevestingaccount(_ *http.Request, msg *cosmosvestingv1beta1types.MsgCreateVestingAccount, response *cosmosvestingv1beta1types.MsgCreateVestingAccountResponse) (err error) {
	//handler := cosmosvestingv1beta1keeper.NewMsgServerImpl(rpcservice.k.cosmosvestingv1beta1keeper).CreateVestingAccount
	handler := cosmosvestingv1beta1keeper.NewMsgServerImpl(rpcservice.k.accountKeeper, rpcservice.k.bankkeeper).CreateVestingAccount
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "RPC ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
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
func (rpcservice *RpcService) Ibcapplicationstransferv1sendmsgtransfer(_ *http.Request, msg *ibcapplicationstransferv1types.MsgTransfer, response *ibcapplicationstransferv1types.MsgTransferResponse) (err error) {
	//handler := ibcapplicationstransferv1keeper.NewMsgServerImpl(rpcservice.k.ibcapplicationstransferv1keeper).Transfer
	handler := rpcservice.k.ibcapplicationstransferv1keeper.Transfer
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "RPC ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
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
func (rpcservice *RpcService) Dysonqueryschedualedrun(_ *http.Request, msg *dysontypes.QueryGetSchedualedRunRequest, response *dysontypes.QueryGetSchedualedRunResponse) (err error) {
	r, err := rpcservice.k.SchedualedRun(rpcservice.ctx, msg)
	if err != nil {
		return err
	}
	*response = *r
	return nil
}

// Keeper: dysonkeeper
// Types: dysontypes
// github.com/org/dyson/x/dyson
func (rpcservice *RpcService) Dysonqueryschedualedrunall(_ *http.Request, msg *dysontypes.QueryAllSchedualedRunRequest, response *dysontypes.QueryAllSchedualedRunResponse) (err error) {
	r, err := rpcservice.k.SchedualedRunAll(rpcservice.ctx, msg)
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
func (rpcservice *RpcService) Dysonsendmsgcreateschedualedrun(_ *http.Request, msg *dysontypes.MsgCreateSchedualedRun, response *dysontypes.MsgCreateSchedualedRunResponse) (err error) {
	//handler := dysonkeeper.NewMsgServerImpl(rpcservice.k.dysonkeeper).CreateSchedualedRun
	handler := rpcservice.m.CreateSchedualedRun
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "RPC ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
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

			err = sdkerrors.Wrapf(types.RpcError, "RPC ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
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

			err = sdkerrors.Wrapf(types.RpcError, "RPC ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
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

			err = sdkerrors.Wrapf(types.RpcError, "RPC ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
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

			err = sdkerrors.Wrapf(types.RpcError, "RPC ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
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

			err = sdkerrors.Wrapf(types.RpcError, "RPC ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
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

			err = sdkerrors.Wrapf(types.RpcError, "RPC ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
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

			err = sdkerrors.Wrapf(types.RpcError, "RPC ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
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
func (rpcservice *RpcService) Namessendmsgregister(_ *http.Request, msg *namestypes.MsgRegister, response *namestypes.MsgRegisterResponse) (err error) {
	//handler := nameskeeper.NewMsgServerImpl(rpcservice.k.nameskeeper).Register
	handler := nameskeeper.NewMsgServerImpl(rpcservice.k.nameskeeper).Register
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "RPC ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
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
func (rpcservice *RpcService) Namessendmsgcreatename(_ *http.Request, msg *namestypes.MsgCreateName, response *namestypes.MsgCreateNameResponse) (err error) {
	//handler := nameskeeper.NewMsgServerImpl(rpcservice.k.nameskeeper).CreateName
	handler := nameskeeper.NewMsgServerImpl(rpcservice.k.nameskeeper).CreateName
	//
	defer func() {
		if r := recover(); r != nil {

			err = sdkerrors.Wrapf(types.RpcError, "RPC ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
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

			err = sdkerrors.Wrapf(types.RpcError, "RPC ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
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

			err = sdkerrors.Wrapf(types.RpcError, "RPC ERROR: %T %+v", r, r)
		}
	}()
	err = msg.ValidateBasic()
	if err != nil {
		return err
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
