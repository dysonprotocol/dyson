<template>
  <div
    class="card mb-3"
    :class="{
      'border-danger': queryResponse?.exception || runResponse?.exception,
    }"
  >
    <div class="card-body">
      <form v-on:submit="submit" class="mb-3" :action="`#${name}`">
        <div v-if="isModal" class="close" @click="this.isModal = false">
          &times;
        </div>
        <div v-bind:id="name"></div>
        <div class="mb-3">
          <div class="form-group">
            <button
              type="button"
              class="btn btn-secondary btn-sm"
              @click="this.showAssets = !this.showAssets"
              :disabled="nfts.length || coins.length"
            >
              Attach Assets
              {{ this.showAssets ? '▲' : '▼' }}
            </button>
            <div v-if="showAssets || nfts.length || coins.length">
              <label :for="name + 'coinsInput'">Attach Coins</label>
              <input
                :id="name + 'coinsInput'"
                class="form-control"
                aria-describedby="coinsHelp"
                v-model="coins"
              />
              <small id="coinsHelp" class="form-text text-muted"
                >Optional comma seperated list of coins to send the script (for
                example "123dys,456token") this entire amount will be sent to the
                script
              </small>
              <div class="form-group">
                <label for="nftInput">Attach NFTs</label>
                <input
                  id="nftInput"
                  class="form-control"
                  aria-describedby="nftHelp"
                  v-model="nfts"
                />
                <small id="nftHelp" class="form-text text-muted"
                  >Optional NFTs to send the script, formatted [class_id]/[id],
                  [class_id]/[id] (for example "example.dys/123,
                  example.dys/456")
                </small>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <div class="btn-group" role="group" aria-label="">
            <button
              name="action"
              :disabled="this.inflight"
              type="submit"
              value="query"
              class="btn btn-secondary"
            >
              Query {{ name }}
            </button>
            <button
              name="action"
              :disabled="!address || this.inflight"
              type="submit"
              value="run"
              class="btn btn-primary"
            >
              Run {{ name }}...
              {{ (!address && '[connect wallet]') || '' }}
            </button>
          </div>
          <a class="btn btn-link" :href="link">Link</a>
        </div>
      </form>
      <div v-if="runResponse">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">TX hash: {{ runResponse.tx }}</li>
          <li class="list-group-item">
            Cumulative Size: {{ runResponse.cumsize }}
          </li>
          <li class="list-group-item">
            Nodes Evaluated: {{ runResponse.nodes_called }}
          </li>
          <li class="list-group-item">
            Gas consumed: {{ runResponse.gasUsed }}
          </li>
          <li class="list-group-item">
            Gas Limit: {{ runResponse.gasWanted }}
          </li>
          <li class="list-group-item">
            Result:
            <pre>{{ runResponse.result }}</pre>
          </li>
          <li class="list-group-item">
            Exception:
            <pre v-show="runResponse.exception">{{
              runResponse.exception
            }}</pre>
          </li>
          <li class="list-group-item">
            Logs:
            <pre>{{ runResponse.stdout }}</pre>
          </li>
        </ul>
      </div>
      <div v-if="queryResponseErr" class="alert alert-danger">
        {{ queryResponseErr }}
      </div>
      <div v-if="queryResponse">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            Cumulative Size: {{ queryResponse.cumsize }}
          </li>
          <li class="list-group-item">
            Nodes Evaluated: {{ queryResponse.nodes_called }}
          </li>
          <li class="list-group-item">
            Estimated Gas Consumed: {{ queryResponse.script_gas_consumed }}
          </li>
          <li class="list-group-item">
            Gas Limit: {{ queryResponse.gas_limit }}
          </li>
          <li class="list-group-item">
            Result:
            <pre>{{ queryResponse.result }}</pre>
          </li>
          <li class="list-group-item">
            Exception:
            <pre v-show="queryResponse.exception">{{
              queryResponse.exception
            }}</pre>
          </li>
          <li class="list-group-item">
            Stdout:
            <pre>{{ queryResponse.stdout }}</pre>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { JSONEditor } from '@json-editor/json-editor'

export default {
  name: 'FunctionDetail',
  props: {
    schema: Object,
    name: String,
    scriptAddress: String,
  },
  data: function () {
    return {
      runResponse: null,
      queryResponse: null,
      queryResponseErr: null,
      inflight: false,
      coins: '',
      nfts: '',
      isHidden: true,
      isModal: false,
      link: '',
      inflight: false,
      gas: 123000,
      showAssets: false,
    }
  },
  computed: {
    address: function () {
      return this.$store.getters['common/wallet/address']
    },
  },
  methods: {
    updateEditorFromQuery() {
      var val = this.$route.query
      if (this.editor) {
        this.editor.setValue(JSON.parse(val[this.name] || '{}'))
      }
    },
    updateQuery: function () {
      var searchParams = new URLSearchParams(window.location.search)
      searchParams.set(this.name, JSON.stringify(this.editor.getValue()))
      var newQuery = window.location.pathname + '?' + searchParams.toString()
      history.pushState(null, '', newQuery)
    },
    updateLink: function () {
      var searchParams = new URLSearchParams()
      searchParams.set(this.name, JSON.stringify(this.editor.getValue()))
      this.link = window.location.pathname + '?' + searchParams.toString()
    },
    submit: async function (e) {
      this.updateQuery()
      e.preventDefault()
      this.runResponse = null
      this.queryResponse = null
      this.queryResponseErr = null
      const value = {
        creator: this.address,
        address: this.scriptAddress,
        function_name: this.name,
        kwargs: JSON.stringify(this.editor.getValue()),
        coins: this.coins,
        nfts: this.nfts,
      }

      if (e.submitter.value == 'run') {
        var txResult = {}
        try {
          this.editor.disable()
          this.inflight = true
          var runResponse = {}
          var opts = {
            value: value,
            fee: [
              { amount: String(Math.ceil(this.gas * 0.001)), denom: 'dys' },
            ],
            gas: String(Math.ceil(this.gas)),
          }
          try {
            txResult = await this.$store.dispatch('dyson/sendMsgRun', opts)
            console.log('txResult', txResult)
            this.gas = txResult.gasUsed * 2
            runResponse = JSON.parse(
              JSON.parse(txResult['rawLog'])[0]
                ['events'].filter((i) => i.type == 'run')[0]
                ['attributes'].slice(-1)[0]['value']
            )
          } catch (objError) {
            console.info('objError', objError)
            if (objError instanceof SyntaxError) {
              let match = txResult.rawLog.match(
                /Output:\n(.*): Exception in Script$/s
              )
              if (match) {
                runResponse = JSON.parse(match[1])
              } else {
                runResponse.exception = txResult.rawLog
              }
            } else {
              runResponse.exception = objError.message
            }
          }
          runResponse.gasUsed = txResult.gasUsed
          runResponse.gasWanted = txResult.gasWanted

          console.log('runResponse', runResponse)
          this.runResponse = runResponse
          this.runResponse.tx = txResult.transactionHash
        } catch (e) {
          console.log('uncaught error', e)
        } finally {
          this.editor.enable()
          this.inflight = false
        }
      } else if (e.submitter.value == 'query') {
        try {
          this.editor.disable()
          this.inflight = true
          const resp = await this.$store.dispatch('dyson/QueryQueryScript', {
            params: {},
            query: value,
            options: { subscribe: false },
          })
          console.log('queryResponse', resp)
          try {
            this.queryResponse = JSON.parse(resp.response)
          } catch (e) {
            if (e instanceof SyntaxError) {
              this.queryResponseErr = resp.response
            }
          }
        } catch (e) {
          this.queryResponseErr = e
          console.error(e)
        } finally {
          this.editor.enable()
          this.inflight = false
        }
      }
    },
    setupEditor() {
      if (this.editor) {
        this.editor.destroy()
      }
      const element = document.getElementById(this.name)

      this.editor = new JSONEditor(element, {
        form_name_root: this.name,
        schema: this.schema,
        disable_collapse: true,
        show_opt_in: true,
        theme: 'bootstrap5',
        disable_properties: true,
        disable_edit_json: true,
      })
      this.editor.theme.options.object_background = ''
      window[this.name + 'editor'] = this.editor
      window.router = this.$router
      window.route = this.$route
      this.editor.on('ready', () => {
        this.updateEditorFromQuery()
      })
      this.editor.on('change', () => {
        this.updateLink()
      })
      this.inflight = false

      if ('#' + this.name === window.location.hash) {
        element.scrollIntoView()
      } else {
      }
    },
  },
  watch: {
    schema: function (val) {
      if (JSON.stringify(val) !== JSON.stringify(this.editor.schema)) {
        this.setupEditor()
      }
    },
    '$route.query': {
      deep: true,
      immediate: true,
      handler: function () {
        this.updateEditorFromQuery()
      },
    },
  },

  mounted: function () {
    this.$nextTick(function () {
      this.setupEditor()
    })
  },
}
</script>

<style scoped>
pre {
  white-space: pre-wrap;
}
</style>
<style>
#schemas .je-ready p {
  white-space: pre-line;
  font-family: monospace;
}
</style>
