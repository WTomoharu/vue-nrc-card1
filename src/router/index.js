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
  base: process.env.NODE_ENV === "development" ?
    process.env.BASE_URL : 'vue-nrc-card1/',
  routes: routes.map(route => routeFormat(route))
})

export default router
