package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/org/dyson/testutil/keeper"
	"github.com/org/dyson/testutil/nullify"
	"github.com/org/dyson/x/names/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestExpirationsQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.NamesKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNExpirations(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetExpirationsRequest
		response *types.QueryGetExpirationsResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetExpirationsRequest{
				BlockHeight: msgs[0].BlockHeight,
			},
			response: &types.QueryGetExpirationsResponse{Expirations: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetExpirationsRequest{
				BlockHeight: msgs[1].BlockHeight,
			},
			response: &types.QueryGetExpirationsResponse{Expirations: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetExpirationsRequest{
				BlockHeight: strconv.Itoa(100000),
			},
			err: status.Error(codes.NotFound, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.Expirations(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}

func TestExpirationsQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.NamesKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNExpirations(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllExpirationsRequest {
		return &types.QueryAllExpirationsRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.ExpirationsAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Expirations), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Expirations),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.ExpirationsAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Expirations), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Expirations),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.ExpirationsAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.Expirations),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.ExpirationsAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
