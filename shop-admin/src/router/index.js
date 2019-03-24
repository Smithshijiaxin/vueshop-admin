import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import Layout from '@/views/Layout'
import Home from '@/views/home'
import UserList from '@/views/user'
import RolesList from '@/views/Role'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/login', component: Login },
    {
      path: '/',
      component: Layout,
      children: [
        { path: '', component: Home },
        { path: '/users', component: UserList },
        { path: '/roles', component: RolesList }
      ]

    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  }
  const token = window.localStorage.getItem('token')
  if (!token) {
    return next('/login')
  }
  next()
})
export default router
