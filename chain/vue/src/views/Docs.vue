<style scoped>
:target {
  background-color: #ffa;
}
</style>
<template>
  <div class="container">
    <div class="row">
      <div class="col-4 align-top">
        <h2>Index</h2>

        <div class="input-group mb-3">
          <input
            type="text"
            v-model="search"
            class="form-control"
            placeholder="Search functions..."
          />
          <div class="input-group-append">
            <button type="button" class="btn btn-primary" @click="search = ''">
              clear
            </button>
          </div>
        </div>

        <div
          v-for="(value, propertyName) in dyslang_docs"
          v-bind:key="propertyName"
        >
          <div v-if="propertyName.toLowerCase().includes(search.toLowerCase())">
            <a v-bind:href="'#' + propertyName">{{ propertyName }}</a>
          </div>
        </div>
      </div>
      <div class="col-8">
        <h2>Documentation</h2>
        <div
          v-bind:id="propertyName"
          v-for="(value, propertyName) in dyslang_docs"
          v-bind:key="propertyName"
        >
          <div v-if="propertyName.toLowerCase().includes(search.toLowerCase())">
            <pre><strong><a v-bind:href="'#' + propertyName">{{ propertyName }}</a>{{ value.definition }}{{ value.init_definition }}</strong>

{{ value.docstring }}</pre>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import dyslang_docs from "./dyslang_docs.json";

export default {
  name: "Docs",
  data: function () {
    return {
      dyslang_docs,
      search: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    scrollToId(id) {
      const el = document.getElementById(id)
      if (el) {
        scrollIntoView();
      }
    },
  },
  mounted() {
    console.log("scrollto", location.hash);
    this.scrollToId(location.hash);
  },
};
</script>
