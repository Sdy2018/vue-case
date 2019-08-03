import Vue from 'vue'
import VueRouter from 'vue-router'

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import VueResource from 'vue-resource'

// import { Swipe, SwipeItem,Button,Lazyload} from 'mint-ui';
// import { Header } from 'mint-ui';

// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);

import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css'
import App from './App.vue'
import router from './router.js'
import moment from 'moment'
import VuePreview from 'vue-preview'
import Vuex from 'vuex'



Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(MintUi)
Vue.use(VuePreview)
Vue.use(Vuex)



Vue.http.options.root = 'http://www.liulongbin.top:3005/';
Vue.http.options.emulateJSON = true;

Vue.filter('dateformat',function(msg,pattern="YYYY-MM-DD hh:mm:ss"){
  return moment(msg).format(pattern)
})

var shoppingCar=JSON.parse(localStorage.getItem("shoppingCar") || '[]') 

const store = new Vuex.Store({
  state: {
    shoppingCar:shoppingCar/*构建里面数组的数据   { goodsID, goodsPrice , goodsCount , select  } */
  },
  mutations: {
    increment (state) {
      state.count++
    },
    addGoodsInfo(state,goodsInfo){
      var flag=false
      state.shoppingCar.some(item=>{
        if(item.goodsID===goodsInfo.goodsID){
          item.goodsCount+=parseInt(goodsInfo.goodsCount)
          flag=true
          return true
        }
      })
      if(!flag){
        state.shoppingCar.push(goodsInfo)
      }
      localStorage.setItem("shoppingCar",JSON.stringify(state.shoppingCar))
    },
    removeGoods(state,id){
      state.shoppingCar.some( (item,index)=>{
        if(item.goodsID==id){
          state.shoppingCar.splice(index,1)
          return true
        }
      })
      localStorage.setItem("shoppingCar",JSON.stringify(state.shoppingCar))
    },
    updatedGoodsSelected(state,info){
      state.shoppingCar.some(item=>{
        if(item.goodsID==info.id){
          item.select=info.select
        }
      })
      localStorage.setItem("shoppingCar",JSON.stringify(state.shoppingCar))
    }
  },
  getters:{
    getAllCount(state){
      var count=0
      state.shoppingCar.forEach(item=>{
        count+=item.goodsCount
      })
      return count
    },
    getGoodsSelect(state){
      var goodsSelect=[]
      shoppingCar.forEach(item=>{
        goodsSelect.push({[item.goodsID]:item.select})
      })
      return goodsSelect
    },
    getGoodsCountAndAmount(state){
      var countAndAmount={
        count:0,
        amount:0
      }
      state.shoppingCar.forEach(item=>{
        if(item.select===true){
          countAndAmount.count+=item.goodsCount
          countAndAmount.amount+=item.goodsPrice*item.goodsCount
        }
      })
      return countAndAmount
    }
  }
})
var vm=new Vue({
  'el':'#box',
  'render':createComponent=>createComponent(App),
  router,
  store
})