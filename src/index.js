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



Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(MintUi)
Vue.use(VuePreview)




Vue.http.options.root = 'http://www.liulongbin.top:3005/';
Vue.http.options.emulateJSON = true;

Vue.filter('dateformat',function(msg,pattern="YYYY-MM-DD hh:mm:ss"){
  return moment(msg).format(pattern)
})
var vm=new Vue({
  'el':'#box',
  'render':createComponent=>createComponent(App),
  router
})