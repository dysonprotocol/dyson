package types

import (
	"encoding/binary"

	"github.com/cosmos/cosmos-sdk/types/address"
)

var _ binary.ByteOrder

const (
	// ScriptKeyPrefix is the prefix to retrieve all Script
	ScriptKeyPrefix = "Script/value/"
)

// ScriptKey returns the store key to retrieve a Script from the index fields
func ScriptKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}

// CreateAccountBalancesPrefix creates the prefix for an account's balances.
func DeployAutonomousScriptStoragePrefix(addr []byte) []byte {
	return append([]byte(ScriptKeyPrefix), address.MustLengthPrefix(addr)...)
}
