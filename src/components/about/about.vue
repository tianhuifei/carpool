<template>
  <transition name="page">
    <div class="page-style">
      <x-header :transition="transitionName" :left-options="{backText: ''}">{{ title }}{{transitionName}}</x-header>
      <div class="page-content">
        <group gutter="5px">
          <cell title="版本介绍" is-link link="/personal/about/version"></cell>
          <cell title="意见反馈" is-link link="/personal/about/feedback"></cell>
          <cell title="联系我" is-link link="/personal/about/contactme"></cell>
        </group>
        {{transitionName}}
      </div>
      <transition :name="transitionName">
        <keep-alive>
            <router-view class="child-view"></router-view>
        </keep-alive>
      </transition>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {XHeader, Group, Cell} from 'vux'

  export default {
    name: 'about',
    props: {},
    data() {
      return {
        title: '关于',
        transitionName: 'slide-left'
      }
    },
    components: {
      XHeader,
      Group,
      Cell
    },
    beforeRouteEnter(to, from, next) {
      console.log('beforeRouteEnter ')
      next()
    },
    beforeRouteUpdate(to, from, next) {
      if (to.meta && to.meta.title) {
        this.title = to.meta.title
      }
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      next()
    },
    beforeRouteLeave(to, from, next) {
      console.log('beforeRouteLeave ')
      next()
    }
  }
</script>

<style scoped lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .child-view {
    position: absolute;
    transition: all .5s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
  }
</style>
