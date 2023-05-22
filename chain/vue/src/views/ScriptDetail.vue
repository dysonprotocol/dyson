<style scoped>
pre {
  white-space: pre-wrap;
}
.main-content {
  padding-bottom: 10rem;
}
</style>
<style>
.grid {
  display: grid;
  grid-template-columns: 1fr 10px 1fr;
}

.gutter-col {
  grid-row: 1/-1;
  cursor: col-resize;
}

.gutter-col:hover {
  background-color: #7bff6d33;
}

.gutter-col-1 {
  grid-column: 2;
}
</style>

<template>
  <div class="container-fluid main-content">
    <div class="row mb-3">
      <div id="" class="col">
        <h2 v-if="scriptAddress == address">My Script</h2>
        <h2 v-else>
          Script:
          {{ scriptAddress }}
        </h2>
        <a
          target="blank"
          class="btn btn-primary btn-lg"
          :href="'https://' + scriptAddress.split('.')[0] + '.' + clearDomain"
        >
          View dwapp ↗
        </a>
      </div>
    </div>
    <div class="grid">
      <div id="schemas" class="">
        <div v-if="schemas && schemas.error">Error: {{ schemas.error }}</div>
        <div v-for="item in schemas" v-bind:key="item.function">
          <FunctionDetail
            v-if="item.schema"
            v-bind:schema="item.schema"
            v-bind:name="item.function"
            v-bind:scriptAddress="this.scriptAddress"
          />
          <div v-if="item.error" class="card mb-5">
            <div class="card-body">
              <h3>{{ item.function }}</h3>
              <pre>Error: {{ item.error }}</pre>
            </div>
          </div>
        </div>
        <ExtraLines
          v-if="this.address && this.address === this.scriptAddress"
          v-bind:scriptAddress="this.scriptAddress"
        ></ExtraLines>
      </div>
      <div class="gutter-col gutter-col-1"></div>

      <div id="code" class="">
        <div class="mb-3">
          <VAceEditor
            @init="initAceEditor"
            v-model:value="code"
            :lang="lang"
            :theme="aceTheme"
            :min-lines="30"
            :max-lines="500"
            :readonly="disabled"
            :key="aceTheme"
            :options="options"
          />
        </div>
        <div class="alert alert-light sticky-bottom" role="alert">
          <button
            v-if="address == scriptAddress"
            @click="save"
            :disabled="disabled || !unsavedChanges"
            class="btn-primary btn btn-sm float-right"
          >
            Save now...
            <span
              v-if="inFlight"
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
          </button>
          <input
            :id="scriptAddress + 'pythonLang'"
            type="radio"
            class="btn-check"
            v-model="lang"
            value="python"
          />
          <label
            class="btn btn-outline-secondary btn-sm"
            :for="scriptAddress + 'pythonLang'"
          >
            Python
          </label>

          <input
            :id="scriptAddress + 'htmlLang'"
            type="radio"
            class="btn-check"
            v-model="lang"
            value="html"
          />
          <label
            class="btn btn-outline-secondary btn-sm"
            :for="scriptAddress + 'htmlLang'"
            >HTML</label
          >
          <button
            v-if="lang == 'html' && address == scriptAddress"
            type="button"
            class="btn btn-link btn-sm"
            @click="pretty"
          >
            {}
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="position-fixed top-0 end-0 p-3" style="z-index: 3000">
    <div
      v-if="error"
      class="toast show"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-header">
        <strong class="me-auto">Error</strong>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
          @click="error = null"
        ></button>
      </div>
      <div class="toast-body text-danger">
        {{ error }}
      </div>
    </div>
    <div
      v-if="txResult"
      class="toast show"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-header">
        <strong class="me-auto">Success</strong>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
          @click="txResult = null"
        ></button>
      </div>
      <div class="toast-body text-success">
        TX Hash: {{ txResult.transactionHash }}
      </div>
    </div>
  </div>
</template>

<script>
import FunctionDetail from './FunctionDetail.vue'
import ExtraLines from './ExtraLines.vue'
import { VAceEditor } from 'vue3-ace-editor'
import 'ace-builds/src-noconflict/theme-chrome'
import 'ace-builds/src-noconflict/theme-vibrant_ink'
import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/src-noconflict/mode-html'
import { html_beautify } from 'js-beautify'
import Split from 'split-grid'

/*
let colorMode = ref(localStorage.getItem("colorMode") || "light");
let colorModeChangeCallback = (event) => {
  console.log("colorModeChanged", event);
  colorMode.value = event.detail.colorMode;
};
onMounted(() => {
  window.addEventListener("colorModeChanged", colorModeChangeCallback);
});

onUnmounted(() => {
  window.removeEventListener("colorModeChanged", colorModeChangeCallback);
});
*/

const htmlPrettyOptions = {
  indent_size: '2',
  indent_char: ' ',
  max_preserve_newlines: '5',
  preserve_newlines: true,
  keep_array_indentation: false,
  break_chained_methods: true,
  indent_scripts: 'normal',
  brace_style: 'collapse',
  space_before_conditional: false,
  unescape_strings: false,
  jslint_happy: true,
  end_with_newline: false,
  wrap_line_length: '0',
  indent_inner_html: true,
  comma_first: false,
  e4x: false,
  indent_empty_lines: false,
}

export default {
  name: 'ScriptDetail',
  props: ['scriptAddress'],
  data: function () {
    return {
      inFlight: false,
      txResult: null,
      editedCode: null,
      error: null,
      gas: 200000,
      clearDomain: import.meta.env.VITE_CLEAR_DOMAIN,
      colorMode: localStorage.getItem('colorMode'),
      lang: 'python',
      aceeditor: null,
    }
  },
  components: {
    FunctionDetail,
    ExtraLines,
    VAceEditor,
  },
  watch: {
    $route(to, from) {
      this.update()
    },
  },
  methods: {
    pretty() {
      let code = this.aceeditor.getSelectedText()
      let range = this.aceeditor.getSelectionRange()
      try {
        code = html_beautify(code, htmlPrettyOptions)
        this.aceeditor.session.replace(range, code)
      } catch (e) {
        console.error(e)
      }
    },
    initAceEditor(editor) {
      window.aceeditor = editor
      this.aceeditor = editor
    },
    colorModeChangeCallback(event) {
      this.colorMode = event.detail.colorMode
    },
    async save(e) {
      this.inFlight = true
      this.txResult = null
      this.error = null
      const value = {
        creator: this.address,
        code: this.code,
      }
      try {
        this.txResult = await this.$store.dispatch(
          'dyson/sendMsgUpdateScript',
          {
            value: value,
            fee: [
              {
                amount: String(Math.ceil(this.gas * 0.001)),
                denom: 'dys',
              },
            ],
            gas: String(Math.ceil(this.gas)),
          }
        )
        this.inFlight = false
        if (this.txResult.rawLog.endsWith('out of gas')) {
          this.gas = this.txResult.gasUsed * 2
          this.save(e)
          return
        } else {
          this.gas = this.txResult.gasUsed * 1.2
        }
        JSON.parse(this.txResult.rawLog)

        this.update()
      } catch (e) {
        if (e instanceof SyntaxError) {
        } else {
          this.error = e
        }
        console.error(e)
      } finally {
        this.inFlight = false
      }
    },
    async update() {
      this.$store
        .dispatch('dyson/QueryScript', {
          query: { index: this.scriptAddress },
          options: { subscribe: false, all: false },
        })
        .then(() => {
          this.editedCode = null
        })
      this.$store.dispatch('dyson/QuerySchema', {
        query: { index: this.scriptAddress },
        options: { subscribe: false, all: false },
      })
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
    options: function () {
      if (this.lang == 'python') {
        return {
          useSoftTabs: true,
          tabSize: 4,
          navigateWithinSoftTabs: false,
        }
      } else {
        return {
          useSoftTabs: true,
          tabSize: 2,
          navigateWithinSoftTabs: true,
        }
      }
    },
    scriptWSGILink: function () {
      let chainId = this.$store.getters['common/env/chainId']
    },
    txSuccess: function () {
      return this.txResult.rawLog.includes('UpdateScript')
    },
    address: function () {
      return this.$store.getters['common/wallet/address']
    },
    disabled: function () {
      return (
        this.inFlight || !this.address || this.address != this.scriptAddress
      )
    },
    unsavedChanges: function () {
      return this.address && (this.script?.code || '') != this.code
    },
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
    schemas: function () {
      const result = this.$store.getters['dyson/getSchema']({
        params: {},
        query: { index: this.scriptAddress },
      })

      const schemas = result.schema ? JSON.parse(result.schema) : []
      return schemas.filter((s) => {
        return (
          this.scriptAddress == this.address ||
          (s.function != 'app' && !(s.function || '').startsWith('_'))
        )
      })
    },
    script: function () {
      const result = this.$store.getters['dyson/getScript']({
        params: {},
        query: { index: this.scriptAddress },
      })
      return result ? result.script : {}
    },
  },
  created: async function () {
    this.update()
  },
  mounted: function () {
    window.addEventListener('colorModeChanged', this.colorModeChangeCallback)
    var sizes = localStorage.getItem('split-sizes') || '1fr 10px 1fr'
    console.log('mounted', sizes)
    document.querySelector('.grid').style['grid-template-columns'] = sizes

    Split({
      columnGutters: [
        {
          track: 1,
          element: document.querySelector('.gutter-col-1'),
        },
      ],
      onDragEnd: function () {
        let newSizes =
          document.querySelector('.grid').style['grid-template-columns']
        localStorage.setItem('split-sizes', newSizes)
        console.log('onDragEnd', newSizes)
      },
    })
  },
  unmounted: function () {
    window.removeEventListener('colorModeChanged', this.colorModeChangeCallback)
  },
}
</script>
