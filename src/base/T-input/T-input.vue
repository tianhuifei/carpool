<template>
  <div class="input-box" :class="{error: !error.value }" ref="inputBox">
    <div v-if="title" class="input-title">
      {{title}}
    </div>
    <input ref="input" :type="type" @blur="inputBlur" @focus="inputFocus" v-model="currentValue">
    <span class="input-border-bottom"></span>
    <span class="input-border-bottom-focus"></span>
    <p class="error-info"><span  v-if="!error.value">{{error.msg}}</span></p>
  </div>
</template>

<script type="text/ecmascript-6">
  import {addClass, removeClass} from 'common/js/dom'

  export default {
    name: 'input',
    props: {
      value: [String, Number],
      type: {
        type: String,
        default: 'text'
      },
      title: {
        type: String,
        default: null
      }
    },
    data() {
      return {
        currentValue: '',
        error: {
          msg: '',
          value: true
        }
      }
    },
    created() {
      this.currentValue = (this.value === undefined || this.value == null) ? '' : this.value
    },
    mounted() {
      if (this.currentValue) {
        addClass(this.$refs.inputBox, 'has-label')
      }
    },
    activated() {
    },
    methods: {
      inputFocus() {
        addClass(this.$refs.inputBox, 'focus')
      },
      inputBlur() {
        removeClass(this.$refs.inputBox, 'focus')
      }
    },
    watch: {
      currentValue(val) {
        if (val) {
          addClass(this.$refs.inputBox, 'has-label')
        } else {
          removeClass(this.$refs.inputBox, 'has-label')
        }
        this.$emit('input', val)
      },
      value(val) {
        this.currentValue = val
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../assets/css/base-standard';

  .input-box {
    padding: 0 10px 5px 10px;
    position: relative;
    text-align: left;
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
      margin-top: -1px;
      height: 2px;
      border: none;
      background-color: $app-color;
      position: absolute;
      left: 0;
      right: 0;
      transform: scaleX(0);
      transition: transform .45s ease;

    }
    .input-title {
      display: inline-block;
      font-size: 14px;
      color: $basic-font-color;
      transition: all .45s ease;
      cursor: text;
      transform-origin: left top;
      user-select: none;
      pointer-events: none;
      transform: translate3d(0, 23px, 0) scale(1);
    }
    &.focus {
      .input-border-bottom-focus {
        transform: scaleX(1);
      }
      .input-title {
        transform: translateZ(0) scale(.75);
        color: $app-color !important;
      }
    }
    &.has-label {
      .input-title {
        transform: translateZ(0) scale(.75);
        color: $basic-font-color;
      }
    }
    .error-info {
      height:12px;
      font-size: 12px;
      padding-top: 5px;
      color: $color-error !important;
    }
    &.focus.error {
      .input-border-bottom-focus{
        background-color:$color-error !important;
      }
      .input-border-bottom{
        background-color:$color-error !important;
      }
      .input-title{
        color:$color-error !important;
      }
    }
  }
</style>
