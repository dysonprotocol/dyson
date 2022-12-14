package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		NameList:        []Name{},
		ExpirationsList: []Expirations{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in name
	nameIndexMap := make(map[string]struct{})

	for _, elem := range gs.NameList {
		index := string(NameKey(elem.Name))
		if _, ok := nameIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for name")
		}
		nameIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in expirations
	expirationsIndexMap := make(map[string]struct{})

	for _, elem := range gs.ExpirationsList {
		index := string(ExpirationsKey(elem.BlockHeight))
		if _, ok := expirationsIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for expirations")
		}
		expirationsIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
