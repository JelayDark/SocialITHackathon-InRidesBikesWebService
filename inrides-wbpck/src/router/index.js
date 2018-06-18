import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import HomePage from '@/components/HomePage'
import RoomPage from '@/components/RoomPage'
import Profile from '@/components/Profile'
import AddPoint from '@/components/Room/AddPoint'

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
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
        path: '/add',
        name: 'AddPoint',
        component: AddPoint,
        props: true
    }
  ],
  mode: 'history'
})
