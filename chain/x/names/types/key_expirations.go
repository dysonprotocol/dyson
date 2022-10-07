package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// ExpirationsKeyPrefix is the prefix to retrieve all Expirations
	ExpirationsKeyPrefix = "Expirations/value/"
)

// ExpirationsKey returns the store key to retrieve a Expirations from the index fields
func ExpirationsKey(
	blockHeight string,
) []byte {
	var key []byte

	blockHeightBytes := []byte(blockHeight)
	key = append(key, blockHeightBytes...)
	key = append(key, []byte("/")...)

	return key
}
