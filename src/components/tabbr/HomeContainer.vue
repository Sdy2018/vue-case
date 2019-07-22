<template>
  <div>
    <div style="height: 400px;width:100%">
      <mt-swipe  :auto="3000"  >
        <mt-swipe-item  v-for="item in imgs" :key="item" :style="{ 'backgroundImage':'url('+item+')'}">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div>
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <router-link to="/home/news">
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <img src="../../img/menu1.png" alt="">
            <div class="mui-media-body">新闻资讯</div></a>
          </li>
        </router-link>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../img/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div></a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../img/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div></a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../img/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div></a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../img/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div></a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../img/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div></a>
        </li>
      </ul>

    </div>
  </div>
</template>

<script src="">
import rainbow from'../../img/rainbow.jpg';
import train from'../../img/train.jpg';
import moon from'../../img/moon.jpg';
export default{
  methods:{
    getslide(){
      this.$http.get()
    }
  },
  data(){
    return{
      imgs:[rainbow,train,moon]
    }
  }
}
</script>

<style scoped>
.mint-swipe-item{
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
}
.img1{
  background: url("../../img/rainbow.jpg");
}
.img2{
  background: url("../../img/train.jpg");
}
.img3{
  background: url("../../img/moon.jpg");
}
.mui-grid-view.mui-grid-9{
  background-color: white
}
.mui-grid-view.mui-grid-9 img{
  height: 60px;
  width: 60px;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border:none;
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
  font-size: 13px;
}
</style>