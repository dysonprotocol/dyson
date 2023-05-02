<style scoped></style>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <div class="card">
          <div
            v-if="isLoadingNFTClass || isLoadingNFT || isLoadingName"
            class="card-body"
          >
            <h2 class="card-title">Loading...</h2>
          </div>
          <div v-else class="card-body">
            <h2 class="card-title">
              <router-link
                :to="{
                  name: 'nftclass-detail',
                  params: { class_id: nft.class_id },
                }"
              >
                {{ nftClass.name || nftClass.id }}
              </router-link>
            </h2>
            <h6 class="card-subtitle mb-2 text-muted">
              <router-link
                :to="{
                  name: 'nft-detail',
                  params: { class_id: nft.class_id, id: nft.id },
                }"
              >
                {{ nft.id }}
              </router-link>
            </h6>
            <h6 class="card-subtitle mb-2 text-muted"></h6>
            <p class="card-text">
              <strong> Dyson Name:</strong>
              <router-link
                :to="{
                  name: 'name-detail',
                  params: { name: name.name },
                }"
              >
                {{ name.name }} </router-link
              ><br />
              <strong>Class ID:</strong> {{ nft.class_id }}<br />
              <strong>Collection Description:</strong> {{ nftClass.description
              }}<br />
              <strong>Collection URI:</strong> {{ nftClass.uri }}<br />
              <strong>NFT URI:</strong> {{ nft.uri }}<br />
              <strong> Owner: </strong>
              <router-link
                v-if="owner"
                :to="{
                  name: 'script-detail',
                  params: { scriptAddress: owner },
                }"
              >
                {{ owner }}
              </router-link>
            </p>
              <a
                target="blank"
                class="btn btn-primary btn-sm"
                :href="'https://' + name.dwappDomain"
              >
                Go to Dwapp ↗
              </a> <br />
          </div>
        </div>
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
      isLoadingNFT: false,
      isLoadingName: false,
      isLoadingOwner: false,
      clearDomain: import.meta.env.VITE_CLEAR_DOMAIN,
      owner: '',
      name: {},
      nftClass: {
        name: '',
        description: '',
        uri: '',
      },
      nft: {
        id: '',
        uri: '',
      },
    }
  },
  methods: {
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
      name.dwappDomain = name.name.split('.')[0] + '.' + this.clearDomain
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
    fetchNFT: async function () {
      this.isLoadingNFT = true
      let data = {
        query: {},
        params: {
          class_id: this.$route.params.class_id,
          id: this.$route.params.id,
        },
      }
      let result = await this.$store.dispatch(
        'cosmos.nft.v1beta1/QueryNFT',
        data
      )
      console.log('nft result', result)

      this.nft = result.nft
      this.isLoadingNFT = false
    },
    fetchOwner: async function () {
      this.isLoadingOwner = true
      let data = {
        query: {},
        params: {
          class_id: this.$route.params.class_id,
          id: this.$route.params.id,
        },
      }
      let result = await this.$store.dispatch(
        'cosmos.nft.v1beta1/QueryOwner',
        data
      )
      console.log('owner result', result)

      this.owner = result.owner
      this.isLoadingOwner = false
    },
  },
  mounted() {},
  created() {
    this.fetchName()
    this.fetchNFTClass()
    this.fetchNFT()
    this.fetchOwner()
  },

  computed: {
    address: function () {
      return this.$store.getters['common/wallet/address']
    },
  },
  watch: {},
  components: {},
}
</script>
