<template>
  <div class="">
    <x-dialog :show.sync="isShow" class="dialog-demo">
      <div class="dialog-title">
        免责声明
      </div>
      <div class="img-box long-text" style="">
        <!--<img src="https://static.vux.li/demos/v2/static/img/01.06186f7.jpg" style="max-width:100%">-->

        <p>
          免责声明：本平台不对任何人提供任何形式的担保，所有信息仅供参考，不承担由此产生的任何民事及法律责任。用户使用本平台即视为同意。
        </p>
        <h3>司机篇</h3>
        <p>1、要确认好拼车人信息。详细记录拼车者 姓名、年龄、 身份证、个人及家庭联系方式等，最好有认识的人一起拼车。</p>
        <p>2、与乘客约好出发时间，出发前1天最好给乘客通一次 电话提醒对方。</p>
        <p>3、要明确拼车所需的费用。尤其是一旦发生交通违章造成罚款的分担，以及车辆发生问题所带来的维修费用的承担。</p>
        <p>4、要和乘客明确是上车前支付还是上车后支付，还应明确额外费用的支付方式。</p>
        <p>5、合理规划时间，总路程不宜超过十小时，不走夜路。不要疲劳驾驶，同时保管好个人财物。</p>
        <p>6、车主和同车人应分别将了解到的对方信息发送给至少 一名亲友，以备出现问题后联系使用，并有意让对方知道这个情况。</p>
        <p>7、事先确定好关于吸烟等细节的规则,特别是有女性和小孩在场的时候。</p>
        <p>8、签协议和买保险是非常有必要的。</p>
        <h3>乘客篇</h3>
        <p>1、拼车者最好是熟悉的。与陌生人拼车时，要注意预防骗子或劫车者，车主和乘车人有必要互相了解对方的真实身份及联系方式。</p>
        <p>2、车主和同车人应分别将了解到的对方信息发送给至少一名亲友，以备出现问题后联系使用，并有意让对方知道这个情况。</p>
        <p>3、搭车人应事先了解驾驶员的技术水平、所用车型。关键是有无 跑长途的经历。</p>
        <p>4、要和乘客明确是上车前支付还是上车后支付，还应明确额外费用的支付方式。</p>
        <p>5、总路程不宜超过10小时，不走夜路。避免心急赶路和疲劳驾驶，合理安排休息。</p>
        <p>6、车主对于没有驾驶过所乘车型的同车人，尽量不要让其参与驾驶。</p>
        <p>7、不要在途中向同车不熟悉的人炫耀自己的或者所携带财物情况。</p>
        <p>8、女性车主或乘车人应有熟悉的男性成年亲友相伴。</p>
        <p>9、事先确定好关于吸烟等细节的规则,特别是有女性和小孩在场的时候 。</p>
        <p>10、签协议和买保险是非常有必要的。</p>

      </div>
      <div @click="closeDialog">
        <span class="vux-close carpoll car-close"></span>
      </div>
    </x-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
  import {XDialog} from 'vux'
  import Scroll from 'base/scroll/scroll'

  export default {
    name: 'disclaimer',
    props: {
      isShow: {
        type: Boolean,
        default: false
      }
    },
    components: {
      XDialog,
      Scroll
    },
    data() {
      return {}
    },
    methods: {
      closeDialog() {
        this.$emit('update:isShow', false)
      }
    },
    watch: {}
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/base-standard";

  .dialog-demo {
    .weui-dialog {
      border-radius: 8px;
      padding-bottom: 8px;
    }
    .dialog-title {
      line-height: 30px;
      color: $app-color;
    }
    .img-box {
      height: 350px;
      overflow: hidden;
      &.long-text {
        padding: 15px 15px;
        overflow: scroll;
        -webkit-overflow-scrolling: touch;
        color:$basic-font-color;
        line-height: 1.5;
        font-size:14px;
        text-align: left;
        h3{
          font-weight: 700;
          margin:10px 0;
          text-align:center;
        }
        p{
          text-indent: 2em;
          margin-bottom:5px;
        }
      }
    }
    .vux-close {
      font-size: 24px;
      margin-top: 8px;
      margin-bottom: 8px;
      position: relative;
      display: inline-block;
      vertical-align: middle;
      color: #999;
      width: 24px;
      height: 24px;
    }
  }
</style>
