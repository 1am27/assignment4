import Vue from 'vue'
import Vuex from 'vuex'
import product from './modules/product'   //商品管理モジュールをインポート
import forecast from './modules/forecast' //天気予報モジュールをインポート
import caution from './modules/caution'   //警戒情報モジュールをインポート
import data from "./modules/data"
import AI from "./modules/AI"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    product,  //productモジュールを登録
    forecast, //forecastモジュールを登録
    caution,   //cautionモジュールを登録
    data,
    AI
  }
})
