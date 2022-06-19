import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vueLib from '@starport/vue'

window.vueStore = store

// This is probbly not great, but we want to use the same
//
window.startVueApp = function() {
    const app = createApp(App)
    app.config.globalProperties._depsLoaded = true
    app.use(store).use(router).use(vueLib).mount('#app')
}
