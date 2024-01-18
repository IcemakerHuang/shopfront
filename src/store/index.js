// Utilities
import { createPinia } from 'pinia'
import persistedState from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(persistedState) // 用 pinia 做一個保存登入狀態的套件*?

export default pinia
