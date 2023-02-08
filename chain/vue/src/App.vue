<template>
  <div
    v-show="chainId && chainId !== 'dyson-mainnet-01'"
    style="background: red; color: white; text-align: center"
  >
    You are using Chain ID: {{ chainId }}
  </div>
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
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/docs"
            >Python Functions</router-link
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="https://docs.dysonprotocol.com/"
            target="_blank"
          >
            Docs ↗
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            active-class="active"
            :href="apiCosmos"
            target="_blank"
          >
            Rest API ↗
          </a>
        </li>
      <DysAcc v-if="isLoaded" />
      <li v-else class="navbar-text">Loading Wallet...</li>
      </ul>
      <div class="navbar-text">
        Chain ID: {{ chainId }}
      </div>
    </div>
  </nav>
  <div class="">
    <router-view />
  </div>
</template>

<script lang="ts">
import { computed, onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  components: {},
  setup() {
    // store
    let $s = useStore();
    let isLoaded = ref(false);

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
    $s.dispatch("common/env/init").then(() => {
      isLoaded.value = true;
      console.log("isLoaded");
    });

    return {
      isLoaded,
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
.navbar-nav {
  .modal {
    .modal-dialog {
    }

    .modal-header {
      display: initial;
    }
    .modal-footer {
      justify-content: center;
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
