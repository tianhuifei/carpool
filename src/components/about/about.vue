<template>
  <transition name="page">
    <div class="page-style">
      <x-header :left-options="{backText: ''}">{{ title }}</x-header>
      <div class="page-content">
        <group gutter="5px">
          <cell title="版本介绍" is-link link="/personal/about/version"></cell>
          <cell title="意见反馈" is-link link="/personal/about/feedback"></cell>
          <cell title="联系我" is-link link="/personal/about/contactme"></cell>
        </group>
      </div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
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
        title: '关于'
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
      next()
    },
    beforeRouteLeave(to, from, next) {
      console.log('beforeRouteLeave ')
      next()
    }
  }
</script>

<style scoped lang="scss">

</style>
