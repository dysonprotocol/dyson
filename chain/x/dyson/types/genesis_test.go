package types_test

import (
	"testing"

	"github.com/org/dyson/x/dyson/types"
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

				ScriptList: []types.Script{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				StorageList: []types.Storage{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				StorageList: []types.Storage{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				FoobarList: []types.Foobar{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				ScheduledRunList: []types.ScheduledRun{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				CronList: []types.Cron{
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
			desc: "duplicated script",
			genState: &types.GenesisState{
				ScriptList: []types.Script{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated storage",
			genState: &types.GenesisState{
				StorageList: []types.Storage{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated storage",
			genState: &types.GenesisState{
				StorageList: []types.Storage{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated foobar",
			genState: &types.GenesisState{
				FoobarList: []types.Foobar{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated scheduledRun",
			genState: &types.GenesisState{
				ScheduledRunList: []types.ScheduledRun{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated cron",
			genState: &types.GenesisState{
				CronList: []types.Cron{
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
