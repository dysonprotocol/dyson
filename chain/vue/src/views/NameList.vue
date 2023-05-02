<style scoped></style>

<template>
  <div class="container-fluid">
    <div class="row mb-3">
      <div class="col">
        <RegisterName />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card">
          <h2 class="card-header">Names</h2>
          <div class="card-body">
            <p>This is a list of all names registered on the Dyson Protocol.</p>
            <div class="row mb-4">
              <div class="input-group">
                <input
                  id="search"
                  type="text"
                  :value="searchTerm"
                  @input="search($event.target.value)"
                  class="form-control"
                  placeholder="Search names"
                />
                <button class="btn btn-secondary" @click="searchTerm = address">
                  My names
                </button>
                <button class="btn btn-secondary" @click="searchTerm = ''">
                  Clear
                </button>
              </div>
            </div>

            <div class="row">
              <div class="col-12 table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Dwapp</th>
                      <th>Owner</th>
                      <th>Destination</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody v-if="filteredNames.length === 0">
                    <tr>
                      <td colspan="4">
                        No names found. Try a different search term.
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr v-for="name in filteredNames" :key="name">
                      <td>
                        <router-link :to="'/names/' + name.name">
                          {{ name.name }}
                        </router-link>
                      </td>
                      <td>
                        <a
                          target="blank"
                          class="btn btn-link btn-sm"
                          :href="'https://' + name.dwappDomain"
                        >
                          {{ name.dwappDomain }}
                        </a>
                      </td>

                      <td>
                        <router-link :to="'/scripts/' + name.owner">
                          {{ shortAddress(name.owner) }}
                        </router-link>
                      </td>
                      <td>
                        <router-link :to="'/scripts/' + name.destination">
                          {{ shortAddress(name.destination) }}
                        </router-link>
                      </td>
                      <td>{{ name.price }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import RegisterName from '@/components/RegisterName.vue'
import RegisterName from './RegisterName.vue'
import { buyNameUrl, updateNameUrl, setPriceAndExtendUrl } from './utils.js'

export default {
  name: 'NameList',
  data: function () {
    return {
      clearDomain: import.meta.env.VITE_CLEAR_DOMAIN,
      names: [],
      searchTerm: '',
      isLoaded: false,
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
    shortAddress: function (address) {
      return address.slice(0, 8) + '...' + address.slice(-4)
    },
    search(value) {
      this.searchTerm = value
    },
    buyNameUrl: buyNameUrl,
    updateNameUrl: updateNameUrl,
    setPriceAndExtendUrl: setPriceAndExtendUrl,
    fetchNames: async function () {
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
        name.dwappDomain = name.name.split(".")[0] + '.' + this.clearDomain
        return name
      })
      this.names = names
      this.pagination = result.pagination
    },
  },
  computed: {
    filteredNames() {
      if (!this.searchTerm) {
        return this.names
      }
      const searchTermLowerCase = this.searchTerm.toLowerCase()
      return this.names.filter((name) =>
        name.searchField.includes(searchTermLowerCase)
      )
    },

    address: function () {
      return this.$store.getters['common/wallet/address']
    },
  },
  created: async function () {
    console.log('NameList created', this.names)
    this.isLoaded = false
    await this.fetchNames()
    this.isLoaded = true
  },
}
</script>
