import VueRouter from 'vue-router'

import home from './components/tabbr/HomeContainer.vue'
import member from './components/tabbr/MemberContainer.vue'
import shoppingCar from './components/tabbr/ShoppingCarContainer.vue'
import search from './components/tabbr/SearchContainer.vue'

var router=new VueRouter({
	'routes':[
	{'path':'','redirect':'/home'},
	{'path':'/home','component':home},
	{'path':'/member','component':member},
	{'path':'/shoppingCar','component':shoppingCar},
	{'path':'/search','component':search}
	],
	'linkActiveClass':'mui-active'
})


export default router