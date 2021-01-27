import Vue from 'vue'
import App from './App.vue'
import './public-path'
Vue.config.productionTip = false

let instance = null

function render() {
  instance = new Vue({
    render: h => h(App)
  }).$mount('#bar-app')
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap() {
}

export async function mount(props) {
  window.mainAppProps = props
  render()
}

export async function unmount() {
  instance.$destroy()
  instance = null
}
