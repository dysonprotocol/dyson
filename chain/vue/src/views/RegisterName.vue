<style scoped>
.smol-css-grid {
  --min: 90ch;
  --gap: 1rem;

  display: grid;
  grid-gap: var(--gap);
  /* min() with 100% prevents overflow
  in extra narrow spaces */
  grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
  pre {
    white-space: pre-wrap;
  }
}
.error {
  color: red;
}
</style>
<template>
  <div class="container">
    <div class="smol-css-grid">
      <div>
        <form v-on:submit="submit" class="sp-box sp-shadow">
          <h1>Register Name</h1>
          <input v-model="name" />
          <input v-model="price" />
          <button>Register</button>
          <br />
          <strong class="error" v-if="result?.error">{{ result.error }}</strong>
          <div v-if="result?.success">
            <strong>{{ result.success }} </strong>
          </div>
        </form>
        <h3>Log output</h3>
        <pre><code>{{ logs }}</code></pre>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Register Name',
  data: function () {
    return {
      name: '',
      price: '100dys',
      commitResp: null,
      resisterTx: null,
      logs: '',
      result: null,
    }
  },
  computed: {
    address: function () {
      return this.$store.getters['common/wallet/address']
    },
  },
  watch: {},
  methods: {
    async logDispatch(command, data) {
      this.logs += 'Running command: "' + command + '", ' + JSON.stringify(data, null, 2) + '\n'
      try {
        const ret = await this.$store.dispatch(command, data)
        this.logs += 'Response: ' + JSON.stringify(ret, null, 2) + '\n'
        return ret
      } catch (e) {
        this.logs += e + '\n'
        throw e
      }
    },
    async submit(e) {
      e.preventDefault()
      this.inFlight = true
      this.txResult = null
      this.logs = ''
      this.result = null
      var salt = String(Math.floor(Math.random() * 10000000000) + 1)
      this.logs += 'Generated random salt: ' + salt + '\n'
      try {
        this.commitResp = await this.logDispatch('names/QueryGenerateCommit', {
          query: {
            owner: this.address,
            name: this.name,
            salt: salt,
          },
        })

        console.log('commitResp', this.commitResp)

        this.resisterTx = await this.logDispatch('names/sendMsgRegister', {
          value: {
            owner: this.address,
            commit: this.commitResp.commit,
            price: this.price,
          },
          fee: [{ amount: '2000', denom: 'dys' }],
        })
        console.log('resisterTx', this.resisterTx)

        this.revealTx = await this.logDispatch('names/sendMsgReveal', {
          value: {
            owner: this.address,
            name: this.name,
            salt: salt,
          },
          fee: [{ amount: '2000', denom: 'dys' }],
        })
        console.log('revealTx', this.revealTx)
        this.result = { success: 'Great Success' }
        this.$router.push({ name: 'name-detail', params: { name: this.name } })
      } catch (e) {
        console.error(e)
        this.result = { error: e }
      } finally {
        this.inFlight = false
      }
    },
  },
}
</script>
