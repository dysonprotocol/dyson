<template>
  <form v-on:submit="submit" class="sp-box sp-shadow" :action="`#${name}`">
    <div v-bind:id="name"></div>
    <button name="action" type="submit" value="link" class="sp-button">link {{ name }}</button>
    <button name="action" :disabled="this.inflight" type="submit" value="query" class="sp-button">
      Query {{ name }}
    </button>
    <button
      name="action"
      :disabled="!address || this.inflight"
      type="submit"
      value="run"
      class="sp-button sp-button-primary"
    >
      Run {{ name }}
    </button>
    <button class="sp-button" v-on:click="isHidden = !isHidden">Coins to Send</button>
    <div class="form-group" v-show="!isHidden">
      <label class="control-label sp-box-header">Coins</label>
      <input class="sp-input" v-model="coins" />
    </div>
  </form>
  <pre v-if="runResponse">
TX hash: {{ runResponse.tx }}
Cumulative Size: {{ runResponse.cumsize }}
Nodes Evaluated: {{ runResponse.nodes_called }}
Result: {{ runResponse.result }}
Exception: {{ runResponse.exception }}
Stdout:
{{ runResponse.stdout }}
</pre
  >
  <pre v-if="queryResponseErr">{{ queryResponseErr }}</pre>
  <pre v-if="queryResponse">
Cumulative Size: {{ queryResponse.cumsize }}
Nodes Evaluated: {{ queryResponse.nodes_called }}
Result: {{ queryResponse.result }}
Exception: {{ queryResponse.exception }}
Stdout:
{{ queryResponse.stdout }}
</pre
  >
</template>
<script>
var qs = require('qs')
import { JSONEditor } from '@json-editor/json-editor'
import 'animate.css'

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
      isHidden: true,
    }
  },
  computed: {
    queryData: function () {
      let uri = window.location.search.substring(1)
      return qs.parse(uri)[this.name]
    },
    address: function () {
      return this.$store.getters['common/wallet/address']
    },
  },
  methods: {
    submit: async function (e) {
      console.log(e.submitter.value)
      if (e.submitter.value != 'link') {
        e.preventDefault()
      }
      this.runResponse = null
      this.queryResponse = null
      this.queryResponseErr = null
      if (this._depsLoaded) {
        const value = {
          creator: this.address,
          address: this.scriptAddress,
          functionName: this.name,
          kwargs: JSON.stringify(this.editor.getValue()),
          coins: this.coins,
        }
        console.log(value)

        if (e.submitter.value == 'run') {
          var txResult = {}
          try {
            this.editor.disable()
            this.inflight = true
            var runResponse = {}
            try {
              txResult = await this.$store.dispatch('dyson/sendMsgRun', {
                value: value,
                fee: [{ amount: '2000', denom: 'dys' }],
              })
              console.log('txResult', txResult)
              runResponse = JSON.parse(
                JSON.parse(txResult['rawLog'])[0]
                  ['events'].filter((i) => i.type == 'run')[0]
                  ['attributes'].slice(-1)[0]['value'],
              )
            } catch (objError) {
              console.info('objError', objError)
              if (objError instanceof SyntaxError) {
                runResponse.exception = txResult['rawLog']
              } else {
                runResponse.exception = objError.message
              }
            }

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
        //disable_properties: true,
        //disable_edit_json: true,
        show_opt_in: true,
        theme: 'myCustom',
      })
      window[this.name + 'editor'] = this.editor
      this.editor.setValue(this.queryData)
      this.inflight = false

      if ('#' + this.name === window.location.hash) {
        element.scrollIntoView()
        element.parentElement.classList.add('animate__animated', 'animate__heartBeat')
      }
    },
  },
  watch: {
    schema: function (val) {
      if (JSON.stringify(val) !== JSON.stringify(this.editor.schema)) {
        this.setupEditor()
      }
    },
  },

  mounted: function () {
    this.$nextTick(function () {
      this.setupEditor()
    })
  },
}
</script>
<style>
.sp-box {
  margin-bottom: 15px;
}
pre {
  white-space: pre-wrap;
}
</style>
