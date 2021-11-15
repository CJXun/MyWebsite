import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/Home.vue'
import about from '../views/About.vue'
import article from '../views/article.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
	// redirect:'/home',
    component:home
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/article',
    name: 'article',
    component: article
  },
  {
    path: '/about',
    name: 'about',
    component:about
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
      path:'*',
      redirect:'/'
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
