<template>
  <div id="app">

    <transition name="router-fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade">
      <router-view name="PublishEdit"></router-view>
    </transition>
    <tab-bar class="test"></tab-bar>

  </div>
</template>

<script type="text/ecmascript-6">
  import Home from 'components/home/home'
  import TabBar from 'components/tab-bar/tab-bar'
  import {checkToken} from './api/login/login'

  export default {
    components: {
      Home,
      TabBar
    },
    created() {
      this._checkToken()
    },
    methods: {
      _checkToken() {
        checkToken().then((res) => {
          let check = res.data
          if (!check.result) {
            localStorage.setItem('t_f', 'false')
          }
        }).catch(() => {
        })
      }
    }
  }
</script>

<style lang="scss">
  /*.page-enter-active, .page-leave-active {*/
  /*transition: all .3s*/
  /*}*/

  /*.page-enter, .page-leave-to !* .fade-leave-active in below version 2.1.8 *!*/
  /*{*/
  /*transform: translate3d(100%, 0, 0)*/
  /*}*/
  // 过场动画
  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
  }

  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }
</style>
