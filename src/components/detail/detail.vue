<template>
  <div class="detail-main">
    <h1>我是detail</h1>
  </div>
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
</style>
