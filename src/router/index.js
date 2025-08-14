import Vue from 'vue'
import VueRouter from 'vue-router'
import CautionView from '../views/CautionView.vue'; // 警報ページの読み込
import ForecastView from '../views/ForecastView.vue'; // 予報ページの読み込み
import CustomerlistView from '../views/CustomerlistView.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ForecastView
  },
  
  {
    path: '/list',
    name: 'list',
    component: CustomerlistView
  },
  
  // 購入ページのルートを追加
  {
    path: '/selectedlist',
    name: 'selectedlist',
    component: CautionView
  }, 

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router