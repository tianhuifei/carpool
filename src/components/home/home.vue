<template>
  <div class="home-main">
    <scroll :data="publishList" ref="scroll" @pullingDown="onPullingDown" @pullingUp="onPullingUp"
            :pullUpLoad="pullUpLoadObj"
            :pullDownRefresh="pullDownRefreshObj" class="">
      <swiper height="130px" :show-desc-mask="false" :auto="true" :loop="true" :list="swiper"></swiper>

      <!-- 出发地，目的地 -->
      <div class="main-search-box">
        <div class="start-address">
          <input placeholder="始发地" v-model="startAddress" type="text">
        </div>
        <div class="end-address">
          <input placeholder="目的地" v-model="endAddress" type="text">
        </div>
        <div class="search-btn-box" @click="queryStartEnd">
          搜索
        </div>
      </div>
      <!-- 出发地，目的地 -->

      <!--查找，发布-->
      <div class="search-query-publish">
        <div>
          <x-button class="car-to-people" @click.native="queryTypeList(0)" :mini="true" type="default">车找人</x-button>
        </div>
        <div>
          <x-button class="people-to-car" @click.native="queryTypeList(1)" :mini="true" type="default">人找车</x-button>
        </div>
        <div>
          <x-button class="publish-btn" :mini="true" type="default">发布</x-button>
        </div>
      </div>
      <!--查找，发布-->
      <publish-list @selectPublish="select" :list="publishList"></publish-list>
    </scroll>
  </div>

</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import {XButton, Swiper} from 'vux'
  import PublishList from 'components/publish-list/publish-list'
  import {getQueryALl, queryStartEnd, queryPublishType, pullUp} from '../../api/resultList'
  import {mapMutations} from 'vuex'
  import {createPublishInfo} from '../../common/js/publishInfo'

  export default {
    components: {
      Scroll,
      XButton,
      PublishList,
      Swiper
    },
    data() {
      return {
        publishList: [],
        startAddress: '',
        endAddress: '',
        publishType: -1,
        currentPageIndex: 0,
        swiper: [
          {
            url: 'javascript:void(0);',
            img: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000001ceytP1fMEiv.jpg',
            title: ''
          },
          {
            url: 'javascript:void(0);',
            img: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000002z8Lbj3UmMDb.jpg',
            title: ''
          },
          {
            url: 'javascript:void(0);',
            img: 'http://y.gtimg.cn/music/photo_new/T003R720x288M0000048zX052OMIaE.jpg',
            title: ''
          },
          {
            url: 'javascript:void(0);',
            img: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000003ZY2ys3b5RFT.jpg',
            title: ''
          }
        ],
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
    mounted() {
      setTimeout(() => {
        this.queryAll()
      }, 20)
    },
    methods: {
      queryAll(pullFlag) {
        this.publishType = null
        this.currentPageIndex = 0
        getQueryALl().then((res) => {
          this._normalizeResultList(res)
          if (pullFlag) {
            this.$refs.scroll.forceUpdate(pullFlag)
          }
        }).catch(() => {
          if (pullFlag) {
            this.$refs.scroll.forceUpdate()
          }
        })
      },
      select(item) {
        this.$router.push({
          path: '/detail/' + item.publishId
        })
        this.setPublishInfo(item)
      },
      onPullingDown() {
        this.publishType = -1
        this.currentPageIndex = 0
        setTimeout(() => {
          this.queryAll(true)
        }, 1000)
      },
      onPullingUp() {
        this.currentPageIndex += 5
        setTimeout(() => {
          pullUp(this.publishType, this.currentPageIndex, this.startAddress, this.endAddres).then((res) => {
            this._normalizeResultList(res, true)
          }).catch(() => {
            this.$refs.scroll.forceUpdate()
          })
        }, 1500)
      },
      queryStartEnd() {
        this.publishType = -1
        this.currentPageIndex = 0
        let start = this.startAddress
        let end = this.endAddress
        if (!start) {
          return
        }
        if (!end) {
          return
        }
        queryStartEnd(this.startAddress, this.endAddress).then((res) => {
          let result = res.result
          if (result) {
            this.publishList = this._normalizePublishInfo(result)
          }
        }).catch(() => {

        })
      },
      queryTypeList(type) {
        this.publishType = type
        this.currentPageIndex = 0
        if (event._constructed) {
          return
        }
        this.publishType = type
        queryPublishType(type).then((res) => {
          this._normalizeResultList(res)
        }).catch(() => {
        })
      },
      _normalizePublishInfo(list) {
        let publiObj = []
        list.forEach((item) => {
          publiObj.push(createPublishInfo(item))
        })
        return publiObj
      },
      _normalizeResultList(res, type) {
        let result = res.result
        if (result) {
          if (type) {
            this.publishList.concat(this._normalizePublishInfo(result))
          } else {
            this.publishList = this._normalizePublishInfo(result)
          }
        }
      },
      ...mapMutations({
        setPublishInfo: 'SET_PUBLISINFO'
      })
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/base-standard";

  .home-main {
    position: fixed;
    top: 0;
    bottom: $tab-bar-height;
    width: 100%;
    .home-main-content {
      height: 100%;
      overflow: hidden;
    }
  }

  .main-search-box {
    margin-bottom: 5px;
    width: 100%;
    margin-top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: $app-color;
    .start-address, .end-address {
      flex: 3;
      padding: 8px 5px;
      input {
        border: 0;
        outline: none;
        width: 100%;
        border-radius: 10px;
        height: 25px;
        padding: 0 7px;
        box-sizing: border-box;
        font-size: 12px;
      }
    }
    .search-btn-box {
      text-align: center;
      flex: 2;
      font-size: 14px;
      color: $color-white;
      line-height: 1.5;
    }
  }

  .search-query-publish {
    height: 40px;
    background-color: $color-white;
    margin: 5px 0;
    display: flex;
    @include justify-items;
    & > div {
      flex: 1;
      @include justify-items;
      button {
        color: $color-white;
      }
      button.car-to-people {
        background-color: $car-to-people-color;
      }
      button.people-to-car {
        background-color: $people-to-car-color;
      }
      button.publish-btn {
        color: #333;
      }
    }
  }

</style>
