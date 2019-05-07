<template>
  <div class="table-pager" v-show="total_count>0">
    <div class="pager-left" v-if="show_size=='true'">
      <span>每页显示：</span>
      <select id="page-size" @change="change_size">
        <option value="10">每页显示10条</option>
        <option value="20">每页显示20条</option>
        <option value="50">每页显示50条</option>
      </select>
    </div>
    <div class="pager-right" v-show="total_page>1">
      <div class="pager-box">
        <ul>
          <template>
            <li v-if="prev"><a href="javascript:void(0)" @click="prev_page">上一页</a></li>
            <li v-else><a class="disabled">上一页</a></li>
          </template>
          <li v-for="(p, index) in pager" v-bind:key="index">
            <a v-if="p==current" class="current">{{p}}</a>
            <a v-else href="javascript:void(0)" @click="goto(p)">{{p}}</a>
          </li>
          <template>
            <li v-if="next"><a href="javascript:void(0)" @click="next_page">下一页</a></li>
            <li v-else><a class="disabled">下一页</a></li>
          </template>
        </ul>
        <span>共{{total_page}}页，跳到第</span><input type="text" value="1" v-model="page"><span>页</span><button type="button" class="btn-com" @click="goto(0)">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      page: 1, // 跳转到多少页
      size: 10, // 每页显示条数
      pagers: 5, // 页码显示个数
      current: this.cur // 当前页码
    }
  },
  props: ['cur', 'total_page', 'total_count', 'show_size'], // 接收参数['当前页','总页数','总行数','是否显示每页显示数量']
  computed: {
    prev: function () {
      return this.current !== 1
    },
    next: function () {
      return this.current !== this.total_page
    },
    pager: function () {
      let list = []
      let end = Math.ceil(this.current / this.pagers) * this.pagers
      let max = this.total_page < end ? this.total_page : end
      let p = max - this.pagers + 1
      let min = p <= 0 ? 1 : p

      for (min; min <= max; min++) {
        list.push(min)
      }

      return list
    }
  },
  methods: {
    goto (i) {
      if (i === 0) {
        if (this.page > this.total_page) { this.page = this.total_page }
        if (this.page < 1) { this.page = 1 }
        i = this.page
      }

      this.current = i
      this.$emit('change', this.current, this.size)
    },
    prev_page () {
      this.current--
      this.$emit('change', this.current, this.size)
    },
    next_page () {
      this.current++
      this.$emit('change', this.current, this.size)
    },
    change_size (e) {
      this.current = '1'
      this.size = e.target.value
      this.$emit('change', this.current, this.size)
    }
  }
}
</script>

<style scoped>
  @import "../assets/css/pages/main.css";
</style>
