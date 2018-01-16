import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/home'
import Detail from 'components/detail/detail'
import PublishEdit from 'components/publish-edit/publish-edit'
import PersonalCenter from 'components/personal-center/personal-center'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/personal',
      name: 'personal',
      component: PersonalCenter
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/publish/:id/:type',
      name: 'Publish',
      component: PublishEdit
    }
  ]
})
