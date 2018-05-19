import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('components/home/home')
const Detail = () => import('components/detail/detail')
const PublishEdit = () => import('components/publish-edit/publish-edit')
const PersonalCenter = () => import('components/personal-center/personal-center')
const MyPublish = () => import('components/my-publish/my-publish')
const Version = () => import('components/version/version')
const FeedBack = () => import('components/feed-back/feed-back')
const contactMe = () => import('components/contact-me/contact-me')
const About = () => import('components/about/about')

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
