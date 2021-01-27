<template>
  <div class="app-container">
    <a @click="onClick">go to dashboard</a>
    <el-row :gutter="24">
      <el-col :span="12">
        <div id="bar-app-container" />
      </el-col>
      <el-col :span="12">
        <div id="foo-app-container" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Portal',
  methods: {
    onClick() {
      this.$router.push({ path: '/' })
    }
  }
}
</script>
