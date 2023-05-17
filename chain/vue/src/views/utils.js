import * as chrono from 'chrono-node'

// nameUrlUtils.js
export const commandLink = function (command, data, gas = 100000) {
  const fee = 0.0001 * gas
  const dataEncoded = encodeURIComponent(JSON.stringify(data))
  const url = `/commands?command=${encodeURIComponent(
    command
  )}&data=${dataEncoded}&gas=${gas}&fee=${fee}`

  return url
}

export const buyNameUrl = function (name, buyer) {
  const data = {
    buyer,
    name: name.name,
    price: name.price,
  }
  return commandLink('names/sendMsgBuy', data)
}

export const updateNameUrl = function (name) {
  const data = {
    owner: name.owner,
    name: name.name,
    destination: name.destination,
    price: name.price,
    auto_renew: name.auto_renew,
  }
  return commandLink('names/sendMsgUpdateName', data)
}

export const setPriceAndExtendUrl = function (name) {
  const command = 'names/sendMsgSetPriceAndExtend'
  const data = {
    name: name.name,
    owner: name.owner,
    price: name.price,
  }
  return commandLink(command, data)
}

export const mintCoinsUrl = function (owner, amount) {
  const command = 'names/sendMsgMintCoins'
  let gas = parseInt(amount) + 100000
  const data = {
    owner,
    amount,
  }
  return commandLink(command, data, gas)
}
export const burnCoinsUrl = function (owner, amount) {
  const command = 'names/sendMsgBurnCoins'
  const data = {
    owner,
    amount,
  }
  return commandLink(command, data)
}
export const updateNFTClassUrl = function (owner, c) {
  const command = 'names/sendMsgSetNftClass'
  c.owner = owner
  return commandLink(command, c)
}

export const mintNFTUrl = function (class_owner, nft) {
  const command = 'names/sendMsgMintNft'
  nft.class_owner = class_owner
  return commandLink(command, nft)
}

export const bankSendUrl = function (from_address, to_address, amount) {
  const command = 'cosmos.bank.v1beta1/sendMsgSend'
  const data = {
    from_address: from_address || '',
    to_address: to_address || '',
    amount: amount || [],
  }
  return commandLink(command, data)
}

export const sendNftUrl = function (sender, receiver, class_id, id) {
  const command = 'cosmos.nft.v1beta1/sendMsgSend'
  const data = {
    sender,
    receiver,
    class_id,
    id,
  }
  return commandLink(command, data)
}

export const sortNfts = function (nfts) {
  return nfts.sort((a, b) => {
    // Convert name names to lowercase for case-insensitive comparison
    const nameA = a.class_id.toLowerCase().split('.').reverse().join('.')
    const nameB = b.class_id.toLowerCase().split('.').reverse().join('.')
    // Compare the two name names
    if (nameA < nameB) {
      return -1
    } else if (nameA > nameB) {
      return 1
    } else {
      // compare the ids
      if (a.id < b.id) {
        return -1
      } else if (a.id > b.id) {
        return 1
      }
      return 0
    }
  })
}

export function sortDenoms(coins) {
  return coins.sort((a, b) => {
    // Convert name names to lowercase for case-insensitive comparison
    const nameA = a.denom.toLowerCase().split('.').reverse().join('.')
    const nameB = b.denom.toLowerCase().split('.').reverse().join('.')

    // Compare the two name names
    if (nameA < nameB) {
      return -1
    } else if (nameA > nameB) {
      return 1
    } else {
      return 0
    }
  })
}

export function estimateBlockHeight(s, currentHeight, blocksPerSecond) {
  // Check and sanitize input types
  if (typeof s !== 'string') {
    throw new Error(
      `Invalid input type for s: Expected string, got ${typeof s}`
    )
  }
  if (typeof currentHeight !== 'number') {
    throw new Error(
      `Invalid input type for currentHeight: Expected number, got ${typeof currentHeight}`
    )
  }
  if (typeof blocksPerSecond !== 'number') {
    throw new Error(
      `Invalid input type for blocksPerSecond: Expected number, got ${typeof blocksPerSecond}`
    )
  }

  // Check for negative or non-integer currentHeight and blocksPerSecond
  if (currentHeight < 0 || currentHeight % 1 !== 0) {
    throw new Error(
      `Invalid currentHeight: Value must be a non-negative integer, got ${currentHeight}`
    )
  }
  if (blocksPerSecond < 0) {
    throw new Error(
      `Invalid blocksPerSecond: Value must be a non-negative number, got ${blocksPerSecond}`
    )
  }

  let result

  // if s is a number prefxed with "+", add the current height to it and return it
  if (s.startsWith('+')) {
    const relativeHeight = parseInt(s.substring(1))
    if (!isNaN(relativeHeight) && relativeHeight >= 0) {
      result = currentHeight + relativeHeight
    } else {
      throw new Error(
        `Invalid relative block height: Expected non-negative number, got ${s.substring(
          1
        )}`
      )
    }
  }

  // if s is a string of an absolute blockheight, return it
  else if (!isNaN(s)) {
    const absoluteHeight = parseInt(s)
    if (absoluteHeight >= 0) {
      result = absoluteHeight
    } else {
      throw new Error(
        `Invalid absolute block height: Expected non-negative number, got ${s}`
      )
    }
  }

  // if s is a future datetime, return the estimated block height
  else {
    const parsedDate = chrono.parseDate(s)
    if (parsedDate) {
      const now = new Date()
      if (parsedDate > now) {
        const secondsInFuture = (parsedDate - now) / 1000 // convert milliseconds to seconds
        result = currentHeight + Math.ceil(secondsInFuture * blocksPerSecond)
      } else {
        throw new Error(`Provided date is not in the future: ${s}`)
      }
    } else {
      throw new Error(`Invalid input string: ${s}`)
    }
  }

  // Ensure result is greater than the current block height
  if (result <= currentHeight) {
    throw new Error(
      `Scheduled block height (${result}) is not greater than the current block height (${currentHeight})`
    )
  }

  return result
}

export const secondsToDdHhMmSs = (totalSeconds) => {
  let result = ''
  if (totalSeconds < 0) {
    result = " ago"
    totalSeconds = Math.abs(totalSeconds)
  }
  const days = Math.trunc(totalSeconds / 86400)
  const hours = Math.trunc((totalSeconds % 86400) / 3600)
  const minutes = Math.trunc((totalSeconds % 3600) / 60)
  const seconds = Math.round(totalSeconds % 60)

  if (seconds != 0) result = `${seconds} seconds ` + result
  if (minutes != 0) result = `${minutes} minutes ` + result
  if (hours != 0) result = `${hours} hours ` + result
  if (days != 0)  result = `${days} days ` + result


  return result.trim()
}
