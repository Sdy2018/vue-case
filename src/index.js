import Vue from 'vue'
import VueRouter from 'vue-router'
import { Header } from 'mint-ui';
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import { Swipe, SwipeItem } from 'mint-ui';
import VueResource from 'vue-resource'


import App from './App.vue'
import router from './router.js'




Vue.use(VueRouter)
Vue.use(VueResource)

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

var vm=new Vue({
	'el':'#box',
	'render':createComponent=>createComponent(App),
	router
})
console.log(App.msg)