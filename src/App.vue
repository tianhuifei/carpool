<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import Home from 'components/home/home'

  export default {
    components: {
      Home
    }
  }
</script>

<style lang="scss" scoped>
</style>
