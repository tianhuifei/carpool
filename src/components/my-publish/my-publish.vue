<template>
  <transition name="page">
  <div class="page-style">
    <x-header :left-options="{backText: ''}">我的发布</x-header>
  </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {XHeader} from 'vux'
  export default {
    name: 'my-publish',
    components: {
      XHeader
    }
  }
</script>

<style scoped lang="scss">

</style>
