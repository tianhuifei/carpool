 <template>
  <transition name="page">
    <div class="page-style">
      <x-header>详细信息</x-header>
      <div class="detail-main">

        <group label-width="5em" label-margin-right="2em" label-align="right">
          <cell title="拼车类型：">
            <div class=""><span class="people-for-car">人找车</span></div>
          </cell>
          <cell title="出发地：">北京</cell>
          <cell title="目的地：">邯郸</cell>
          <cell title="出发时间：">12月31日（周日） 12:00</cell>
          <cell title="发布人：">飞哥</cell>
          <cell title="手机号：">15652286604</cell>
          <cell title="车牌号："></cell>
          <cell title="人数/空位："></cell>
          <cell title="发布时间：">12月20日发布</cell>
        </group>

      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {XHeader, Group, Cell} from 'vux'

  export default {
    name: 'detail',
    components: {
      XHeader,
      Group,
      Cell
    },
    computed: {},
    mounted() {
    },
    methods: {}
  }
</script>

<style scoped lang="scss">
  @import '../../assets/css/base-standard';




</style>
