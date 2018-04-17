import Vue from 'vue'
import App from '../App'
import Router from 'vue-router'
import Home from 'components/home/home'
import Detail from 'components/detail/detail'
import PublishEdit from 'components/publish-edit/publish-edit'
import PersonalCenter from 'components/personal-center/personal-center'
import MyPublish from 'components/my-publish/my-publish'
import Version from 'components/version/version'
import FeedBack from 'components/feed-back/feed-back'
import contactMe from 'components/contact-me/contact-me'
import About from 'components/about/about'

Vue.use(Router)
let router = new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          redirect: '/home'
        },
        {
          path: '/home',
          name: 'Home',
          component: Home
        }, {
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
    }
  ]
})
router.beforeEach((to, from, next) => {
  next()
})
export default router
