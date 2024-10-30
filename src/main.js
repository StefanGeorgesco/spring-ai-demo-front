import './assets/main.css'

import Aura from '@primevue/themes/aura'
import PrimeVue from 'primevue/config'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import LayoutView from '@/layouts/LayoutView.vue'

const app = createApp(App)

app.component('LayoutView', LayoutView)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})

app.mount('#app')
