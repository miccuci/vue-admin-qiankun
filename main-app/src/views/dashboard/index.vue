<template>
  <div>
    Dashboard
    <p>
      <a @click="onClick">go to portal</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  methods: {
    onClick() {
      this.$router.push({ path: '/portal' })
    }
  }
}
</script>
