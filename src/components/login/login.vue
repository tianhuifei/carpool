<template>
  <div class="login">
    <div class="input-box" ref="inputBox">
      <div class="input-placeholder">
        <span>请输入用户名</span>
      </div>
      <input type="text" @blur="inputBlur" @focus="inputFocus">
      <span class="input-border-bottom"></span>
      <span class="input-border-bottom-focus"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {addClass, removeClass} from 'common/js/dom'

  export default {
    name: 'login',
    activated() {
    },
    methods: {
      inputFocus() {
        addClass(this.$refs.inputBox, 'focus')
      },
      inputBlur() {
        removeClass(this.$refs.inputBox, 'focus')
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
  .input-box {
    padding: 28px 10px 12px 10px;
    position: relative;
    input {
      appearance: none;
      outline: none;
      border: none;
      background: none;
      border-radius: 0 0 0 0;
      box-shadow: none;
      display: block;
      padding: 0;
      margin: 0;
      width: 100%;
      height: 32px;
    }
    .input-border-bottom {
      height: 1px;
      border: none;
      margin: 0;
      background-color: rgba(0, 0, 0, .12);
      position: absolute;
      left: 0;
      right: 0;
    }
    .input-border-bottom-focus {
      margin-top:-1px;
      height: 2px;
      border: none;
      background-color: $app-color;
      position: absolute;
      left: 0;
      right: 0;
      transform: scaleX(0);
      transition: transform .45s ease;
    }
    .input-placeholder{
      display:inline-block;
      position:absolute;
      top:38px;
      left:10px;
      font-size:12px;
      color:$basic-font-color;
      transform: translate3d(0,0,0);
      transition: transform .45s ease;
    }
    &.focus {
      .input-border-bottom-focus {
        transform: scaleX(1);
      }
      .input-placeholder{
        transform: translate3d(0,-10px,0);
      }
    }
  }
</style>
