import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

/* Layout */

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRouterMap
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRouterMap = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },
  {
    path: '/portal',
    name: 'portal',
    component: () => import('@/views/microapp/Portal')
  },
  {
    path: '/portal/about',
    name: 'about',
    component: () => import('@/views/microapp/Portal')
  },
  {
    path: '/microapp',
    component: Layout,
    redirect: '/microapp/bar-app',
    meta: { title: 'microapp', icon: 'form' },
    children: [{
      path: '/microapp/bar-app',
      name: 'bar-app',
      component: () => import('@/views/microapp/index'),
      meta: { title: 'bar', icon: 'table' }
    }, {
      path: '/microapp/foo-app',
      name: 'foo-app',
      component: () => import('@/views/microapp/index'),
      meta: { title: 'foo', icon: 'table' }
    }, {
      path: '/microapp/foo-app/about',
      name: 'about',
      component: () => import('@/views/microapp/index'),
      meta: { title: 'about', icon: 'table' },
      hidden: true
    }]
  },
  {
    path: '/404',
    component: () => import('@/views/404')
  }
]

const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

const router = createRouter()

export default router

export const asyncRouterMap = [
  { path: '*', redirect: '/404', hidden: true }
]
