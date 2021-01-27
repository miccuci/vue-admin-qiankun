<template>
  <span class="badge">
    <span :class="'badge-status badge-status-'+type" />
    <span :class="'badge-text badge-text-'+type">{{ content }}</span>
  </span>
</template>
<script>
// <status-badge type="success" content="正常"/>
export default {
  props: {
    content: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'default'
    }
  }
}
</script>

<style lang="scss">
//颜色状态
$default:#d9d9d9;
$primary:#1890ff;
$success:#52c41a;
$warning: #faad14;
$error: #f5222d;
.badge{
  &-status{
    width: 6px;
    height: 6px;
    display: inline-block;
    border-radius: 50%;
    vertical-align: middle;
    position: relative;
    top: -2px;
    background-color: $default;
    &-primary{
      background-color: $primary;
    }
    &-success{
      background-color: $success;
    }
    &-warning{
      background-color: $warning;
    }
    &-error{
      background-color: $error;
    }
  }
  &-text{
    height:17px;
    font-size:12px;
    font-weight:400;
    line-height:17px;
    color: $default;
    &-primary{
      color: $primary;
    }
    &-success{
      color: $success;
    }
    &-warning{
      color: $warning;
    }
    &-error{
      color: $error;
    }
  }
}
</style>
