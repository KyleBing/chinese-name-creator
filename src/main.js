import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'

const app = createApp(App)
app.mount('#app')

// 使移动端支持 :hover 样式
document.addEventListener("touchstart", function() {},false)
