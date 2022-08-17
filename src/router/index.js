import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PortfolioView.vue')
  },
  {
    path: '/templates',
    name: 'templates',
    component: () => import(/* webpackChunkName: "about" */ '../views/TemplatesView.vue')
  },
  {
    path: '/copycat',
    name: 'copycat',
    component: () => import(/* webpackChunkName: "about" */ '../views/CopycatView.vue')
  },
  {
    path: '/complete-projects',
    name: 'complete-projects',
    component: () => import(/* webpackChunkName: "about" */ '../views/CompleteprojectsView.vue')
  },
  {
    path: '/skill',
    name: 'skill',
    component: () => import(/* webpackChunkName: "about" */ '../views/SkillView.vue')
  },
  {
    path: '/allenblog',
    name: 'allenblog',
    component: () => import(/* webpackChunkName: "about" */ '../views/AllenblogView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
