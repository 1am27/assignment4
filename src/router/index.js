import Vue from 'vue'
import VueRouter from 'vue-router'
import SelectDBView from '../views/SelectDBView.vue'; // 予報ページの読み込み
import EmotionResultView from '../views/EmotionResultView.vue';
import SpotifyRecommendation from '../views/SpotifyRecommendation.vue';
import ChatbotView from '../views/ChatbotView.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ChatbotView
  },
  
  {
    path: '/spotify',
    name: 'spotify',
    component: SpotifyRecommendation
  },
  
  {
    path: '/emotionresult',
    name: 'emotionresult',
    component: EmotionResultView
  }, 

  {
    path: '/db',
    name: 'playlist',
    component: SelectDBView
  }, 

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router