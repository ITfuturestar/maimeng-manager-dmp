<template>
  <div class="main rule-group">
    <div class="main-table">
      <table border="0" cellpadding="0" cellspacing="0">
        <thead>
        <tr>
          <td width="10%">团队</td>
          <td width="10%">项目</td>
          <td width="35%">模型1</td>
          <td width="35%">模型2</td>
          <td width="10%">比例</td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>上广联</td>
          <td>vipkid-1903</td>
          <td>model_20190409_wn_8w_bj_yimei_rise</td>
          <td>13133</td>
          <td>1</td>
        </tr>
        </tbody>
      </table>
      <pager-table show_size="true" v-bind:cur="list.page" v-bind:total_page="list.totalPage" v-bind:total_count="list.totalCount" @click="change_data"></pager-table>
    </div>
  </div>
</template>

<script>
import pager from '@/components/pager'
export default {
  name: 'proportion',
  data () {
    return {
      list: {
        data: [], // 数据集
        totalPage: 0, // 总页数
        totalCount: 0, // 总条数
        size: 10, // 每页显示条数
        page: 1 // 页码
      }
    }
  },
  methods: {
    // 分页
    change_data (index, size) {
      this.list.page = index
      this.list.size = size
    },
    // 获取初始化列表
    getProportionList () {}
  },
  created () {
    this.getProportionList()
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
