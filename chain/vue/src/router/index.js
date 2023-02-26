import { createRouter, createWebHistory } from "vue-router";

const Portfolio = () => import("../views/Portfolio.vue");
const Docs = () => import("../views/Docs.vue");
const ScriptDetail = () => import("../views/ScriptDetail.vue");
const MyScriptDetail = () => import("../views/MyScriptDetail.vue");
const TxBuilder = () => import("../views/TxBuilder.vue");

const routerHistory = createWebHistory();
const routes = [
  { path: "/", name: "index", component: MyScriptDetail },
  { path: "/documentation", name: "documentation", component: Docs },
  {
    path: "/scripts/:scriptAddress",
    name: "script-detail",
    props: true,
    component: ScriptDetail,
  },

  { path: "/docs", name: "docs", component: Docs },
  { path: "/txbuilder", name: "tx-builder", component: TxBuilder },
  { path: "/commands", name: "commands", component: TxBuilder },
];

const router = createRouter({
  history: routerHistory,
  routes,
});

export default router;
