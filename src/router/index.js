import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = resolve => require.ensure([], () => resolve(require('../modules/home/index.vue')), 'home/index')
const Meeting = resolve => require.ensure([], () => resolve(require('../modules/meeting/index.vue')), 'meeting/index')
const Issue = resolve => require.ensure([], () => resolve(require('../modules/issue/index.vue')), 'issue/index')
const About = resolve => require.ensure([], () => resolve(require('../modules/about/index.vue')), 'about/index')

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/Home',
      component: Home
    },
    {
      path: '/About',
      component: About
    },
    {
      path : '/meeting/:id(\\d+)',
      component: Meeting
    },
    {
      path : '/issue/:id(\\d+)',
      component: Issue
    },
    { path: '*', redirect: '' }
  ]
})
