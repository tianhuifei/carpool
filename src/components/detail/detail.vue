<template>

  <div class="page-style">
    <x-header :left-options="{backText: ''}">详细信息</x-header>
    <div class="detail-main">
      <t-loading v-if="!this.publishInfo"></t-loading>
      <scroll>
        <div class="content-body">
          <group label-width="5.5em" label-margin-right="1em" label-align="right" v-if="publishInfo">
            <cell title="拼车类型：">
              <div class=""><span :class="publishInfo.publishType ? 'people-for-car' : 'car-for-people'">{{ publishInfo.publishType ? "人找车" : "车找人" }}</span>
              </div>
            </cell>
            <cell title="出发地：">{{publishInfo.startAddress}}</cell>
            <cell title="目的地：">{{publishInfo.endAddres}}</cell>
            <cell title="出发时间：">{{ publishInfo.startTime }}</cell>
            <cell title="发布人：">{{publishInfo.contacts}}</cell>
            <cell title="手机号：">
              <a class="phone-a" :href="'tel:' +  publishInfo.contactsPhone">{{
                publishInfo.contactsPhone }}</a>
            </cell>
            <cell title="车牌号：">{{ publishInfo.carNumber }}</cell>
            <cell title="人数/空位：">{{ publishInfo.vacancy }}</cell>
            <cell title="发布时间：">{{ publishInfo.publishTime }}</cell>
          </group>
          <group title="备注" v-if="publishInfo">
            <div class="textarea">
              <x-textarea @on-focus="setTextarea" :max="200" v-model="publishInfo.remarks"></x-textarea>
            </div>

          </group>
        </div>
      </scroll>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import {XHeader, Group, Cell, XTextarea} from 'vux'
  import Scroll from '../../base/scroll/scroll'
  import {mapGetters} from 'vuex'
  import {queryDetail} from '../../api/detail/detail'
  import TLoading from '../../base/T-loading/T-loading'

  export default {
    name: 'detail',
    components: {
      XHeader,
      Group,
      Cell,
      XTextarea,
      Scroll,
      TLoading
    },
    data() {
      return {
        publishInfo: ''
      }
    },
    computed: {},
    beforeCreate() {
    },
    created() {
    },
    beforeMount() {
    },
    mounted() {
    },
    activated() {
      setTimeout(() => {
        this._initDetail(this.$route.params)
      }, 20)
    },
    methods: {
      _initDetail(params) {
        if (!params && !params.id) {
          return
        }
        queryDetail(params.id).then((res) => {
          if (res && res.data && res.data.result) {
            this.publishInfo = res.data.result[0]
          }
        }).catch(() => {
        })
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
    watch: {},
    beforeRouteLeave(to, from, next) {
      if (this.publishInfo) {
        this.publishInfo = null
      }
      next()
    }
  }
</script>

<style scoped lang="scss">
  @import '../../assets/css/base-standard';
  .weui-textarea{
    font-size: $base-font-size;
    color:$basic-font-color;
  }
  .content-body {
    overflow: hidden;
  }

  .detail-main {
    position: absolute;
    top: 46px;
    bottom: 0;
    left: 0;
    right: 0;
    .phone-a {
      color: $app-color;
    }
  }

  .weui-cell {
    font-size: 16px;
  }
</style>
