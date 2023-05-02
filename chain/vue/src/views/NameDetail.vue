<style scoped>
.description {
  max-height: 4em;
  overflow: auto;
}
</style>

<template>
  <div class="container-fluid" v-if="name">
    <div class="card mb-3">
      <div class="card-header">
        <h2>Name Details</h2>
      </div>
      <div class="card-body">
        <div v-if="isLoadingName" class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <table class="table table-striped table-sm">
          <tbody>
            <tr>
              <th scope="row">Name</th>
              <td>{{ name.name }}</td>
            </tr>
            <tr>
              <th scope="row">Dwapp</th>
              <td>
                <a target="blank" class="btn btn-primary btn-sm" :href="'https://' + name.dwappDomain">
                  {{ name.dwappDomain }} ↗︎
                </a>
              </td>
            </tr>

            <tr>
              <th scope="row">Owner</th>
              <td>
                <router-link
                  :to="{
                    name: 'script-detail',
                    params: { scriptAddress: name.owner },
                  }"
                >
                  {{ name.owner }}
                </router-link>
              </td>
            </tr>
            <tr>
              <th scope="row">Destination</th>
              <td>
                <router-link
                  :to="{
                    name: 'script-detail',
                    params: { scriptAddress: name.destination },
                  }"
                >
                  {{ name.destination }}
                </router-link>
              </td>
            </tr>
            <tr>
              <th scope="row">Authorized</th>
              <td>{{ name.authorized }}</td>
            </tr>
            <tr>
              <th scope="row">Registration Height</th>
              <td>{{ name.registration_height }}</td>
            </tr>
            <tr>
              <th scope="row">Expiration Height</th>
              <td>{{ name.expiration_height }}</td>
            </tr>
            <tr>
              <th scope="row">Auto Renew</th>
              <td v-if="name.auto_renew">
                <table>
                  <tr>
                    <th>Renewal Fee (1%)</th>
                    <td>{{ Math.ceil(parseFloat(name.price) * 0.01) }} dys</td>
                  </tr>
                  <tr>
                    <th>Blocks</th>
                    <td>+{{ autoRenewDelta() }}</td>
                  </tr>
                  <tr>
                    <th>Estimated timestamp</th>
                    <td>
                      {{
                        estimateFutureTimestamp(name.expiration_height)
                          .futureTimestamp
                      }}
                    </td>
                  </tr>
                  <tr>
                    <th>Estimated time delta</th>
                    <td>
                      {{
                        estimateFutureTimestamp(name.expiration_height)
                          .futureTimeDifference
                      }}
                    </td>
                  </tr>
                </table>
              </td>
              <td v-else></td>
            </tr>
            <tr>
              <th scope="row">Price</th>
              <td>{{ name.price }}</td>
            </tr>
            <tr>
              <th scope="row">Actions</th>
              <td>
                <router-link
                  :to="setPriceAndExtendUrl(name)"
                  class="btn btn-primary"
                  v-if="address === name.owner"
                >
                  Set Price
                </router-link>
                <router-link
                  :to="updateNameUrl(name)"
                  class="btn btn-primary"
                  v-if="address === name.owner"
                >
                  Edit
                </router-link>
                <router-link
                  :to="buyNameUrl(name, this.address)"
                  class="btn btn-primary"
                  v-if="address !== name.owner"
                >
                  Buy Now
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="card mb-3">
      <div class="card-header">
        <h2>Coins Denoms</h2>
      </div>
      <div class="card-body">
        <!-- form to min new coins -->
        <div class="input-group">
          <input
            :placeholder="
              'Amount (ex 1234 ' +
              name.name +
              ' or  1234 example.' +
              name.name +
              ' )'
            "
            type="text"
            class="form-control"
            id="amount"
            v-model="amount"
          />
          <router-link
            class="btn btn-primary"
            :to="mintCoinsUrl(this.address, amount)"
            :class="{ disabled: name.owner !== address }"
            >Mint coins</router-link
          >
          <router-link
            class="btn btn-danger"
            :to="burnCoinsUrl(this.address, amount)"
            :class="{ disabled: name.owner !== address }"
            >Burn Coins</router-link
          >
        </div>
        <!-- end form to mint new coins -->
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">Denom</th>
              <th scope="col">Total supply</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="isLoadingSupply">
              <td>Loading...</td>
            </tr>
            <tr v-else-if="supply.length === 0">
              <td colspan="2">No Coins</td>
            </tr>
            <tr v-for="s in supply" :key="s.denom">
              <td>{{ s.denom }}</td>
              <td>{{ s.amount }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="card mb-3">
      <div class="card-header">
        <h2>NFT Classes</h2>
      </div>
      <div class="card-body">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Symbol</th>
              <th scope="col">Description</th>
              <th scope="col">URI</th>
              <th scope="col">URI Hash</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  class="form-control"
                  v-model="nftClass.id"
                  :placeholder="'Example ' + name.name"
                />
              </td>
              <td>
                <input
                  type="text"
                  class="form-control"
                  v-model="nftClass.name"
                />
              </td>
              <td>
                <input
                  type="text"
                  class="form-control"
                  v-model="nftClass.symbol"
                />
              </td>
              <td>
                <textarea
                  class="form-control"
                  v-model="nftClass.description"
                  rows="1"
                >
                </textarea>
              </td>
              <td>
                <input
                  type="text"
                  class="form-control"
                  v-model="nftClass.uri"
                />
              </td>
              <td>
                <input
                  type="text"
                  class="form-control"
                  v-model="nftClass.uri_hash"
                />
              </td>
              <td>
                <router-link
                  class="btn btn-primary"
                  :to="updateNFTClassUrl(this.address, nftClass)"
                  :class="{ disabled: name.owner !== address }"
                  >Create</router-link
                >
              </td>
            </tr>
            <tr v-if="isLoadingNFTClasses">
              <td>Loading...</td>
            </tr>
            <tr v-else-if="nftClasses.length === 0">
              <td colspan="7">No NFT Classes</td>
            </tr>
            <tr v-for="c in nftClasses" :key="c.id">
              <td>
                <router-link
                  :to="{
                    name: 'nftclass-detail',
                    params: { class_id: c.id },
                  }"
                  :class="{ disabled: name.owner !== address }"
                >
                  {{ c.id }}
                </router-link>
              </td>
              <td>{{ c.name }}</td>
              <td>{{ c.symbol }}</td>
              <td>
                <div class="description">{{ c.description }}</div>
              </td>
              <td>{{ c.uri }}</td>
              <td>{{ c.uri_hash }}</td>
              <td>
                <router-link
                  :to="updateNFTClassUrl(this.address, c)"
                  class="btn btn-primary"
                  :class="{ disabled: name.owner !== address }"
                >
                  Edit
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
// NameDetail.vue

import {
  buyNameUrl,
  updateNameUrl,
  setPriceAndExtendUrl,
  mintCoinsUrl,
  burnCoinsUrl,
  updateNFTClassUrl,
  sortDenoms
} from './utils.js'

const secondsToDdHhMmSs = (totalSeconds) => {
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = Math.round(totalSeconds % 60)

  return `${days.toString().padStart(2, '0')}days ${hours
    .toString()
    .padStart(2, '0')}hours ${minutes.toString().padStart(2, '0')}minutes ${seconds
    .toString()
    .padStart(2, '0')}seconds`
}

export default {
  name: 'NameDetail',
  data: function () {
    return {
      clearDomain: import.meta.env.VITE_CLEAR_DOMAIN,
      isLoadingName: true,
      isLoadingSupply: true,
      isLoadingNFTClasses: true,
      name: null,
      supply: [],
      amount: '',
      nftClasses: [],
      nftClass: {
        id: this.$route.params.name,
        name: '',
        symbol: '',
        description: '',
        uri: '',
        uri_hash: '',
      },
    }
  },
  components: {},
  methods: {
    buyNameUrl: buyNameUrl,
    updateNameUrl: updateNameUrl,
    setPriceAndExtendUrl: setPriceAndExtendUrl,
    mintCoinsUrl: mintCoinsUrl,
    burnCoinsUrl: burnCoinsUrl,
    updateNFTClassUrl: updateNFTClassUrl,

    gotoNFTClassdetail: function (class_id) {
      this.$router.push({
        name: 'nftclass-detail',
        params: { class_id: class_id },
      })
    },
    fetchName: async function () {
      this.isLoadingName = true
      let data = {
        query: {
          name: this.$route.params.name,
        },
        params: {},
      }
      let result = await this.$store.dispatch('names/QueryName', data)
      let name = result.name
      this.name = name

      name.dwappDomain = name.name.split('.')[0] + '.' + this.clearDomain
      this.nftClass.owner = name.owner
      this.isLoadingName = false
    },
    fetchSupply: async function () {
      this.isLoadingSupply = true
      let data = {
        query: {},
        params: {},
        options: { all: true },
      }
      let result = await this.$store.dispatch(
        'cosmos.bank.v1beta1/QueryTotalSupply',
        data
      )
      let supply = result.supply
      // filter each supply the denom starts with this name
      supply = supply.filter(
        (s) => s.denom === this.name.name || s.denom.endsWith("."+this.name.name)
      )

      this.supply = sortDenoms(supply)
      this.isLoadingSupply = false
    },
    fetchnftClasses: async function () {
      this.isLoadingNFTClasses = true
      let data = {
        query: {},
        params: {},
        options: { all: true },
      }
      let result = await this.$store.dispatch(
        'cosmos.nft.v1beta1/QueryClasses',
        data
      )
      let nftClasses = result.classes
      // filter each supply the denom starts with this name
      nftClasses = nftClasses.filter(
        (c) => c.id === this.name.name || c.id.endsWith('.' + this.name.name)
      )

      this.nftClasses = nftClasses
      this.isLoadingNFTClasses = false
    },
    autoRenewDelta: function () {
      let blocks = this.$store.getters['common/blocks/getBlocks'](1)
      if (blocks.length === 0) {
        return '...'
      }
      return parseInt(this.name.expiration_height) - parseInt(blocks[0].height)
    },
    estimateFutureTimestamp(futureBlockHeight) {
      let blocks = this.$store.getters['common/blocks/getBlocks'](60)
      if (blocks.length === 0) {
        return '...'
      }
      // Given data
      let { height: pastHeight, timestamp: pastTimestamp } =
        blocks[blocks.length - 1]
      let { height: currentHeight, timestamp: currentTimestamp } = blocks[0]

      // Calculate average time per block
      let pastTime = new Date(pastTimestamp).getTime()
      let currentTime = new Date(currentTimestamp).getTime()
      let timeDifference = currentTime - pastTime
      let blockDifference = currentHeight - pastHeight
      let avgTimePerBlock = timeDifference / blockDifference

      // Estimate future timestamp
      let futureBlockDifference = futureBlockHeight - currentHeight
      let futureTimeDifference = futureBlockDifference * avgTimePerBlock
      let futureTimestamp = new Date(
        currentTime + futureTimeDifference
      ).toISOString()
      futureTimeDifference = secondsToDdHhMmSs(futureTimeDifference / 1000)

      return { futureTimestamp, futureTimeDifference }
    },
  },
  computed: {
    address: function () {
      return this.$store.getters['common/wallet/address']
    },
  },
  created: async function () {
    await this.fetchName()
    await this.fetchSupply()
    await this.fetchnftClasses()
  },
}
</script>
