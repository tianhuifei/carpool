<template>
    <div class="page-style">
      <div class="page-content">
        <div class="contact-box">
          <h3>作者微信</h3>
          <div class="img-box">
            <img src="/static/images/weChat.png" alt="">
          </div>
          <p> 本平台完全免费使用。如果您在使用过程中出现什么问题，或者意见及建议等，可以使用本平台的意见反馈（我的->关于->意见反馈）,或者添加作者微信等方式反馈您的问题。</p>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'contact-me',
    data() {
      return {}
    }
  }
</script>

<style scoped lang="scss">
@import "../../assets/css/base-standard";
  .contact-box{
    padding:5px 10px;
    h3 {
      font-weight: bolder;
      padding-top:20px;
      margin: 0 auto;
      text-align: center;
      color:$basic-font-color;
    }
    .img-box{
      width:80%;
      margin:0 auto;
      img {
        width:100%;
        height:100%;
      }
    }

  }
  .page-content{
    background:#FFF;
    p{
      padding:5px 15px;
      font-size: 14px;
      color:$basic-font-color;
      line-height: 1.2;
      text-indent: 2em;
    }
  }
</style>
