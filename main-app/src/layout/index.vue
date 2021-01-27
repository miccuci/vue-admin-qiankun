<template>
  <div class="app-wrapper">
    <app-header />
    <div class="body-container">
      <sidebar :routes="permission_routers" :style="isCollapse?'width:48px':null" class="sidebar-container" />
      <div :class="!isCollapse?'main-container':'main-container main-container__collapse'">
        <breadcrumb class="breadcrumb-container" />
        <app-main />
      </div>
    </div>
  </div>
</template>

<script>
import { Sidebar, AppMain, AppHeader } from './components'
import Breadcrumb from '@/components/Breadcrumb'
import { mapGetters } from 'vuex'

export default {
  name: 'Layout',
  components: {
    Breadcrumb,
    Sidebar,
    AppMain,
    AppHeader
  },
  computed: {
    ...mapGetters([
      'permission_routers',
      'sidebar'
    ]),
    activeMenuMeta() {
      const route = this.$route
      const { meta } = route
      return meta
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";
  .body-container{
    height: calc(100vh - 64px);
    margin:64px auto;
  }
  .main-container {
    height: 100%;
    margin-left: 200px;
    position: relative;
    padding: 0 10px;
    overflow: hidden;
    &__collapse{
      margin-left: 48px;
    }
  }
  .hamburger-container {
    line-height: 32px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    min-width: 1200px;
    overflow: hidden;
    background-color: #EEEEF6;
  }
</style>
