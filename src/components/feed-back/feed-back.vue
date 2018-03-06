<template>
  <transition name="page">
    <div class="page-style">
      <div class="page-content">
        <group title="问题或意见">
          <x-textarea :max="200" v-model="opinion" placeholder="请详细描述您的意见或问题..."></x-textarea>
        </group>
        <group title="QQ/邮箱">
          <x-input v-model="contactWay" placeholder="选填，方便我们联系您"></x-input>
        </group>
        <div class="feedback-btn">
          <x-button @click.native="onSubmit" :disabled="disabled" type="primary">发送</x-button>
        </div>

      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {XTextarea, Group, XInput, XButton} from 'vux'
  import {feedBack} from '../../api/feedBack/feedBack'

  export default {
    name: 'feed-back',
    components: {
      XTextarea,
      Group,
      XInput,
      XButton
    },
    data() {
      return {
        opinion: '',
        contactWay: ''
      }
    },
    methods: {
      onSubmit() {
        feedBack(this.opinion, this.contactWay).then((res) => {
          if (res.data.result) {
            this.$vux.toast.show({
              text: '反馈成功'
            })
            this.opinion = ''
            this.contactWay = ''
          }
        }).catch(() => {
          this.$vux.toast.show({
            text: '反馈失败'
          })
        })
      }
    },
    computed: {
      disabled() {
        if (this.opinion && this.contactWay) {
          return false
        } else {
          return true
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .feedback-btn {
    padding-top: 15px;
    width: 80%;
    margin: 0 auto;
  }
</style>
