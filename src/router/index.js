import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import wrk from '@/components/wrk'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/list',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/detail',
      name: 'wrk',
      component: wrk
    },
  ]
})
