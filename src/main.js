import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './assets/css/style.css';

const app = createApp(App);

app.use(createPinia())
app.use(router);

app.mount("#app");
