import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Login from '../views/Login.vue'
import App from '../App.vue'
import Store from '../views/Store.vue'
import Layout from '../layout/HomeLayout.vue'
import Home from '../views/Home.vue'
import { onBeforeRouteLeave } from 'vue2-helpers/vue-router'


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'login',
    component: Login,
    meta:
    {
      public: true
    }
  },
  {
    path: '/store',
    name: 'store',
    component: Store,
  },
  {
    path: '/',
    name: 'layoout',
    component: Layout,
    children: [
      {
        path: "/home",
        name: "home",
        component: Home,
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=>{
  const userName = JSON.parse(localStorage.getItem('user') ?? '{}')
  if ( to.name !== 'login' && !userName.id){
    next({
      path: '/',
      replace: true
    })
  } else {
    next();
  }
})







export default router
