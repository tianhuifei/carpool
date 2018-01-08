import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/home'
import Detail from 'components/detail/detail'
import publishEdit from 'components/publish-edit/publish-edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/detail/:id',
          component: Detail
        },
        {
          path: '/publish/:id/:type',
          name: 'Publish',
          component: publishEdit
        }
      ]
    }
  ]
})
