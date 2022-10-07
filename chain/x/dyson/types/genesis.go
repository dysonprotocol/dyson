package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		ScriptList:        []Script{},
		StorageList:       []Storage{},
		ScheduledRunList: []ScheduledRun{},
		CronList: []Cron{},
// this line is used by starport scaffolding # genesis/types/default
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in script
	scriptIndexMap := make(map[string]struct{})

	for _, elem := range gs.ScriptList {
		index := string(ScriptKey(elem.Index))
		if _, ok := scriptIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for script")
		}
		scriptIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in storage
	storageIndexMap := make(map[string]struct{})

	for _, elem := range gs.StorageList {
		index := string(StorageKey(elem.Index))
		if _, ok := storageIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for storage")
		}
		storageIndexMap[index] = struct{}{}
	}

	// Check for duplicated index in scheduledRun
	scheduledRunIndexMap := make(map[string]struct{})

	for _, elem := range gs.ScheduledRunList {
		index := string(ScheduledRunKey(elem.Index))
		if _, ok := scheduledRunIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for scheduledRun")
		}
		scheduledRunIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in cron
cronIndexMap := make(map[string]struct{})

for _, elem := range gs.CronList {
	index := string(CronKey(elem.BlockHeight))
	if _, ok := cronIndexMap[index]; ok {
		return fmt.Errorf("duplicated index for cron")
	}
	cronIndexMap[index] = struct{}{}
}
// this line is used by starport scaffolding # genesis/types/validate

	return nil
}
