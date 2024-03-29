// from https://github.com/protobufjs/protobuf.js/issues/1745#issuecomment-1200319399
// modified for protobuf/minimal
//
import { util } from "protobufjs/minimal";
import Long from "long";
util.Long = Long;
//===

import starportLibrary from "@starport/vue";
import { useKeplr } from "@starport/vue";
import { createApp } from "vue";
import * as Sentry from "@sentry/vue";
import { BrowserTracing } from "@sentry/tracing";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./app.scss";

window.dysonVueStore = store;

window.setupApp = () => {
  if (!localStorage.getItem("colorMode")) {
    localStorage.setItem("colorMode", "light");
  }
  document
    .getElementsByTagName("body")[0]
    .setAttribute("data-bs-theme", localStorage.getItem("colorMode"));

  const app = createApp(App);

  app.use(store).use(router).use(starportLibrary).mount("#dysapp");

  Sentry.init({
    app,
    dsn: import.meta.env.VITE_SENTRY_DSN,
    //dsn: "https://cfb6942ed4c54513a8af3bbec366acb8@o1422051.ingest.sentry.io/6768386",
    integrations: [
      new BrowserTracing({
        routingInstrumentation: Sentry.vueRouterInstrumentation(router),
        tracingOrigins: ["localhost", /^\//],
      }),
    ],
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
    logErrors: true,
  });
};

window.dysonUseKeplr = (onAccountChange) => {
  return new Promise((resolve, reject) => {
    let k = useKeplr({ $s: store });

    if (k.isKeplrAvailable == false) {
      reject("keplr is not available");
    }

    let chainId = store.getters["common/env/chainId"];

    let onKeplrConnect = async () => {
      await store.dispatch(
        "common/wallet/connectWithKeplr",
        k.getOfflineSigner(chainId)
      );
      let keplrParams = await k.getKeplrAccParams(chainId);
      if (onAccountChange) {
        onAccountChange(keplrParams);
      }
      resolve(keplrParams);
    };

    k.listenToAccChange(onKeplrConnect);

    let onKeplrError = (e) => {
      console.error("could not connect with keplr", e);
      reject("could not connect with keplr", e);
    };

    k.connectToKeplr(onKeplrConnect, onKeplrError);
  });
};
