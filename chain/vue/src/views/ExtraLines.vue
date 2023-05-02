<template>
  <div
    class="card"
    :class="{
      'border-danger': queryResponse?.exception || runResponse?.exception,
    }"
  >
    <div class="card-body">
      <form v-on:submit="submit" class="">
        <h3>REPL</h3>
        <p>
          This code is run after the script but not saved to the script. This is
          only available to you.
        </p>
        <VAceEditor
          v-model:value="extra_lines"
          lang="python"
          :theme="aceTheme"
          :key="aceTheme"
          :min-lines="3"
          :max-lines="20"
          :readonly="inflight"
        />
        <div class="mb-3">
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
                [class_id]/[id] (for example "example.dys/123, example.dys/456")
              </small>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <div class="btn-group" role="group" aria-label="">
            <button
              name="action"
              :disabled="!address || this.inflight"
              type="submit"
              value="query"
              class="btn btn-secondary"
            >
              Query Extra Lines
            </button>
            <button
              name="action"
              :disabled="!address || this.inflight"
              type="submit"
              value="run"
              class="btn btn-primary"
            >
              Run Extra Lines...
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
            Stdout:
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
import { VAceEditor } from 'vue3-ace-editor'
import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/src-noconflict/theme-chrome'
import 'ace-builds/src-noconflict/theme-vibrant_ink'

export default {
  name: 'ExtraLines',
  props: {
    scriptAddress: String,
  },
  components: {
    VAceEditor,
  },
  mounted: function () {
    window.addEventListener('colorModeChanged', this.colorModeChangeCallback)
  },
  unmounted: function () {
    window.removeEventListener('colorModeChanged', this.colorModeChangeCallback)
  },
  data: function () {
    return {
      extra_lines: localStorage.getItem('extraLines') || '\n\n\n',
      runResponse: null,
      queryResponse: null,
      queryResponseErr: null,
      coins: '',
      nfts: '',
      isHidden: true,
      isModal: false,
      link: '',
      inflight: false,
      gas: 123000,
      colorMode: localStorage.getItem('colorMode'),
      showAssets: false,
    }
  },
  watch: {
    extra_lines: function (val) {
      localStorage.setItem('extraLines', val)
    },
  },
  computed: {
    aceTheme: function () {
      if (this.colorMode == 'dark') {
        return 'vibrant_ink'
      } else {
        return 'chrome'
      }
    },
    address: function () {
      return this.$store.getters['common/wallet/address']
    },
  },
  methods: {
    colorModeChangeCallback(event) {
      console.log('colorModeChanged ExtraLines', event)
      this.colorMode = event.detail.colorMode
    },
    submit: async function (e) {
      e.preventDefault()
      console.log(e.submitter.value)
      this.runResponse = null
      this.queryResponse = null
      this.queryResponseErr = null
      const value = {
        creator: this.address,
        address: this.scriptAddress,
        extra_lines: this.extra_lines,
        coins: this.coins,
        nfts: this.nfts,
      }

      if (e.submitter.value == 'run') {
        var txResult = {}
        try {
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
          this.inflight = false
        }
      } else if (e.submitter.value == 'query') {
        try {
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
          this.inflight = false
        }
      }
    },
  },
}
</script>

<style scoped>
pre {
  white-space: pre-wrap;
}
</style>
