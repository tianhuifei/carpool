<template>
  <div id="app">

    <router-view/>
    <tab-bar></tab-bar>
  </div>
</template>

<script type="text/ecmascript-6">
  import TabBar from 'components/tab-bar/tab-bar'

  export default {
    components: {
      TabBar
    }
  }
</script>

<style lang="scss" scoped>

</style>
