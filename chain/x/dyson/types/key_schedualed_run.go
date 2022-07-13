package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// SchedualedRunKeyPrefix is the prefix to retrieve all SchedualedRun
	SchedualedRunKeyPrefix = "SchedualedRun/value/"
)

// SchedualedRunKey returns the store key to retrieve a SchedualedRun from the index fields
func SchedualedRunKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
