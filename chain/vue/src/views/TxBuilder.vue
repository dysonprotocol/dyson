<style scoped>
.smol-css-grid {
  --min: 90ch;
  --gap: 1rem;

  display: grid;
  grid-gap: var(--gap);
  /* min() with 100% prevents overflow
    in extra narrow spaces */
  grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
}
</style>
<template>
  <div class="container">
    <div class="smol-css-grid">
      <div class="sp-box sp-shadow">
        <select v-model="command">
          <option disabled value="">Please select one</option>
          <option v-for="c in tx" v-bind:key="c" v-bind:value="c">Tx - {{ c }}</option>
          <option v-for="c in query" v-bind:key="c" v-bind:value="c">Query - {{ c }}</option>
        </select>
        <div class="sp-box-header">
          {{ command }}
        </div>
        <form v-on:submit="submit" class="">
          <div class="form-group">
            <VAceEditor v-model:value="data" lang="json" theme="chrome" min-lines="10" max-lines="200" />
            <div>{{ error }}</div>
            <button name="action" :disabled="disabled" type="submit" value="run" class="sp-button sp-button-primary">
              {{ buttontxt }}
            </button>
            <div class="form-group" v-show="showFee">
              <label class="control-label sp-box-header">DYS gas fee</label>
              <input class="sp-input" v-model="fee" />
            </div>
          </div>
        </form>
      </div>
      <div>
        <pre>
from dys import rpc


def example():
    return rpc("{{ command || 'example/command' }}"{{ command_kwargs }})

</pre
        >
      </div>
    </div>
    <div class="smol-css-grid">
      <div id="editor"></div>
      <div id="responseEditor"></div>
    </div>
  </div>
</template>
<script>
import { VAceEditor } from 'vue3-ace-editor'
import 'ace-builds/src-noconflict/theme-chrome'
import 'ace-builds/src-noconflict/mode-json'
import command_schema from './command_schema.json'
import { JSONEditor } from '@json-editor/json-editor'

window.command_schema = command_schema

const snakeToCamel = (s) => s.replace(/(_\w)/g, (k) => k[1].toUpperCase())

const flattenObject = (obj, prefix = '') =>
  Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + '.' : ''
    if (typeof obj[k] === 'object') Object.assign(acc, flattenObject(obj[k], pre + k))
    else acc[pre + k] = obj[k]
    return acc
  }, {})

const pythonify = (obj) => {
  if (obj === true) return 'True'
  if (obj === false) return 'False'
  if (obj === undefined) return 'None'
  if (obj === null) return 'None'
  if (Array.isArray(obj)) {
    return (
      '[' +
      Object.keys(obj)
        .map((i) => {
          return pythonify(obj[i])
        })
        .join(', ') +
      ']'
    )
  }
  if (typeof obj === 'object') {
    return (
      '{' +
      Object.keys(obj)
        .map((key) => {
          return `"${key}": ${pythonify(obj[key])}`
        })
        .join(', ') +
      '}'
    )
  }
  return JSON.stringify(obj)
}

window.pythonify = pythonify

function deepen(obj) {
  const result = {}

  // For each object path (property key) in the object
  for (const objectPath in obj) {
    // Split path into component parts
    const parts = objectPath.split('.')

    // Create sub-objects along path as needed
    let target = result
    while (parts.length > 1) {
      const part = parts.shift()
      target = target[part] = target[part] || {}
    }

    // Set value at end of path
    target[parts[0]] = obj[objectPath]
  }

  return result
}

export default {
  data: function () {
    return {
      tx: [],
      query: [],
      command: '',
      command_kwargs: '',
      inflight: false,
      data: '{}',
      editorData: {},
      error: '',
      response: '',
      fee: "2000",
      showFee: false,
    }
  },
  watch: {
    command: function (val, oldVal) {
      console.log('watch command:', val, oldVal)
      const query = { ...this.$route.query, command: val }
      this.$router.replace({ query })
      this.setupEditor()
      this.setupResponseEditor()
    },
    data: function (val, oldVal) {
      console.log('watch data:', val, oldVal)
      try {
        if (JSON.stringify(JSON.parse(val)) !== JSON.stringify(JSON.parse(oldVal))) {
          const s = JSON.stringify(JSON.parse(val), null, 2)
          const obj = JSON.parse(val)
          const query = { ...this.$route.query, data: JSON.stringify(obj) }
          this.data = s
          this.$router.replace({ query })
          var deepData = { ...obj.value, ...obj.query, ...obj.params }
          deepData = deepen(deepData)
          if (this.editor) this.editor.setValue(deepData)
        }
        this.error = null
      } catch (e) {
        this.error = e
      }
    },
    fee: function (val, oldVal) {
      console.log('watch fee', val, oldVal)
      if (oldVal !== null) {
        this.editorChanged()
      }
    },
    response: function (val, oldVal) {
      this.responseEditor.setValue(val)
      this.responseEditor.disable()
    },
  },
  computed: {
    address: function () {
      return this.$store.getters['common/wallet/address']
    },
    buttontxt: function () {
      if (this.tx.includes(this.command)) {
        if (!this.address) {
          return 'Unlock Wallet to Sign Transaction'
        } else {
          return 'Sign Transaction'
        }
      }
      if (this.query.includes(this.command)) {
        return 'Run Query'
      }
      return 'Select Command'
    },
    disabled: function () {
      if (this.inflight || this.error || !this.command) {
        return true
      }
      if (!this.address && this.tx.includes(this.command)) {
        return true
      }
      return false
    },
  },
  methods: {
    editorChanged() {
      console.log('editorChanged', this.data)
      if (command_schema[this.command].service_name === 'Query') {
        this.showFee = false
        var query = JSON.parse(JSON.stringify(this.editor.getValue()))
        var params = {}
        const rules = command_schema[this.command].http_rules
        if (rules) {
          const rule = rules[0]
          for (let i in rule.Params) {
            // Needed because starport g vuex is using json_fieldnames
            const param = rule.Params[i]
            params[rule.Params[i]] = query[param]
            delete query[param]
          }
          query = flattenObject(query)
        }
        this.data = JSON.stringify({ query: query, params: params }, null, 2)
      } else if (command_schema[this.command].service_name === 'Msg') {
        this.showFee = true
        var value = JSON.parse(JSON.stringify(this.editor.getValue()))
        const fee = [{ amount: this.fee, denom: 'dys' }]
        this.data = JSON.stringify({ value: value, fee: fee }, null, 2)
      }
      var data = JSON.parse(JSON.stringify(this.editor.getValue()))
      this.command_kwargs = Object.keys(data)
        .map(function (key, index) {
          return ', ' + key + '=' + pythonify(data[key])
        })
        .join('')
    },
    setupEditor() {
      console.log('setupEditor', self.data)
      const element = document.getElementById('editor')
      if (!element) return
      if (this.editor) {
        this.editor.destroy()
      }

      this.editor = new JSONEditor(element, {
        form_name_root: 'editor',
        schema: command_schema[this.command].request_schema || {},
        disable_collapse: true,
        disable_properties: true,
        disable_edit_json: true,
        show_opt_in: true,
        theme: 'myCustom',
      })
      this.editor.on('change', this.editorChanged)

      window['editor'] = this.editor
      this.inflight = false
    },
    submit: async function (e) {
      e.preventDefault()
	  this.responseEditor.setValue({})
      this.$store
        .dispatch(this.command, JSON.parse(this.data))
        .then((res) => (this.response = res))
        .catch((res) => (this.error = res))
    },
    setupResponseEditor() {
      const element = document.getElementById('responseEditor')
      if (!element) return
      if (this.responseEditor) {
        this.responseEditor.destroy()
      }

      this.responseEditor = new JSONEditor(element, {
        form_name_root: 'responseEditor',
        schema: command_schema[this.command]['resp_schema'] || {},
        disable_collapse: true,
        disable_properties: true,
        disable_edit_json: true,
        show_opt_in: false,
        theme: 'myCustom',
      })
      this.responseEditor.disable()

      window['responseEditor'] = this.responseEditor
    },
  },
  created: async function () {
    console.log('created')
    window.$store = this.$store
  },
  components: {
    VAceEditor,
  },

  mounted: function () {
    console.log('mounted')
    this.tx = Object.keys(this.$store['_actions']).filter((key) => key.match('sendMsg'))
    this.query = Object.keys(this.$store['_actions']).filter((key) => key.match('Query'))
    this.command = this.$route.query.command
    const data = JSON.parse(this.$route.query.data || '{}')
    const s = JSON.stringify(data, null, 2)
    if (data.fee !== undefined) {
      for (const fee of data.fee) {
        console.log('fee', fee)
        if (fee.denom === 'dys') {
          this.fee = fee.amount
        }
      }
    }

    this.data = s
    this.setupEditor()
    this.setupResponseEditor()
  },
}
</script>
