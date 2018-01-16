<template>
  <div class="result-content">
    <div class="result-item" :class="{ 'become-due': item.becomeDue }" v-for="(item,index) in list">
      <div class="result-left" @click="selectPublish(item)">
        <div class="result-address">
          <span
            :class="item.publishType ? 'people-for-car' : 'car-for-people'">{{ item.publishType ? "人找车" : "车找人" }}</span>
          <p><span>{{ item.startAddress }}</span>-<span>{{ item.endAddres }}</span></p>
        </div>
        <div class="result-date">
          发车时间：
          <span class="start-time">
            {{ item.startTime }}
          </span>
        </div>
        <div class="result-info">
          <div class="show-info">
            {{ item.vacancy }}空位
          </div>
          <div class="show-see">
            <countup :duration=1 :start-val=0 :end-val="item.seeNum"></countup> <span class=" carpoll car-see"></span>
          </div>
        </div>
      </div>
      <div class="result-right">
        <a :href="'tel:' + item.contactsPhone "></a>
        <div class="result-phone">
          <span class="carpoll car-phone"></span>
        </div>
        <div class="add-time">
          {{ item.publishTime }}
        </div>
      </div>
    </div>
    <divider v-show="dividerText">{{dividerText}}</divider>
  </div>
</template>

<script type="text/ecmascript-6">
  // import {mapMutations} from 'vuex'
  import {Divider, Countup} from 'vux'

  export default {
    components: {
      Divider,
      Countup
    },
    props: {
      list: {
        type: Array,
        default: null
      }
    },
    watch: {
      list() {
        this.dividerText = this.list && this.list.length ? '' : '没有找到匹配的信息'
      }
    },
    data() {
      return {
        dividerText: ''
      }
    },
    methods: {
      selectPublish(item) {
        this.$emit('selectPublish', item)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/base-standard";

  $b-color: #efefef;
  .result-item {
    position: relative;
    &:before, &:after {
      position: absolute;
      left: 0;
      right: 0;
      height: 1px;
      transform: scaleY(.5);
      background: $b-color;
      content: ''
    }
    &:before {
      top: 0;
    }
    &:after {
      bottom: 0;
    }
    &.become-due {
      .people-for-car, .car-for-people {
        background: $past-font-color;
      }
      .result-left .result-address p {
        color: $past-font-color;
      }
    }
    background: $color-white;
    margin-bottom: 5px;
    @include justify-items;
    padding: 5px 0 5px 8px;
    .result-left {
      flex: 3;
      flex-direction: column;
      padding-right: 10px;
      box-sizing: border-box;
      & > div {
        width: 100%;
        box-sizing: border-box;
      }
      .result-address {
        position: relative;
        padding-left: 52px;
        margin: 5px 0;
        & > span {
          display: block;
          position: absolute;
          left: 0;
          top: -1px;
          font-size: 12px;
          color: $color-white;
          padding: 2px 3px;
          text-align: center;
          border-radius: 2px;
          height: 15px;
          line-height: 15px;
        }
        p {
          color: $app-color;
          font-weight: 600;
          font-size: 16px;
          span {
            display: inline-block;
            max-width: 40%;
            @include text-overflow(1)
          }
        }
      }
      .result-date {
        padding: 5px 0;
        font-size: 12px;
        color: $basic-font-color;
        .start-time {
          @include text-overflow(1);
        }
      }
      .result-info {
        display: flex;
        color: $basic-font-color;
        font-size: 12px;
        padding: 5px 0;
        & > div {
          height: 16px;
          line-height: 16px;
        }
        .show-info {
          flex: 1;
        }
        .show-see {
          flex: 1;
          text-align: right;
          padding-right: 20px;
          position: relative;
          span.car-see {
            position: absolute;
            right: 0;
            top: 1px;
          }
        }
      }
    }
    .result-right {
      padding: 0 5px;
      flex: 1;
      align-self: stretch;
      border-left: 1px solid $past-font-color;
      display: flex;
      justify-items: center;
      flex-direction: column;
      .result-phone {
        flex: 3;
        @include justify-items;
        span {
          font-size: 55px;
          color: $app-color;

        }
      }
      .add-time {
        flex: 1;
        @include justify-items;
        color: $basic-font-color;
        font-size: 12px;
        text-align: center;
      }

    }
  }
</style>
