<style scoped>
pre {
  white-space: pre-wrap;
}
</style>

<template>
  <div class="row">
    <div id="schemas" class="col-sm-12 col-md-4">
      <div v-if="schemas && schemas.error">Error: {{ schemas.error }}</div>
      <div v-for="item in schemas" v-bind:key="item.function">
        <FunctionDetail
          v-if="item.schema"
          v-bind:schema="item.schema"
          v-bind:name="item.function"
          v-bind:scriptAddress="this.$route.params.script_address"
        />
        <div v-if="item.error" class="card mb-5">
          <div class="card-body">
            <h3>{{ item.function }}</h3>
            <pre>Error: {{ item.error }}</pre>
          </div>
        </div>
      </div>
    </div>
    <div id="code" class="col">
      <div class="mb-3">
        <VAceEditor
          v-model:value="code"
          lang="python"
          theme="chrome"
          min-lines="30"
          max-lines="500"
          :readonly="disabled"
        />

        <button @click="save" :disabled="disabled" class="sp-button">
          save
          <span
            v-if="inFlight"
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
        </button>
        <span v-if="unsavedChanges" class="m-5" role="alert"
          >unsaved changes</span
        >
      </div>
      <div v-if="error" class="alert alert-warning">
        {{ error }}
      </div>
      <div
        v-if="txResult"
        class="alert"
        :class="{ 'alert-primary': txSuccess, 'alert-warning': !txSuccess }"
      >
        <pre>
TX hash: {{ txResult.transactionHash }}
Height: {{ txResult.height }}
Gas Used: {{ txResult.gasUsed }}
Gas Wanted: {{ txResult.gasWanted }}
Raw Log: {{ txResult.rawLog }}</pre
        >
      </div>
    </div>
  </div>
</template>

<script>
import FunctionDetail from "./FunctionDetail.vue";
import { VAceEditor } from "vue3-ace-editor";
import "ace-builds/src-noconflict/theme-chrome";
import "ace-builds/src-noconflict/mode-python";

export default {
  name: "ScriptDetail",
  data: function () {
    return {
      scriptAddress: null,
      inFlight: false,
      txResult: null,
      editedCode: null,
      error: null,
      gas: 200000,
    };
  },
  components: {
    FunctionDetail,
    VAceEditor,
  },
  methods: {
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
        console.log("txResult", this.txResult);
        if (this.txResult.rawLog.endsWith("out of gas")) {
            console.log("trying again")
            this.gas *= 3
            this.save(e)
            return
        }
        JSON.parse(this.txResult.rawLog);
        this.gas = this.txResult.gasUsed * 1.2;

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
      this.scriptAddress = this.$route.params.script_address;
      this.$store
        .dispatch("dyson/QueryScript", {
          query: { index: this.$route.params.script_address },
          options: { subscribe: false, all: false },
        })
        .then(() => {
          this.editedCode = null;
        });
      this.$store
        .dispatch("dyson/QuerySchema", {
          query: { index: this.$route.params.script_address },
          options: { subscribe: false, all: false },
        })
        .then(console.log);
    },
  },
  computed: {
    txSuccess: function () {
      return this.txResult.rawLog.includes("UpdateScript");
    },
    address: function () {
      return this.$store.getters["common/wallet/address"];
    },
    disabled: function () {
      return this.inFlight || this.address != this.$route.params.script_address;
    },
    unsavedChanges: function () {
      return this.script?.code != this.code;
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
        query: { index: this.$route.params.script_address },
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
        query: { index: this.$route.params.script_address },
      });
      return result ? result.script : {};
    },
  },
  created: async function () {
    this.update();
  },
};
</script>
