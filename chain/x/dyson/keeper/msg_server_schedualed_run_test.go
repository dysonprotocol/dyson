package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	keepertest "github.com/org/dyson/testutil/keeper"
	"github.com/org/dyson/x/dyson/keeper"
	"github.com/org/dyson/x/dyson/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestScheduledRunMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.DysonKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateScheduledRun{Creator: creator,
			Index: strconv.Itoa(i),
		}
		_, err := srv.CreateScheduledRun(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetScheduledRun(ctx,
			expected.Index,
		)
		require.True(t, found)
		require.Equal(t, expected.Creator, rst.Creator)
	}
}

func TestScheduledRunMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateScheduledRun
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateScheduledRun{Creator: creator,
				Index: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateScheduledRun{Creator: "B",
				Index: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateScheduledRun{Creator: creator,
				Index: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.DysonKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateScheduledRun{Creator: creator,
				Index: strconv.Itoa(0),
			}
			_, err := srv.CreateScheduledRun(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateScheduledRun(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetScheduledRun(ctx,
					expected.Index,
				)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestScheduledRunMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteScheduledRun
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteScheduledRun{Creator: creator,
				Index: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteScheduledRun{Creator: "B",
				Index: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteScheduledRun{Creator: creator,
				Index: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.DysonKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateScheduledRun(wctx, &types.MsgCreateScheduledRun{Creator: creator,
				Index: strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeleteScheduledRun(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetScheduledRun(ctx,
					tc.request.Index,
				)
				require.False(t, found)
			}
		})
	}
}
