<template>
  <transition name="page">
  <div class=" page-style">
    <x-header></x-header>
    <div class="publish-main">

    </div>
  </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {XHeader} from 'vux'

  export default {
    name: 'publish-edit',
    components: {
      XHeader
    }
  }
</script>

<style scoped lang="scss">
</style>
