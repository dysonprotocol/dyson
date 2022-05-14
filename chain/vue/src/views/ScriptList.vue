<template>
  <div class="sp-type-list-empty" v-if="!typeItems || typeItems.length == 0"></div>
  <template v-else>
    <div v-for="item in typeItems" v-bind:key="item.index">
      <router-link
        :to="{ name: 'script-detail', params: { script_address: item.index } }"
        class="sp-button-primary sp-button"
      >
        {{ item.index }}
      </router-link>
    </div>
  </template>
</template>
<script>
const schema = {}
export default {
  name: 'ScriptList',
  computed: {
    typeItems: function () {
      const items = this.$store.getters['dyson/getScriptAll']()
      window.items = items
      return items ? items['Script'] : []
    },
  },
  created: async function () {
    await this.$store.dispatch('dyson/QueryScriptAll', {
      options: { subscribe: false, all: true },
    })
  },
  methods: {},
  mounted: function () {
    window.$store = this.$store
  },
}
</script>
