import VueRouter from 'vue-router'

import home from './components/tabbr/HomeContainer.vue'
import member from './components/tabbr/MemberContainer.vue'
import shoppingCar from './components/tabbr/ShoppingCarContainer.vue'
import search from './components/tabbr/SearchContainer.vue'
import news from './components/news/NewsContainer.vue'
import newsContent from './components/news/NewsContent.vue'


var router=new VueRouter({
	'routes':[
	{'path':'','redirect':'/home'},
	{'path':'/home','component':home},
	{'path':'/member','component':member},
	{'path':'/shoppingCar','component':shoppingCar},
	{'path':'/search','component':search},
	{'path':'/home/news','component':news},
	{'path':'/home/news/content/:id','component':newsContent}
	],
	'linkActiveClass':'mui-active'
})


export default router