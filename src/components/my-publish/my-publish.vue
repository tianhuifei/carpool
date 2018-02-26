<template>
  <transition name="page">
    <div class="page-style">
      <x-header :left-options="{backText: ''}">我的发布</x-header>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {XHeader} from 'vux'
  import {queryMyData} from '../../api/myPublish/myPublish'

  export default {
    name: 'my-publish',
    components: {
      XHeader
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
