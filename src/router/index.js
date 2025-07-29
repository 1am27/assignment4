import Vue from 'vue'
import VueRouter from 'vue-router'
import CautionView from '../views/CautionView.vue'; // 警報ページの読み込
import ForecastView from '../views/ForecastView.vue'; // 予報ページの読み込み
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  
  {
    path: '/forecast',
    name: 'forecast',
    component: ForecastView
  },
  
  // 購入ページのルートを追加
  {
    path: '/caution',
    name: 'caution',
    component: CautionView
  }, 

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router