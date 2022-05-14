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

func TestSchedualedRunMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.DysonKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateSchedualedRun{Creator: creator,
		    Index: strconv.Itoa(i),
            
		}
		_, err := srv.CreateSchedualedRun(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetSchedualedRun(ctx,
		    expected.Index,
            
		)
		require.True(t, found)
		require.Equal(t, expected.Creator, rst.Creator)
	}
}

func TestSchedualedRunMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateSchedualedRun
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateSchedualedRun{Creator: creator,
			    Index: strconv.Itoa(0),
                
			},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateSchedualedRun{Creator: "B",
			    Index: strconv.Itoa(0),
                
			},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgUpdateSchedualedRun{Creator: creator,
			    Index: strconv.Itoa(100000),
                
			},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.DysonKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateSchedualedRun{Creator: creator,
			    Index: strconv.Itoa(0),
                
			}
			_, err := srv.CreateSchedualedRun(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateSchedualedRun(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetSchedualedRun(ctx,
				    expected.Index,
                    
				)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestSchedualedRunMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteSchedualedRun
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteSchedualedRun{Creator: creator,
			    Index: strconv.Itoa(0),
                
			},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteSchedualedRun{Creator: "B",
			    Index: strconv.Itoa(0),
                
			},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteSchedualedRun{Creator: creator,
			    Index: strconv.Itoa(100000),
                
			},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.DysonKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateSchedualedRun(wctx, &types.MsgCreateSchedualedRun{Creator: creator,
			    Index: strconv.Itoa(0),
                
			})
			require.NoError(t, err)
			_, err = srv.DeleteSchedualedRun(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetSchedualedRun(ctx,
				    tc.request.Index,
                    
				)
				require.False(t, found)
			}
		})
	}
}
