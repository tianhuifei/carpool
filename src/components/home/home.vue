<template>
  <div class="home-main">
    <scroll :data="publishList" ref="scroll" @pullingDown="onPullingDown" @pullingUp="onPullingUp"
            :pullUpLoad="pullUpLoadObj"
            :pullDownRefresh="pullDownRefreshObj" class="">
      <swiper height="130px" :show-desc-mask="false" :auto="true" :loop="true" :list="swiper"></swiper>

      <!-- 出发地，目的地 -->
      <div class="main-search-box">
        <div class="start-address">
          <input ref="startAddress" placeholder="始发地" v-model="startAddress" type="text">
        </div>
        <div class="end-address">
          <input ref="endAddress"  placeholder="目的地" v-model="endAddress" type="text">
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
          <router-link to="/publish/-1/publish">
            <x-button class="publish-btn" :mini="true" type="default">发布</x-button>
          </router-link>
        </div>
      </div>
      <!--查找，发布-->

      <!-- 结果集列表 -->
      <div class="result-box">
        <t-loading v-show="loading"></t-loading>
        <publish-list @selectPublish="select" :list="publishList"></publish-list>
      </div>
      <!-- 结果集列表 -->

    </scroll>
  </div>

</template>

<script type="text/ecmascript-6">
  import {XButton, Swiper} from 'vux'
  import {getQueryALl, queryStartEndApi, queryPublishType, pullUp} from '../../api/resultList'
  import {mapMutations} from 'vuex'
  import {createPublishInfo} from '../../common/js/publishInfo'
  import {numsPerPage} from '../../api/config'

  const Scroll = () => import('base/scroll/scroll.vue').then(m => m.default)
  const PublishList = () => import('components/publish-list/publish-list.vue').then(m => m.default)
  const TLoading = () => import('../../base/T-loading/T-loading.vue').then(m => m.default)

  export default {
    components: {
      Scroll,
      XButton,
      PublishList,
      Swiper,
      TLoading
    },
    data() {
      return {
        loading: false,
        publishList: [],
        startAddress: '',
        endAddress: '',
        publishType: 0,
        currentPageIndex: 0,
        apiType: 'queryAll',
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
        this.apiType = 'queryAll'
        this.currentPageIndex = 0
        getQueryALl().then((res) => {
          this._normalizeResultList(res)
        }).catch(() => {
          if (pullFlag) {
            this.$refs.scroll.forceUpdate()
          }
          this._errorCommon()
        })
      },
      select(item) {
        this.$router.push({
          path: '/detail/' + item.publishId
        })
        this.setPublishInfo(item)
      },
      onPullingDown() {
        this.publishType = null
        this.apiType = 'queryAll'
        this.currentPageIndex = 0
        setTimeout(() => {
          this.queryAll(true)
        }, 1000)
      },
      onPullingUp() {
        this.currentPageIndex += numsPerPage
        setTimeout(() => {
          pullUp(this.currentPageIndex, this.publishType, this.startAddress, this.endAddres, this.apiType).then((res) => {
            if (!res.data.result) {
              this.$refs.scroll.forceUpdate()
              return
            }
            this._normalizeResultList(res, true)
            this.$refs.scroll.forceUpdate(true)
          }).catch(() => {
            this.$refs.scroll.forceUpdate()
            this._errorCommon()
          })
        }, 1500)
      },
      queryStartEnd() {
        this.$refs.startAddress.blur()
        this.$refs.endAddress.blur()
        this.publishType = null
        this.apiType = 'startEnd'
        this.currentPageIndex = 0
        let start = this.startAddress
        let end = this.endAddress
        if (!start) {
          this.$vux.toast.show({
            text: '请输入始发地',
            type: 'text',
            position: 'top'
          })
          return false
        }
        if (!end) {
          this.$vux.toast.show({
            text: '请输入目的地',
            type: 'text',
            position: 'top'
          })
          return
        }
        this.loading = true
        queryStartEndApi(this.startAddress, this.endAddress).then((res) => {
          this._normalizeResultList(res)
        }).catch(() => {
          this._errorCommon()
        }).finally(() => {
          this.loading = false
        })
      },
      queryTypeList(type) {
        this.loading = true
        this.publishType = type
        this.apiType = 'typeList'
        this.currentPageIndex = 0
        if (event._constructed) {
          return
        }
        this.publishType = type
        queryPublishType(type).then((res) => {
          this._normalizeResultList(res)
        }).catch(() => {
          this._errorCommon()
        }).finally(() => {
          this.loading = false
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
        let result = res.data.result
        if (result) {
          if (type) {
            this.publishList = this.publishList.concat(this._normalizePublishInfo(result))
          } else {
            this.publishList = this._normalizePublishInfo(result)
          }
        } else {
          this.publishList = []
        }
      },
      _errorCommon() {
        this.publishList = []
        this.$vux.toast.show({
          text: '请求发生异常',
          type: 'warn',
          position: 'middle'
        })
      },
      ...mapMutations({
        setPublishInfo: 'SET_PUBLISINFO'
      })
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        if (from.name === 'Publish' && from.params.type === 'publish' && from.meta.refresh) {
          setTimeout(vm.queryAll(), 500)
          from.meta.refresh = false
        }
      })
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/base-standard";

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

  .result-box {
    position: relative;
  }
</style>
