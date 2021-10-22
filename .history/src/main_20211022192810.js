import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { vant } from '@/config/vant.config.js'
import 'amfe-flexible'
import 'normalize.css'
import './style/index.css'
import 'vant/lib/index.css'
import './style/iconfont.css'
import '@vant/touch-emulator'
const app = createApp(App)
vant(app)
app.use(store).use(router).mount('#app')
