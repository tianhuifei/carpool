<template>
  <div class="body-main">
    <div class="my-header">
      <p class="center" v-if="user">
        <img :src="url" alt="">
      </p>
      <p class="center">
        <x-button type="primary" :mini="true">登录</x-button>
      </p>
    </div>
    <group gutter="5px">
      <cell title="我的发布" is-link link="/personal/1123"><span slot="icon" class="carpoll car-fabu icon-color"></span>
      </cell>
      <cell title="关于" is-link><span slot="icon" class="carpoll car-guanyu icon-color"></span></cell>
    </group>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Group, Cell, XButton} from 'vux'
  import {mapMutations, mapGetters} from 'vuex'

  export default {
    name: 'personal-center',
    data() {
      return {
        url: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg'
      }
    },
    activated() {
      setTimeout(() => {
        this._getUser()
      }, 20)
    },
    computed: {
      ...mapGetters([
        'user'
      ])
    },
    methods: {
      _getUser() {
        this.setUser(JSON.parse(localStorage.getItem('user')))
      },
      ...mapMutations({
        setUser: 'SET_USER'
      })
    },
    components: {
      Group,
      Cell,
      XButton
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/base-standard";

  .my-header {
    display: flex;
    height: 0;
    padding-top: 60%;
    position: relative;
    align-items: center;
    justify-items: center;
    background-color: $app-color;
    .center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 2px solid $color-white;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .16), 0 2px 10px 0 rgba(0, 0, 0, .12);
      }
    }
  }

  .icon-color {
    color: $app-color;
    font-size: 16px;
    margin-right: 5px;
  }
</style>
