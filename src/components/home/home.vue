<template>
  <div class="home-main">
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
  </div>
</template>

<script type="text/ecmascript-6">
  import Slide from 'base/slide/slide'
  export default {
    components: {
      Slide
    }
  }
</script>

<style scoped lang="scss">
  .slide-wrapper{
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 40%;
    margin-bottom: 10px;
    overflow: hidden;
    .slide-content{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
</style>
