import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as VeeValidate from 'vee-validate';

import "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/modal";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./registerServiceWorker";

const app = createApp(App);

app
  .use(router)
  .use(store)
  .use(VeeValidate)
  .mount("#app");
