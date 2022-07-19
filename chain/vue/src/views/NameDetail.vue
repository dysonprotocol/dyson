<style scoped></style>

<template>
	<pre
		>{{ name }}
</pre
	>
</template>

<script>
export default {
	name: 'NameDetail',
	data: function () {
		return {}
	},
	components: {},
	methods: {
		async save(e) {
			this.inFlight = true
			this.txResult = null
			const value = {
				creator: this.address
				// todo
			}
			try {
				this.txResult = await this.$store.dispatch('names/sendMsgUpdateName', {
					value: value,
					fee: [{ amount: '2000', denom: 'dys' }]
				})
				this.inFlight = false
				console.log('txResult', this.txResult)
			} catch (e) {
				console.error(e)
			} finally {
				this.inFlight = false
				this.update()
			}
		},
		async update() {
			this.$store.dispatch('names/QueryName', {
				query: { name: this.$route.params.name },
				options: { subscribe: false, all: false }
			})
		}
	},
	computed: {
		address: function () {
			return this.$store.getters['common/wallet/address']
		},
		name: function () {
			const result = this.$store.getters['names/getName']({
				params: {},
				query: { name: this.$route.params.name }
			})
			return result?.name
		}
	},
	created: async function () {
		this.update()
	}
}
</script>
