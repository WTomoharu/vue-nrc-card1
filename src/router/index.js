import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

function routeFormat(route) {
  return {
    name: route.name,
    path: route.path,
    component: () => import(`../views/${route.name}.vue`)
  }
}

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes.map(route => routeFormat(route))
})

export default router
