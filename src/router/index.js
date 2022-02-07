import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/modules/login'
Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/find',
  },
  {
    path: '/find',
    name: 'find',
    component: () => import('@/views/find/fd-index.vue'),
    children: [
      {
        path: '/find/recommend',
        name: 'find-recommend',
        component: () => import('@/views/find/fd-recommend.vue'),
      },
      {
        path: '/find/musician',
        name: 'find-musician',
        component: () => import('@/views/find/fd-musician.vue'),
      },
      {
        path: '/find/record',
        name: 'find-record',
        component: () => import('@/views/find/fd-record.vue'),
      },
      {
        path: '/find',
        redirect: '/find/recommend',
      },
    ],
  },
  {
    path: '/record',
    name: 'record',
    component: () => import('@/views/record/rd-index.vue'),
  },
  {
    path: '/mnIndex',
    name: 'musician',
    component: () => import('@/views/musician/mn-index.vue'),
  },
  {
    path: '/record/details',
    name: 'rd-details',
    component: () => import('@/views/details/rd-details.vue'),
  },
  {
    path: '/musician/details',
    name: 'mu-details',
    component: () => import('@/views/details/mu-details.vue'),
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('@/views/my/index.vue'),
    children: [
      {
        path: '/my/myMusic',
        name: 'my-music',
        component: () => import('@/views/my/my-music.vue'),
      },
      {
        path: '/my/login',
        name: 'login',
        component: () => import('@/views/my/login.vue'),
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
router.beforeEach((to, from, next) => {
  if (to.name === 'my') {
    const log = store.state.sw
    if (log) {
      next({ path: '/my/myMusic' })
    } else {
      next({ path: '/my/login' })
    }
  } else next()
})

export default router
