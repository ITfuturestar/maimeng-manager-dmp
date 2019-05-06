import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['@/views/login'],resolve)
    },{
      path: '/main', 
      component: resolve => require(['@/views/main'],resolve),
      children: [
        {
          path: '/statistical/dataSummary',
          component: resolve => require(['@/views/statistical/dataSummary_list'],resolve)
        }
      ]
    }
  ]
})
