package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/org/dyson/testutil/sample"
	"github.com/stretchr/testify/require"
)

func TestMsgSetPriceAndExtend_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgSetPriceAndExtend
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgSetPriceAndExtend{
				Creator: "invalid_address",
				Name:    "a name",
				Price:   "1dys",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgSetPriceAndExtend{
				Creator: sample.AccAddress(),
				Name:    "a name",
				Price:   "1dys",
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
