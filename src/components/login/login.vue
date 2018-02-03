<template>
  <div class="login" :class="{'register-active':register }" ref="loginBox">
    <div class="side front">
      <div class="register" @click="onLoginOrReg">
        <a href="javascript:void(0);">注册</a>
      </div>
      <div class="logo-img">
        <img src="/static/images/logo.png" alt="">
      </div>
      <t-input type="text" title="请输入用户名" :error.sync="userNameError" v-model="userName"></t-input>
      <t-input type="password" title="请输入密码" :error.sync="passWordError" v-model="passWord"></t-input>
      <div class="btn-box">
        <x-button type="primary" @click.native="onSubmit" :plain="true" :mini="true">登录</x-button>
      </div>
    </div>
    <div class="side back">
      <div class="register" @click="onLoginOrReg">
        <a href="javascript:void(0);">登录</a>
      </div>
      <div class="reg-main">
        <h1>注册</h1>
        <t-input type="text" v-model="regUserName" :error.sync="regUserNameError" title="用户名"></t-input>
        <t-input type="password" v-model="regPassWord" :error.sync="regPassWordError" title="密码"></t-input>
        <t-input type="password" :error.sync="againPassWordError" v-model="againPassWord" title="再次输入密码"></t-input>
        <div class="reg-btn">
          <x-button type="primary" @click.native="onRegister" :plain="true" :mini="true">注册</x-button>
        </div>
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import TInput from 'base/T-input/T-input'
  import {XButton} from 'vux'
  import {register, checkUser, loginSubMit} from '../../api/login/login'
  import _ from 'lodash'

  export default {
    name: 'login',
    data() {
      return {
        userName: '',
        passWord: '',
        userNameError: {
          msg: '',
          value: true
        },
        passWordError: {
          msg: '',
          value: true
        },
        againPassWord: '',
        againPassWordError: {
          msg: '',
          value: true
        },
        regUserName: '',
        regPassWord: '',
        regUserNameError: {
          msg: '',
          value: true
        },
        regPassWordError: {
          msg: '',
          value: true
        },
        register: false
      }
    },
    components: {
      TInput,
      XButton
    },
    methods: {
      onSubmit() {
        if (!this.userName) {
          this.userNameError = {
            msg: '请输入用户名',
            value: false
          }
          return
        }
        if (!this.passWord) {
          this.passWordError = {
            msg: '请输入密码',
            value: false
          }
          return
        }
        loginSubMit(this.userName, this.passWord).then(() => {
        }).catch(() => {
        })
      },
      onCheckUser: _.debounce(function () {
        checkUser(this.regUserName).then((res) => {
          if (res.data.result) {
            this.regUserNameError = {
              msg: '用户已存在',
              value: false
            }
          }
        }).catch(() => {
        })
      }, 500),
      onLoginOrReg() {
        this.register = !this.register
      },
      onRegister() {
        if (!this.regUserName) {
          this.regUserNameError = {
            msg: '请填写用户名',
            value: false
          }
          return false
        }
        if (this.regUserName.length >= 20) {
          this.regUserNameError = {
            msg: '用户名长度应小于20',
            value: false
          }
          return false
        }
        if (!this.regPassWord) {
          this.regPassWordError = {
            msg: '请输入密码',
            value: false
          }
          return false
        }
        if (this.regPassWord !== this.againPassWord) {
          return false
        }
        register(this.regUserName, this.againPassWord).then(() => {
        }).catch(() => {
        })
      }
    },
    watch: {
      inputValue(val) {
      },
      againPassWord(val) {
        if (this.regPassWord === val) {
          this.againPassWordError.value = true
        } else {
          this.againPassWordError.value = false
          this.againPassWordError.msg = '密码不一致'
        }
      },
      regUserName(val) {
        if (val && val.length <= 20) {
          this.regUserNameError = {
            msg: '',
            value: true
          }
        }
        this.onCheckUser()
      },
      userName(val) {
        if (val && !this.userNameError.value) {
          this.userNameError = {
            msg: '',
            value: true
          }
        }
      },
      passWord(val) {
        if (val && !this.passWordError.value) {
          this.passWordError = {
            msg: '',
            value: true
          }
        }
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
    padding: 5px;
    position: absolute;
    right: 10px;
    top: 10px;
    color: $basic-font-color;
    z-index: 10;
    a {
      font-size: 12px;
    }
  }

  .side {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    transition: all .5s ease;
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
      transform: rotateY(180deg);
    }

    .back {
      transform: rotateY(360deg);
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

  .reg-main {
    margin-top: 10px;
    h1 {
      font-size: 18px;
      font-weight: bolder;
      color: $app-color;
    }
    .reg-btn {
      padding-top: 20px;
    }
  }

  /******/

</style>
