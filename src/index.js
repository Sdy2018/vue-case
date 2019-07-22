import Vue from 'vue'
import VueRouter from 'vue-router'
import { Header } from 'mint-ui';
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import { Swipe, SwipeItem,Button } from 'mint-ui';
import VueResource from 'vue-resource'


import App from './App.vue'
import router from './router.js'
import moment from 'moment'



Vue.use(VueRouter)
Vue.use(VueResource)

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

Vue.http.options.root = 'http://www.liulongbin.top:3005/';

Vue.filter('dateformat',function(msg,pattern="YYYY-MM-DD hh:mm:ss"){
	return moment(msg).format(pattern)
})
var vm=new Vue({
	'el':'#box',
	'render':createComponent=>createComponent(App),
	router
})