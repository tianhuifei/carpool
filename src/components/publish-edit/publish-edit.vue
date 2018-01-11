<template>
  <transition name="page">
    <div class=" page-style">
      <x-header :left-options="{backText: ''}">{{title}}</x-header>
      <div class="page-content">
        <scroll>
          <div class="content-body">
            <group gutter="10px" label-width="5.5em" label-margin-right="1em" label-align="justify">
              <popup-picker :title="publishObj.publishTitle" :data="typeList" v-model="publishObj.publishValue"
                            @on-change="setPublishType"></popup-picker>
            </group>
            <group gutter="10px" label-width="5.5em" label-margin-right="1em" label-align="justify">
              <x-input v-model="carpoolInfo.startAddress" :required="true" title="出发地：" placeholder="请输入出发地"></x-input>
              <x-input v-model="carpoolInfo.endAddres" :required="true" title="目的地：" placeholder="请输入目的地"></x-input>
              <datetime @on-change="setDateTime" :required="true" :title="publishObj.setDateTitle"
                        format="YYYY-M-DD HH:mm"
                        :start-date="publishObj.startDate" :end-date="publishObj.endDate" year-row="{value}年"
                        month-row="{value}月" day-row="{value}日" hour-row="{value}点" minute-row="{value}分"
                        confirm-text="完成" cancel-text="取消" value-text-align="left"></datetime>
            </group>
            <group gutter="10px" label-width="5.5em" label-margin-right="2em" label-align="justify">
              <x-input is-type="china-name" :required="true" title="联系人：" placeholder="请输入联系人"
                       v-model="carpoolInfo.contacts"></x-input>
              <x-input mask="999 9999 9999" type="tel" is-type="china-mobile" :required="true" title="手机号："
                       v-model="carpoolInfo.contactsPhone"
                       placeholder="请输入手机号"></x-input>
              <x-input title='人数/空位：' :required="true" v-model="carpoolInfo.vacancy" :max="2"
                       placeholder="人数/空位"></x-input>
            </group>
            <group title="备注">
              <cell class="textarea">
                <x-textarea placeholder="如以上信息不完整，那你可以在此处填写完整的哦 " :max="200"
                            v-model="publishObj.publishTitle"></x-textarea>
              </cell>
            </group>
            <div class="liability-box">
              <check-icon :value.sync="publishObj.liability">阅读并同意 <a href="javascript:void(0)">《免责声明》</a></check-icon>
            </div>
          </div>
        </scroll>
      </div>
      <x-dialog v-model="publishObj.liability" class="dialog-demo" hide-on-blur>
        <div class="img-box">
          <img src="https://static.vux.li/demos/v2/static/img/01.06186f7.jpg" style="max-width:100%">
        </div>
        <div @click="publishObj.liability=false">
          <span class="vux-close"></span>
        </div>
      </x-dialog>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {XHeader, Group, Cell, PopupPicker, XInput, Datetime, XTextarea, CheckIcon, XDialog} from 'vux'
  import Scroll from 'base/scroll/scroll'
  import {presentTime} from '../../api/publish-edit'

  export default {
    name: 'publish-edit',
    data() {
      return {
        showHideOnBlur: true,
        publishObj: {
          publishTitle: '拼车类型：',
          publishValue: [],
          setDateTitle: '出发时间:',
          startDate: '2018-01-11',
          endDate: '2018-12-31',
          liabilityTitle: '',
          liability: false
        },
        typeList: [['车找人', '人找车']],
        title: '',
        id: '',
        type: '',
        carpoolInfo: {
          publishType: '',
          startAddress: '',
          endAddres: '',
          contacts: '',
          contactsPhone: '',
          carNumber: '',
          vacancy: '',
          remarks: '',
          startDate: '',
          startTime: '',
          openId: '',
          publishId: '',
          publishTime: ''
        }
      }
    },
    components: {
      XHeader,
      Group,
      Scroll,
      Cell,
      PopupPicker,
      XInput,
      Datetime,
      XTextarea,
      CheckIcon,
      XDialog
    },

    mounted() {
      this._initPublish()
      this._getDate()
    },
    methods: {
      setPublishType(val) {
        this.carpoolInfo.publishType = val === '人找车' ? 1 : 0
      },
      setDateTime(val) {
        if (!val) {
          return
        }
        let dataObj = val.split(' ')
        this.carpoolInfo.startDate = dataObj[0]
        this.carpoolInfo.startTime = dataObj[1]
      },
      _initPublish() {
        this.title = this.$route.params.id === '-1' ? '发布' : '编辑'
        this.id = this.$route.params.id
        this.type = this.$route.params.type
      },
      _getDate() {
        presentTime().then((res) => {
          console.log(res)
        }).catch().finally(() => {
          console.log('都会执行')
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/base-standard";
  .content-body{
    overflow: hidden;
  }
  .liability-box{
    padding:10px 15px;
    a{
      color:$liability-color;
    }
  }

  .dialog-demo {
    .weui-dialog{
      border-radius: 8px;
      padding-bottom: 8px;
    }
    .dialog-title {
      line-height: 30px;
      color: #666;
    }
    .img-box {
      height: 350px;
      overflow: hidden;
    }
    .vux-close {
      margin-top: 8px;
      margin-bottom: 8px;
    }
  }
</style>
