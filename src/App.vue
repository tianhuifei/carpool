<template>
  <div id="app">
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
    <router-view name="PublishEdit"></router-view>
    <tab-bar></tab-bar>
  </div>
</template>

<script type="text/ecmascript-6">
  import Home from 'components/home/home'
  import TabBar from 'components/tab-bar/tab-bar'

  export default {
    components: {
      Home,
      TabBar
    }
  }
</script>

<style lang="scss">
  .router-view {
    width: 100%;
    top: 46px;
  }

  .vux-pop-out-enter-active,
  .vux-pop-out-leave-active,
  .vux-pop-in-enter-active,
  .vux-pop-in-leave-active {
    will-change: transform;
    transition: all 500ms;
    height: 100%;
    top: 46px;
    position: absolute;
    backface-visibility: hidden;
    perspective: 1000;
  }

  .vux-pop-out-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  .vux-pop-out-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .vux-pop-in-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .vux-pop-in-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
</style>
