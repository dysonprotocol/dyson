<template>
  <div
    v-show="chainId && chainId !== 'dyson-mainnet-01'"
    style="background: red; color: white; text-align: center"
  >
    You are using Chain ID: {{ chainId }}
  </div>
  <nav class="navbar navbar-expand-lg text-center">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img
          v-if="colorMode === 'light'"
          src="./logo/dys-inverted.svg"
          height="35"
        />
        <img v-if="colorMode === 'dark'" src="./logo/dys.svg" height="35" />
        Dyson Protocol
      </router-link>
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
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/commands"
              >Commands</router-link
            >
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
        <div class="navbar-text">Chain ID: {{ chainId }}</div>
        <button
          v-if="colorMode === 'dark'"
          @click="toggleColorMode"
          class="btn"
        >
          ☀️
        </button>
        <button
          v-else="colorMode === 'light'"
          @click="toggleColorMode"
          class="btn"
        >
          🌙
        </button>
      </div>
    </div>
  </nav>
  <div class="">
    <div v-if="loadingRoute || !isLoaded">
      <div class="progress" style="height: 5px">
        <div
          class="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
          style="width: 100%"
        ></div>
      </div>
    </div>
    <router-view v-else></router-view>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  components: {},
  setup() {
    // watch for color mode changes
    let colorMode = ref(localStorage.getItem('colorMode') || 'light')
    let colorModeChangeCallback = (event) => {
      console.log('colorModeChanged', event)
      colorMode.value = event.detail.colorMode
    }
    onMounted(() => {
      window.addEventListener('colorModeChanged', colorModeChangeCallback)
    })

    onUnmounted(() => {
      window.removeEventListener('colorModeChanged', colorModeChangeCallback)
    })

    // store
    let $s = useStore()
    let isLoaded = ref(false)
    let loadingRoute = ref(false)

    // router
    let router = useRouter()

    let toggleColorMode = function () {
      let newValue
      if (colorMode.value == 'light') {
        newValue = 'dark'
        document.querySelector("link[rel*='icon']").href = '/static/dys.png'
      } else {
        newValue = 'light'
        document.querySelector("link[rel*='icon']").href =
          '/static/dys-inverted.png'
      }
      localStorage.setItem('colorMode', newValue)
      document
        .getElementsByTagName('body')[0]
        .setAttribute('data-bs-theme', newValue)

      window.dispatchEvent(
        new CustomEvent('colorModeChanged', {
          detail: {
            colorMode: newValue,
          },
        })
      )
      console.log('toggling', newValue)
    }

    router.beforeEach((to, from, next) => {
      loadingRoute.value = true
      next()
    })
    router.afterEach((to, from) => {
      loadingRoute.value = false
    })
    // computed
    let address = computed(() => $s.getters['common/wallet/address'])

    let chainId = computed<string>(() => $s.getters['common/env/chainId'])
    let apiConnected = computed<boolean>(
      () => $s.getters['common/env/apiConnected']
    )
    let rpcConnected = computed<boolean>(
      () => $s.getters['common/env/rpcConnected']
    )
    let wsConnected = computed<boolean>(
      () => $s.getters['common/env/wsConnected']
    )
    let apiCosmos = computed<boolean>(() => $s.getters['common/env/apiCosmos'])
    // lh
    $s.dispatch('common/env/init').then(() => {
      isLoaded.value = true
    })

    return {
      isLoaded,
      colorMode,
      loadingRoute,
      // router
      router,
      // computed
      toggleColorMode,
      address,
      chainId,
      apiConnected,
      rpcConnected,
      wsConnected,
      apiCosmos,
    }
  },
}
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
