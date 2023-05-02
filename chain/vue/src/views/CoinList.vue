<style scoped></style>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="card mb-3">
          <div class="card-header">
            <h2>Coins Denoms</h2>
          </div>
          <div class="card-body">
            <div class="row mb-4">
              <div class="input-group">
                <input
                  id="search"
                  type="text"
                  v-model="searchTerm"
                  class="form-control"
                  placeholder="Search names"
                />
                <button class="btn btn-secondary" @click="searchTerm = ''">
                  Clear
                </button>
              </div>
            </div>
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">Denom</th>
                  <th scope="col">Dys Name</th>
                  <th scope="col">Total supply</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="isLoadingSupply">
                  <td>Loading...</td>
                </tr>
                <tr v-else-if="filteredSupply.length === 0">
                  <td colspan="2">No Coins</td>
                </tr>
                <tr v-for="s in filteredSupply" :key="s.denom">
                  <td>{{ s.denom }}</td>
                  <td>
                    <router-link
                      v-if="s.dysName"
                      :to="{
                        name: 'name-detail',
                        params: { name: s.dysName },
                      }"
                    >
                      {{ s.dysName }}
                    </router-link>
                  </td>
                  <td>{{ parseFloat(s.amount).toLocaleString() }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import RegisterName from '@/components/RegisterName.vue'
import RegisterName from './RegisterName.vue'
import { buyNameUrl, updateNameUrl, setPriceAndExtendUrl, sortDenoms } from './utils.js'

export default {
  name: 'CoinList',
  data: function () {
    return {
      searchTerm: '',
      isLoadingSupply: true,
      supply: [],
    }
  },
  components: {
    RegisterName,
  },
  watch: {
    $route: {
      handler: function (route) {
        this.searchTerm = route.query.search || ''
      },
      immediate: true,
    },
  },
  methods: {
    dysName(denom) {
      let parts = denom.split('.')
      if (parts.length < 2) {
        return ''
      }
      return parts[parts.length - 2] + '.' + parts[parts.length - 1]
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

      // add dys name to each record
      supply.forEach((s) => {
        s.dysName = this.dysName(s.denom)
      })

      this.supply = sortDenoms(supply)
      this.isLoadingSupply = false
    },
  },
  computed: {
    nftResults() {
      let results = this.nfts.filter((nft) => {
        return (
          this.searchTerm === '' ||
          nft.id.toString().includes(this.searchTerm) ||
          nft.uri.includes(this.searchTerm) ||
          nft.uri_hash.includes(this.searchTerm)
        )
      })
      return results
    },
    filteredSupply() {
      if (!this.searchTerm) {
        return this.supply
      }
      return this.supply.filter((s) => s.denom.includes(this.searchTerm))
    },

    address: function () {
      return this.$store.getters['common/wallet/address']
    },
  },
  created: async function () {
    this.fetchSupply()
  },
}
</script>
