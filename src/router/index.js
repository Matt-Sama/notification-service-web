import Vue from 'vue'
import Router from 'vue-router'
import Config from '@/settings'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

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
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dispatchRecords/index',
    children: [{
      path: '/dispatchRecords/index',
      name: 'dispatchRecords',
      component: () => import('@/views/dispatchRecords/index'),
      meta: { title: '发送记录', icon: 'dashboard' }
    }]
  },

  {
    path: '/notificationTemplate',
    component: Layout,
    redirect: '/notificationTemplate/index',
    children: [
      {
        path: 'index',
        name: 'notificationTemplate',
        component: () => import('@/views/notificationTemplate/index'),
        meta: { title: '通知模板', icon: 'table' }
      },
    ]
  },
  {
    path: '/authorizationManagement',
    redirect: '/authorizationManagement/index',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'authorizationManagement',
        component: () => import('@/views/authorizationManagement/index'),
        meta: { title: '授权管理', icon: 'form' }
      }
    ]
  },

  {
    path: '/sensitiveWordManagement',
    redirect: '/sensitiveWordManagement/index',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'sensitiveWordManagement',
        component: () => import('@/views/sensitiveWordManagement/index'),
        meta: { title: '敏感词管理', icon: 'form' }
      }
    ]
  },

  {
    path: '/APIInterfaceDocument',
    redirect: '/APIInterfaceDocument/index',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'APIInterfaceDocument',
        component: () => import('@/views/APIInterfaceDocument/index'),
        meta: { title: 'API接口文档', icon: 'form' }
      }
    ]
  },

  {
    path: '/configuration',
    component: Layout,
    redirect: '/configuration/index',
    children: [
      {
        path: 'index',
        name: 'configuration',
        component: () => import('@/views/configuration/index'),
        meta: { title: '配置', icon: 'form' }
      }
    ]
  },
  
  

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()



// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
  
}

export default router
