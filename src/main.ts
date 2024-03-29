import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Tailwind from "primevue/passthrough/tailwind";

import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "magic.css/dist/magic.min.css"
import './index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, { unstyled: true , pt: Tailwind})

app.mount('#app')
