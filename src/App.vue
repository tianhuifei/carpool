<template>
  <div id="app">
    <transition name="header">
      <x-header v-show="xHeaderObj.show"></x-header>
    </transition>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tab-bar></tab-bar>
  </div>
</template>

<script type="text/ecmascript-6">
  import TabBar from 'components/tab-bar/tab-bar'
  import Home from 'components/home/home'
  import {XHeader} from 'vux'
  import {mapMutations, mapGetters} from 'vuex'

  export default {
    components: {
      TabBar,
      Home,
      XHeader
    },
    computed: {
      xHeaderObj() {
        return this.getXheader()
      }
    },
    mounted() {
      this.setXheader({
        show: false
      })
    },
    methods: {
      ...mapMutations({
        setXheader: 'SET_XHEADER'
      }),
      ...mapGetters({
        getXheader: 'xHeader'
      })
    }
  }
</script>

<style lang="scss" scoped>
  .header-enter-active, .header-leave-active {
    transition: all .3s
  }
  .header-enter, .header-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    transform: translate3d(100%, 0, 0)
  }
</style>
