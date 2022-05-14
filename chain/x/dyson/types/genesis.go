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
		SchedualedRunList: []SchedualedRun{},
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

	// Check for duplicated index in schedualedRun
	schedualedRunIndexMap := make(map[string]struct{})

	for _, elem := range gs.SchedualedRunList {
		index := string(SchedualedRunKey(elem.Index))
		if _, ok := schedualedRunIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for schedualedRun")
		}
		schedualedRunIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return nil
}
