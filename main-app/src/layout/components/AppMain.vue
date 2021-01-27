<template>
  <div class="app-container">
    <div id="bar-app-container" />
    <div id="foo-app-container" />
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>

.app-container {
  background-color: #fff;
  padding: 20px;
  overflow: auto;
  height: calc(100vh - 106px);
}
.footer-container{
  text-align: center;
  line-height: 40px;
  height: 40px;
}
</style>
