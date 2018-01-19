<template>
  <div class="login">
    <div class="logo-img">
      <img src="/static/images/logo.png" alt="">
    </div>
    <t-input type="text" title="请输入用户名" v-model="userName"></t-input>
    <t-input type="password" title="请输入密码" v-model="passWord"></t-input>
  </div>
</template>

<script type="text/ecmascript-6">
  import TInput from 'components/T-input/T-input'

  export default {
    name: 'login',
    data() {
      return {
        userName: '',
        passWord: ''
      }
    },
    components: {
      TInput
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
    height: 300px;
  }

  .logo-img{
    margin-top:10%;
    width:100px;
    height:100px;
    text-align: center;
    margin: 0 auto;
    img{
      width:100%;
      height:100%;
    }
  }
  /******/

</style>
