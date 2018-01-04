<template>
  <transition name="detail">
    <div class="detail-main">
      <h1>我是detail</h1>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'detail'
  }
</script>

<style scoped lang="scss">
  @import '../../assets/css/base-standard';
  .detail-main{
    position: fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    z-index: 100;
    background:$app-bg-color;
  }
  .detail-enter-active, .detail-leave-active {
    transition: all .3s
  }
  .detail-enter, .detail-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    transform: translate3d(100%, 0, 0)
  }
</style>
