<template>
  <transition name="page">
    <div class="page-style">
      <x-header :left-options="{backText: ''}">我的发布</x-header>
      <div class="page-content">
        <scroll>
          <t-card :footer="true" v-for="(item,key,index) in list" :key="key">
            <div class="card-content">
              <div class="card-content-left">
                <div class="card-content-left-title">
                  <p>{{item.startAddress}} - {{item.endAddres}}</p>
                </div>
                <div class="card-content-left-date">
                  发布时间：<span>{{item.publishTime}}</span>
                </div>
              </div>
              <div class="card-content-right">
                <span :class="item.publishType ? 'people-for-car' : 'car-for-people'">{{ item.publishType ? "人找车" : "车找人" }}</span>
              </div>
            </div>
            <div class="card-btn-box" slot="footer">
              <div>
                <x-button mini type="primary">编辑</x-button>
              </div>
              <div>
                <x-button mini v-if="item.becomeDue" :disabled="item.becomeDue">已过期</x-button>
              </div>
              <div>
                <x-button mini type="warn">删除</x-button>
              </div>
            </div>
          </t-card>
        </scroll>

      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {XHeader, XButton} from 'vux'
  import {queryMyData} from '../../api/myPublish/myPublish'
  import TCard from '../../base/T-card/T-card'
  import {createPublishInfo} from '../../common/js/publishInfo'
  import Scroll from 'base/scroll/scroll'

  export default {
    name: 'my-publish',
    data() {
      return {
        list: []
      }
    },
    components: {
      XHeader,
      TCard,
      XButton,
      Scroll
    },
    activated() {
      setTimeout(() => {
        this._loadData()
      }, 20)
    },
    methods: {
      _loadData() {
        queryMyData().then((res) => {
          this._normalizeResultList(res)
        }).catch()
      },
      _normalizePublishInfo(list) {
        let publiObj = []
        list.forEach((item) => {
          publiObj.push(createPublishInfo(item))
        })
        return publiObj
      },
      _normalizeResultList(res, type) {
        let result = res.data.result
        if (result) {
          if (type) {
            this.list = this.list.concat(this._normalizePublishInfo(result))
          } else {
            this.list = this._normalizePublishInfo(result)
          }
        } else {
          this.list = []
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/base-standard";

  $card-content-left-title: 14px;
  .card-content {
    display: flex;
    .card-content-left {
      flex: 4;
      .card-content-left-title {
        @include text-overflow(1);
        font-size: $card-content-left-title;
        color: $black-font-color;
        font-weight: bolder;
      }
      .card-content-left-date {
        margin-top: 15px;
        color: $basic-font-color;
        font-size: $base-font-size;
      }
    }
    .card-content-right {
      flex: 1;
      span {
        margin: 0 auto;
      }
    }
    .card-content-right, .card-content-left {

    }
  }

  .card-btn-box {
    flex: 1;
    display: flex;
    @include justify-items;
    & > div {
      flex: 1;
      @include justify-items;
    }
  }
</style>
