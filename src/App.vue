<template>
  <div id="app">
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
    <router-view name="PublishEdit"></router-view>
    <tab-bar></tab-bar>
  </div>
</template>

<script type="text/ecmascript-6">
  import Home from 'components/home/home'
  import TabBar from 'components/tab-bar/tab-bar'

  export default {
    components: {
      Home,
      TabBar
    }
  }
</script>

<style lang="scss" scoped>
</style>
