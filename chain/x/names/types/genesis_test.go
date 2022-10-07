package types_test

import (
	"testing"

	"github.com/org/dyson/x/names/types"
	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{

				NameList: []types.Name{
					{
						Name: "0",
					},
					{
						Name: "1",
					},
				},
				ExpirationsList: []types.Expirations{
					{
						BlockHeight: "0",
					},
					{
						BlockHeight: "1",
					},
				},
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated name",
			genState: &types.GenesisState{
				NameList: []types.Name{
					{
						Name: "0",
					},
					{
						Name: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated expirations",
			genState: &types.GenesisState{
				ExpirationsList: []types.Expirations{
					{
						BlockHeight: "0",
					},
					{
						BlockHeight: "0",
					},
				},
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
