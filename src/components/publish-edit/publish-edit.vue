<template>
  <transition name="page">
    <div class=" page-style">
      <x-header>{{title}}</x-header>
      <div class="publish-main">
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {XHeader} from 'vux'

  export default {
    name: 'publish-edit',
    data() {
      return {
        title: '',
        id: '',
        type: ''
      }
    },
    components: {
      XHeader
    },

    mounted() {
      this._initPublish()
    },
    methods: {
      _initPublish() {
        this.title = this.$route.params.id === '-1' ? '发布' : '编辑'
        this.id = this.$route.params.id
        this.type = this.$route.params.type
      }
    }
  }
</script>

<style scoped lang="scss">
</style>
