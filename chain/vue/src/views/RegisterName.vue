
<style scoped>
.smol-css-grid {
    --min: 90ch;
    --gap: 1rem;

    display: grid;
    grid-gap: var(--gap);
    /* min() with 100% prevents overflow
    in extra narrow spaces */
grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
pre {
    white-space: pre-wrap;
}
}
</style>
<template>
<div class="container">
    <div class="smol-css-grid">
        <div>
            <form v-on:submit="submit" class="sp-box sp-shadow">
                <h1>Register Name</h1>
                <input v-model="name" />
                <input v-model="price" />
                <button>Register</button>
            </form>
        </div>
    </div>
</div>
</template>
<script>

export default {
    name: 'Register Name',
    data: function () {
        return {
            name: "",
            price: "100dys",
            commitResp: null,
            resisterTx: null,
        }
        },
        computed: {

            address: function () {
                return this.$store.getters['common/wallet/address']
            },
        },
        watch: {},
        methods: {
            async submit(e) {
                e.preventDefault()
                this.inFlight = true
                this.txResult = null
                try {
                    this.commitResp = await this.$store.dispatch('names/QueryGenerateCommit', {
                            query: {
                                owner: this.address,
                                name: this.name,
                                salt: '123'
                            },
                    })
                    console.log('commitResp', this.commitResp)

                    this.resisterTx = await this.$store.dispatch('names/sendMsgRegister', {
                            value: {
                                owner: this.address,
                                commit: this.commitResp.commit,
                                price: this.price,
                            },
                            fee: [{ amount: '2000', denom: 'dys' }]
                    })
                    console.log('resisterTx', this.resisterTx)

                    this.revealTx = await this.$store.dispatch('names/sendMsgReveal', {
                            value: {
                                owner: this.address,
                                name: this.name,
                                salt: '123'
                            },
                            fee: [{ amount: '2000', denom: 'dys' }]
                    })
                    console.log('revealTx', this.revealTx)
                } catch (e) {
                    console.error(e)
                } finally {
                    this.inFlight = false
                }
            },
        },
    }
</script>
