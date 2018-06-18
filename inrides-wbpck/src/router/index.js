import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import HomePage from '@/components/HomePage'
import RoomPage from '@/components/RoomPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/room',
      name: 'Room',
      component: RoomPage,
      props: true
    }
  ],
  mode: 'history'
})
