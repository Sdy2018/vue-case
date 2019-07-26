<template>
  <div class="container">
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted" data-scroll="1">
        <div class="mui-scroll" style="transform: translate3d(0px, 0px, 0px) translateZ(0px); transition-duration: 0ms; transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);">
        <a  :class="['mui-control-item',item.id===0?'mui-active':'']"  v-for="item in photoTitleList" :key="item.id" @click="getPhotoList(item.id)" >
              {{item.title}} 
        </a>
        </div>
      </div>
    </div>
    <ul>
      <router-link v-for="item in photoList" :key="item.id" :to="'/home/photoList/photoContent/'+item.id" tag="li"">
        <img v-lazy="item.img_url">
        <div class="photoInfo">
          <div class="title">{{item.title}}</div>
          <div class="info">{{item.zhaiyao}}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script src="">
import  mui from '../../lib/mui/js/mui.min.js'
export default {
  data(){
    return{
      'photoTitleList':[],
      'photoList':[]
    }
  },
  methods:{
    getPhotoTitle(){
      this.$http.get('api/getimgcategory').then(doneCallbacks=>{
        if(doneCallbacks.body.status===0){
          doneCallbacks.body.message.unshift(
          {
            'title':'全部',
            'id':0
          })
          this.photoTitleList=doneCallbacks.body.message  
        }
      })
    },
    getPhotoList(title){
      this.$http.get('api/getimages/'+title).then(doneCallbacks=>{
        if(doneCallbacks.body.status===0){
          this.photoList=doneCallbacks.body.message
        }
      })
    }
  },
  created(){
    this.getPhotoTitle()
    this.getPhotoList(0)
  },
  mounted(){
    // mui('.mui-scroll-wrapper').scroll({
    //  deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    // });
    mui('.mui-scroll-wrapper').scroll({
      options:{
      scrollY: true, //是否竖向滚动
      scrollX: true, //是否横向滚动
      startX: 0, //初始化时滚动至x
      startY: 0, //初始化时滚动至y
      indicators: true, //是否显示滚动条
      deceleration:0.0006, //阻尼系数,系数越小滑动越灵敏
      bounce: true //是否启用回弹
      }
    }) 
  }
}
</script>

<style type="text/css" scoped>
* { touch-action: pan-y; } 
.mui-scroll-wrapper{
  overflow: scroll;
}
.container{
  padding-bottom: 0px;
}
img {
  width: 100%;
  height: 25%;
  vertical-align:middle;
}
image[lazy=loading] {
  width: 40px;
  height: 40px;
}
ul{
  padding: 0 20px;
  list-style: none;
  width: 100%;
  height: 100%;
  text-align:center;
  padding-bottom:0px;
}
li{ 
  margin-bottom: 20px;
  margin-top: 0px;
  position: relative;
  box-shadow:  0px 0px 5px ;
}
.photoInfo{
  text-align: left;
  background-color: rgba(0,0,0,0.4);
  color: #fff;
  position: absolute;
  bottom: 0px;
  max-height: 84px;
}
</style>