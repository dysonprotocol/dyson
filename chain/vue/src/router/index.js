import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import Relayers from '@/views/Relayers.vue'
import ScriptList from '@/views/ScriptList.vue'
import ScriptDetail from '@/views/ScriptDetail.vue'
import TxBuilder from '@/views/TxBuilder.vue'
import Docs from '@/views/Docs.vue'

const routerHistory = createWebHistory()
const routes = [
  { path: '/', component: Index },
  { path: '/relayers', component: Relayers },
  { path: '/scripts', name: 'script-list', component: ScriptList },
  { path: '/scripts/:script_address', name: 'script-detail', component: ScriptDetail },
  { path: '/docs', name: 'docs', component: Docs},
]

const router = createRouter({
  history: routerHistory,
  routes,
})

export default router
