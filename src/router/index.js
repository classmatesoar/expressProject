import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import people from '@/components/people'
import car from '@/components/car'
import system from '@/components/system'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/people',
      name: 'people',
      component: people
    },
    {
      path: '/car',
      name: 'car',
      component: car
    },
    {
      path: '/system',
      name: 'system',
      component: system
    }
  ]
})
