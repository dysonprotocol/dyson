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
    <div v-for="name in names" v-bind:key="name.name">
      <div v-if="name.name.toLowerCase().includes(search.toLowerCase())">
        <router-link :to="{ name: 'name-detail', params: { name: name.name } }">
          {{ name.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NameList',
  data: function () {
    return { search: '' }
  },
  computed: {
    names: function () {
      const items = this.$store.getters['names/getNameAll']()
      window.items = items
      return items ? items['name'] : []
    }
  },
  created: async function () {
    await this.$store.dispatch('names/QueryNameAll', {
      options: { subscribe: false, all: true }
    })
  },
  methods: {}
}
</script>
