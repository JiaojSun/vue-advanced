import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from '@/components/home'
import document from '@/components/document'
import about from '@/components/about'
import user from '@/components/user'


import noFound from '@/components/404'

import study from '@/views/study'
import work from '@/views/work'
import hobby from '@/views/hobby'

import slider from '@/views/slider'

let router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior(to,from,savePosition){ // 点击浏览器的前进后退或切换导航触发
    //console.log(to); // 要进入的目标路由对象 要去向哪里
    //console.log(from) // 离开的路由对象  从哪里来
    //console.log(savePosition) // 记录滚动条的坐标 点击前进后退的时候记录值

    /*if(savePosition){
      return savePosition;
    }else{
      return {x:0,y:0}
    }*/

    if( to.hash){
      return {
        selector: to.hash
      }
    }

  },
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/user/:tip?/:userId?',  // /user/vip/1  /user/common/2  /user
      component: user
    },
    {
      path: '/home',
      name: 'Home',
      component: home,
      alias: '/index'
    },
    {
      path: '/about',
      component: about,
      children: [
        {
          path: '', // 默认的子路由  /about
          name: 'About',
          component: study
        },
        {
          path: '/work',  // /work
          name: 'Work',
          component: work
        },
        {
          path: '/hobby', // /hobby
          name: 'Hobby',
          component: hobby
        }
      ]
    },
    {
      path: '/document',
      name: 'Dcoument',
      components: {
        default: document,
        slider: slider
      }
    },
    {
      path: '*',
      //component: noFound
      // 重定向
      //redirect: '/home'
      //redirect: {path: '/home'}
      // redirect: {name: 'About'}
      redirect: (to) => {  //动态设置重定向的目标
        // 目标路由对象，就是访问的路径的路由信息

        if( to.path === '/123' ) {
          return '/home'
        }else if(to.path === '/456'){
          return {path: '/document'}
        }else{
          return {name: 'About'}
        }

        console.log(to)

        //return '/home'
      }
    }
  ]
})

export default router;
