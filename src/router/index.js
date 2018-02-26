import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/home'
import Detail from 'components/detail/detail'
import PublishEdit from 'components/publish-edit/publish-edit'
import PersonalCenter from 'components/personal-center/personal-center'
import MyPublish from 'components/my-publish/my-publish'

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
          path: ':id',
          component: MyPublish
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
      component: PublishEdit,
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
