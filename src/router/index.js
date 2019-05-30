import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router);

const Home = () => import('@/components/home');
const Edit = () => import('@/components/edit');
const FinishList = () => import('@/components/finish-list');


const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit,
      props: (router) => ({
        id: router.query.id
      })
    },{
      path: '/finishList',
      name: 'FinishList',
      component: FinishList
    }
  ]
})
/**
 * 全局监听路由变化
 */
router.beforeEach((to, from, next) => {
  // 离开编辑页时清空数据
  if(from.name == 'Edit') {
    store.commit('memoInfo',{
        title: '',
        desc: ''
    });
  } 
  // 进入完成页 底部btn => 进行中
  // 离开完成页 底部btn => 已完成
  if(to.name == 'FinishList') {
    store.commit('updateBtn', true);
  } else {
    store.commit('updateBtn', false);
  }
  next();
});

export default router;
