<template>
  <div class="tab-bar">
    <div class="tab-item">
      <router-link to="/foo">
        <span class="carpoll car-wode4"></span>
        <span>2</span>
      </router-link>
    </div>
    <div class="tab-item">
      <router-link to="/foo">
        <span class="carpoll car-wode4"></span>
        <span>2</span>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/base-color.scss";
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
