<template>
  <transition name="page">
      <div class="page-style">
        <div class="page-content">
{{ title }}
        </div>
      </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {XHeader} from 'vux'
  export default {
    name: 'version',
    props: {
      title: {
        type: String,
        default: '111'
      }
    },
    components: {
      XHeader
    }
  }
</script>

<style scoped lang="scss">

</style>
