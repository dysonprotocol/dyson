package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// ScheduledRunKeyPrefix is the prefix to retrieve all ScheduledRun
	ScheduledRunKeyPrefix = "ScheduledRun/value/"
)

// ScheduledRunKey returns the store key to retrieve a ScheduledRun from the index fields
func ScheduledRunKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
