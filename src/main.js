import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initAnalytics } from './seo/analytics'
import './styles/main.css'

initAnalytics()

const app = createApp(App)
app.use(router)
app.mount('#app')

// Remove o shell após o primeiro paint do Vue, sem medir layout no mesmo turno
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    document.documentElement.classList.add('app-ready')
    window.setTimeout(() => {
      document.getElementById('boot-shell')?.remove()
    }, 160)
  })
})
