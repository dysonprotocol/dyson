package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
	"github.com/org/dyson/testutil/sample"
)

func TestMsgCreateSchedualedRun_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateSchedualedRun
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateSchedualedRun{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateSchedualedRun{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgUpdateSchedualedRun_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateSchedualedRun
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateSchedualedRun{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateSchedualedRun{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgDeleteSchedualedRun_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteSchedualedRun
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteSchedualedRun{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteSchedualedRun{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
