import Vue from 'vue'
import Router from 'vue-router'
import Previous from './views/Previous.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Previous',
      component: Previous
    },
    {
      path: '/Next',
      name: 'Next',
      // route level code-splitting
      // this generates a separate chunk (Next.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Next" */ './views/Next.vue')
    }
  ]
})
