<template>
  <div class="main rule-group">
    <div class="main-table">
      <table border="0" cellpadding="0" cellspacing="0">
        <thead>
        <tr>
          <td width="30%">表明</td>
          <td width="10%">时间</td>
          <td width="5%">成功</td>
          <td width="5%">失败</td>
          <td width="5%">项目</td>
          <td width="5%">地区</td>
          <td width="30%">系统显示名</td>
          <td width="10%">外呼团队</td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>model_20190505_lb_375586_china_msb02_dx_msb</td>
          <td>2019-05-07 11:25</td>
          <td>5000</td>
          <td>2381</td>
          <td>美术宝</td>
          <td>所有</td>
          <td>20190507112600_0</td>
          <td>上广联</td>
        </tr>
        </tbody>
      </table>
      <pager-table show_size="true" v-bind:cur="list.page" v-bind:total_page="list.totalPage" v-bind:total_count="list.totalCount" @click="change_data"></pager-table>
    </div>
  </div>
</template>

<script>
import pager from '../../components/pager'
export default {
  name: 'jobLog',
  data () {
    return {
      list: {
        data: [], // 数据集
        totalPage: 0, // 总页数
        totalCount: 0, // 总条数
        size: 10, // 每页数量
        page: 1 // 页码
      }
    }
  },
  methods: {
    change_data (index, size) {
      this.list.page = index
      this.list.size = size
      this.getJobLogList()
    },
    // 获取初始化列表
    getJobLogList () {}
  },
  created () {
    this.getJobLogList()
  },
  components: {
    'pager-table': pager
  }
}
</script>

<style scoped>
  @import '../../assets/css/pages/main.css';
  .rule-group{
    padding-left: 15px;
  }
  .rule-group .main-table table{
    margin-bottom: 30px;
  }
</style>
