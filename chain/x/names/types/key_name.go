package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// NameKeyPrefix is the prefix to retrieve all Name
	NameKeyPrefix = "Name/value/"
)

// NameKey returns the store key to retrieve a Name from the index fields
func NameKey(
	name string,
) []byte {
	var key []byte

	nameBytes := []byte(name)
	key = append(key, nameBytes...)
	key = append(key, []byte("/")...)

	return key
}
