package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/org/dyson/testutil/sample"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateScheduledRun_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateScheduledRun
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateScheduledRun{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateScheduledRun{
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

func TestMsgUpdateScheduledRun_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateScheduledRun
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateScheduledRun{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateScheduledRun{
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

func TestMsgDeleteScheduledRun_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteScheduledRun
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteScheduledRun{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteScheduledRun{
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
