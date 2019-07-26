import VueRouter from 'vue-router'

import home from './components/tabbr/HomeContainer.vue'
import member from './components/tabbr/MemberContainer.vue'
import shoppingCar from './components/tabbr/ShoppingCarContainer.vue'
import search from './components/tabbr/SearchContainer.vue'
import news from './components/news/NewsContainer.vue'
import newsContent from './components/news/NewsContent.vue'
import photo from './components/photos/PhotoContainer.vue'
import photoContent from './components/photos/PhotoContentContainer.vue'
import goods from './components/goods/GoodsContainer.vue'
import goodsInfo from './components/goods/GoodsInfoContainer.vue'
import goodsIntroduce from './components/goods/GoodsIntroduce.vue'
import goodsComment from './components/goods/CoodsComment.vue'

var router=new VueRouter({
  'routes':[
  {'path':'','redirect':'/home'},
  {'path':'/home','component':home},
  {'path':'/member','component':member},
  {'path':'/shoppingCar','component':shoppingCar},
  {'path':'/search','component':search},
  {'path':'/home/news','component':news},
  {'path':'/home/news/content/:id','component':newsContent},
  {'path':'/home/photoList','component':photo},
  {'path':'/home/photoList/photoContent/:id','component':photoContent},
  {'path':'/home/goods','component':goods},
  {'path':'/home/goodsInfo/:id','component':goodsInfo},
  {'path':'/home/goodsIntroduce/:id','component':goodsIntroduce,'name':'introduce'},
  {'path':'/home/goodsComment/:id','component':goodsComment,'name':'comment'},
  ],
  'linkActiveClass':'mui-active'
})


export default router