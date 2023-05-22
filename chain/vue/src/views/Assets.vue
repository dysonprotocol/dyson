<style scoped>
.denom {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <h2 v-if="walletAddress == address">My Assets</h2>
		<h2 v-else>Assets: {{ address}}</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <div class="card mb-3">
          <div class="card-header">
            <h2>Coins</h2>
          </div>
          <div class="card-body">
            <div class="row mb-3">
              <div class="input-group">
                <input
                  id="search"
                  type="text"
                  v-model="searchTerm"
                  class="form-control"
                  placeholder="Filter coins"
                />
                <button class="btn btn-secondary" @click="searchTerm = ''">
                  Clear
                </button>
              </div>
            </div>
            <div v-if="isLoadingBalances">
              <h2 class="">Loading...</h2>
            </div>
            <div v-else-if="filteredSupply.length === 0">
              <h3 class="">No Coins</h3>
            </div>
            <div id="balanceAccordion" class="accordion">
              <div
                v-for="(s, index) in filteredSupply"
                :key="s.denom"
                class="accordion-item"
              >
                <div class="accordion-header" :id="'balanceHeading' + index">
                  <button
                    class="accordion-button"
                    type="button"
                    @click="
                      balancesState[s.denom].show = !balancesState[s.denom].show
                    "
                    :class="{
                      collapsed: !balancesState[s.denom].show,
                    }"
                  >
                    <p class="mb-0 denom">
                      <span v-if="s.isIBC">
                        <strong>{{ s.denomTrace.base_denom }}</strong>
                        <small>{{ s.denomTrace.path }}</small></span
                      >
                      <strong v-else class="">{{ s.denom }}</strong
                      ><br />
                      {{ s.spendable.toLocaleString() }}
                    </p>
                  </button>
                </div>
                <div
                  :id="'balanceCollapse' + index"
                  class="accordion-collapse collapse"
                  :class="{
                    show: balancesState[s.denom].show,
                  }"
                >
                  <div v-if="address != walletAddress" class="accordion-body">
                    This is not your wallet address. Please connect your wallet
                    with this address to send your coins.
                  </div>
                  <div v-else class="accordion-body">
                    <table class="mb-2">
                      <tr v-if="s.balance != s.spendable">
                        <th>Total Balance:</th>
                        <td>{{ s.balance.toLocaleString() }}</td>
                      </tr>
                      <tr>
                        <th>Avaliable Balance:</th>
                        <td>
                          <a
                            @click.prevent="s.sendAmount = s.spendable"
                            href="#"
                          >
                            {{ s.spendable.toLocaleString() }}
                          </a>
                        </td>
                      </tr>
                    </table>
                    <div class="mb-2 input-group input-group-sm">
                      <input
                        class="form-control"
                        placeholder="Amount"
                        v-model="s.sendAmount"
                      />
                      <span v-if="s.isIBC" class="input-group-text">
                        <strong>{{ s.denomTrace.base_denom }}</strong>
                      </span>
                      <span v-else class="input-group-text">
                        {{ s.denom }}
                      </span>
                    </div>
                    <div class="mb-2 input-group input-group-sm">
                      <input
                        v-model="s.sendTo"
                        class="form-control"
                        placeholder="Recipient's dys address or name"
                      />
                      <button
                        v-if="s.sendTo?.endsWith('.dys')"
                        :disabled="s.isResolvingName"
                        @click="resolveName(s)"
                        class="btn btn-primary"
                        type="button"
                      >
                        Resolve Name
                      </button>
                    </div>
                    <div class="">
                      <p v-if="s.error" class="text-danger">
                        {{ s.error }}
                      </p>
                      <button
                        class="btn btn-primary"
                        :disabled="
                          s.sendAmount <= 0 || !s.sendTo?.startsWith('dys')
                        "
                        @click.prevent="sendCoins(s)"
                      >
                        Send
                      </button>
                      <router-link
                        class="btn btn-link"
                        :to="
                          bankSendUrl(address, s.sendTo, [
                            { denom: s.denom, amount: s.sendAmount },
                          ])
                        "
                        target="_blank"
                      >
                        Advanced...
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card mb-3">
          <div class="card-header">
            <h2>NFTS</h2>
          </div>
          <div class="card-body">
            <div class="row mb-3">
              <div class="input-group">
                <input
                  id="search"
                  type="text"
                  v-model="nftSearchTerm"
                  class="form-control"
                  placeholder="Filter NFTs"
                />
                <button class="btn btn-secondary" @click="nftSearchTerm = ''">
                  Clear
                </button>
              </div>
            </div>
            <div v-if="isLoadingNFTs" class="">
              <h2>Loading...</h2>
            </div>
            <div id="nftAccordian" class="accordion">
              <div
                v-for="nft in nftResults"
                :key="nft.id"
                class="accordion-item"
              >
                <div class="accordion-header">
                  <button
                    class="accordion-button"
                    type="button"
                    @click="nftsState[nft.key].show = !nftsState[nft.key].show"
                    :class="{
                      collapsed: !nftsState[nft.key].show,
                    }"
                  >
                    <p class="mb-0">
                      <router-link
                        :to="{
                          name: 'nft-detail',
                          params: { class_id: nft.class_id, id: nft.id },
                        }"
                      >
                        <strong class="">{{ nft.class_id }}</strong
                        ><br />
                        {{ nft.id }}
                      </router-link>
                    </p>
                  </button>
                </div>
                <div
                  class="accordion-collapse collapse"
                  :class="{
                    show: nftsState[nft.key].show,
                  }"
                >
                  <div class="accordion-body">
                    <div class="mb-2 input-group input-group-sm">
                      <input
                        v-model="nft.sendTo"
                        class="form-control"
                        placeholder="Recipient's dys address or name"
                      />
                      <button
                        v-if="nft.sendTo?.endsWith('.dys')"
                        :disabled="nft.isResolvingName"
                        @click="resolveName(nft)"
                        class="btn btn-primary"
                        type="button"
                      >
                        Resolve Name
                      </button>
                    </div>
                    <div class="">
                      <p v-if="nft.error" class="text-danger">
                        {{ nft.error }}
                      </p>
                      <button
                        class="btn btn-primary"
                        :disabled="
                          !nft.sendTo?.startsWith('dys') || nft.isSending
                        "
                        @click.prevent="sendNft(nft)"
                      >
                        Send
                      </button>
                      <router-link
                        class="btn btn-link"
                        :to="
                          sendNftUrl(address, nft.sendTo, nft.class_id, nft.id)
                        "
                        target="_blank"
                      >
                        Advanced...
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card mb-3">
          <div class="card-header">
            <h2>Names</h2>
          </div>
          <div class="card-body">
            <div class="row mb-2">
              <div class="input-group">
                <input
                  id="search"
                  type="text"
                  v-model="nameSearchTerm"
                  class="form-control"
                  placeholder="Filter Names"
                />
                <button class="btn btn-secondary" @click="nameSearchTerm = ''">
                  Clear
                </button>
              </div>
            </div>
            <ul class="list-group list-group-flush">
              <li v-if="isLoadingNames" class="list-group-item">Loading...</li>
              <li
                v-if="!isLoadingNames && !filteredNames.length"
                class="list-group-item"
              >
                No names found
              </li>
              <li
                v-for="name in filteredNames"
                :key="name.name"
                class="list-group-item"
              >
                <div class="d-flex justify-content-between">
                  <router-link :to="'/names/' + name.name">
                    {{ name.name }}
                  </router-link>
                  <a
                    target="blank"
                    class="float-end btn btn-outline-secondary btn-small"
                    :href="'https://' + name.dwappDomain"
                  >
                    View Dwapp ↗︎
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="position-fixed top-0 end-0 p-3" style="z-index: 3000">
    <div
      v-if="txResult"
      class="toast show"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-header">
        <strong class="me-auto">Success</strong>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
          @click="txResult = null"
        ></button>
      </div>
      <div class="toast-body text-success">
        TX Hash: {{ txResult.transactionHash }}
      </div>
    </div>
  </div>
</template>

<script>
// import RegisterName from '@/components/RegisterName.vue'
import RegisterName from './RegisterName.vue'
import {
  buyNameUrl,
  updateNameUrl,
  setPriceAndExtendUrl,
  bankSendUrl,
  sortDenoms,
  sortNfts,
  sendNftUrl,
} from './utils.js'

import { useAddress, useDenom } from '@starport/vue'

const combineBalancesAndSpendable = (balances, spendable) => {
  const combined = balances.balances.map((balance) => {
    const spendableBalance = spendable.balances.find(
      (spend) => spend.denom === balance.denom
    )

    return {
      denom: balance.denom,
      balance: parseFloat(balance.amount),
      spendable: parseFloat(spendableBalance ? spendableBalance.amount : 0),
    }
  })
  // remove dys and put it at the top
  return sortDenoms(combined)

  //const dys = combined.find((balance) => balance.denom === 'dys')
  //combined.splice(combined.indexOf(dys), 1)
  //combined.unshift(dys)
}

export default {
  name: 'Assets',
  props: ['address'],
  data: function () {
    return {
      clearDomain: import.meta.env.VITE_CLEAR_DOMAIN,
      searchTerm: '',
      nftSearchTerm: '',
      nameSearchTerm: '',
      isLoadingBalances: false,
      isLoadingNFTs: false,
      isLoadingNames: false,
      balances: [],
      balancesState: {},
      nfts: [],
      nftsState: {},
      names: [],
      txResult: null,
    }
  },
  components: {
    RegisterName,
  },
  watch: {
    address: function (address) {
      this.fetchData()
    },
    $route: {
      handler: function (route) {
        this.searchTerm = route.query.search || ''
      },
      immediate: true,
    },
  },
  methods: {
    bankSendUrl: bankSendUrl,
    sendNftUrl: sendNftUrl,
    sendNft: async function (n) {
      console.log(n)
      n.isSending = true
      this.txResult = null
      n.error = ''
      let command = 'cosmos.nft.v1beta1/sendMsgSend'
      let data = {
        value: {
          class_id: n.class_id,
          id: n.id,
          sender: this.address,
          receiver: n.sendTo,
        },
        fee: [
          {
            amount: '10',
            denom: 'dys',
          },
        ],
        gas: '100000',
      }
      console.log(data)
      try {
        let result = await this.$store.dispatch(command, data)
        console.log(result)
        this.txResult = result
        this.fetchNFTs()
      } catch (e) {
        n.error = e.toString()
      }
      n.isSending = false
    },
    sendCoins: async function (s) {
      this.txResult = null
      s.error = ''
      let command = 'cosmos.bank.v1beta1/sendMsgSend'
      let data = {
        value: {
          from_address: this.address,
          to_address: s.sendTo,
          amount: [
            {
              denom: s.denom,
              amount: s.sendAmount + '',
            },
          ],
        },
        fee: [
          {
            amount: '10',
            denom: 'dys',
          },
        ],
        gas: '100000',
      }
      try {
        let result = await this.$store.dispatch(command, data)
        console.log(result)
        this.txResult = result
        this.fetchBalances()
      } catch (e) {
        s.error = e.toString()
      }
    },
    async resolveName(s) {
      s.isResolvingName = true
      s.error = ''
      let result = await this.$store.dispatch('names/QueryResolve', {
        query: {
          name: s.sendTo,
        },
        params: {},
      })
      let resolved = result.address
      console.log(s.sendTo, 'resolved', resolved)
      if (resolved) {
        s.sendTo = resolved
      } else {
        s.error = `Could not resolve name ${s.sendTo}`
      }
      s.isResolvingName = false
    },
    fetchNames: async function () {
      this.isLoadingNames = true
      let result = await this.$store.dispatch('names/QueryNameAll', {
        options: { all: true },
      })
      let names = result.name
      // exclude names that are not yet revealed and begine with SHAKE
      names = names.filter((name) => {
        return name.name.indexOf('SHAKE') !== 0
        //|| name.owner === this.address
      })
      names = names.map((name) => {
        name.searchField = name.name + name.owner + name.destination
        name.dwappDomain = name.name.split('.')[0] + '.' + this.clearDomain
        return name
      })

      names = names.filter(
        (name) =>
          name.owner === this.address || name.destination === this.address
      )
      this.names = names
      this.isLoadingNames = false
    },
    fetchNFTs: async function () {
      this.isLoadingNFTs = true
      let data = {
        query: {
          owner: this.address,
        },
        params: {},
        options: { all: true },
      }
      let result = await this.$store.dispatch(
        'cosmos.nft.v1beta1/QueryNFTs',
        data
      )

      this.nfts = sortNfts(result.nfts)
      this.nfts.forEach((n) => {
        n.key = n.class_id + '/' + n.id
        this.nftsState[n.key] = n
        this.nftsState[n.key] || {}
      })

      this.isLoadingNFTs = false
    },
    dysName(denom) {
      let parts = denom.split('.')
      if (parts.length < 2) {
        return ''
      }
      return parts[parts.length - 2] + '.' + parts[parts.length - 1]
    },
    fetchBalances: async function () {
      this.isLoadingBalances = true
      let balanceResult = await this.$store.dispatch(
        'cosmos.bank.v1beta1/QueryAllBalances',
        {
          query: {},
          params: {
            address: this.address,
          },
          options: { all: true },
        }
      )
      let spendableResult = await this.$store.dispatch(
        'cosmos.bank.v1beta1/QuerySpendableBalances',
        {
          query: {},
          params: {
            address: this.address,
          },
          options: { all: true },
        }
      )
      this.balances = combineBalancesAndSpendable(
        balanceResult,
        spendableResult
      )
      let { getDenomTrace, _ } = useDenom({ $s: dysonVueStore })

      // create an empty object for each denom
      this.balances.forEach((balance) => {
        let isIBC = balance.denom.indexOf('ibc/') == 0
        balance.isIBC = isIBC
        if (isIBC) {
          getDenomTrace(balance.denom).then((trace) => {
            balance.denomTrace = trace.denom_trace
          })
        }

        this.balancesState[balance.denom] =
          this.balancesState[balance.denom] || {}
      })

      this.isLoadingBalances = false
    },
    fetchData: async function () {
      this.balances = []
      this.nfts = []
      this.names = []
      if (this.address) {
        this.fetchBalances()
        this.fetchNFTs()
        this.fetchNames()
      }
    },
  },
  computed: {
    filteredNames: function () {
      if (!this.nameSearchTerm) {
        return this.names
      }
      // filter by serach term
      return this.names.filter((name) => {
        return name.searchField
          .toLowerCase()
          .includes(this.nameSearchTerm.toLowerCase())
      })
    },
    nftResults: function () {
      let results = this.nfts.filter((nft) => {
        return (
          this.nftSearchTerm === '' ||
          nft.class_id.toString().includes(this.nftSearchTerm) ||
          nft.id.toString().includes(this.nftSearchTerm) ||
          nft.uri.includes(this.nftSearchTerm) ||
          nft.uri_hash.includes(this.nftSearchTerm)
        )
      })
      return results
    },
    filteredSupply: function () {
      if (!this.searchTerm) {
        return this.balances
      }
      // filter by serach term
      return this.balances.filter((s) => {
        return s.denom.toLowerCase().includes(this.searchTerm.toLowerCase())
      })
    },

    walletAddress: function () {
      return this.$store.getters['common/wallet/address']
    },
  },
  created: async function () {
    this.fetchData()
  },
}
</script>
