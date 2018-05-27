<template>
  <div class="error-box">

    <div class="error-text">
      这里发生了一些错误，我正在查看。请不要着急。
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
    display:flex;
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    .error-text{
      font-size: 14px;
      @include justify-items
    }
  }
</style>
