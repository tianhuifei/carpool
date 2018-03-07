<template>
    <div class="page-style">
      <div class="page-content">
        <scroll :data="versionInfo">
          <p class="remarks-p">
            {{remarks}}
          </p>
        </scroll>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from '../../base/scroll/scroll'
  import {getVersionInfo} from '../../api/version/version'

  export default {
    name: 'version',
    components: {
      Scroll
    },
    data() {
      return {
        versionInfo: null
      }
    },
    computed: {
      remarks() {
        return this.versionInfo ? this.versionInfo[0].remarks : ''
      }
    },
    activated() {
      setTimeout(() => {
        this._getVersionInfo()
      }, 20)
    },
    methods: {
      _getVersionInfo() {
        if (this.versionInfo) {
          return
        }
        this.$vux.loading.show({
          text: 'Loading'
        })
        getVersionInfo().then((res) => {
          let result = res.data.result
          if (result && result[0]) {
            this.versionInfo = result
          }
        }).catch(() => {
        }).finally(() => {
          this.$vux.loading.hide()
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../assets/css/base-standard';

  .remarks-p {
    padding: 10px 15px;
    font-size: 14px;
    color: $basic-font-color;
    line-height: 1.5;
    text-indent: 2em;
  }
</style>
