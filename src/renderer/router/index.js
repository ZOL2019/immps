import Vue from 'vue'
import Router from 'vue-router'
import menus from '@/config/menu-config'

Vue.use(Router)

export const constantRouterMap = []

menus.forEach((item) => {
  item.children.forEach((child) => {
    constantRouterMap.push({
      path: `${child.path}`,
      name: child.title,
      component: () => import(`@/views/${child.name}`)
    })
  })
})
export default new Router({
  routes: constantRouterMap
})
