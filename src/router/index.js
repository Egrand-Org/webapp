import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//主页
const Home = resolve => require.ensure([], () => resolve(require('../modules/home/index.vue')), 'home/index')
//登录
const Login = resolve => require.ensure([], () => resolve(require('../modules/login/index.vue')), 'login/index')
//会议
const Meeting = resolve => require.ensure([], () => resolve(require('../modules/meeting/index.vue')), 'meeting/index')
const MeetingInfo = resolve => require.ensure([], () => resolve(require('../modules/meeting/meeting_info.vue')), 'meeting/meeting_info')
const Meeting4my = resolve => require.ensure([], () => resolve(require('../modules/meeting/meeting4my.vue')), 'meeting/meeting4my')
const Meeting4djchy = resolve => require.ensure([], () => resolve(require('../modules/meeting/meeting4djchy.vue')), 'meeting/meeting4djchy')
const Meeting4dsyhy = resolve => require.ensure([], () => resolve(require('../modules/meeting/meeting4dsyhy.vue')), 'meeting/meeting4dsyhy')
//议题
const IssueInfo = resolve => require.ensure([], () => resolve(require('../modules/issue/issue_info.vue')), 'issue/issue_info')
const Issue = resolve => require.ensure([], () => resolve(require('../modules/issue/index.vue')), 'issue/index')
const Issue4ysh = resolve => require.ensure([], () => resolve(require('../modules/issue/issue4ysh.vue')), 'issue/issue4ysh')
const Issue4dsh = resolve => require.ensure([], () => resolve(require('../modules/issue/issue4dsh.vue')), 'issue/issue4dsh')
const Issue4spz = resolve => require.ensure([], () => resolve(require('../modules/issue/issue4spz.vue')), 'issue/issue4spz')
const Issue4zxz = resolve => require.ensure([], () => resolve(require('../modules/issue/issue4zxz.vue')), 'issue/issue4zxz')
//制度建设
const Institution = resolve => require.ensure([], () => resolve(require('../modules/institution/index.vue')), 'institution/index')
const InstitutionInfo = resolve => require.ensure([], () => resolve(require('../modules/institution/institution_info.vue')), 'institution/institution_info')
//公告
const Notice = resolve => require.ensure([], () => resolve(require('../modules/notice/index.vue')), 'notice/index')
const NoticeInfo = resolve => require.ensure([], () => resolve(require('../modules/notice/notic_info.vue')), 'notice/notic_info')
//意见
const MyComment = resolve => require.ensure([], () => resolve(require('../modules/comment/index.vue')), 'comment/index')
//我
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
      component: Home,
      children: [
        { 
          path : '', 
          redirect: '/issue'
        },
        {
          path : '/issue',
          component: Issue,
          children: [
            {
              path: '', 
              redirect: '/issue/ysh'
            },
            {
              path: '/issue/ysh',
              component: Issue4ysh
            },
            {
              path: '/issue/dsh',
              component: Issue4dsh
            },
            {
              path: '/issue/spz',
              component: Issue4spz
            },
            {
              path: '/issue/zxz',
              component: Issue4zxz
            }
          ]
        },
        {
          path : '/meeting/todo/:status',
          component: Meeting,
          children:[
            {
              path: '/meeting/todo/my',
              component: Meeting4my
            },
            {
              path: '/meeting/todo/dcjhy',
               component: Meeting4djchy
             },
            {
              path: '/meeting/todo/dsyhy', 
              component: Meeting4dsyhy
            }
          ] 
        },
        {
		      path: '/About',
		      component: About
		    }
      ]
    },
    {
      path : '/issue/:id(\\d+)',
      component: IssueInfo
    },
    {
      path : '/meeting/:id(\\d+)',
      component: MeetingInfo
    },
    //制度建设
    {
    	path: '/institution',
      component: Institution
    },
    //制度建设详情
    {
    	path: '/institution/:id(\\d+)',
      component: InstitutionInfo
    },
		//电子公告
    {
      path: '/notice',
      component: Notice
    },
    //电子公告详情
    {
    	path: '/notice/:id(\\d+)',
      component: NoticeInfo
    },

    {
      path : '/comment',
      component: MyComment
    }
  ]
})
