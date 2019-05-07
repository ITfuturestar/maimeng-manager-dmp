<template>
  <div class="main quality">
    <div class="main-search">
      <div class="search-item search-space">
        <span class="item-left">选择日期</span>
        <span class="item-right">
         <el-date-picker
           v-model="search_det.beginTime"
           type="date"
           value-format="yyyy-MM-dd"
           placeholder="开始日期"
           @change="getSbeginTime">
         </el-date-picker>
         -
         <el-date-picker
           v-model="search_det.endTime"
           type="date"
           value-format="yyyy-MM-dd"
           placeholder="结束日期"
           @change="getSendTime">
         </el-date-picker>
        </span>
      </div>
      <div class="search-item search-space">
        <span class="item-left">开始时段</span>
        <el-select style="width: 150px" v-model="search_det.startTime">
          <el-option label="08" value="" style="padding-left: 15px">08</el-option>
          <el-option label="09" value="09" style="padding-left: 15px">09</el-option>
          <el-option label="10" value="10" style="padding-left: 15px">10</el-option>
          <el-option label="11" value="11" style="padding-left: 15px">11</el-option>
          <el-option label="12" value="12" style="padding-left: 15px">12</el-option>
          <el-option label="13" value="13" style="padding-left: 15px">13</el-option>
          <el-option label="14" value="14" style="padding-left: 15px">14</el-option>
          <el-option label="15" value="15" style="padding-left: 15px">15</el-option>
          <el-option label="16" value="16" style="padding-left: 15px">16</el-option>
          <el-option label="17" value="17" style="padding-left: 15px">17</el-option>
          <el-option label="18" value="18" style="padding-left: 15px">18</el-option>
          <el-option label="19" value="19" style="padding-left: 15px">19</el-option>
          <el-option label="20" value="20" style="padding-left: 15px">20</el-option>
          <el-option label="21" value="21" style="padding-left: 15px">21</el-option>
          <el-option label="22" value="22" style="padding-left: 15px">22</el-option>
        </el-select>
      </div>
      <div class="search-item search-space">
        <span class="item-left">结束时段</span>
        <el-select style="width: 150px" v-model="search_det.overTime">
          <el-option label="08" value="" style="padding-left: 15px">08</el-option>
          <el-option label="09" value="09" style="padding-left: 15px">09</el-option>
          <el-option label="10" value="10" style="padding-left: 15px">10</el-option>
          <el-option label="11" value="11" style="padding-left: 15px">11</el-option>
          <el-option label="12" value="12" style="padding-left: 15px">12</el-option>
          <el-option label="13" value="13" style="padding-left: 15px">13</el-option>
          <el-option label="14" value="14" style="padding-left: 15px">14</el-option>
          <el-option label="15" value="15" style="padding-left: 15px">15</el-option>
          <el-option label="16" value="16" style="padding-left: 15px">16</el-option>
          <el-option label="17" value="17" style="padding-left: 15px">17</el-option>
          <el-option label="18" value="18" style="padding-left: 15px">18</el-option>
          <el-option label="19" value="19" style="padding-left: 15px">19</el-option>
          <el-option label="20" value="20" style="padding-left: 15px">20</el-option>
          <el-option label="21" value="21" style="padding-left: 15px">21</el-option>
          <el-option label="22" value="22" style="padding-left: 15px">22</el-option>
        </el-select>
      </div>
      <div class="search-item search-space">
        <span class="item-left">外呼团队</span>
        <span class="item-right">
           <el-select style="width: 150px" v-model="search_det.teamValue">
              <el-option label="所有" value="" style="padding-left: 15px">所有</el-option>
                  <el-option label="泰盈" value="UPL" style="padding-left: 15px">泰盈</el-option>
                  <el-option label="上广联" value="END" style="padding-left: 15px">上广联</el-option>
                  <el-option label="慧谷" value="DIS" style="padding-left: 15px">慧谷</el-option>
           </el-select>
        </span>
      </div>
      <div class="search-item search-space">
        <span class="item-left">品牌</span>
        <span class="item-right">
          <el-select style="width: 150px" v-model="search_det.brand">
            <el-option label="所有" value="" style="padding-left: 15px">所有</el-option>
            <el-option label="美术宝" value="UPL" style="padding-left: 15px">美术宝</el-option>
            <el-option label="学霸君" value="END" style="padding-left: 15px">学霸君</el-option>
            <el-option label="中公教育" value="DIS" style="padding-left: 15px">中公教育</el-option>
           </el-select>
        </span>
      </div>
      <div class="search-item">
        <span class="item-left">数据批次</span>
        <span class="item-right">
          <el-input placeholder="点击选择" readonly style="width: 70%; cursor: pointer" v-model="search_det.batch"></el-input>
        </span>
      </div>
      <div class="search-item">
        <span class="item-left">省份</span>
        <span class="item-right">
          <el-input style="width: 70%" v-model="search_det.batch"></el-input>
        </span>
      </div>
      <div class="search-item">
        <span class="item-left">城市</span>
        <span class="item-right">
          <el-input style="width: 70%" v-model="search_det.batch"></el-input>
        </span>
      </div>
      <div class="search-item">
        <span class="item-left">坐席姓名</span>
        <span class="item-right">
          <el-input style="width: 70%" v-model="search_det.batch"></el-input>
        </span>
      </div>
      <div class="search-item" style="margin-top: 10px">
        <span class="item-left">分组条件</span>
        <span class="item-right">
            <el-checkbox label="日期"></el-checkbox>
            <el-checkbox label="时段"></el-checkbox>
            <el-checkbox label="省份"></el-checkbox>
            <el-checkbox label="城市"></el-checkbox>
            <el-checkbox label="外呼团队" v-model="cheched.check_team"></el-checkbox>
            <el-checkbox label="坐席"></el-checkbox>
            <el-checkbox label="品牌" v-model="cheched.check_brand"></el-checkbox>
            <el-checkbox label="数据批次"></el-checkbox>
        </span>
      </div>
      <button type="button" class="btn-search" @click="search_detail">查询</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailReport',
  data () {
    return {
      search_det: {
        teamValue: '', // 外呼团队
        brand: '', // 品牌
        seat: '', // 坐席
        batch: '', // 数据批次
        startTime: '', // 开始时段
        overTime: '', // 结束时段
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
      cheched: {
        check_team: true,
        check_brand: true
      }
    }
  },
  methods: {
    // 时间选择器开始时间
    getSbeginTime (val) {
      this.beginTime = val
    },
    // 查询
    search_detail () {
      this.search.page = 1
      this.getSeatList()
    },
    // 时间选择器结束时间
    getSendTime (val) {
      this.endTime = val
    }
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
  .main-search .search-space{
    margin-right: 40px;
  }
  .item-right{
    display: inline-block;
  }
</style>
