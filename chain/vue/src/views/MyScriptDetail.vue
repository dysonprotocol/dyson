<style scoped></style>

<template>
  <ScriptDetail
    v-if="address"
    :scriptAddress="address"
    :key="address"
  ></ScriptDetail>
  <Onboarding v-else></Onboarding>
</template>

<script>
import ScriptDetail from "./ScriptDetail.vue";
import Onboarding from "./Onboarding.vue";

export default {
  name: "MyScriptDetail",
  data: function () {
    return {
      demoAddress: ""
    };
  },
  components: {
    ScriptDetail,
    Onboarding,
  },
  watch: {},
  methods: {},
  computed: {
    address: function () {
      return this.$store.getters["common/wallet/address"];
    },
  },
};
</script>
