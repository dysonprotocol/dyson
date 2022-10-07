import starportLibrary from "@starport/vue";
import { createApp } from "vue";
import "./app.scss";
import * as Sentry from "@sentry/vue";
import { BrowserTracing } from "@sentry/tracing";

import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);


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

app.use(store).use(router).use(starportLibrary).mount("#app");

window.vueApp = app;
window.vueStore = store;
