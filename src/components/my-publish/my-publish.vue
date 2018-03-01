<template>
  <transition name="page">
    <div class="page-style">
      <x-header :left-options="{backText: ''}">我的发布</x-header>
      <div class="page-content">
        <scroll :data="list" ref="scroll" :pullUpLoad="pullUpLoadObj"
                :pullDownRefresh="pullDownRefreshObj" @pullingDown="onPullingDown" @pullingUp="onPullingUp">
          <div class="list-box">
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
          </div>
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
  import {isType} from '../../common/js/base'
  import {numsPerPage} from '../../api/config'

  export default {
    name: 'my-publish',
    data() {
      return {
        list: [],
        currentPageIndex: 0,
        pullDownRefreshObj: {
          threshold: parseInt(50),
          stop: parseInt(40),
          txt: '刷新成功'
        },
        pullUpLoadObj: {
          threshold: parseInt(50),
          txt: {
            more: '加载更多',
            noMore: '已经到底了！'
          }
        }
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
      onPullingUp() {
        this.currentPageIndex += numsPerPage
        setTimeout(() => {
          queryMyData(this.currentPageIndex).then((res) => {
            if (!res.data.result) {
              this.$refs.scroll.forceUpdate()
              return
            }
            this._normalizeResultList(res, true)
            this.$refs.scroll.forceUpdate(true)
          }).catch()
        }, 1500)
      },
      onPullingDown() {
        setTimeout(() => {
          this._loadData()
        }, 1000)
      },
      _loadData() {
        queryMyData().then((res) => {
          let result = res.data.result || null
          if (result && isType(result) === '[object Object]' && !result.value) {
            this.$vux.toast.show({
              type: 'warn',
              text: result.msg
            })
            return false
          }
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

  .list-box {
    padding-top: 1px;
    padding-bottom: 10px;
  }

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
