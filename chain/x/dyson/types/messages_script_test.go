package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/org/dyson/testutil/sample"
	"github.com/stretchr/testify/require"
)

func TestMsgDeployAutonomousScript_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeployAutonomousScript
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeployAutonomousScript{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeployAutonomousScript{
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

func TestMsgUpdateScript_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateScript
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateScript{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateScript{
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

func TestMsgDeleteScript_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteScript
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteScript{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteScript{
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
