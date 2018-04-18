<template>
  <div :class="{'position-abs':position === 'absolute','position-fixed':position === 'fixed'}" class="loading-box">
    <span class="loading-text" v-if="this.loadingText">{{loadingText}}</span>
    <inline-loading></inline-loading>
  </div>
</template>

<script type="text/ecmascript-6">
  import {InlineLoading} from 'vux'

  export default {
    name: 't-loading',
    components: {
      InlineLoading
    },
    computed: {},
    props: {
      loadingText: {
        type: String,
        default: '加载中...'
      },
      position: {
        type: String,
        default: 'fixed'
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/base-standard";
  .position-abs{
    position: absolute;
  }
  .position-fixed{
    position: fixed;
  }
  .loading-box {
    z-index: 20;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .loading-text {
      font-size: $base-font-size;
      color: $basic-font-color;
    }
  }
</style>
