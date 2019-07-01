import Vue from 'vue'
import Router from 'vue-router'


import Home from '@/components/home'

// import Layout from '@/views/layout'
/*
import Project from '@/views/backend/project'
import Doc from '@/views/backend/doc'
import Workbench from '@/views/backend/workbench'
*/

let Layout = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/views/layout'))
  })
}
let Project = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/views/backend/project'))
  })
}

/*let Doc = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/views/backend/doc'))
  }, "abc")
}*//*
let Workbench = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/views/backend/workbench'))
  }, "abc")
}*/
let Doc = (resolve) => {
  return import('@/views/backend/doc')
}
let Workbench = (resolve) => {
  return import('@/views/backend/workbench')
}


import Login from '@/components/login'



Vue.use(Router)

let router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/management',
      name: 'Management',
      component: Layout,
      children: [
        {
          path: '/project',
          name: 'Project',
          component: Project,
          meta: {
            login: true
          }
        },
        {
          path: '/workbench',
          name: 'Workbench',
          component: Workbench,
          meta: {
            login: true
          }
        },
        {
          path: '/doc',
          name: 'Doc',
          component: Doc,
          meta: {
            login: false
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {

  let bl = to.matched.some(function(item){
    return item.meta.login
  })

  if(to.matched.some((item) => item.meta.login)){
    let info = router.app.$local.fetch("miaov")

    if(info.login){  // 已经登录
        next()
    }else{
      router.push({
        path: '/login',
        query: {
          redirect: to.path.slice(1)
        }
      })
    }

  }else{
    next()
  }



})




export default router
