import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Winner from './views/Winner.vue'
import Y2018 from './views/Y2018.vue'
import Hniner from './views/Hniner.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'winner',
      component: Winner
    },
    {
      path: '/hnineofweek',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },{
      path: '/winner/:key',
      name: 'winner',
      component: Winner
    },{
      path: '/2018',
      name: 'Y2018',
      component: Y2018
    },{
      path:'/hniner',
      name:'hniner',
      component: Hniner
    }
  
  ]
})
