<template>
  <div class="loading-box">
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
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/base-standard";

  .loading-box {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .loading-text {
      font-size: $base-font-size;
      color: $basic-font-color;
    }
  }
</style>
