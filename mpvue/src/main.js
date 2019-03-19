import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false // 生产环境关闭提示

App.mpType = 'app'

const app = new Vue(App)
app.$mount()
