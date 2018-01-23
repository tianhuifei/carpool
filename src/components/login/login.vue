<template>
  <div class="login" :class="{'register-active':register }" ref="loginBox">
    <div class="side front">
      <div class="register" @click="onLoginOrReg">
        <a href="javascript:void(0);">注册</a>
      </div>
      <div class="logo-img">
        <img src="/static/images/logo.png" alt="">
      </div>
      <t-input type="text" title="请输入用户名" v-model="userName"></t-input>
      <t-input type="password" title="请输入密码" v-model="passWord"></t-input>
      <div class="btn-box">
        <x-button type="primary" :plain="true" :mini="true">登录</x-button>
      </div>
    </div>
    <div class="side back">
      <div class="register" @click="onLoginOrReg">
        <a href="javascript:void(0);">登录</a>
      </div>
      这是反而
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import TInput from 'components/T-input/T-input'
  import {XButton} from 'vux'

  export default {
    name: 'login',
    data() {
      return {
        userName: '',
        passWord: '',
        register: false
      }
    },
    components: {
      TInput,
      XButton
    },
    methods: {
      onLoginOrReg() {
        this.register = !this.register
        console.log(this.register)
      }
    },
    watch: {
      inputValue(val) {
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../assets/css/base-standard';

  .login-fixed {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }

  .login {
    position: relative;
    height: 300px;
  }

  .login-fixed, .login {
    perspective: 1000px;
    transform-style: preserve-3d;
  }

  .register {
    padding:5px;
    position: absolute;
    right: 10px;
    top: 10px;
    color: $basic-font-color;
    z-index: 10;
  }

  .side {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    transition: all .8s ease;
    backface-visibility: hidden;
    background-color: $color-white;
  }

  .front {
    transform: rotateY(0deg);
    z-index: 1;
  }

  .back {
    transform: rotateY(180deg);
    z-index: 0;
  }

  .register-active {
    .front {
      transform: rotateY(180deg) ;
    }

    .back {
      transform: rotateY(360deg) ;
    }
  }

  .logo-img {
    margin-top: 10%;
    width: 100px;
    height: 100px;
    text-align: center;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .btn-box {
    margin-top: 18px;
  }
  /******/

</style>
