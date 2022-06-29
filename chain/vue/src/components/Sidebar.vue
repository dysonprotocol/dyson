<template>
  <SpSidebar v-on:sidebar-open="sidebarOpen = true" v-on:sidebar-close="sidebarOpen = false">
    <template v-slot:default>
      <SpLinkIcon link="/" text="Dashboard" icon="Dashboard" />
      <SpLinkIcon link="/txbuilder" text="Tx Builder" icon="Form" />
      <SpLinkIcon v-if="address" v-bind:link="'/scripts/' + address" text="Your Script" icon="Docs" />
      <SpLinkIcon v-if="!address"  text="Your script (unlock wallet)" icon="Docs" />
    </template>
    <template v-slot:footer>
      <SpStatusAPI :showText="sidebarOpen" />
      <SpStatusRPC :showText="sidebarOpen" />
      <SpStatusWS :showText="sidebarOpen" />
    </template>
  </SpSidebar>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      sidebarOpen: true,
    }
  },
  computed: {
    hasWallet() {
      return this.$store.hasModule(['common', 'wallet'])
    },
    address: function () {
      return this.$store.getters['common/wallet/address']
    },
  },
}
</script>
