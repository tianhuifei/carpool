import Vue from 'vue'
import Router from 'vue-router'
import TLoading from '../base/T-loading/T-loading'
import TError from '../base/T-error/T-error'

const Detail = () => import('components/detail/detail')
const PublishEdit = () => import('components/publish-edit/publish-edit')
const PersonalCenter = () => import('components/personal-center/personal-center')
const MyPublish = () => import('components/my-publish/my-publish')
const Version = () => import('components/version/version')
const FeedBack = () => import('components/feed-back/feed-back')
const contactMe = () => import('components/contact-me/contact-me')
const About = () => import('components/about/about')
const Home = () => ({
  // 需要加载的组件 (应该是一个 `Promise` 对象)
  component: import('components/home/home'),
  // 异步组件加载时使用的组件
  loading: TLoading,
  // 加载失败时使用的组件
  error: TError,
  // 展示加载时组件的延时时间。默认值是 200 (毫秒)
  delay: 200,
  // 如果提供了超时时间且组件加载也超时了，
  // 则使用加载失败时使用的组件。默认值是：`Infinity`
  timeout: 3000
})

Vue.use(Router)
let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/personal',
      name: 'personal',
      component: PersonalCenter,
      children: [
        {
          path: 'mypublish',
          component: MyPublish
        },
        {
          path: 'about',
          component: About,
          meta: {title: '关于'},
          children: [
            {
              path: 'version',
              component: Version,
              meta: {title: '版本介绍'}
            },
            {
              path: 'feedback',
              component: FeedBack,
              meta: {title: '意见反馈'}
            },
            {
              path: 'contactme',
              component: contactMe,
              meta: {title: '联系我'}
            }
          ]
        }
      ]
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/publish/:id/:type',
      name: 'Publish',
      components: {PublishEdit: PublishEdit},
      meta: {
        refresh: false
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  next()
})
export default router
