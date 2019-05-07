<template>
  <div class="main quality">
    <div class="main-search">
      <div class="search-item">
        <span class="item-left">选择日期</span>
        <span class="item-right">
         <el-date-picker
           v-model="search_per.beginTime"
           type="date"
           value-format="yyyy-MM-dd"
           placeholder="开始日期"
           @change="getSbeginTime">
         </el-date-picker>
         -
         <el-date-picker
           v-model="search_per.endTime"
           type="date"
           value-format="yyyy-MM-dd"
           placeholder="结束日期"
           @change="getSendTime">
         </el-date-picker>
        </span>
      </div>
      <div class="search-item">
        <span class="item-left">外呼团队</span>
        <span class="item-right">
           <el-select style="width: 150px" v-model="search_per.teamValue">
             <el-option label="所有" value="" style="padding-left: 15px">所有</el-option>
             <el-option label="泰盈" value="UPL" style="padding-left: 15px">泰盈</el-option>
             <el-option label="上广联" value="END" style="padding-left: 15px">上广联</el-option>
             <el-option label="慧谷" value="DIS" style="padding-left: 15px">慧谷</el-option>
           </el-select>
        </span>
      </div>
      <div class="search-item">
        <span class="item-left">品牌</span>
        <span class="item-right">
          <el-select style="width: 150px" v-model="search_per.brand">
            <el-option label="所有" value="" style="padding-left: 15px">所有</el-option>
            <el-option label="美术宝" value="UPL" style="padding-left: 15px">美术宝</el-option>
            <el-option label="学霸君" value="END" style="padding-left: 15px">学霸君</el-option>
            <el-option label="中公教育" value="DIS" style="padding-left: 15px">中公教育</el-option>
           </el-select>
        </span>
      </div>
      <button type="button" class="btn-search" @click="search_data">查询</button>
    </div>
    <div class="main-table">
      <table border="0" cellpadding="0" cellspacing="0">
        <thead>
        <tr>
          <td width="8%">时间</td>
          <td width="8%">外呼团队</td>
          <td width="8%">品牌</td>
          <td width="8%">成单数</td>
          <td width="8%">坐席数</td>
          <td width="8%">人均单量</td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>2019-05-07</td>
          <td>上广联</td>
          <td>jnrise</td>
          <td>7</td>
          <td>1.25</td>
          <td>5.6</td>
        </tr>
        </tbody>
      </table>
      <pager-table show_size="true" v-bind:cur="search_per.page" v-bind:total_page="list.totalPage" v-bind:total_count="list.totalCount" @click="change_data"></pager-table>
    </div>
  </div>
</template>

<script>
import pager from '@/components/pager'
export default {
  name: 'perCapita',
  data () {
    return {
      search_per: {
        teamValue: '', // 外呼团队
        brand: '', // 品牌
        beginTime: '', // 开始时间
        endTime: '', // 结束时间
        size: 10, // 每页数量
        page: 1 // 页码
      },
      list: {
        data: [], // 数据集
        totalPage: 0, // 总页数
        totalCount: 0 // 总条数
      }
    }
  },
  methods: {
    // 时间选择器开始时间
    getSbeginTime (val) {
      this.beginTime = val
    },
    // 时间选择器结束时间
    getSendTime (val) {
      this.endTime = val
    },
    // 查询
    search_data () {
      this.search.page = 1
      this.getInitializeList()
    },
    // 分页
    change_data (index, size) {
      this.search_per.page = index
      this.search_per.size = size
      this.getInitializeList()
    },
    // 获取初始化列表
    getInitializeList () {}
  },
  created () {
    this.getInitializeList()
  },
  components: {
    'pager-table': pager
  }
}
</script>

<style scoped>
  @import '../../assets/css/pages/main.css';
  .quality{
    padding-left: 15px;
  }
  .quality .el-input{
    width: 150px;
  }
</style>
