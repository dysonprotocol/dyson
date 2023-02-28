<style scoped>
pre {
  white-space: pre-wrap;
}
</style>
<style>
h3 {
  /* Wrap form headings*/
  white-space: initial;
}
</style>
<template>
  <div class="container-fluid">
    <div class="row mb-3">
      <div class="col-lg">
        <div class="card">
          <h4 class="card-header">Step 1: Select a command</h4>
          <div class="card-body">
            <p class="">
              The Dyson Dashboard Commands interface allows you to access the
              chain from the browser. Make requests and sign transactions all
              without opening the terminal.
            </p>
            <p>
              <strong v-if="command" class="">
                Selected Command <code>{{ command }}</code>
              </strong>
            </p>
            <span
              v-for="(value, name) in groupedCommands"
              v-bind:key="name"
              class="dropdown"
            >
              <button
                class="btn btn-secondary dropdown-toggle mb-2 mr-1"
                type="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                {{ name }}
              </button>
              <div class="dropdown-menu">
                <h6 v-if="value.Query" class="dropdown-header">Queries</h6>
                <router-link
                  :to="{ query: { command: c.full_command } }"
                  v-for="c in value.Query"
                  v-bind:key="c.name"
                  class="dropdown-item"
                  :class="{
                    active: command === c.full_command,
                  }"
                >
                  {{ c.name }}
                </router-link>
                <div
                  v-if="value.Query && value.Msg"
                  class="dropdown-divider"
                ></div>
                <h6 v-if="value.Msg" class="dropdown-header">Transactions</h6>
                <router-link
                  :to="{ query: { command: c.full_command } }"
                  v-for="c in value.Msg"
                  v-bind:key="c.name"
                  class="dropdown-item"
                >
                  {{ c.name }}
                </router-link>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <div class="card mb-4">
          <h4 class="card-header">Step 2: Run the command</h4>
          <div class="card-body">
            <p class="">
              Here you can customize your request with any info and see the
              response.
            </p>
            <div id="editor"></div>
            <form v-on:submit="submit" class="mb-3">
              <div class="form-group">
                <div class="row mb-3" v-if="showFee">
                  <div class="col">
                    <label for="exampleFormControlTextarea1" class="form-label"
                      >Gas</label
                    >
                    <input class="form-control" v-model="gas" />
                  </div>
                  <div class="col">
                    <label for="exampleFormControlTextarea1" class="form-label"
                      >Fee</label
                    >
                    <div class="input-group">
                      <input class="form-control" v-model="fee" />
                      <div class="input-group-append">
                        <div class="input-group-text">dys</div>
                      </div>
                    </div>
                  </div>
                </div>
                <a class="btn btn-link" :href="link">Link</a>
                <div class="d-grid gap-2">
                  <button
                    v-if="inflight"
                    class="btn btn-primary btn-lg gap-2"
                    type="button"
                    disabled
                  >
                    Loading...
                    <span
                      class="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  </button>
                  <button
                    v-else
                    name="action"
                    :disabled="disabled"
                    type="submit"
                    value="run"
                    class="btn btn-primary btn-lg btn-block"
                  >
                    {{ buttontxt }}
                  </button>
                </div>
              </div>
            </form>
            <div v-if="error" class="alert alert-warning">
              {{ error }}
            </div>
            <div id="responseEditor"></div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card mb-4">
          <h4 class="card-header">
            Step 3: Integrate the command in your project
          </h4>
          <div class="list-group list-group-flush">
            <div class="list-group-item">
              <h5>Use it in a DysonScript</h5>
              <p>
                The <code>dys</code> import is a virtual module generated
                automatically by the chain. It is not downloadable or
                installable by pip.
              </p>
              <p>
                Copy this code to the REPL section of your script to query or
                make a transaction.
              </p>
              <VAceEditor
                v-model:value="example"
                lang="python"
                :theme="aceTheme"
                :key="aceTheme"
                :min-lines="10"
                :max-lines="200"
                :readonly="true"
              />
            </div>
            <div class="list-group-item">
              <h5>Plain Javascript Usage</h5>
              <p class="">
                This is the simplest way to read from the REST API.
                <a target="blank" :href="fetchUrl">API Link ↗</a>
              </p>
              <VAceEditor
                v-model:value="fetchExample"
                lang="javascript"
                :theme="aceTheme"
                :key="aceTheme"
                :min-lines="5"
                :max-lines="200"
                :readonly="true"
              />
            </div>
            <div class="list-group-item">
              <h5>DysonLoader Usage</h5>
              <p class="">
                See the
                <a href="https://docs.dysonprotocol.com/"
                  >Dyson Protocol Documentation</a
                >
                for examples how to initialize
                <code>DysonLoader</code> in your distributed web app frontend,
                connect to the wallet, and sign transactions.
              </p>
              <VAceEditor
                v-model:value="vueExample"
                lang="html"
                :theme="aceTheme"
                :key="aceTheme"
                :min-lines="10"
                :max-lines="200"
                :readonly="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import command_schema from './command_schema.json'
import { VAceEditor } from 'vue3-ace-editor'
import { html_beautify } from 'js-beautify'

import 'ace-builds/src-noconflict/theme-vibrant_ink'
import 'ace-builds/src-noconflict/theme-chrome'
import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/src-noconflict/mode-html'

import { useStore } from 'vuex'
import { debounce, set, get } from 'lodash'
import lodash from 'lodash'
import { JSONEditor } from '@json-editor/json-editor'
//import dottie from "dottie";

//window.dottie = dottie
window.JSONEditor = JSONEditor

const htmlPrettyOptions = {
  "indent_size": "2",
  "indent_char": " ",
  "max_preserve_newlines": "5",
  "preserve_newlines": true,
  "keep_array_indentation": false,
  "break_chained_methods": true,
  "indent_scripts": "normal",
  "brace_style": "collapse",
  "space_before_conditional": false,
  "unescape_strings": false,
  "jslint_happy": true,
  "end_with_newline": false,
  "wrap_line_length": "0",
  "indent_inner_html": false,
  "comma_first": false,
  "e4x": false,
  "indent_empty_lines": false
}
// Dyson Python scripts need different struction than the Dyson Loader for some types
// This is a regisry of types, paths

let pythonScriptTypeReplacements = {}
let dysonLoaderTypeReplacements = {}

/// ProtoAny editor
class AnyEditor extends JSONEditor.defaults.editors.object {
  async load() {}

  unregister() {
    super.unregister()
    if (this.path) {
      let path = this.path.split('.').slice(1).join('.')
      delete pythonScriptTypeReplacements[path]
      delete dysonLoaderTypeReplacements[path]
    }
  }
  register() {
    super.register()
    let path = this.path.split('.').slice(1).join('.')
    pythonScriptTypeReplacements[path] = 'protoany'
    dysonLoaderTypeReplacements[path] = 'protoany'

    const updateProtoAnyValue = debounce((path) => {
      const command = 'dyson/QueryEncodeProtoAny'
      const data = {
        query: {
          type_url: this.editors?.type_url.getValue(),
          json_value:
            this.editors.json_value?.getValue() ||
            JSON.stringify(this.editors.object_value?.getValue()),
        },
        params: {},
      }
      $store.dispatch(command, data).then(
        (data) => {
          this.editors.value.setValue(data.value)
        },
        (er) => {
          editor.validation_results = [
            {
              path: this.editors.value.path,
              property: 'test',
              message: er,
            },
          ]
          this.editors.value.showValidationErrors(editor.validation_results)
        }
      )
    }, 1000)

    editor.watch(this.editors.type_url.path, () => {
      this.editors.value.setValue('')
      updateProtoAnyValue.bind(this, this.editors.type_url.path)()
    })
    if (this.editors.object_value) {
      editor.watch(this.editors.object_value.path, () => {
        this.editors.value.setValue('')
        updateProtoAnyValue.bind(this, this.editors.object_value.path)()
      })
    }
    if (this.editors.json_value) {
      editor.watch(
        this.editors.json_value.path,
        updateProtoAnyValue.bind(this, this.editors.json_value.path)
      )
    }
  }
  getValue() {
    const val = super.getValue()
    //console.log("AnyEditor getValue", val, this);
    return val
  }
}

JSONEditor.defaults.editors['any'] = AnyEditor

class BetterDatetimeEditor extends JSONEditor.defaults.editors.datetime {
  register() {
    super.register()
    //console.log("BetterDatetimeEditor register", this);
    pythonScriptTypeReplacements[this.path.split('.').slice(1).join('.')] =
      'date'
    dysonLoaderTypeReplacements[this.path.split('.').slice(1).join('.')] =
      'date'
  }
  unregister() {
    super.unregister()
    if (this.path) {
      let path = this.path.split('.').slice(1).join('.')
      delete pythonScriptTypeReplacements[path]
      delete dysonLoaderTypeReplacements[path]
    }
  }
  getValue() {
    const val = super.getValue()
    if (!val) return val
    return new Date(val).toISOString()
  }
}

JSONEditor.defaults.editors['date-time'] = BetterDatetimeEditor
//JSONEditor.defaults.editors["date-time"] = JSONEditor.defaults.editors["datetime-local"];

JSONEditor.defaults.resolvers.unshift((schema) => {
  if (
    schema.type === 'object' &&
    schema.properties?.type_url &&
    schema.properties?.value
  ) {
    return 'any'
  }
  if (schema.format === 'date-time') {
    return 'date-time'
  }
  // If no valid editor is returned, the next resolver function will be used
})

const groupBy = (keys) => (array) =>
  array.reduce((objectsByKeyValue, obj) => {
    // Instead of creating a unique key for each grouped by values, we are now traversing (and building)
    // the whole object structure for every array value:
    keys.reduce((builder, key, index) => {
      if (index !== keys.length - 1) {
        // Building the nested grouped by structure
        builder[obj[key]] = builder[obj[key]] || {}
      } else {
        // Appending the current object at the leaf node
        builder[obj[key]] = (builder[obj[key]] || []).concat(obj)
      }
      return builder[obj[key]]
    }, objectsByKeyValue)

    return objectsByKeyValue
  }, {})

for (var key in command_schema) {
  command_schema[key].full_command = key
}
window.command_schema = command_schema

//window.groupedCommands = window.command_schema = command_schema;

const snakeToCamel = (s) => s.replace(/(_\w)/g, (k) => k[1].toUpperCase())

const flattenObject = (obj, prefix = '') =>
  Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + '.' : ''
    if (typeof obj[k] === 'object')
      Object.assign(acc, flattenObject(obj[k], pre + k))
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
window.ace.config.set('basePath', '.')
import workerJsonUrl from 'ace-builds/src-noconflict/worker-json?url' // For vite

ace.config.setModuleUrl('ace/mode/json_worker', workerJsonUrl)

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
      colorMode: localStorage.getItem('colorMode'),
      query: [],
      rest_path: '',
      inflight: false,
      data: {},
      editor: null,
      error: '',
      response: '',
      command: '',
      fee: '123',
      gas: '10000',
      showFee: false,
      search: '',
      link: '',
      fetchUrl: '',
      inFlight: false,
      searchParams: {},
      fetchApi: '',
      queryExampleAddress: '',
      queryFetchExampleResult: '',
      queryExampleScriptError: '',
      queryExampleScriptException: '',
      queryExampleScriptResult: '',
    }
  },
  watch: {
    colorMode: function (newVal, oldVal) {},
    data: function (val, oldVal) {},
    address: function (val, oldVal) {
      this.queryExampleAddress = val
    },
    '$route.query': {
      handler: function (val, oldVal) {
        //console.log("watch command:", val, oldVal);
        this.queryExampleAddress = this.queryExampleAddress || this.address
        this.command = ''
        if (command_schema[val.command]) {
          this.command = val.command
        }
        this.setupEditor()
        this.setupResponseEditor()
        this.response = ''
      },
      deep: true,
      immediate: true,
    },
    gas: function (val, oldVal) {
      //console.log("watch gas", val, oldVal);
      this.fee = String(Math.ceil(val * 0.0001))
      if (oldVal !== null) {
        this.editorChanged()
      }
    },
    fee: function (val, oldVal) {
      //console.log("watch gas", val, oldVal);
      this.gas = String(val * 10000)
      if (oldVal !== null) {
        this.editorChanged()
      }
    },
    response: function (val, oldVal) {
      this.responseEditor.setValue(JSON.stringify(val, null, 2))
      this.responseEditor.disable()
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
    fetchExample: function () {
      if (!this.command) {
        return '// Select a command'
      }
      const path = command_schema[this.command]?.rest_path || ''
      if (!path) {
        this.fetchUrl = ''
        return `// Cannot make \`${this.command}\` requests with the REST API`
      }
      const interpolateUrl = (string, values) =>
        string.replace(/{(.*?)}/g, (match, offset) => values[offset] || match)

      let api = this.$store.getters['common/env/apiCosmos']
      const data = this.data
      api += interpolateUrl(
        command_schema[this.command]?.rest_path || '',
        data.params || {}
      )
      let searchParams = ''
      if (Object.keys(data.query || {}).length) {
        searchParams = `+ '?' + new URLSearchParams(${JSON.stringify(
          data.query,
          null,
          2
        )})`
      }
      this.fetchUrl = api + '?' + new URLSearchParams(data.query)
      return `response = await fetch('${api}'${searchParams})
result = await response.json()`
    },
    restUrl: function () {
      const interpolateUrl = (string, values) =>
        string.replace(/{(.*?)}/g, (match, offset) => values[offset] || match)

      let api = this.$store.getters['common/env/apiCosmos']
      const data = this.data
      api += interpolateUrl(path, data.params || {})
      const qs = new URLSearchParams(data.query).toString()

      if (qs) {
        api += '?' + qs
      }
      return api
    },
    vueExample: function () {
      let data = JSON.parse(JSON.stringify(this.data))
      let processedTypes = ''
      let placeholder
      if (data.value) {
        Object.keys(pythonScriptTypeReplacements)
          .sort()
          .reverse()
          .forEach(function (path) {
            let replaceEditor = editor.getEditor('editor.' + path)
            if (replaceEditor) {
              let new_value = JSON.parse(
                JSON.stringify(replaceEditor.getValue())
              )
              let new_var_name = path.split('.').join('_')
              placeholder = 'XXX___' + new_var_name + '___XXX'
              if (dysonLoaderTypeReplacements[path] == 'protoany') {
                //delete new_value.object_value;
                //delete new_value.json_value;
                processedTypes += `// See command: dyson/QueryEncodeProtoAny
                var ${new_var_name} = await dysonVueStore.dispatch("dyson/QueryEncodeProtoAny", {"query": {"type_url": ${JSON.stringify(
                  new_value?.type_url
                )},"json_value": JSON.stringify(${
                  new_value?.json_value ||
                  JSON.stringify(new_value?.object_value)
                })}})`
              } else if (dysonLoaderTypeReplacements[path] == 'date') {
                processedTypes += `let ${new_var_name}=new Date(${JSON.stringify(
                  new_value,
                  null,
                  2
                )}) // ${dysonLoaderTypeReplacements[path]}\n\n`
              } else {
                processedTypes += `let ${new_var_name}= ${JSON.stringify(
                  new_value,
                  null,
                  2
                )} // ${dysonLoaderTypeReplacements[path]}\n\n`
              }
              set(data.value, path, placeholder)
            }
          })
      }
      if (!this.command) {
        return `<!-- Select a command -->`
      }
      let code = `
      <html>
      <title>Demo ${this.command}</title>
      <script src="/_/dyson.js"><\/script>
      <script type="module">
// initialize Dyson
await DysonLoader()

// Connect to Keplr to sign transactions
let account = await dysonUseKeplr()
${processedTypes}
let command = "${this.command}"
let data = ${JSON.stringify(data, null, 2)
        .replaceAll('"XXX___', '')
        .replaceAll('___XXX"', '')}
try {
let result = await dysonVueStore.dispatch(command, data)
document.getElementById("output").textContent = JSON.stringify(result, null, 2);
} catch (e) {
alert(e.toString())
}

<\/script>
<h1>Demo ${this.command}</h1>
<pre id="output">
`
      try {
        return html_beautify(code, htmlPrettyOptions)
      } catch (e) {
        console.error(e)
        return code
      }
    },
    example: function () {
      if (!this.command) {
        return '# Select a command'
      }
      let processedTypes = ''
      let command_kwargs = ''
      let data = JSON.parse(
        JSON.stringify(
          deepen({
            ...this.data.value,
            ...this.data.params,
            ...this.data.query,
          })
        )
      )
      let placeholder
      Object.keys(pythonScriptTypeReplacements)
        .sort()
        .reverse()
        .forEach(function (path) {
          let replaceEditor = editor.getEditor('editor.' + path)
          if (replaceEditor) {
            let new_value = JSON.parse(JSON.stringify(replaceEditor.getValue()))
            let new_var_name = path.split('.').join('_')
            placeholder = 'XXX___' + new_var_name + '___XXX'
            if (pythonScriptTypeReplacements[path] == 'protoany') {
              if (new_value?.object_value) {
                let type = new_value.type_url
                new_value = new_value.object_value
                new_value['@type'] = type
                new_value = JSON.stringify(new_value, null, 2)
                processedTypes += `${new_var_name}=${new_value} # ${pythonScriptTypeReplacements[path]}\n\n`
              } else {
                try {
                  let url = new_value.type_url
                  new_value = JSON.parse(new_value.json_value || '{}')
                  new_value['@type'] = url
                } catch {}
                processedTypes += `${new_var_name}=${JSON.stringify(
                  new_value,
                  null,
                  2
                )} # ${pythonScriptTypeReplacements[path]}\n\n`
              }
            } else {
              processedTypes += `${new_var_name}=${JSON.stringify(
                new_value
              )} # ${pythonScriptTypeReplacements[path]}\n\n`
            }
            //replaceEditor.setValue(placeholder);
            set(data, path, placeholder)
          }
        })

      command_kwargs = Object.keys(data)
        .map(function (key, index) {
          return ',\n    ' + key + '=' + pythonify(data[key])
        })
        .join('')

      command_kwargs = command_kwargs.replaceAll('"XXX___', '')
      command_kwargs = command_kwargs.replaceAll('___XXX"', '')
      return `from dys import _chain

${processedTypes}
_chain(
    "${this.command || 'select a command'}"${command_kwargs}
)`
    },
    groupedCommands: function () {
      return groupBy(['module_name', 'service_name'])(
        Object.values(this.filted_command_schema)
      )
    },
    filted_command_schema: function () {
      return Object.keys(window.command_schema)
        .filter((c) => c.toLowerCase().includes(this.search.toLowerCase()))
        .reduce((obj, key) => {
          obj[key] = window.command_schema[key]
          return obj
        }, {})
    },
    address: function () {
      return this.$store.getters['common/wallet/address']
    },
    buttontxt: function () {
      if (this.tx.includes(this.command)) {
        if (!this.address) {
          return 'Connect Wallet to Sign Transaction'
        } else {
          return 'Sign Transaction'
        }
      }
      if (this.query.includes(this.command)) {
        return 'Run Query'
      }
      return 'Select a command'
    },
    disabled: function () {
      if (this.inflight || !this.command) {
        return true
      }
      if (!this.address && this.tx.includes(this.command)) {
        return true
      }
      return false
    },
  },
  methods: {
    colorModeChangeCallback(event) {
      console.log('colorModeChanged ExtraLines', event)
      if (event) {
        this.colorMode = event.detail.colorMode
      }
      for (let ed in this.editor?.editors) {
        this.editor.editors[ed].ace_editor_instance?.setTheme(
          'ace/theme/' + this.aceTheme
        )
      }
      for (let ed in this.responseEditor?.editors) {
        this.responseEditor.editors[ed].ace_editor_instance?.setTheme(
          'ace/theme/' + this.aceTheme
        )
      }
      // loop over ace editors and update the theme
    },
    queryFetchExample: async function () {
      this.inFlight = true
      this.queryFetchExampleResult = '// loading...'
      const response = await fetch(this.fetchUrl)
      this.queryFetchExampleResult = JSON.stringify(
        await response.json(),
        null,
        2
      )
      this.inFlight = false
    },
    queryExampleScript: async function () {
      this.queryExampleScriptResult = '// loading...'
      this.queryExampleScriptError = ''
      this.queryExampleScriptException = ''
      this.inFlight = true

      const command = 'dyson/QueryQueryScript'
      const data = {
        query: {
          creator: this.queryExampleAddress,
          address: this.queryExampleAddress,
          extra_lines: this.example,
          function_name: '',
          args: '',
          kwargs: '',
          coins: '',
        },
        params: {},
      }

      const resp = (await dysonVueStore.dispatch(command, data)).response
      try {
        let r = JSON.parse(resp)
        this.queryExampleScriptResult = r.result
        this.queryExampleScriptException = r.exception
      } catch {
        this.queryExampleScriptResult = ''
        this.queryExampleScriptException = ''
        this.queryExampleScriptError = resp
      }
      this.inFlight = false
    },
    updateQuery: function () {
      var searchParams = new URLSearchParams(window.location.search)
      searchParams.set('data', JSON.stringify(this.editor.getValue()))
      searchParams.set('gas', this.gas)
      searchParams.set('fee', this.fee)
      var newQuery = window.location.pathname + '?' + searchParams.toString()
      history.pushState({}, '', newQuery)
    },
    updateEditorFromQuery() {
      var val = this.$route.query
      //console.log("watch query:", val);
      if (this.editor) {
        this.editor.setValue(JSON.parse(val['data'] || '{}'))
      }
      this.gas = val.gas || '0'
      this.fee = val.fee || '0'
    },
    updateLink: function () {
      var searchParams = new URLSearchParams(window.location.search)
      searchParams.set('data', JSON.stringify(this.editor.getValue()))
      searchParams.set('gas', this.gas)
      searchParams.set('fee', this.fee)
      this.link = window.location.pathname + '?' + searchParams.toString()
      //console.log("link", this.link);
    },
    editorChanged() {
      this.updateLink()
      this.error = ''
      if (this.command && command_schema[this.command]) {
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
          this.data = { query: query, params: params }
        } else if (command_schema[this.command].service_name === 'Msg') {
          this.showFee = true
          var value = JSON.parse(JSON.stringify(this.editor.getValue()))
          const fee = [{ amount: this.fee, denom: 'dys' }]
          this.data = { value: value, fee: fee, gas: this.gas }
        }
      }
      //console.log("editorChanged", this.data);
    },
    setupEditor() {
      //console.log("setupEditor", self.data, this.command);

      this.queryExampleScriptResult = ''
      this.queryExampleScriptException = ''
      pythonScriptTypeReplacements = {}
      dysonLoaderTypeReplacements = {}
      const element = document.getElementById('editor')
      if (!element) return
      if (this.editor) {
        this.editor.destroy()
      }

      if (command_schema[this.command]) {
        this.editor = new JSONEditor(element, {
          form_name_root: 'editor',
          schema: command_schema[this.command]?.request_schema || {},
          disable_collapse: true,
          disable_properties: true,
          disable_edit_json: true,
          keep_oneof_values: false,
          show_opt_in: false,
          required_by_default: true,
          remove_empty_properties: false,
          input_width: '100%',
          theme: 'bootstrap5',
          show_errors: 'always',
          //object_layout: "table",
        })
        this.editor.theme.options.object_background = ''
        this.editor.on('change', this.editorChanged)
        this.editor.on('ready', () => {
          this.updateEditorFromQuery()
        })

        window['editor'] = this.editor
        this.inflight = false
      }
    },
    submit: async function (e) {
      this.editorChanged()
      this.updateQuery()
      e.preventDefault()
      this.responseEditor.setValue('{}')
      this.error = null
      this.response = '// loading...'
      this.inflight = true
      let data = JSON.parse(JSON.stringify(this.data))
      if (data.value) {
        Object.keys(pythonScriptTypeReplacements)
          .sort()
          .reverse()
          .forEach(function (path) {
            let new_value = lodash.cloneDeep(lodash.get(data.value, path))
            if (dysonLoaderTypeReplacements[path] == 'protoany') {
              delete new_value.object_value
              delete new_value.json_value
            } else if (dysonLoaderTypeReplacements[path] == 'date') {
              new_value = new Date(new_value)
            }
            set(data.value, path, new_value)
          })
      }

      this.$store
        .dispatch(this.command, data)
        .then((res) => {
          this.response = res
        })
        .catch((res) => {
          this.error = res
        })
        .finally((res) => {
          this.inflight = false
        })
    },
    setupResponseEditor: function () {
      const element = document.getElementById('responseEditor')
      if (!element) return
      if (this.responseEditor) {
        this.responseEditor.destroy()
      }
      if (command_schema[this.command]) {
        this.responseEditor = new JSONEditor(element, {
          form_name_root: 'responseEditor',
          schema: command_schema[this.command].resp_schema,
          disable_collapse: true,
          disable_properties: true,
          disable_edit_json: false,
          disable_array_add: true,
          disable_array_delete: true,
          disable_array_delete_last_row: true,
          disable_array_reorder: true,
          no_additional_properties: false,
          show_opt_in: false,
          theme: 'bootstrap5',
        })
        this.responseEditor.on('ready', () => {
          this.responseEditor.disable()
        })

        window['responseEditor'] = this.responseEditor
      }
    },
  },
  created: async function () {
    //console.log("created");
    window.$store = this.$store
  },
  components: {
    VAceEditor,
  },

  unmounted: function () {
    window.removeEventListener('colorModeChanged', this.colorModeChangeCallback)
  },
  mounted: function () {
    window.addEventListener('colorModeChanged', this.colorModeChangeCallback)
    JSONEditor.defaults.options.ace = {
      theme: 'ace/theme/' + this.aceTheme,
    }
    //console.log("mounted");
    this.tx = Object.keys(this.$store['_actions']).filter((key) =>
      key.match('sendMsg')
    )
    this.query = Object.keys(this.$store['_actions']).filter((key) =>
      key.match('Query')
    )
    this.command = ''
    if (command_schema[this.$route.query.command]) {
      this.command = this.$route.query.command
    }
    const data = JSON.parse(this.$route.query.data || '{}')
    const s = JSON.stringify(data, null, 2)

    this.data = data
    this.setupEditor()
    this.setupResponseEditor()
  },
}
</script>
