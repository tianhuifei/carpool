<template>
  <div class="body-main">
    <div class="my-header">
      <a @click="_loginOut" v-if="this.user" href="javascript:void(0);" class="loginOut">退出</a>
      <p class="center portrait" v-if="user">
        <img :src="url" alt="">
        <span>{{ user.userName }}</span>
      </p>
      <p class="center" v-if="!user">
        <x-button @click.native="onSubmitBtn" type="primary" :mini="true">登录</x-button>
      </p>
    </div>
    <group gutter="5px">
      <cell title="我的发布" is-link link="/personal/mypublish"><span slot="icon"
                                                                  class="carpoll car-fabu icon-color"></span>
      </cell>
      <cell title="关于" is-link link="/personal/about"><span slot="icon" class="carpoll car-guanyu icon-color"></span>
      </cell>
    </group>
    <transition name="router-fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <x-dialog class="login-box" :show.sync="loginDialog" hide-on-blur>
      <t-login :is-show.sync="loginDialog"></t-login>
    </x-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Group, Cell, XButton, XDialog} from 'vux'
  import {mapMutations, mapGetters} from 'vuex'
  import {getUserInfo} from '../../common/js/base'
  import {loginOut} from '../../api/login/login'

  const TLogin = () => import('components/login/login.vue').then(m => m.default)

  export default {
    name: 'personal-center',
    data() {
      return {
        url: '/static/images/portrait.jpg',
        loginDialog: false
      }
    },
    activated() {
      setTimeout(() => {
        if (!this.user) {
          this._getUser()
        }
      }, 20)
    },
    computed: {
      ...mapGetters([
        'user'
      ])
    },
    methods: {
      onSubmitBtn() {
        this.loginDialog = true
      },
      _getUser() {
        this.setUser(getUserInfo())
      },
      _loginOut() {
        loginOut().then((res) => {
          if (!res.data.result) {
            return false
          }
          localStorage.setItem('t_f', false)
          localStorage.removeItem('t')
          this.setUser(null)
        }).catch()
      },
      ...mapMutations({
        setUser: 'SET_USER'
      })
    },
    components: {
      Group,
      Cell,
      XButton,
      TLogin,
      XDialog
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
    .loginOut {
      position: absolute;
      padding: 10px;
      top: 15px;
      right: 15px;
      font-size: $base-font-size;
      color: $basic-font-color;
    }
    .portrait {
      span {
        @include text-overflow();
        position: absolute;
        display: inline-block;
        font-size: 12px;
        text-align: center;
        color: $color-white;
        left: 50%;
        bottom: -20px;
        transform: translateX(-50%);
        width: 100%;
      }
    }
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
