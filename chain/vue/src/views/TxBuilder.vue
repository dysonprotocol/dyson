<style>
h3 {
  /* Wrap form headings*/
  white-space: initial;
}
</style>
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="card mb-4 mt-3">
          <h4 class="card-header">Step 1: Select a Command</h4>

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
                  :class="{ active: command === c.full_command }"
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
      <div class="col-lg">
        <div class="card mb-4">
          <h4 class="card-header">Step 2: Run command</h4>
          <div class="card-body">
            <p class="">
              Here you can customize your request with any info and see the
              response.
            </p>
            <div id="editor"></div>
            <form v-on:submit="submit" class="">
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
                <button
                  v-if="inflight"
                  class="btn btn-primary btn-lg btn-block"
                  type="button"
                  disabled
                >
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Loading...
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
            </form>

            <div v-if="error" class="alert alert-warning">{{ error }}</div>
            <div id="responseEditor"></div>
          </div>
        </div>
      </div>
      <div class="col-lg">
        <div class="card mb-4">
          <h4 class="card-header">
            Step 3: Integrate in your distributed web app
          </h4>
          <div class="list-group list-group-flush">
            <div class="list-group-item">
              <h5>Use it in a Script</h5>
              <p class="">
                Copy this into your function and use it in a script.
              </p>
              <VAceEditor
                v-model:value="example"
                lang="python"
                theme="chrome"
                :min-lines="10"
                :max-lines="200"
                readonly="true"
              />
            </div>
            <div class="list-group-item">
              <h5>Plain Javascript Usage</h5>
              <p class="">This is the simplest way to read from the API.</p>
              <VAceEditor
                v-model:value="fetchExample"
                lang="javascript"
                theme="chrome"
                :min-lines="5"
                :max-lines="200"
                readonly="true"
              />
            </div>
            <div class="list-group-item">
              <h5>DysonLoader Usage</h5>
              <p class="">
                See the
                <a href="https://docs.dysonprotocol.com/"
                  >Dyson Protocol Documentation</a
                >
                for examples how to initialize <code>DysonLoader</code> in your
                distributed web app frontend, connect to the wallet, and sign
                transactions.
              </p>
              <VAceEditor
                v-model:value="vueExample"
                lang="javascript"
                theme="chrome"
                :min-lines="10"
                :max-lines="200"
                readonly="true"
              />
            </div>
          </div>
        </div>
        <div class="card mb-4">
          <h4 class="card-header">Step 4: ???</h4>
        </div>
        <div class="card mb-4">
          <h4 class="card-header">Step 5: Profit</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import command_schema from "./command_schema.json";
import { VAceEditor } from "vue3-ace-editor";
import "ace-builds/src-noconflict/theme-chrome";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import { useStore } from "vuex";

console.log("command_schema", command_schema);
import { JSONEditor } from "@json-editor/json-editor";

const groupBy = (keys) => (array) =>
  array.reduce((objectsByKeyValue, obj) => {
    // Instead of creating a unique key for each grouped by values, we are now traversing (and building)
    // the whole object structure for every array value:
    keys.reduce((builder, key, index) => {
      if (index !== keys.length - 1) {
        // Building the nested grouped by structure
        builder[obj[key]] = builder[obj[key]] || {};
      } else {
        // Appending the current object at the leaf node
        builder[obj[key]] = (builder[obj[key]] || []).concat(obj);
      }
      return builder[obj[key]];
    }, objectsByKeyValue);

    return objectsByKeyValue;
  }, {});

for (var key in command_schema) {
  command_schema[key].full_command = key;
}
window.command_schema = command_schema;

//window.groupedCommands = window.command_schema = command_schema;

const snakeToCamel = (s) => s.replace(/(_\w)/g, (k) => k[1].toUpperCase());

const flattenObject = (obj, prefix = "") =>
  Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + "." : "";
    if (typeof obj[k] === "object")
      Object.assign(acc, flattenObject(obj[k], pre + k));
    else acc[pre + k] = obj[k];
    return acc;
  }, {});

const pythonify = (obj) => {
  if (obj === true) return "True";
  if (obj === false) return "False";
  if (obj === undefined) return "None";
  if (obj === null) return "None";
  if (Array.isArray(obj)) {
    return (
      "[" +
      Object.keys(obj)
        .map((i) => {
          return pythonify(obj[i]);
        })
        .join(", ") +
      "]"
    );
  }
  if (typeof obj === "object") {
    return (
      "{" +
      Object.keys(obj)
        .map((key) => {
          return `"${key}": ${pythonify(obj[key])}`;
        })
        .join(", ") +
      "}"
    );
  }
  return JSON.stringify(obj);
};

window.pythonify = pythonify;

function deepen(obj) {
  const result = {};

  // For each object path (property key) in the object
  for (const objectPath in obj) {
    // Split path into component parts
    const parts = objectPath.split(".");

    // Create sub-objects along path as needed
    let target = result;
    while (parts.length > 1) {
      const part = parts.shift();
      target = target[part] = target[part] || {};
    }

    // Set value at end of path
    target[parts[0]] = obj[objectPath];
  }

  return result;
}

export default {
  data: function () {
    return {
      tx: [],
      query: [],
      command_kwargs: "",
      fetchExample: "",
      rest_path: "",
      inflight: false,
      data: "{}",
      editorData: {},
      error: "",
      response: "",
      command: "",
      fee: "123",
      gas: "10000",
      showFee: false,
      search: "",
      link: "",
    };
  },
  watch: {
    "$route.query": {
      handler: function (val, oldVal) {
        console.log("watch command:", val, oldVal);
        //const query = { ...this.$route.query, command: val };
        //this.$router.replace({ query });
        this.command = val.command;
        this.setupEditor();
        this.setupResponseEditor();
        this.response = "";
      },
      deep: true,
      immediate: true,
    },
    old_data: function (val, oldVal) {
      console.log("watch data:", val, oldVal);
      try {
        if (
          JSON.stringify(JSON.parse(val)) !== JSON.stringify(JSON.parse(oldVal))
        ) {
          const s = JSON.stringify(JSON.parse(val), null, 2);
          const obj = JSON.parse(val);
          const query = { ...this.$route.query, data: JSON.stringify(obj) };
          this.data = s;
          this.$router.replace({ query });
          var deepData = { ...obj.value, ...obj.query, ...obj.params };
          deepData = deepen(deepData);
          if (this.editor) this.editor.setValue(deepData);
        }
        this.error = null;
      } catch (e) {
        this.error = e;
      }
    },
    gas: function (val, oldVal) {
      console.log("watch gas", val, oldVal);
      this.fee = String(Math.ceil(val * 0.0001));
      if (oldVal !== null) {
        this.editorChanged();
      }
    },
    fee: function (val, oldVal) {
      console.log("watch gas", val, oldVal);
      this.gas = String(val * 10000);
      if (oldVal !== null) {
        this.editorChanged();
      }
    },
    response: function (val, oldVal) {
      this.responseEditor.setValue(val);
      this.responseEditor.disable();
    },
  },
  computed: {
    fetchExample: function () {
      const path = command_schema[this.command]?.rest_path || "";
      if (!path) {
        return `// Cannot make \`${this.command}\` requests with the REST API`;
      }
      const interpolateUrl = (string, values) =>
        string.replace(/{(.*?)}/g, (match, offset) => values[offset] || match);

      let api = this.$store.getters["common/env/apiCosmos"];
      const data = JSON.parse(this.data);
      api += interpolateUrl(
        command_schema[this.command]?.rest_path || "",
        data.params || {}
      );
      let searchParams = "";
      if (Object.keys(data.query || {}).length) {
        searchParams = `+ '?' + new URLSearchParams(${JSON.stringify(
          data.query,
          null,
          2
        )})`;
      }
      return `response = await fetch('${api}'${searchParams})
await response.json()`;
    },
    restUrl: function () {
      const interpolateUrl = (string, values) =>
        string.replace(/{(.*?)}/g, (match, offset) => values[offset] || match);

      let api = this.$store.getters["common/env/apiCosmos"];
      const data = JSON.parse(this.data);
      api += interpolateUrl(path, data.params || {});
      const qs = new URLSearchParams(data.query).toString();

      if (qs) {
        api += "?" + qs;
      }
      return api;
    },
    vueExample: function () {
      return `/*
This is Experimental!
DysonLoader can save a lot of time if complex integration is needed with the
chain, however consider making normal Javascript requests with the Rest API
if the frontend is read only.
*/

const command = "${this.command || ""}"
const data = ${this.data}
await dysonVueStore.dispatch(command, data)`;
    },
    example: function () {
      return `from dys import _chain

_chain(
    "${this.command || ""}"${this.command_kwargs}
)`;
    },
    groupedCommands: function () {
      return groupBy(["module_name", "service_name"])(
        Object.values(this.filted_command_schema)
      );
    },
    filted_command_schema: function () {
      return Object.keys(window.command_schema)
        .filter((c) => c.toLowerCase().includes(this.search.toLowerCase()))
        .reduce((obj, key) => {
          obj[key] = window.command_schema[key];
          return obj;
        }, {});
    },
    address: function () {
      return this.$store.getters["common/wallet/address"];
    },
    buttontxt: function () {
      if (this.tx.includes(this.command)) {
        if (!this.address) {
          return "Connect Wallet to Sign Transaction";
        } else {
          return "Sign Transaction";
        }
      }
      if (this.query.includes(this.command)) {
        return "Run Query";
      }
      return "Run Query or Transaction";
    },
    disabled: function () {
      if (this.inflight || !this.command) {
        return true;
      }
      if (!this.address && this.tx.includes(this.command)) {
        return true;
      }
      return false;
    },
  },
  methods: {
    updateQuery: function () {
      var searchParams = new URLSearchParams(window.location.search);
      searchParams.set("data", JSON.stringify(this.editor.getValue()));
      searchParams.set("gas", this.gas);
      searchParams.set("fee", this.fee);
      var newQuery = window.location.pathname + "?" + searchParams.toString();
      history.pushState({}, "", newQuery);
    },
    updateEditorFromQuery() {
      var val = this.$route.query;
      console.log("watch query:", val);
      if (this.editor) {
        this.editor.setValue(JSON.parse(val["data"] || "{}"));
      }
      this.gas = val.gas || "0";
      this.fee = val.fee || "0";
    },
    updateLink: function () {
      var searchParams = new URLSearchParams(window.location.search);
      searchParams.set("data", JSON.stringify(this.editor.getValue()));
      searchParams.set("gas", this.gas);
      searchParams.set("fee", this.fee);
      this.link = window.location.pathname + "?" + searchParams.toString();
      console.log("link", this.link);
    },
    editorChanged() {
      this.updateLink();
      this.error = "";
      if (this.command && command_schema[this.command]) {
        if (command_schema[this.command].service_name === "Query") {
          this.showFee = false;
          var query = JSON.parse(JSON.stringify(this.editor.getValue()));
          var params = {};
          const rules = command_schema[this.command].http_rules;
          if (rules) {
            const rule = rules[0];
            for (let i in rule.Params) {
              // Needed because starport g vuex is using json_fieldnames
              const param = rule.Params[i];
              params[rule.Params[i]] = query[param];
              delete query[param];
            }
            query = flattenObject(query);
          }
          this.data = JSON.stringify({ query: query, params: params }, null, 2);
        } else if (command_schema[this.command].service_name === "Msg") {
          this.showFee = true;
          var value = JSON.parse(JSON.stringify(this.editor.getValue()));
          const fee = [{ amount: this.fee, denom: "dys" }];
          this.data = JSON.stringify(
            { value: value, fee: fee, gas: this.gas },
            null,
            2
          );
        }
        var data = JSON.parse(JSON.stringify(this.editor.getValue()));
        this.command_kwargs = Object.keys(data)
          .map(function (key, index) {
            return ",\n    " + key + "=" + pythonify(data[key]);
          })
          .join("");
      }
      console.log("editorChanged", this.data);
    },
    setupEditor() {
      console.log("setupEditor", self.data, this.command);
      const element = document.getElementById("editor");
      if (!element) return;
      if (this.editor) {
        this.editor.destroy();
      }

      if (command_schema[this.command]) {
        this.editor = new JSONEditor(element, {
          form_name_root: "editor",
          schema: command_schema[this.command]?.request_schema || {},
          disable_collapse: true,
          disable_properties: true,
          disable_edit_json: true,
          show_opt_in: true,
          input_width: "100%",
          theme: "bootstrap4",
          object_layout: "table",
        });
        this.editor.on("change", this.editorChanged);
        this.editor.on("ready", () => {
          this.updateEditorFromQuery();
        });

        window["editor"] = this.editor;
        this.inflight = false;
      }
    },
    submit: async function (e) {
      this.editorChanged();
      this.updateQuery();
      e.preventDefault();
      console.log("data", this.data);
      this.responseEditor.setValue({});
      this.error = null;
      this.response = null;
      this.inflight = true;
      this.$store
        .dispatch(this.command, JSON.parse(this.data))
        .then((res) => {
          this.response = res;
        })
        .catch((res) => {
          this.error = res;
        })
        .finally((res) => {
          this.inflight = false;
        });
    },
    setupResponseEditor: function () {
      const element = document.getElementById("responseEditor");
      if (!element) return;
      if (this.responseEditor) {
        this.responseEditor.destroy();
      }
      if (command_schema[this.command]) {
        this.responseEditor = new JSONEditor(element, {
          form_name_root: "responseEditor",
          schema: command_schema[this.command].resp_schema,
          disable_collapse: true,
          disable_properties: true,
          disable_edit_json: true,
          disable_array_add: true,
          disable_array_delete: true,
          disable_array_delete_last_row: true,
          disable_array_reorder: true,
          no_additional_properties: true,
          show_opt_in: false,
          theme: "bootstrap4",
        });
        this.responseEditor.on("ready", () => {
          this.responseEditor.disable();
        });

        window["responseEditor"] = this.responseEditor;
      }
    },
  },
  created: async function () {
    console.log("created");
    window.$store = this.$store;
  },
  components: {
    VAceEditor,
  },

  mounted: function () {
    console.log("mounted");
    this.tx = Object.keys(this.$store["_actions"]).filter((key) =>
      key.match("sendMsg")
    );
    this.query = Object.keys(this.$store["_actions"]).filter((key) =>
      key.match("Query")
    );

    this.command = this.$route.query.command;
    const data = JSON.parse(this.$route.query.data || "{}");
    const s = JSON.stringify(data, null, 2);

    this.data = s;
    this.setupEditor();
    this.setupResponseEditor();
  },
};
</script>
