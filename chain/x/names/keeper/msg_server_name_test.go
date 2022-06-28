package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	keepertest "github.com/org/dyson/testutil/keeper"
	"github.com/org/dyson/x/names/keeper"
	"github.com/org/dyson/x/names/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestNameMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.NamesKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	owner := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateName{Owner: owner,
			Name: strconv.Itoa(i),
		}
		_, err := srv.CreateName(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetName(ctx,
			expected.Name,
		)
		require.True(t, found)
		require.Equal(t, expected.Owner, rst.Owner)
	}
}

func TestNameMsgServerUpdate(t *testing.T) {
	owner := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateName
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateName{Owner: owner,
				Name: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateName{Owner: "B",
				Name: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateName{Owner: owner,
				Name: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.NamesKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateName{Owner: owner,
				Name: strconv.Itoa(0),
			}
			_, err := srv.CreateName(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateName(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetName(ctx,
					expected.Name,
				)
				require.True(t, found)
				require.Equal(t, expected.Owner, rst.Owner)
			}
		})
	}
}

func TestNameMsgServerDelete(t *testing.T) {
	owner := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteName
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteName{Owner: owner,
				Name: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteName{Owner: "B",
				Name: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteName{Owner: owner,
				Name: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.NamesKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateName(wctx, &types.MsgCreateName{Owner: owner,
				Name: strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeleteName(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetName(ctx,
					tc.request.Name,
				)
				require.False(t, found)
			}
		})
	}
}
