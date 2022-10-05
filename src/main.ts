import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Particles from "vue3-particles";

// import "primeflex/primeflex.css";
// import "primevue/resources/themes/tailwind-light/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "magic.css/dist/magic.min.css"
import './index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Particles)

app.mount('#app')
