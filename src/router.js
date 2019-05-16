import Vue from 'vue'
import Router from 'vue-router'
import Loading from './views/loading/Loading'
import StartUp from './views/loading/StartUp'
import Home from './views/Home'
import About from './views/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'load',
      component: Loading
    },
    {
      path: 'start/up',
      name: 'startup',
      component: StartUp
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    }
  ]
})
