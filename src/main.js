import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/modal';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './registerServiceWorker'


createApp(App).use(store).use(router).mount('#app')
