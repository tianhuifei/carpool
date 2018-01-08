<template>
  <transition name="page">
    <div class="page-style">
      <x-header>详细信息</x-header>
      <div class="detail-main">
        <div class="list-box">
          <ul class="list-ul">
            <li class="list-li">1</li>
            <li class="list-li">2</li>
            <li class="list-li">3</li>
          </ul>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import { XHeader } from 'vux'
  export default {
    name: 'detail',
    components: {
      XHeader
    },
    computed: {},
    mounted() {},
    methods: {}
  }
</script>

<style scoped lang="scss">
  @import '../../assets/css/base-standard';

  $list-border-color: #c8c7cc;
  .list-box {
    position: relative;
    width: 100%;
    background: $color-white;
    margin: 10px 0;
    .list-ul {
      position: relative;
      &::before {
        position: absolute;
        left: 0;
        right: 0;
        top: -1px;
        height: 1px;
        background: $list-border-color;
        transform: scaleY(.5);
        content: ''
      }
      &::after {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 1px;
        background: $list-border-color;
        transform: scaleY(.5);
        content: ''
      }
      .list-li {
        display: flex;
        padding: 15px 20px;
        position: relative;
        overflow: hidden;
        font-size: 14px;
        &::after {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 15px;
          height: 1px;
          content: '';
          transform: scaleY(.5);
          background-color: $list-border-color;
        }
      }
    }
  }


</style>
