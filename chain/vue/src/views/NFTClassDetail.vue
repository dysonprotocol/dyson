<style scoped></style>

<template>
  <div class="container-fluid">
    <div class="card">
      <div class="card-header">
        <h2 v-if="isLoadingNFTClass || isLoadingNFTs">Loading...</h2>
        <h2 v-else>
          {{ nftClass.id }}<span v-if="nftClass.name">: {{ nftClass.name }}</span>
        </h2>
      </div>
      <div class="card-body">
        <p>
          Dys Name:
          <router-link
            v-if="!isLoadingName"
            :to="{ name: 'name-detail', params: { name: name.name } }"
          >
            {{ name.name }}
          </router-link>
        </p>
        <p>
          {{ nftClass.description }}
        </p>
        <form class="row g-3 mb-3">
          <div class="col">
            <label for="nftId" class="form-label">New NFT ID</label>
            <input
              type="text"
              class="form-control"
              id="nftId"
              v-model="nft.id"
              placeholder="The unique ID of the NFT"
            />
          </div>
          <div class="col">
            <label for="nftUri" class="form-label">NFT URI (optional)</label>
            <input
              type="text"
              class="form-control"
              id="nftUri"
              v-model="nft.uri"
              placeholder="The URI of the NFT"
            />
          </div>
          <div class="col">
            <label for="nftUriHash" class="form-label">NFT URI Hash (optional)</label>
            <input
              type="text"
              class="form-control"
              id="nftUriHash"
              v-model="nft.uri_hash"
            />
          </div>
          <div class="col-12">
            <router-link
              :to="mintNFTUrl(this.address, nft)"
              class="btn btn-primary align-bottom"
              :class="{ disabled: name.owner !== address }"
            >
              Mint New NFT
            </router-link>
          </div>
        </form>
        <div class="row">
          <div class="input-group">
            <input
              type="text"
              v-model="searchTerm"
              class="form-control"
              placeholder="Search NFTs"
            />
            <button class="btn btn-secondary" @click="searchTerm = ''">
              Clear
            </button>
          </div>
        </div>

        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">NFT ID</th>
              <th scope="col">URI</th>
              <th scope="col">URI HASH</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="nft in searchResults" :key="nft.id">
              <td>
                <router-link
                  :to="{
                    name: 'nft-detail',
                    params: { class_id: nft.class_id, id: nft.id },
                  }"
                >
                  {{ nft.id }}
                </router-link>
              </td>
              <td>{{ nft.uri }}</td>
              <td>{{ nft.uri_hash }}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mintNFTUrl } from './utils.js'
export default {
  name: 'NFTClassDetail',
  data() {
    return {
      isLoadingNFTClass: false,
      isLoadingNFTs: false,
      isLoadingName: false,
      name: {},
      nftClass: {},
      nfts: [],
      nft: {
        class_id: this.$route.params.class_id,
        id: '',
        uri: '',
        uri_hash: '',
      },
      searchTerm: '',
    }
  },
  methods: {
    mintNFTUrl: mintNFTUrl,
    gotoNFT: function (class_id, id) {
      console.log('gotoNFT', class_id, id)
      this.$router.push({
        name: 'nft-detail',
        params: { class_id: class_id, id: id },
      })
    },
    fetchName: async function () {
      this.isLoadingName = true

      let class_id = this.$route.params.class_id
      // split class_id by . and get the last 2 parts joined by .
      let parts = class_id.split('.')
      let dysName = parts[parts.length - 2] + '.' + parts[parts.length - 1]

      let data = {
        query: {
          name: dysName,
        },
        params: {},
      }
      let result = await this.$store.dispatch('names/QueryName', data)
      console.log(result)
      let name = result.name
      this.name = name
      this.nftClass.owner = name.owner
      this.isLoadingName = false
    },
    fetchNFTClass: async function () {
      this.isLoadingNFTClass = true
      let data = {
        query: {},
        params: {
          class_id: this.$route.params.class_id,
        },
      }
      let result = await this.$store.dispatch(
        'cosmos.nft.v1beta1/QueryClass',
        data
      )
      let nftClass = result.class
      // filter each supply the denom starts with this name

      this.nftClass = nftClass
      this.isLoadingNFTClass = false
    },
    fetchNFTs: async function () {
      this.isLoadingNFTs = true
      let data = {
        query: {
          class_id: this.$route.params.class_id,
        },
        params: {},
        options: { all: true },
      }
      let result = await this.$store.dispatch(
        'cosmos.nft.v1beta1/QueryNFTs',
        data
      )
      console.log('nft result', result)

      this.nfts = result.nfts
      this.isLoadingNFTs = false
    },
  },
  mounted() {},
  created() {
    this.fetchName()
    this.fetchNFTClass()
    this.fetchNFTs()
  },

  computed: {
    address: function () {
      return this.$store.getters['common/wallet/address']
    },
    searchResults: function () {
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
  },
  watch: {},
  components: {},
}
</script>
