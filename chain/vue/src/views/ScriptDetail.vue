<style scoped>
pre {
  white-space: pre-wrap;
}
.main-content {
  padding-bottom: 10rem;
}
</style>

<template>
  <div class="container-fluid main-content">
    <div class="row mb-3">
      <div id="" class="col">
        <div class="">
          Script address:

          <router-link
            :to="{
              name: 'script-detail',
              params: { scriptAddress: scriptAddress },
            }"
            >{{ scriptAddress }}
          </router-link>
          <a
            target="blank"
            class="btn btn-link btn-sm"
            :href="'https://' + scriptAddress + '.' + clearDomain"
          >
            View dwapp ↗
          </a>
        </div>
      </div>
    </div>
    <div class="row">
      <div id="schemas" class="col-md-6 mb-3">
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
      <div id="code" class="col-md-6">
        <div class="mb-3">
          <VAceEditor
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
              v-if="address==scriptAddress"
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
import FunctionDetail from "./FunctionDetail.vue";
import ExtraLines from "./ExtraLines.vue";
import { VAceEditor } from "vue3-ace-editor";
import "ace-builds/src-noconflict/theme-chrome";
import "ace-builds/src-noconflict/theme-vibrant_ink";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-html";

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
export default {
  name: "ScriptDetail",
  props: ["scriptAddress"],
  mounted: function () {
    window.addEventListener("colorModeChanged", this.colorModeChangeCallback);
  },
  unmounted: function () {
    window.removeEventListener(
      "colorModeChanged",
      this.colorModeChangeCallback
    );
  },
  data: function () {
    return {
      inFlight: false,
      txResult: null,
      editedCode: null,
      error: null,
      gas: 200000,
      clearDomain: import.meta.env.VITE_CLEAR_DOMAIN,
      colorMode: localStorage.getItem("colorMode"),
      lang: "python",
    };
  },
  components: {
    FunctionDetail,
    ExtraLines,
    VAceEditor,
  },
  watch: {
    $route(to, from) {
      this.update();
    },
  },
  methods: {
    colorModeChangeCallback(event) {
      console.log("colorModeChanged", event);
      this.colorMode = event.detail.colorMode;
    },
    async save(e) {
      this.inFlight = true;
      this.txResult = null;
      this.error = null;
      const value = {
        creator: this.address,
        code: this.code,
      };
      try {
        this.txResult = await this.$store.dispatch(
          "dyson/sendMsgUpdateScript",
          {
            value: value,
            fee: [
              { amount: String(Math.ceil(this.gas * 0.001)), denom: "dys" },
            ],
            gas: String(Math.ceil(this.gas)),
          }
        );
        this.inFlight = false;
        if (this.txResult.rawLog.endsWith("out of gas")) {
          this.gas = this.txResult.gasUsed * 2;
          this.save(e);
          return;
        } else {
          this.gas = this.txResult.gasUsed * 1.2;
        }
        JSON.parse(this.txResult.rawLog);

        this.update();
      } catch (e) {
        if (e instanceof SyntaxError) {
        } else {
          this.error = e;
        }
        console.error(e);
      } finally {
        this.inFlight = false;
      }
    },
    async update() {
      console.log("query script", this.scriptAddress);
      this.$store
        .dispatch("dyson/QueryScript", {
          query: { index: this.scriptAddress },
          options: { subscribe: false, all: false },
        })
        .then(() => {
          this.editedCode = null;
        });
      this.$store.dispatch("dyson/QuerySchema", {
        query: { index: this.scriptAddress },
        options: { subscribe: false, all: false },
      });
    },
  },
  computed: {
    aceTheme: function () {
      if (this.colorMode == "dark") {
        return "vibrant_ink";
      } else {
        return "chrome";
      }
    },
    options: function () {
      if (this.lang == "python") {
        console.log("python options");
        return { useSoftTabs: true, tabSize: 4, navigateWithinSoftTabs: false };
      } else {
        console.log("html options");
        return { useSoftTabs: true, tabSize: 2, navigateWithinSoftTabs: true };
      }
    },
    scriptWSGILink: function () {
      let chainId = this.$store.getters["common/env/chainId"];
    },
    txSuccess: function () {
      return this.txResult.rawLog.includes("UpdateScript");
    },
    address: function () {
      return this.$store.getters["common/wallet/address"];
    },
    disabled: function () {
      return (
        this.inFlight || !this.address || this.address != this.scriptAddress
      );
    },
    unsavedChanges: function () {
      return this.address && (this.script?.code || "") != this.code;
    },
    code: {
      get() {
        if (this.editedCode === null) {
          return this.script ? this.script.code : "";
        } else {
          return this.editedCode;
        }
      },
      set(newValue) {
        this.editedCode = newValue;
      },
    },
    schemas: function () {
      const result = this.$store.getters["dyson/getSchema"]({
        params: {},
        query: { index: this.scriptAddress },
      });

      const schemas = result.schema ? JSON.parse(result.schema) : [];
      return schemas.filter((s) => {
        return (
          this.scriptAddress == this.address ||
          (s.function != "app" && !(s.function || "").startsWith("_"))
        );
      });
    },
    script: function () {
      const result = this.$store.getters["dyson/getScript"]({
        params: {},
        query: { index: this.scriptAddress },
      });
      return result ? result.script : {};
    },
  },
  created: async function () {
    this.update();
  },
};
</script>
