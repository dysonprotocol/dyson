<style scoped>
.description {
  max-height: 4em;
  overflow: auto;
}
</style>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="card">
          <h2 class="card-header">All NFT Collections</h2>
          <div class="card-body table-responsive">
            <div class="row">
              <div class="input-group">
                <input
                  type="text"
                  v-model="searchTerm"
                  class="form-control"
                  placeholder="Search NFT collections"
                />
                <button class="btn btn-secondary" @click="searchTerm = ''">
                  Clear
                </button>
              </div>
            </div>
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Collection Name</th>
                  <th scope="col">Symbol</th>
                  <th scope="col">Description</th>
                  <th scope="col">URI</th>
                  <th scope="col">URI Hash</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="nftClasses.length === 0">
                  <td colspan="7">No NFT Collections</td>
                </tr>
                <tr v-for="c in filteredResults" :key="c.id">
                  <td>
                    <router-link
                      :to="{
                        name: 'nftclass-detail',
                        params: { class_id: c.id },
                      }"
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
export default {
  name: 'NFTClassList',
  data() {
    return {
      nftClasses: [],
      searchTerm: '',
    }
  },
  methods: {
    gotoNFTClassdetail: function (class_id) {
      this.$router.push({
        name: 'nftclass-detail',
        params: { class_id: class_id },
      })
    },
    fetchnftClasses: async function () {
      let data = {
        query: {},
        params: {},
      }
      let result = await this.$store.dispatch(
        'cosmos.nft.v1beta1/QueryClasses',
        data
      )
      let nftClasses = result.classes
      // filter each supply the denom starts with this name

      this.nftClasses = nftClasses
    },
  },
  mounted() {},
  created() {
    this.fetchnftClasses()
  },
  computed: {
    filteredResults() {
      return this.nftClasses.filter((c) => {
        return (
          !this.searchTerm ||
          c.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          c.symbol.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          c.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          c.id.toString().includes(this.searchTerm.toLowerCase())
        )
      })
    },
  },
  watch: {},
  components: {},
}
</script>
