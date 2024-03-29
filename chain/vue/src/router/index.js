import { createRouter, createWebHistory } from 'vue-router'

const Portfolio = () => import('../views/Portfolio.vue')
const Docs = () => import('../views/Docs.vue')
const ScriptDetail = () => import('../views/ScriptDetail.vue')
const MyScriptDetail = () => import('../views/MyScriptDetail.vue')
const TxBuilder = () => import('../views/TxBuilder.vue')
const NameList = () => import('../views/NameList.vue')
const NameDetail = () => import('../views/NameDetail.vue')
const NFTClassList = () => import('../views/NFTClassList.vue')
const NFTClassDetail = () => import('../views/NFTClassDetail.vue')
const NFTDetail = () => import('../views/NFTDetail.vue')
const CoinList = () => import('../views/CoinList.vue')
const Assets = () => import('../views/Assets.vue')
const ScheduledRunsList = () => import('../views/ScheduledRunsList.vue')

const routerHistory = createWebHistory()
const routes = [
  { path: '/', name: 'index', component: MyScriptDetail },
  { path: '/documentation', name: 'documentation', component: Docs },
  {
    path: '/scripts/:scriptAddress',
    name: 'script-detail',
    props: true,
    component: ScriptDetail,
  },

  { path: '/docs', name: 'docs', component: Docs },
  { path: '/txbuilder', name: 'tx-builder', component: TxBuilder },
  { path: '/commands', name: 'commands', component: TxBuilder },
  { path: '/names', name: 'names', component: NameList },
  { path: '/names', name: 'names', component: NameList },
  { path: '/names/:name', name: 'name-detail', component: NameDetail },
  { path: '/nfts', name: 'nftclass-list', component: NFTClassList },
  {
    path: '/nfts/:class_id',
    name: 'nftclass-detail',
    component: NFTClassDetail,
  },
  { path: '/nfts/:class_id/:id', name: 'nft-detail', component: NFTDetail },
  { path: '/coins', name: 'coin-list', component: CoinList },
  { path: '/assets/:address', name: 'assets', component: Assets , props: true},
  {
    path: '/scheduled-runs',
    component: ScheduledRunsList,
    props: { index: '' },
  },
  {
    path: '/scheduled-runs/:index(.*)',
    name: 'scheduled',
    component: ScheduledRunsList,
    props: true,
  },
]

const router = createRouter({
  history: routerHistory,
  routes,
})

export default router
