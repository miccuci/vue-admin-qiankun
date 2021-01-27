<template>
  <div class="header-wrapper">
    <div class="header-container">
      <div class="sidebar-logo-container">
        <router-link key="expand" class="sidebar-logo-link" to="/">
          <img src="../../assets/winning-logo.png" class="sidebar-logo">
          <h1 class="sidebar-title">数据质量管理软件</h1>
        </router-link>
      </div>
      <div class="right-menu">
        <div class="right-menu-item">
          消息
        </div>
        <div class="right-menu-item">
          帮助
        </div>
        <el-dropdown class="avatar-container" trigger="click">
          <div class="avatar-wrapper">
            <img src="../../assets/img-user.png" class="user-avatar">
            <span style="color:#fff;position:relative;top:-12px;">{{ userInfo.staffName }}</span>
            <i class="el-icon-caret-bottom" />
          </div>
          <el-dropdown-menu slot="dropdown" class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item>
                Home
              </el-dropdown-item>
            </router-link>
            <a target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/#/">
              <el-dropdown-item>Docs</el-dropdown-item>
            </a>
            <el-dropdown-item divided>
              <span style="display:block;" @click="logout">Log Out</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'avatar',
      'userInfo'
    ]),
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";
.user-dropdown{
  top: 60px !important;
}
.header-wrapper {
  position: fixed;
  top: 0px;
  width: 100%;
  height: 64px;
  line-height: 64px;
  background: url('../../assets/svg-bannerbg.svg');
}
.header-container {
  margin:0 auto;
  max-width: 1600px;
}
.header-menu-container {
  display: inline-block;
  height: 64px;
  .header-menu-item{
    width: 120px;
    height: 64px;
    float: left;
    font-size: 18px;
    text-align: center;
    color: #fff;
    &:hover {
      background-color: #597ef7;
      border-bottom:4px solid #3CEBF3;
    }
  }
  .active-menu{
    border-bottom:4px solid #3CEBF3;
  }
}
.sidebar-logo-container {
  position: relative;
  display: inline-block;
  width: 210px;
  line-height: 64px;
  padding-left: 12px;
  overflow: hidden;

  & .sidebar-logo-link {
    height: 100%;
    width: 100%;

    & .sidebar-logo {
      width: 32px;
      height: 32px;
      vertical-align: middle;
      margin-right: 12px;
    }

    & .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: 600;
      line-height: 50px;
      font-size: 18px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
  }
}
.right-menu {
    float: right;
    height: 64px;
    line-height: 64px;

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      line-height: 64px;
      font-weight:400;
      height: 64px;
      font-size:16px;
      color: #fff;
      vertical-align: text-bottom;
    }

    .avatar-container {
      position: relative;
      top: -10px;
      margin-right: 26px;
      height: 64px;
      line-height: 64px;
      .avatar-wrapper {
        position: relative;
        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 40px;
        }
        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 16px;
          font-size: 12px;
        }
      }
    }
  }
</style>
