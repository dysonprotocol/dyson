<template>
  <!-- TODO fix to the top right of page-->
  <div class="container-fluid">
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <router-link class="navbar-brand" to="/">Dyson Protocol</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/commands"
              >Commands</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/docs"
              >Documentation</router-link
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              active-class="active"
              :href="apiCosmos"
              target="_blank"
            >
              API
            </a>
          </li>
          <li class="nav-item">
            <router-link
              v-if="address"
              active-class="active"
              class="nav-link"
              :to="{
                name: 'script-detail',
                params: { script_address: address },
              }"
            >
              My script
            </router-link>
            <a v-else class="nav-link disabled">My script</a>
          </li>
          <DysAcc />
        </ul>
        <div class="navbar-text">Chain ID: {{ chainId }}</div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts">
import { computed, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  components: {},

  setup() {
    // store
    let $s = useStore();

    // router
    let router = useRouter();
    // computed
    let address = computed(() => $s.getters["common/wallet/address"]);

    let chainId = computed<string>(() => $s.getters["common/env/chainId"]);
    let apiConnected = computed<boolean>(
      () => $s.getters["common/env/apiConnected"]
    );
    let rpcConnected = computed<boolean>(
      () => $s.getters["common/env/rpcConnected"]
    );
    let wsConnected = computed<boolean>(
      () => $s.getters["common/env/wsConnected"]
    );
    let apiCosmos = computed<boolean>(() => $s.getters["common/env/apiCosmos"]);
    // lh
    onBeforeMount(async () => {
      await $s.dispatch("common/env/init");
    });

    return {
      // router
      router,
      // computed
      address,
      chainId,
      apiConnected,
      rpcConnected,
      wsConnected,
      apiCosmos,
    };
  },
};
</script>

<style lang="scss">
.sp-acc {
  .modal {
    width: initial;
    height: initial;
    .modal-header {
      align-items: initial;
    }
  }
  .account-dropdown {
    float: right;
  }
  .sp-nav-link,
  .sp-button {
    float: right;
    padding: 0.5em;
  }
}
</style>
