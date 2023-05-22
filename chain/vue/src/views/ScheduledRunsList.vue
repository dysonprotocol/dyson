<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col mb-3">
	    <h2 v-if="walletAddress && index.startsWith(walletAddress)">My Scheduled Runs</h2>
		<h2 v-else>ScheduledRuns: {{ index }}</h2>
        <div class="card">
          <div v-if="isLoading" class="card-body">Loading Scheduled Runs</div>
          <div v-else-if="scheduledRuns.length === 0" class="card-body">
            No Scheduled Runs
          </div>
        </div>
        <div
          class="card mb-3"
          v-for="r in scheduledRuns"
          :key="r.index"
          :class="{
            'border-danger': r.parsedResult.exception,
            'border-success': !r.parsedResult.exception && r.resp?.response,
          }"
        >
          <h4 class="card-header">
            <router-link
              :to="{ name: 'scheduled', params: { index: r.index } }"
            >
              Scheduled Run Details {{ r.index }}
            </router-link>
          </h4>
          <div class="card-body">
            <div class="card-text">
              <strong>Height:</strong> {{ r.height }}<br />
              <table v-if="r.height > currentBlockHeight">
                <tr>
                  <th>Estimated timestamp:</th>
                  <td>
                    {{ estimateFutureTimestamp(r.height).futureTimestamp }}
                  </td>
                </tr>
                <tr>
                  <th>Estimated time delta:</th>
                  <td>
                    {{ estimateFutureTimestamp(r.height).futureTimeDifference }}
                  </td>
                </tr>
              </table>
              <strong>ScheduledRun Creator:</strong> {{ r.creator }}<br />
              <strong>Script:</strong>
              <router-link
                :to="{
                  name: 'script-detail',
                  params: { scriptAddress: r.msg.address },
                }"
                >{{ r.msg.address }}</router-link
              >

              <br />
              <strong>Coins:</strong> {{ r.msg.coins || 'none' }}<br />
              <strong>NFTs:</strong> {{ r.msg.nfts || 'none' }}<br />
              <strong>Function:</strong>
              <pre>{{ r.msg.function_name }}</pre>
              <strong>Args:</strong>
              <pre>{{ JSON.parse(r.msg.args || '[]') }}</pre>
              <strong>Kwargs:</strong>
              <pre>{{ JSON.parse(r.msg.kwargs || '{}') }}</pre>
              <span v-if="(exc = r.parsedResult.exception)">
                <strong>Exception:</strong>
                <pre
                  >{{ exc.msg }} on Line: {{ exc.lineno || 0 }} Column: {{
                    exc.col
                  }}</pre
                >
              </span>
              <strong>Result:</strong>
              <pre>{{ r.parsedResult.result }}</pre>
              <strong>Logs:</strong>
              <pre>{{ r.parsedResult.stdout }}</pre>

              <strong>Gas Requested:</strong> {{ r.gas }}<br />
              <span v-if="r.parsedResult.script_gas_consumed">
                <strong>Gas Used:</strong>
                {{ r.parsedResult.script_gas_consumed }}<br />
              </span>
              <strong>Gas Price:</strong>
              {{ parseFloat(r.gasprice.amount) }} dys<br />
              <strong>Gas Fee:</strong> {{ r.fee.amount }} dys
            </div>
            <button
              v-if="next_key"
              class="btn btn-primary btn-lg"
              @click="fetchScheduledRuns(next_key)"
            >
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { secondsToDdHhMmSs } from './utils'

export default {
  name: 'ScheduledRunsList',
  props: { index: '' },
  data() {
    return {
      scheduledRuns: [],
      next_key: null,
      isLoading: false,
    }
  },
  methods: {
    estimateFutureTimestamp(futureBlockHeight) {
      let blocks = this.$store.getters['common/blocks/getBlocks'](60)
      if (blocks.length < 2) {
        return '...'
      }
      // Given data
      let { height: pastHeight, timestamp: pastTimestamp } =
        blocks[blocks.length - 1]
      let { height: currentHeight, timestamp: currentTimestamp } = blocks[0]

      // Calculate average time per block
      let pastTime = new Date(pastTimestamp).getTime()
      let currentTime = new Date(currentTimestamp).getTime()
      let timeDifference = currentTime - pastTime
      let blockDifference = currentHeight - pastHeight
      let avgTimePerBlock = timeDifference / blockDifference

      // Estimate future timestamp
      let futureBlockDifference = futureBlockHeight - currentHeight
      let futureTimeDifference = futureBlockDifference * avgTimePerBlock
      let futureTimestamp = new Date(
        currentTime + futureTimeDifference
      ).toISOString()
      futureTimeDifference = secondsToDdHhMmSs(futureTimeDifference / 1000)

      return { futureTimestamp, futureTimeDifference }
    },
    prettyFunction(funcName, args, kwargs) {
      let argString = args.map((arg) => JSON.stringify(arg)).join(', ')
      let kwargString = Object.entries(kwargs)
        .map(([key, value]) => `${key}=${JSON.stringify(value, null, 2)}`)
        .join(', ')
      let fullArgString = [...args, ...Object.entries(kwargs)].length
        ? `${argString}${argString && kwargString ? ', ' : ''}${kwargString}`
        : ''
      return `${funcName}(${fullArgString})`
    },

    fetchScheduledRuns: async function (key) {
      this.isLoading = true
      let data = {
        query: {
          index: this.index,
          'pagination.limit': 100,
          'pagination.key': key,
          'pagination.reverse': true,
        },
        params: {},
      }
      let result = await this.$store.dispatch(
        'dyson/QueryScheduledRunAll',
        data
      )
      // append to scheduledRuns
      this.scheduledRuns = [...this.scheduledRuns, ...result.scheduled_run]
      // apply parsedResult to each
      this.scheduledRuns = this.scheduledRuns.map((r) => {
        return {
          ...r,
          height: parseInt(r.height),
          parsedResult: this.parsedResult(r),
        }
      })
      this.next_key = result.pagination.next_key

      this.isLoading = false
    },
    parsedResult: function (r) {
      try {
        return JSON.parse(r.resp?.response)
      } catch (e) {
        try {
          // get the last line of r.error
          let match = r.error.match(/Output:\n(.*): Exception in Script$/s)
          if (match) {
            return JSON.parse(match[1])
          }
          // pares it
          return JSON.parse(lastLine)
        } catch (e) {
          if (r.error !== '') {
            return { exception: { msg: r.error } }
          }

          return { exception: null, result: null }
        }
        return r.resp
      }
    },
  },
  mounted() {},
  created() {
    this.fetchScheduledRuns(this.key)
  },
  computed: {
    currentBlockHeight() {
      let blocks = this.$store.getters['common/blocks/getBlocks'](1)
      if (blocks.length === 0) {
        return 0
      }
      return parseInt(blocks[0].height)
    },
    walletAddress() {
      return this.$store.getters['common/wallet/address']
    },
  },
  watch: {
    currentBlockHeight(val) {
      if (this.scheduledRuns.length == 1) {
        if (this.scheduledRuns[0].height == val) {
          console.log('refreshing')
          this.scheduledRuns = []
          this.fetchScheduledRuns('')
        }
      }
    },
  },
  components: {},
}
</script>
