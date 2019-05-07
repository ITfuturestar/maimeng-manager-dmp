import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['@/views/login'], resolve)
    },
    {
      path: '/main',
      component: resolve => require(['@/views/main'], resolve),
      children: [
        {
          path: '/statistical/dataSummary',
          component: resolve => require(['@/views/statistical/dataSummary_list'], resolve)
        },
        {
          path: '/dataprovide/jobLog',
          component: resolve => require(['@/views/dataprovide/jobLog'], resolve)
        },
        {
          path: '/dataprovide/proportion',
          component: resolve => require(['@/views/dataprovide/proportion'], resolve)
        },
        {
          path: '/workplace/seatEffect',
          component: resolve => require(['@/views/workplace/seatEffect'], resolve)
        },
        {
          path: '/statistical/perCapita',
          component: resolve => require(['@/views/statistical/perCapita'], resolve)
        },
        {
          path: '/statistical/detailReport',
          component: resolve => require(['@/views/statistical/detailReport'], resolve)
        }
      ]
    }
  ]
})
