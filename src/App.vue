<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tab-bar></tab-bar>
  </div>
</template>

<script type="text/ecmascript-6">
  import TabBar from 'components/tab-bar/tab-bar'
  import Home from 'components/home/home'

  export default {
    components: {
      TabBar,
      Home
    }
  }
</script>

<style lang="scss" scoped>
</style>
