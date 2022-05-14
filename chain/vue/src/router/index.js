import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import Relayers from '@/views/Relayers.vue'
import ScriptList from '@/views/ScriptList.vue'
import ScriptDetail from '@/views/ScriptDetail.vue'
import TxBuilder from '@/views/TxBuilder.vue'

const routerHistory = createWebHistory()
const routes = [
  { path: '/', component: Index },
  { path: '/relayers', component: Relayers },
  { path: '/scripts', name: 'script-list', component: ScriptList },
  { path: '/scripts/:script_address', name: 'script-detail', component: ScriptDetail },
  { path: '/txbuilder', name: 'tx-builder', component: TxBuilder},
]

const router = createRouter({
  history: routerHistory,
  routes,
})

export default router
