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
</style>

<template>
  <div class="container">
    <div class="smol-css-grid">
      <div id="schemas">
        <div v-if="schemas && schemas.error">
          {{ schemas.error }}
        </div>
        <div v-for="item in schemas" v-bind:key="item.function">
          <FunctionDetail
            v-if="item.schema"
            v-bind:schema="item.schema"
            v-bind:name="item.function"
            v-bind:scriptAddress="this.$route.params.script_address"
          />
          <div v-if="item.error" class="sp-box sp-shadow">
            <h3>{{ item.function }}</h3>
            <pre>{{ item.error }}</pre>
          </div>
        </div>
      </div>
      <div id="code">
        <div v-if="script || address == this.$route.params.script_address">
          <VAceEditor v-model:value="code" lang="python" theme="chrome" min-lines="30" max-lines="200" />
          <button @click="save" :disabled="inFlight || address != this.$route.params.script_address" class="sp-button">save</button>
        </div>
        <pre v-if="txResult">
        TX hash: {{ txResult.tx }}
        Height: {{ txResult.height }}
        Raw Log: {{ txResult.rawLog }}
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
import FunctionDetail from './FunctionDetail'
import { VAceEditor } from 'vue3-ace-editor'
import 'ace-builds/src-noconflict/theme-chrome'
import 'ace-builds/src-noconflict/mode-python'

export default {
  name: 'ScriptDetail',
  data: function () {
    return {
      scriptAddress: null,
      inFlight: false,
      txResult: null,
      editedCode: null,
    }
  },
  components: {
    FunctionDetail,
    VAceEditor,
  },
  methods: {
    async save(e) {
      this.inFlight = true
      this.txResult = null
      const value = {
        creator: this.address,
        code: this.code,
      }
      try {
        this.txResult = await this.$store.dispatch('dyson/sendMsgUpdateScript', {
          value: value,
          fee: [{ amount: '2000', denom: 'dys' }],
        })
        this.inFlight = false
        console.log('txResult', this.txResult)
      } catch (e) {
        console.error(e)
      } finally {
        this.inFlight = false
        this.update()
      }
    },
    async update() {
      this.scriptAddress = this.$route.params.script_address
      this.$store
        .dispatch('dyson/QueryScript', {
          query: { index: this.$route.params.script_address },
          options: { subscribe: false, all: false },
        })
        .then(console.log)
      this.$store
        .dispatch('dyson/QuerySchema', {
          query: { index: this.$route.params.script_address },
          options: { subscribe: false, all: false },
        })
        .then(console.log)
    },
  },
  computed: {
    code: {
      get() {
        if (this.editedCode === null) {
          return this.script ? this.script.code : ''
        } else {
          return this.editedCode
        }
      },
      set(newValue) {
        this.editedCode = newValue
      },
    },
    address: function () {
      return this.$store.getters['common/wallet/address']
    },
    schemas: function () {
      const result = this.$store.getters['dyson/getSchema']({
        params: {},
        query: { index: this.$route.params.script_address },
      })

      const schemas = result.schema ? JSON.parse(result.schema) : []
      return schemas.filter((s) => s.function != 'app' && !(s.function || '').startsWith('_'))
    },
    script: function () {
      const result = this.$store.getters['dyson/getScript']({
        params: {},
        query: { index: this.$route.params.script_address },
      })
      return result ? result.script : {}
    },
  },
  created: async function () {
    this.update() 
  },
}
</script>
