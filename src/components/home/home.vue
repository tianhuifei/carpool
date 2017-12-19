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
        <div class="main-search-box">
          <div class="start-address">

          </div>
          <div class="end-address">

          </div>
          <div class="search-btn-box">
            <x-button type="default" :plain="true" :mini="true">搜索</x-button>
          </div>
        </div>
      </div>
    </scroll>
  </div>

</template>

<script type="text/ecmascript-6">
  import Slide from 'base/slide/slide'
  import Scroll from 'base/scroll/scroll'
  import { XButton } from 'vux'

  export default {
    components: {
      Slide,
      Scroll,
      XButton
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

  .main-search-box{
    margin-top:-10px;
    display: flex;
    background:$app-color;
    .start-address,.end-address{
      flex:2;
      padding:10px 0;
      input{

      }
    }
    .search-btn-box{
      flex: 1;
      display: flex;
      Button{
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>
