import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: () => import('@/views/Index'),
      children: [
        {
          path: '',
          name: '',
          component: () => import('@/views/MainPage/Macroanalysis/Macroanalysis')
        },
        {
          path: '1',
          name: '1',
          component: () => import('@/views/MainPage/Macroanalysis/Macroanalysis')
        },
        {
          path: '2-1',
          name: '2-1',
          component: () => import('@/views/MainPage/Macroanalysis/Annualanalysis/Annualanalysis')
        },
        {
          path: '2-2',
          name: '2-2',
          component: () => import('@/views/MainPage/Macroanalysis/Monthlyanalysis/Monthlyanalysis')
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
