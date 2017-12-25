<template>
  <div class="home-main">
    <scroll class="home-main-content">
      <div>
        <div class="slide-wrapper">
          <div class="slide-content">
            <slide>
              <div class="">
                <a href="javascript:void(0);">
                  <img src="http://y.gtimg.cn/music/photo_new/T003R720x288M000001ceytP1fMEiv.jpg" alt="">
                </a>
              </div>
              <div class="">
                <a href="javascript:void(0);">
                  <img src="http://y.gtimg.cn/music/photo_new/T003R720x288M000002z8Lbj3UmMDb.jpg" alt="">
                </a>
              </div>
              <div class="">
                <a href="javascript:void(0);">
                  <img src="http://y.gtimg.cn/music/photo_new/T003R720x288M0000048zX052OMIaE.jpg" alt="">
                </a>
              </div>
              <div class="">
                <a href="javascript:void(0);">
                  <img src="http://y.gtimg.cn/music/photo_new/T003R720x288M000003ZY2ys3b5RFT.jpg" alt="">
                </a>
              </div>
            </slide>
          </div>
        </div>


        <!-- 出发地，目的地 -->
        <div class="main-search-box">
          <div class="start-address">
            <input placeholder="始发地" type="text">
          </div>
          <div class="end-address">
            <input placeholder="目的地" type="text">
          </div>
          <div class="search-btn-box">
            搜索
          </div>
        </div>
        <!-- 出发地，目的地 -->

        <!--查找，发布-->
        <div class="search-query-publish">
          <div>
            <x-button class="car-to-people" :mini="true" type="default">车找人</x-button>
          </div>
          <div>
            <x-button class="people-to-car" :mini="true" type="default">人找车</x-button>
          </div>
          <div>
            <x-button class="publish-btn" :mini="true" type="default">发布</x-button>
          </div>
        </div>
        <!--查找，发布-->
        <publish-list :list="publishList"></publish-list>

      </div>
    </scroll>
  </div>

</template>

<script type="text/ecmascript-6">
  import Slide from 'base/slide/slide'
  import Scroll from 'base/scroll/scroll'
  import {XButton} from 'vux'
  import PublishList from 'components/publish-list/publish-list'
  import {getQueryALl} from '../../api/resultList'

  export default {
    components: {
      Slide,
      Scroll,
      XButton,
      PublishList
    },
    data() {
      return {
        publishList: []
      }
    },
    mounted() {
      setTimeout(() => {
        this.queryAll()
      }, 20)
    },
    methods: {
      queryAll() {
        getQueryALl().then((res) => {
          console.log(res)
          let result = res.result
          if (result) {
            this.publishList = result
          }
        }).catch((err) => {
          console.log(err)
        })
      }
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

  .slide-wrapper {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 40%;
    margin-bottom: 10px;
    overflow: hidden;
    .slide-content {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .main-search-box {
    margin-bottom: 5px;
    width: 100%;
    margin-top: -10px;
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
