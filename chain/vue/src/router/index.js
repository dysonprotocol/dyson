import { createRouter, createWebHistory } from "vue-router";

import Data from "../views/Data.vue";
import Portfolio from "../views/Portfolio.vue";
import Docs from "../views/Docs.vue";
import TxBuilder from "../views/TxBuilder.vue";
import ScriptDetail from "../views/ScriptDetail.vue";

const routerHistory = createWebHistory();
const routes = [
  { path: "/", name: "index", component: Portfolio },
  { path: "/portfolio", name: "portfolio", component: Portfolio },
  { path: "/documentation", name: "documentation", component: Docs },
  {
    path: "/scripts/:script_address",
    name: "script-detail",
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
