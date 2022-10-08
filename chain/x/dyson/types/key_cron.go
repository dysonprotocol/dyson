package types

import (
	"encoding/binary"
	fmt "fmt"
)

var _ binary.ByteOrder

const (
	// CronKeyPrefix is the prefix to retrieve all Cron
	CronKeyPrefix = "Cron/value/"
)

// CronKey returns the store key to retrieve a Cron from the index fields
func CronKey(
	blockHeight string,
) []byte {
	var key []byte

	blockHeightBytes := []byte(fmt.Sprintf("%012s", blockHeight))
	key = append(key, blockHeightBytes...)
	key = append(key, []byte("/")...)

	return key
}
