import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('@/components/home');
const Edit = () => import('@/components/edit');
const FinishList = () => import('@/components/finish-list');


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit
    },{
      path: '/finishList',
      name: 'FinishList',
      component: FinishList
    }
  ]
})
