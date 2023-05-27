import './assets/main.css'

import axios from 'axios';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.config.globalProperties.$http = axios

app.use(createPinia())
app.use(router)

app.mount('#app')
