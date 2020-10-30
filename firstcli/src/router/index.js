import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/first'
import AAA from '@/components/1stAAA'
import SSS from '@/components/1stSSS'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'First',
      component: First
    },
    {
      path: '/aaa',
      name: 'AAA',
      component: AAA
    },
    {
      path: '/sss',
      name: 'SSS',
      component: SSS
    }
  ]
})
