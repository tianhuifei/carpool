<template>
  <div class="tab-bar">
    <div class="tab-item" v-for="(item,index) in tabItem" @click="isActiveFn(index)">
        <router-link class="needsclick" :class="{'active': isActive == index} " :to="item.to"  >
          <span class="carpoll"  :class="item.className"></span>

          <span class="tab-text">{{ item.name }}</span>
        </router-link>
    </div>
  </div>
</template>

<script  type="text/ecmascript-6">
  export default {
    created () {
      this.isActive = 0
    },
    data () {
      return {
        isActive: 0,
        tabItem: [
          {
            className: 'car-shouye',
            name: '首页',
            to: '/foo'
          },
          {
            className: 'car-wode4',
            name: '我的',
            to: '/foo'
          }
        ]
      }
    },
    methods: {
      isActiveFn (index) {
        console.log(index)
        this.isActive = index
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/css/base-color.scss";
  .tab-bar{
    height:50px;
    background-color:$tab-bar-bg-color;
    position:fixed;
    bottom:0;
    width:100%;
    display: flex;
    border-top:1px solid #EEE;
    box-shadow: 0 0 1px rgba(0,0,0,.85);
    .tab-item{
      flex: 1;
      >a{
        display: block;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .carpoll{
          font-size:20px;
        }
        .tab-text{
          font-size:12px;
          margin-top:5px;
        }
        &.active span{
          color:$app-color
        }
      }
    }
  }
</style>
