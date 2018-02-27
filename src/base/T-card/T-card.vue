<template>
  <div class="card-box">
    <slot class="card-header" name="header"></slot>
    <div class="card-content">
      <div class="card-content-inner">
        <slot name=""></slot>
      </div>
    </div>
    <slot class="card-footer" name="footer"></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'T-card',
    props: {
      title: {
        type: String,
        default: null
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../assets/css/base-standard';

  .card-box {
    position: relative;
    margin: 10px 15px;
    background: #FFF;
    border-radius: 5px;
    background-clip: padding-box;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .16), 0 2px 10px 0 rgba(0, 0, 0, .12);
    .card-content {
      font-size: 14px;
    }
    .card-footer, .card-header {
      box-sizing: border-box;
      position: relative;
      min-height: 44px;
      padding: 10px 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .card-footer::before, .card-header::after {
      position: absolute;
      content: "";
      left: 0;
      right: 0;
      height: 1px;
      background: #c8c7cc;
      transform: scaleY(.5);
    }
    .card-header::after {
      bottom: 0;
    }
    .card-footer::before {
      top: 0;
    }
    .card-content-inner {
      position: relative;
      padding: 15px;
    }
  }
</style>
