import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = resolve => require.ensure([], () => resolve(require('../modules/home/index.vue')), 'home/index')
const Login = resolve => require.ensure([], () => resolve(require('../modules/login/index.vue')), 'login/index')
const MyMeeting = resolve => require.ensure([], () => resolve(require('../modules/meeting/my_meeting.vue')), 'meeting/my_meeting')
const MeetingInfo = resolve => require.ensure([], () => resolve(require('../modules/meeting/meeting_info.vue')), 'meeting/meeting_info')
const Issue = resolve => require.ensure([], () => resolve(require('../modules/issue/index.vue')), 'issue/index')
const About = resolve => require.ensure([], () => resolve(require('../modules/about/index.vue')), 'about/index')

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/Home',
      component: Home
    },
    {
      path: '/About',
      component: About
    },
    {
      path : '/Meeting',
      component: MyMeeting
    },
    {
      path : '/meeting/:id(\\d+)',
      component: MeetingInfo
    },
    {
      path : '/issue/:id(\\d+)',
      component: Issue
    },
    { path: '*', redirect: '/Home' }
  ]
})
