<style scoped>
pre {
  white-space: pre-wrap;
}
.main-content {
  padding-bottom: 10rem;
}
</style>

<template>
  <ScriptDetail
    :scriptAddress="demoAddress"
    :key="demoAddress"
  ></ScriptDetail>
</template>

<script>
import ScriptDetail from "./ScriptDetail.vue";
export default {
  name: "Onboarding",
  props: [],
  mounted: function () {},
  unmounted: function () {},
  data: function () {
    return {
      demoAddress: "dys1k9skw36sa9tepvz5fypx0nqymm0n8cvgrlw5jv",
    };
  },
  components: {
    ScriptDetail,
  },
  watch: {},
  methods: {},
  computed: {

  },
  created: function () {},
};
</script>
