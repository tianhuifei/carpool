<template>
  <div class="result-content">
    <div class="" v-for="item in list"></div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      list: {
        type: Array,
        default: null
      }
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped lang="scss">

</style>
