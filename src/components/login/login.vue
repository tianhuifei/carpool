<template>
  <div class="login">
    <t-input type="text" title="请输入用户名" v-model="inputValue"></t-input>
    <t-input type="password" title="请输入密码" v-model="inputValue"></t-input>
  </div>
</template>

<script type="text/ecmascript-6">
  import TInput from 'components/T-input/T-input'

  export default {
    name: 'login',
    data() {
      return {
        inputValue: '一二三四五'
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

  /******/

</style>
