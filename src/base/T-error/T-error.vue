<template>
  <div class="error-box">

    <div class="error-text">
      这里发生了一些错误。
    </div>


  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 't-error'
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/base-standard";
  .error-box{
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index: 99;
    .error-text{
      position:absolute;
      left:50%;
      top:40%;
      transform: translate(-40%,-50%);
      font-size: 14px;
      color:$basic-font-color;
      line-height: 1.5;
      @include justify-items
    }
  }
</style>
