<template>
  <div class="container-fluid">
    <div class="row row-sm">
      <div class="col-12 col-md-4">
        <SpAssets />
      </div>
      <div class="col-12 col-md-8">
        <DysTokenTransferList :key="address"/>
      </div>
    </div>
  </div>
</template>

<script>
import { SpAssets, SpTokenTransfer, DysTokenTransferList } from '@starport/vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Portfolio',

  components: { SpTokenTransfer, SpAssets, DysTokenTransferList },

  setup() {
    // store
    let $s = useStore()

    // computed
    let address = computed(() => $s.getters['common/wallet/address'])

    return {
      address
    }
  }
}
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
}
.col {
  flex-grow: 1;
  padding: 20px;
}
</style>
