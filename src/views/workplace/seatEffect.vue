<template>
  <div class="main quality">
    <div class="main-search">
      <div class="search-item">
        <span class="item-left">选择日期</span>
        <span class="item-right">
         <el-date-picker
           v-model="search.beginTime"
           type="date"
           value-format="yyyy-MM-dd"
           placeholder="开始日期"
           @change="getSbeginTime">
         </el-date-picker>
         -
         <el-date-picker
           v-model="search.endTime"
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
           <el-select style="width: 150px" v-model="search.teamValue">
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
          <el-select style="width: 150px" v-model="search.brand">
            <el-option label="所有" value="" style="padding-left: 15px">所有</el-option>
            <el-option label="美术宝" value="UPL" style="padding-left: 15px">美术宝</el-option>
            <el-option label="学霸君" value="END" style="padding-left: 15px">学霸君</el-option>
            <el-option label="中公教育" value="DIS" style="padding-left: 15px">中公教育</el-option>
           </el-select>
        </span>
      </div>
      <button type="button" class="btn-search" @click="search_data">查询</button>
      <div class="search-item" style="clear: both;">
        <span class="item-left">排序字段</span>
        <el-radio-group v-model="radio1">
          <el-radio :label="1" style="width: 60px" @click.native.prevent="radio1_btn(1)">通话时长</el-radio>
          <el-radio :label="2" style="width: 60px" @click.native.prevent="radio1_btn(2)">置忙时长</el-radio>
          <el-radio :label="3" style="width: 90px" @click.native.prevent="radio1_btn(3)">通话时长占比</el-radio>
          <el-radio :label="4" style="width: 60px" @click.native.prevent="radio1_btn(4)">工作效率</el-radio>
          <el-radio :label="5" style="width: 80px" @click.native.prevent="radio1_btn(5)">成功数</el-radio>
        </el-radio-group>
        <span class="item-left">排序条件</span>
        <el-radio-group v-model="radio2">
          <el-radio :label="1" style="width: 30px" @click.native.prevent="radio2_btn(1)">升序</el-radio>
          <el-radio :label="2" style="width: 60px" @click.native.prevent="radio2_btn(2)">降序</el-radio>
        </el-radio-group>
      </div>
    </div>
    <div class="main-table">
      <table border="0" cellpadding="0" cellspacing="0">
        <thead>
        <tr>
          <td width="6%">时间</td>
          <td width="6%">外呼团队</td>
          <td width="6%">品牌</td>
          <td width="6%">工号</td>
          <td width="6%">姓名</td>
          <td width="6%">开始时间</td>
          <td width="6%">结束时间</td>
          <td width="6%">通话量</td>
          <td width="6%">工作时间</td>
          <td width="6%">置忙时间</td>
          <td width="6%">置闲时间</td>
          <td width="6%">通话时长</td>
          <td width="7%">通话时长占比</td>
          <td width="6%">工作效率</td>
          <td width="7%">结算工作时长</td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>2019-05-07</td>
          <td>上广联</td>
          <td>jnrise</td>
          <td>3119</td>
          <td>韩慧婷</td>
          <td>90</td>
          <td>2</td>
          <td>2.22%</td>
          <td>1787</td>
          <td>7.32%</td>
          <td>66.67%</td>
          <td>5643</td>
          <td>3%</td>
          <td></td>
          <td>5643</td>
        </tr>
        </tbody>
      </table>
      <pager-table show_size="true" v-bind:cur="search.page" v-bind:total_page="list.totalPage" v-bind:total_count="list.totalCount" @click="change_data"></pager-table>
    </div>
  </div>
</template>

<script>
import pager from '@/components/pager'
export default {
  name: 'seat',
  data () {
    return {
      search: {
        teamValue: '', // 外呼团队
        brand: '', // 品牌
        seat: '', // 坐席
        beginTime: '', // 开始时间
        endTime: '', // 结束时间
        size: 10, // 每页数量
        page: 1 // 页码
      },
      list: {
        data: [], // 数据集
        totalPage: 0, // 总页数
        totalCount: 0 // 总条数
      },
      radio1: '1',
      radio2: 2
    }
  },
  methods: {
    // 排序字段
    radio1_btn (e) {
      e === this.radio1 ? this.radio1 = '' : this.radio1 = e
      console.log(e)
    },
    // 排序条件
    radio2_btn (e) {
      e === this.radio2 ? this.radio2 = '' : this.radio2 = e
      console.log(e)
    },
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
      this.getSeatList()
    },
    // 分页
    change_data (index, size) {
      this.search.page = index
      this.search.size = size
      this.getSeatList()
    },
    // 获取初始化列表
    getSeatList () {}
  },
  created () {
    this.getSeatList()
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
