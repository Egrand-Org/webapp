import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = resolve => require.ensure([], () => resolve(require('../modules/home/index.vue')), 'home/index')
const Login = resolve => require.ensure([], () => resolve(require('../modules/login/index.vue')), 'login/index')
const MyMeeting = resolve => require.ensure([], () => resolve(require('../modules/meeting/my_meeting.vue')), 'meeting/my_meeting')
const MeetingInfo = resolve => require.ensure([], () => resolve(require('../modules/meeting/meeting_info.vue')), 'meeting/meeting_info')
const Issue = resolve => require.ensure([], () => resolve(require('../modules/issue/index.vue')), 'issue/index')
const MyIssue = resolve => require.ensure([], () => resolve(require('../modules/issue/my_issue.vue')), 'issue/my_issue')
const IssueExe = resolve => require.ensure([], () => resolve(require('../modules/issue/exe_issue.vue')), 'issue/exe_issue')
const IssueExeInfo = resolve => require.ensure([], () => resolve(require('../modules/issue/exe_issue_info.vue')), 'issue/exe_issue_info')
const MyComment = resolve => require.ensure([], () => resolve(require('../modules/comment/index.vue')), 'comment/index')
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
      path : '/Meeting/todo/:status',
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
    {
      path : '/issue',
      component: MyIssue
    },
    {
      path : '/issue/exe/todo/:status',
      component: IssueExe
    },
    {
      path : '/issue/exe/:id(\\d+)',
      component: IssueExeInfo
    },
    {
      path : '/comment',
      component: MyComment
    },
    { path: '*', redirect: '/Home' }
  ]
})
