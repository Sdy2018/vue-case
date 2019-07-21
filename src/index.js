import Vue from 'vue'
import App from './App.vue'
import { Header } from 'mint-ui';
import './lib/mui/css/mui.min.css'

Vue.component(Header.name, Header);

var vm=new Vue({
  'el':'#box',
  'render':createComponent=>createComponent(App)
})
console.log(App.msg)