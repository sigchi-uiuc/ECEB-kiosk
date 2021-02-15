import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import LearnMoreEnergy from '../views/decision/LearnMoreEnergy.vue'
import UniVOrg from '../views/decision/UniVOrg.vue'
import PledgeChoices from '../views/pledge/PledgeChoices.vue'
import PledgeForm from '../views/pledge/PledgeForm.vue'
import UniversitySteps from '../views/info/UniversitySteps.vue'
import WhyCare from '../views/info/WhyCare.vue'
import Organizations from '../views/info/Organizations.vue'
import Rsos from '../views/info/Rsos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: About
  },
  {
    path: '/template',
    name: 'Template',
    component: () => import('../views/Template.vue')
  },
  {
    path: '/learn-more-energy',
    name: 'Learn-More-Energy',
    component: LearnMoreEnergy
  },
  {
    path: '/uni-v-org',
    name: 'UniVOrg',
    component: UniVOrg
  },
  {
    path: '/pledge-choices',
    name: 'PledgeChoices',
    component: PledgeChoices
  },
  {
    path: '/pledge-form',
    name: 'PledgeForm',
    component: PledgeForm
    //props: { choices: falses}
  },
  {
    path: '/university-steps',
    name: 'UniversitySteps',
    component: UniversitySteps
    //props: { choices: falses}
  },
  {
    path: '/why-care',
    name: 'WhyCare',
    component: WhyCare
  },
  {
    path: '/organizations',
    name: 'Organizations',
    component: Organizations
  },
  {
    path: '/rsos',
    name: 'Rsos',
    component: Rsos
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
