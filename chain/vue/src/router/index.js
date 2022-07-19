import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import Relayers from '@/views/Relayers.vue'
import ScriptList from '@/views/ScriptList.vue'
import ScriptDetail from '@/views/ScriptDetail.vue'
import NameList from '@/views/NameList.vue'
import NameDetail from '@/views/NameDetail.vue'
import TxBuilder from '@/views/TxBuilder.vue'
import Docs from '@/views/Docs.vue'
import RegisterName from '@/views/RegisterName.vue'

const routerHistory = createWebHistory()
const routes = [
  { path: '/', component: Index },
  { path: '/relayers', component: Relayers },
  { path: '/scripts', name: 'script-list', component: ScriptList },
  { path: '/scripts/:script_address', name: 'script-detail', component: ScriptDetail },
  { path: '/register', name: 'register-name', component: RegisterName },
  { path: '/name', name: 'name-list', component: NameList },
  { path: '/name/:name', name: 'name-detail', component: NameDetail },
  { path: '/txbuilder', name: 'tx-builder', component: TxBuilder},
  { path: '/docs', name: 'docs', component: Docs},
]

const router = createRouter({
  history: routerHistory,
  routes,
})

export default router
