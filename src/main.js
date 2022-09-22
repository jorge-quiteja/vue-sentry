import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import "@/assets/main.pcss";
import * as Sentry from "@sentry/vue";
import { BrowserTracing } from "@sentry/tracing";

const app = createApp(App)

Sentry.init({
    app,
    dsn: "https://cc11fea74bd940159b7f8d225f18d865@o1422637.ingest.sentry.io/6769566",
    logErrors: true,
    release: __SENTRY_RELEASE__,
    integrations: [
        new BrowserTracing({
            routingInstrumentation: Sentry.vueRouterInstrumentation(router),
            tracingOrigins: ["localhost", "my-site-url.com", /^\//],
        }),
    ],
    tracesSampleRate: 1.0,
});

app.use(router);
app.mount('#app');
