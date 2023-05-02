<style></style>

<template class="container">
  <div class="card">
    <h2 class="card-header">Register Name</h2>
    <div class="card-body">
      <div class="row">
        <div class="col">
          <p>
            Register a name on the Dyson Protocol. Names are used to reference
            accounts, mint coins, and mint NFTs. This will make 2 transactions
            of 10 dys each.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <form class="row">
            <div class="col-md-6 mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Dyson Protocol name</label
              >
              <input
                v-model="name"
                type="text"
                class="form-control"
                placeholder="Dys name"
                aria-label="Dys Name"
                aria-describedby="name-addon"
                :class="{
                  'is-invalid': name && !name.match(/^[a-zA-Z0-9]+\.dys$/),
                  'is-valid': name && name.match(/^[a-zA-Z0-9]+\.dys$/),
                }"
              />
              <div class="form-text">
                You name must be letters or numbers and end in ".dys"
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="exampleInputEmail1" class="form-label">Price</label>
              <input
                v-model="price"
                type="text"
                class="form-control"
                placeholder="For ex 1234 dys"
                aria-label="Price"
                aria-describedby="price-addon"
                :class="{
                  'is-invalid': price && !price.match(/^[0-9]+ *dys$/),
                  'is-valid': price && price.match(/^[0-9]+ *dys$/),
                }"
              />
              <div class="form-text">
                Set the price for this domain name, which can be bought at your
                specified rate. Upon purchase, you'll receive the full amount. A
                1% monthly fee is charged based on the domain price. Ensure
                sufficient funds in your wallet to cover this fee:
                {{ Math.ceil(parseInt(price) * 0.01 || 0) }}dys
              </div>
            </div>

            <div class="col-12">
              <div class="form-check">
                <label
                  id="autorenewlabel"
                  class="form-check-label"
                  for="autoRenew"
                >
                  Auto Renew
                </label>
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="autoRenew"
                  name="autoRenew"
                  v-model="autoRenew"
                />
                <div class="form-text">
                  Should the name be automatically renewed and the 1% fee paid
                  from the owners balance on the expritation date. If this is
                  not checked you will need to manually renew the name before
                  the expiration date.
                </div>
              </div>
              <div class="alert alert-danger" role="alert" v-if="error">
                {{ error }}
              </div>
              <button
                type="submit"
                class="btn btn-primary btn-lg"
                @click="registerName"
                :disabled="inFlight"
              >
                Register Name
              </button>
            </div>
          </form>
        </div>
        <div class="col-md-6">
          <ol class="">
            <li>Generate commit hash: {{ commit }}</li>
            <li>Register commit TX: {{ registerTx?.transactionHash }}</li>
            <li>Reveal name: {{ revealTx?.transactionHash }}</li>
          </ol>
          <div class="alert alert-success" role="alert" v-if="success">
            Congratulations! You have registered the name:
            <router-link :to="'/names/' + name">{{ name }}</router-link
            >!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterName',
  data: function () {
    return {
      name: '',
      price: '',
      inFlight: false,
      salt: '',
      commit: '',
      registerTx: null,
      revealTx: null,
      autoRenew: false,
      error: null,
      successMessage: null,
      success: false,
    }
  },
  computed: {
    address: function () {
      return this.$store.getters['common/wallet/address']
    },
  },
  methods: {
    generateCommit: async function () {
      // generate commit hash
      let command = 'names/QueryGenerateCommit'
      let data = {
        query: {
          owner: this.address,
          name: this.name,
          salt: this.salt,
        },
        params: {},
      }
      let response = await dysonVueStore.dispatch(command, data)
      this.commit = response.commit
      console.log('commit', this.commit)
    },
    registerCommit: async function () {
      let gas = 100000
      let fee = {
        amount: gas * 0.0001 + '',
        denom: 'dys',
      }
      // register commit
      let command = 'names/sendMsgRegister'
      let data = {
        value: {
          commit: this.commit,
          owner: this.address,
          price: this.price,
          auto_renew: this.autoRenew,
        },
        fee: [fee],
        gas: gas + '',
      }

      let response = await dysonVueStore.dispatch(command, data)
      this.registerTx = response
      console.log('registerTx', this.registerTx)
      if (response.code) {
        throw new Error(response.rawLog)
      }
    },
    revealName: async function () {
      let gas = 100000
      let fee = {
        amount: gas * 0.0001 + '',
        denom: 'dys',
      }
      // reveal name
      let command = 'names/sendMsgReveal'
      let data = {
        value: {
          name: this.name,
          owner: this.address,
          salt: this.salt,
        },
        fee: [fee],
        gas: gas + '',
      }
      let response = await dysonVueStore.dispatch(command, data)

      this.revealTx = response
      console.log('revealTx', this.revealTx)
      if (response.code) {
        throw new Error(response.rawLog)
      }
    },
    registerName: async function (e) {
      e.preventDefault()
      this.inFlight = true

      console.log('Registering name', this.name, this.price, this.autoRenew)
      // append .dys to name if not already there
      if (!this.name.endsWith('.dys')) {
        this.name = this.name + '.dys'
      }

      // append dys to price if not already there
      if (!this.price.endsWith('dys')) {
        this.price = this.price + 'dys'
      }

      this.error = null

      this.commit = ''
      this.registerTx = null
      this.revealTx = null
      this.success = false
      this.salt = Math.floor(Math.random() * 1000000000000000000) + ''

      try {
        // generate commit hash
        await this.generateCommit()
        // register commit
        await this.registerCommit()
        // reveal name
        await this.revealName()
        this.success = true
        console.log('success')
      } catch (e) {
        console.log('error', e.message)
        this.error = e.message
      }
      this.inFlight = false
    },
  },
}
</script>
