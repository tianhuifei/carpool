<template>
  <transition name="page">
    <div class="page-style">
      <x-header>详细信息</x-header>
      <div class="detail-main">
        <h1>我是detail</h1>
      </div>
    </div>

  </transition>
</template>

<script type="text/ecmascript-6">
  import {XHeader} from 'vux'
  export default {
    name: 'detail',
    components: {
      XHeader
    }
  }
</script>

<style scoped lang="scss">
  @import '../../assets/css/base-standard';
</style>
