<template>
  <transition name="page">
    <div class="page-style">
      <x-header :left-options="{backText: ''}">我的发布</x-header>
      <div class="page-content">
        <t-card>
          <div class="" slot="header"></div>
        </t-card>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {XHeader} from 'vux'
  import {queryMyData} from '../../api/myPublish/myPublish'
  import TCard from '../../base/T-card/T-card'

  export default {
    name: 'my-publish',
    components: {
      XHeader,
      TCard
    },
    activated() {
      this._loadData()
    },
    methods: {
      _loadData() {
        console.log('1')
        queryMyData().then(() => {
        }).catch()
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
