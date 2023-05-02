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
