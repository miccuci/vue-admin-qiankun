<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { registerMicroApps, start, initGlobalState } from 'qiankun'
import config from '@/config'

const apps = config.devApps
const actions = initGlobalState(config.state)
window.actions = actions
actions.onGlobalStateChange((state, prev) => {
  console.log(state, prev)
})

export default {
  name: 'App',
  mounted() {
    if (!window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__) {
      this.initQiankun()
    } else {
      location.reload()
    }
  },
  methods: {
    initQiankun() {
      registerMicroApps(apps)
      start({ singular: false })
    }
  }
}
</script>
