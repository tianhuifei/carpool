<template>
  <transition name="page" mode="out-in">
    <div class="page-style">
      <x-header>详细信息</x-header>
      <div class="detail-main">
        <scroll>
          <div class="content-body">
            <group label-width="5.5em" label-margin-right="2em" label-align="right" v-if="publishInfo">
              <cell title="拼车类型：">
                <div class=""><span :class="publishInfo.publishType ? 'people-for-car' : 'car-for-people'">{{ publishInfo.publishType ? "人找车" : "车找人" }}</span>
                </div>
              </cell>
              <cell title="出发地：">{{publishInfo.startAddress}}</cell>
              <cell title="目的地：">{{publishInfo.endAddres}}</cell>
              <cell title="出发时间：">{{ publishInfo.startTime }}</cell>
              <cell title="发布人：">{{publishInfo.contacts}}</cell>
              <cell title="手机号：">{{ publishInfo.contactsPhone }}</cell>
              <cell title="车牌号：">{{ publishInfo.carNumber }}</cell>
              <cell title="人数/空位：">{{ publishInfo.vacancy }}</cell>
              <cell title="发布时间：">{{ publishInfo.publishTime }}</cell>
            </group>
            <group title="备注" v-if="publishInfo">
              <cell class="textarea">
                <x-textarea @on-focus="setTextarea" :max="200" v-model="publishInfo.remarks"></x-textarea>
              </cell>

            </group>
          </div>
        </scroll>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {XHeader, Group, Cell, XTextarea} from 'vux'
  import Scroll from '../../base/scroll/scroll'
  import {mapGetters} from 'vuex'

  export default {
    name: 'detail',
    components: {
      XHeader,
      Group,
      Cell,
      XTextarea,
      Scroll
    },
    data() {
      return {
        publishInfo: ''
      }
    },
    computed: {},
    mounted() {
      setTimeout(() => {
        this._initDetail()
      }, 20)
    },
    methods: {
      _initDetail() {
        this.publishInfo = this.getPublishInfo()
      },
      setTextarea() {
        if (this.publishInfo) {
          let textareaBox = document.querySelector('.textarea')
          if (!textareaBox) {
            return false
          }
          let textarea = textareaBox.querySelector('textarea')
          textarea.setAttribute('disabled', true)
        }
      },
      ...mapGetters({
        getPublishInfo: 'getPublishInfo'
      })
    },
    watch: {}
  }
</script>

<style scoped lang="scss">
  @import '../../assets/css/base-standard';

  .content-body {
    overflow: hidden;
  }

  .detail-main {
    position: absolute;
    top: 46px;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
