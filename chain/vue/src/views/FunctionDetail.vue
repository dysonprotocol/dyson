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
              @click.prevent="this.showAssets = !this.showAssets"
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
                >Optional comma separated list of coins to send the script (for
                example "123dys,456token") this entire amount will be sent to
                the script
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

            <button
              :disabled="!address || this.inflight"
              class="btn btn-secondary btn-sm"
              @click.prevent="this.showSchedule = !this.showSchedule"
            >
              Schedule
              {{ this.showSchedule ? '▲' : '▼' }}
              {{ (!address && '[connect wallet]') || '' }}
            </button>

            <div v-if="showSchedule">
              <div class="form-group">
                <label for="scheduleInput">When should it run</label>
                <input
                  :id="name + 'scheduleInput'"
                  class="form-control"
                  aria-describedby="scheduleHelp"
                  v-model="scheduleText"
                />
                <small id="scheduleHelp" class="form-text text-muted"
                  >Use an absolute future block height (eg "1234"), a relative
                  block height prefixed with + (eg "+100"), or a time in English
                  (eg "Jan 01 1970" or "in 30 min")
                </small>
              </div>

              <div class="form-group">
                <label for="scheduleInput">ScheduledRun Gas</label>
                <div class="input-group mb-3">
                  <input
                    :id="name + 'scheduleGas'"
                    class="form-control"
                    aria-describedby="scheduleHelp"
                    v-model="scheduleGas"
                  />
                  <span class="input-group-text"
                        >Gas Price at block  {{ scheduledBlockHeight || "X" }}: {{ scheduledGasPrice }} dys</span
                  >
                  <span class="input-group-text"
                    >Gas Fee: {{ scheduledGasFee }} dys</span
                  >
                </div>

                <small id="scheduleGasHelp" class="form-text text-muted"
                  >The "ScheduledRun Gas" is the amount of gas to allocated to
                  the function to run on the future block. This is the maximum
                  amount of gas that can be used by the function. This is
                  separate from the gas specified in Keplr. The "Gas Price" is
                  the amount of dys to pay per unit of gas at that block height.
                  The "Gas Fee" is the total amount of dys to pay for the gas at
                  that block height. It will immediately be deducted from the
                  account that schedules the function.
                </small>
              </div>
              <div
                v-if="scheduleText && scheduleError"
                class="alert alert-warning mt-3"
              >
                {{ scheduleError }}
              </div>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <div class="btn-group" role="group" aria-label="">
            <button
              :disabled="this.inflight"
              type="submit"
              value="query"
              class="btn btn-secondary"
            >
              Query {{ name }}
            </button>
            <button
              v-if="showSchedule"
              :disabled="!address || this.inflight || scheduleError"
              type="submit"
              value="schedule"
              class="btn btn-primary"
            >
              Schedule {{ name }} at block {{ scheduledBlockHeight }}...
              {{ (!address && '[connect wallet]') || '' }}
            </button>
            <button
              v-else
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
      <div v-if="scheduleResponse">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">TX hash: {{ scheduleResponse.tx }}</li>
          <li class="list-group-item">
            Gas consumed: {{ scheduleResponse.gasUsed }}
          </li>
          <li class="list-group-item">
            Gas Limit: {{ scheduleResponse.gasWanted }}
          </li>
          <li class="list-group-item">
            ScheduledRun Index:
            <pre>{{ scheduleResponse.index }}</pre>
            <router-link
		      class="btn btn-primary btn-sm"
              :to="{ name: 'scheduled', params: { index:
              scheduleResponse.index } }"
              >View ScheduledRun details ↗︎</router-link
            >

          </li>
        </ul>
      </div>
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
            <div v-show="runResponse.exception &&  runResponse.exception.endsWith('out of gas')" >
              <button
                :disabled="!address || this.inflight"
                type="submit"
                value="run"
                class="btn btn-primary"
                @click="run"
                >Try Again with {{gas}} gas</button>
            </div>
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
import { estimateBlockHeight } from './utils.js'

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
      scheduleResponse: null,
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
      showSchedule: false,
      showGasWarning: false,
      scheduleGas: 123000,
      scheduleText: '',
      scheduleError: null,
      scheduledGasPrice: null,
      scheduledGasFee: null,
    }
  },
  watch: {},
  computed: {
    address: function () {
      return this.$store.getters['common/wallet/address']
    },
    blockHeight: function () {
      let h = this.$store.getters['common/blocks/getBlocks'](1)[0].height

      let command = 'dyson/QueryScheduledGasPriceAndFeeAtBlock'
      if (this.scheduledBlockHeight) {
        let data = {
          query: {
            blockheight: this.scheduledBlockHeight,
            gaswanted: this.scheduleGas,
          },
          params: {},
        }
        this.$store
          .dispatch(command, data)
          .then((result) => {
            this.scheduledGasPrice = parseFloat(result.gasprice.amount)
            this.scheduledGasFee = parseFloat(result.gasfee.amount)
          })
          .catch((err) => {
            console.log(err)

            this.scheduledGasPrice = null
            this.scheduledGasFee = null
          })
      } else {
        this.scheduledGasPrice = null
        this.scheduledGasFee = null
      }
      return h
    },
    scheduledBlockHeight: function () {
      this.scheduleError = null
      try {
        return estimateBlockHeight(
          this.scheduleText,
          Number(this.blockHeight),
          1
        )
      } catch (e) {
        console.log(e)
        this.scheduleError = e.message
        return null
      }
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

      this.scheduleResponse = null
      this.runResponse = null
      this.queryResponse = null
      this.queryResponseErr = null
      e.preventDefault()
      console.log(e, e.submitter.value)
      if (e.submitter.value == 'run') {
        await this.run(e)
      } else if (e.submitter.value == 'query') {
        await this.query(e)
      } else if (e.submitter.value == 'schedule') {
        await this.schedule(e)
      }
    },
    schedule: async function (e) {
      const value = {
        creator: this.address,
        height: this.scheduledBlockHeight,
        gas: String(this.scheduleGas),
        msg: {
          creator: this.address,
          address: this.scriptAddress,
          function_name: this.name,
          kwargs: JSON.stringify(this.editor.getValue()),
          coins: this.coins,
          nfts: this.nfts,
        },
      }

      var scheduleResult = {}
      try {
        this.editor.disable()
        this.inflight = true
        var scheduleResponse = {}
        var opts = {
          value: value,
          fee: [{ amount: String(Math.ceil(this.gas * 0.001)), denom: 'dys' }],
          gas: String(Math.ceil(this.gas)),
        }
        try {
          scheduleResult = await this.$store.dispatch(
            'dyson/sendMsgCreateScheduledRun',
            opts
          )
          console.log('scheduleResult', scheduleResult)
          this.gas = scheduleResult.gasUsed * 2
          scheduleResponse.index = JSON.parse(scheduleResult['rawLog'])[0]
              ['events'].filter((i) => i.type == 'scheduled_run')[0]
              ['attributes'][0]['value']
        } catch (objError) {
          console.info('objError', objError)
        }
        scheduleResponse.gasUsed = scheduleResult.gasUsed
        scheduleResponse.gasWanted = scheduleResult.gasWanted

        console.log('scheduleResponse', scheduleResponse)
        this.scheduleResponse = scheduleResponse
        this.scheduleResponse.tx = scheduleResult.transactionHash
      } catch (e) {
        console.log('uncaught error', e)
      } finally {
        this.editor.enable()
        this.inflight = false
      }
    },
    query: async function (e) {
      const value = {
        creator: this.address,
        address: this.scriptAddress,
        function_name: this.name,
        kwargs: JSON.stringify(this.editor.getValue()),
        coins: this.coins,
        nfts: this.nfts,
      }

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
    },
    run: async function (e) {
      this.queryResponseErr = null
      const value = {
        creator: this.address,
        address: this.scriptAddress,
        function_name: this.name,
        kwargs: JSON.stringify(this.editor.getValue()),
        coins: this.coins,
        nfts: this.nfts,
      }

      var txResult = {}
      try {
        this.editor.disable()
        this.inflight = true
        var runResponse = {}
        var opts = {
          value: value,
          fee: [{ amount: String(Math.ceil(this.gas * 0.001)), denom: 'dys' }],
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
              if (txResult.rawLog.match(/out of gas$/)) {
                this.showGasWarning = true
              }

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
