<template>
  <transition name="page">
    <div class=" page-style">
      <x-header :left-options="{backText: ''}">{{title}}</x-header>
      <div class="page-content">
        <scroll>
          <div class="">
            <group>
              <popup-picker :title="publishObj.publishTitle" :data="typeList" v-model="publishObj.publishValue"
                            @on-change="setPublishType"></popup-picker>
              <x-input :required="true" title="出发地：" placeholder="请输入出发地"></x-input>
              <x-input :required="true" title="目的地：" placeholder="请输入目的地"></x-input>
            </group>
          </div>

        </scroll>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {XHeader, Group, Cell, PopupPicker, XInput} from 'vux'
  import Scroll from 'base/scroll/scroll'

  export default {
    name: 'publish-edit',
    data() {
      return {
        publishObj: {
          publishTitle: '拼车类型：',
          publishValue: []
        },
        typeList: [['车找人', '人找车']],
        title: '',
        id: '',
        type: ''
      }
    },
    components: {
      XHeader,
      Group,
      Scroll,
      Cell,
      PopupPicker,
      XInput
    },

    mounted() {
      this._initPublish()
    },
    methods: {
      setPublishType(val) {
        this.publishObj.publishValue = val
      },
      _initPublish() {
        this.title = this.$route.params.id === '-1' ? '发布' : '编辑'
        this.id = this.$route.params.id
        this.type = this.$route.params.type
      }
    }
  }
</script>

<style scoped lang="scss">
</style>
