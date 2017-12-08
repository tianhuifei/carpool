<template>
  <div class="tab-bar">
    <div class="tab-item"></div>
    <div class="tab-item"></div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss">
  @import "../../assets/css/base.scss";
  .tab-bar{
    height:50px;
    background-color:$tab-bar-bg-color;
    position:fixed;
    bottom:0;
    width:100%;
    display: flex;
    border-top:1px solid #EEE;
    box-shadow: 0 0 1px rgba(0,0,0,.85);
    .tab-item{
      flex:1;
    }
  }
</style>
