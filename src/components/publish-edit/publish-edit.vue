<template>

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
              <x-input :is-type="isStartAddress" v-model="carpoolInfo.startAddress" :required="true" title="出发地："
                       placeholder="请输入出发地"></x-input>
              <x-input :is-type="isEndAddress" v-model="carpoolInfo.endAddres" :required="true" title="目的地："
                       placeholder="请输入目的地"></x-input>
              <datetime v-model="publishObj.startDateTime" @on-change="setDateTime" :required="true"
                        :title="publishObj.setDateTitle"
                        format="YYYY-M-DD HH:mm"
                        :start-date="publishObj.startDate" :end-date="publishObj.endDate" year-row="{value}年"
                        month-row="{value}月" day-row="{value}日" hour-row="{value}点" minute-row="{value}分"
                        confirm-text="完成" cancel-text="取消" value-text-align="left"></datetime>
            </group>
            <group gutter="10px" label-width="5.5em" label-margin-right="2em" label-align="justify">
              <x-input is-type="china-name" type="text" :required="true" title="联系人：" placeholder="请输入联系人"
                       v-model="carpoolInfo.contacts"></x-input>
              <x-input mask="999 9999 9999" type="tel" :max="13" :is-type="isPhone" :required="true" title="手机号："
                       v-model="carpoolInfo.contactsPhone"
                       placeholder="请输入手机号"></x-input>
              <x-input v-if="!carpoolInfo.publishType" title='车牌号：' v-model="carpoolInfo.carNumber" type="text"
                       placeholder="请输入车牌号"></x-input>
              <x-input :max="2" title='人数/空位：' type="number" :required="true" v-model="carpoolInfo.vacancy"
                       placeholder="人数/空位"></x-input>
            </group>
            <group title="备注">
              <x-textarea placeholder="如以上信息不完整，那你可以在此处填写完整的哦 " :max="200"
                          v-model="carpoolInfo.remarks"></x-textarea>
            </group>
            <div class="liability-box">
              <check-icon :value.sync="publishObj.submitBtn">阅读并同意</check-icon>
              <a @click="showDisclaimer" href="javascript:void(0)">《免责声明》</a>
            </div>
            <div class="" style="padding:5px 10px;padding-bottom:15px;">
              <x-button v-if="isSubmit" @click.native="submitPublish" :disabled="!publishObj.submitBtn" type="primary">
                立即发布
              </x-button>
              <x-button v-if="!isSubmit" @click.native="onUpdate" :disabled="!publishObj.submitBtn" type="primary">更新
              </x-button>
            </div>
          </div>
        </scroll>
      </div>
      <disclaimer :is-show.sync="publishObj.disclaimer"></disclaimer>
    </div>

</template>

<script type="text/ecmascript-6">
  import {XHeader, Group, Cell, PopupPicker, XInput, Datetime, XTextarea, CheckIcon, XButton} from 'vux'
  import {presentTime, addPublish, queryEdit, updateInfo} from '../../api/publish-edit'
  import {formatTime} from '../../common/js/base'

  const Scroll = () => import('base/scroll/scroll.vue').then(m => m.default)
  const disclaimer = () => import('components/disclaimer/disclaimer.vue').then(m => m.default)

  export default {
    name: 'publish-edit',
    data() {
      return {
        isSubmit: true,
        showHideOnBlur: true,
        publishObj: {
          checkPhone: false,
          checkStartAdd: false,
          checkEndAdd: false,
          submitBtn: false,
          disclaimer: false,
          publishTitle: '拼车类型：',
          publishValue: [],
          setDateTitle: '出发时间:',
          startDate: '',
          endDate: '',
          liabilityTitle: '',
          liability: false,
          startDateTime: ''
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
      disclaimer,
      XButton
    },
    computed: {},
    mounted() {
      this._initPublish()
      this._getDate()
    },
    activated() {
      // this._initPublish()
      // this._getDate()
    },
    methods: {
      onUpdate() {
        if (event._constructed) {
          return
        }
        if (!this._checkCondition()) {
          return false
        }
        updateInfo(this.carpoolInfo).then((res) => {
          if (res.data && res.data.result) {
            this.$vux.toast.show({
              type: 'success',
              text: '更新成功'
            })

            if (this.$route.meta && !this.$route.meta.refresh) {
              this.$route.meta.refresh = true
            }
            setTimeout(() => {
              this.$router.go(-1)
            }, 500)
          } else {
            this.$vux.toast.show({
              type: 'warn',
              text: '更新失败'
            })
          }
        }).catch()
      },
      submitPublish() {
        if (event._constructed) {
          return
        }
        if (!this._checkCondition()) {
          return false
        }
        addPublish(this.carpoolInfo).then((res) => {
          if (res.data && res.data.result) {
            this.$vux.toast.show({
              type: 'success',
              text: '发布成功'
            })
            if (this.$route.meta && !this.$route.meta.refresh) {
              this.$route.meta.refresh = true
            }
            setTimeout(() => {
              this.$router.go(-1)
            }, 500)
          } else {
            this.$vux.toast.show({
              type: 'warn',
              text: '发布失败'
            })
          }
        }).catch().finally()
      },
      showDisclaimer() {
        this.publishObj.disclaimer = true
      },
      setPublishType(val) {
        this.carpoolInfo.publishType = val[0] === '人找车' ? 1 : 0
      },
      setDateTime(val) {
        if (!val) {
          return
        }
        let dataObj = val.split(' ')
        this.carpoolInfo.startDate = dataObj[0]
        this.carpoolInfo.startTime = dataObj[1]
      },
      isPhone(value) {
        value = value.replace(/\s/g, '')
        let phoneRex = /^134[0-8]\d{7}$|^13[^4]\d{8}$|^14[5-9]\d{8}$|^15[^4]\d{8}$|^16[6]\d{8}$|^17[0-8]\d{8}$|^18[\d]{9}$|^19[8,9]\d{8}$/
        this.publishObj.checkPhone = phoneRex.test(value)
        return {
          valid: this.publishObj.checkPhone,
          msg: '请输入正确手机号'
        }
      },
      isStartAddress(value) {
        let addressRex = /^[\u4e00-\u9fa5A]{2,}/
        this.publishObj.checkStartAdd = addressRex.test(value)
        return {
          valid: this.publishObj.checkStartAdd,
          msg: '请输入有效的地址'
        }
      },
      isEndAddress(value) {
        let addressRex = /^[\u4e00-\u9fa5A]{2,}/
        this.publishObj.checkEndAdd = addressRex.test(value)
        return {
          valid: this.publishObj.checkEndAdd,
          msg: '请输入有效的地址'
        }
      },
      _initPublish() {
        this.title = this.$route.params.id === '-1' ? '发布' : '编辑'
        this.id = this.$route.params.id
        this.type = this.$route.params.type
        if (this.id !== '-1' && this.type === 'edit') {
          this.isSubmit = false
          this._queryEdit(this.id)
        }
      },
      _queryEdit(id) {
        queryEdit(id).then((res) => {
          let editItem = res.data.result
          if (!editItem && !editItem) {
            return
          }
          editItem = editItem[0]
          this.publishObj.publishValue = [editItem.publishType ? '人找车' : '车找人']
          this.carpoolInfo.publishType = editItem.publishType
          this.carpoolInfo.startAddress = editItem.startAddress
          this.publishObj.checkStartAdd = editItem.startAddress
          this.carpoolInfo.endAddres = editItem.endAddres
          this.publishObj.checkEndAdd = editItem.endAddres
          this.carpoolInfo.contacts = editItem.contacts
          this.carpoolInfo.contactsPhone = editItem.contactsPhone
          this.publishObj.checkPhone = editItem.contactsPhone
          this.carpoolInfo.carNumber = editItem.carNumber
          this.carpoolInfo.vacancy = editItem.vacancy
          this.carpoolInfo.remarks = editItem.remarks
          let startTimes = formatTime(new Date(editItem.startTime))
          this.carpoolInfo.startDate = startTimes.split(' ')[0]
          this.carpoolInfo.startTime = startTimes.split(' ')[1]
          this.carpoolInfo.openId = editItem.openId
          this.carpoolInfo.publishId = editItem.publishId
          this.publishObj.startDateTime = startTimes.split(' ')[0] + ' ' + startTimes.split(' ')[1]
        }).catch()
      },
      _getDate() {
        presentTime().then((res) => {
          let dateObj = res.data.result
          this.publishObj.startDate = dateObj.dateObj.start
          this.publishObj.endDate = dateObj.dateObj.end
        }).catch().finally(() => {

        })
      },
      _checkCondition() {
        if (this.carpoolInfo.publishType === '') {
          this.$vux.toast.show({
            type: 'warn',
            text: '请选择拼车类型'
          })
          return false
        }
        if (!this.publishObj.checkStartAdd) {
          this.$vux.toast.show({
            type: 'warn',
            text: '请输入出发地'
          })
          return false
        }
        if (!this.carpoolInfo.startDate) {
          this.$vux.toast.show({
            type: 'warn',
            text: '请输入出发日期'
          })
          return false
        }
        if (!this.publishObj.checkEndAdd) {
          this.$vux.toast.show({
            type: 'warn',
            text: '请输入目的地'
          })
          return false
        }
        if (!this.carpoolInfo.contacts) {
          this.$vux.toast.show({
            type: 'warn',
            text: '请输入联系人'
          })
          return false
        }
        if (!this.publishObj.checkPhone) {
          this.$vux.toast.show({
            type: 'warn',
            text: '请输入联系方式'
          })
          return false
        }
        if (!this.carpoolInfo.vacancy) {
          this.$vux.toast.show({
            type: 'warn',
            text: '请输入人数/空位'
          })
          return false
        }
        return true
      },
      _setCarPoolInfoEmpty() {
        for (let item in this.carpoolInfo) {
          this.carpoolInfo[item] = ''
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/base-standard";

  .content-body {
    overflow: hidden;
  }

  .liability-box {
    padding: 10px 15px;
    a {
      display: inline-block;
      color: $liability-color;
      line-height: 23px;
      vertical-align: middle;
    }
  }

  .weui-cell {
    font-size: 16px !important;
  }
</style>
