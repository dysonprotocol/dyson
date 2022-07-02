<style scoped>
.smol-css-grid {
  --min: 90ch;
  --gap: 1rem;

  display: grid;
  grid-gap: var(--gap);
  /* min() with 100% prevents overflow
    in extra narrow spaces */
  grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
  pre {
    white-space: pre-wrap;
  }
}
</style>
<template>
  <div class="container">
    <div class="search-wrapper">
      <input type="text" v-model="search" placeholder="Search function.." />
      <button @click="search = ''">clear</button>
    </div>
    <div class="smol-css-grid">
      <div>
        <h1>Documentation</h1>
        <div v-bind:id="propertyName" v-for="(value, propertyName) in dyslang_docs" v-bind:key="propertyName">
          <div v-if="propertyName.toLowerCase().includes(search.toLowerCase())">
            <pre><strong><a v-bind:href="'#' + propertyName">{{ propertyName }}</a>{{ value.definition }}{{ value.init_definition }}</strong>

{{ value.docstring }}</pre>
            <hr />
          </div>
        </div>
      </div>
      <div>
        <h1>Index</h1>
        <div v-for="(value, propertyName) in dyslang_docs" v-bind:key="propertyName">
          <div v-if="propertyName.toLowerCase().includes(search.toLowerCase())">
            <a v-bind:href="'#' + propertyName">{{ propertyName }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <pre>{{ filteredList }}</pre>
</template>
<script>
import dyslang_docs from './dyslang_docs.json'

export default {
  name: 'Docs',
  data: function () {
    return {
      dyslang_docs,
      search: '',
    }
  },
  computed: {},
  watch: {},
}
</script>
