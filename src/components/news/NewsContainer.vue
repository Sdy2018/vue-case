<template>
  <ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
      <router-link :to="'/home/news/content/'+item.id">
        <img class="mui-media-object mui-pull-left" :src="item.img_url" height="720" width="720">
        <div class="mui-media-body">
          <span>{{item.title}}</span>
          <p class="mui-ellipsis">
           <span>时间:{{item.add_time | dateformat}}</span>
           <span>点赞 {{item.click}}</span>
         </p>
       </div>
     </router-link>
    </li>
  </ul>
</template>

<script src="">
export default{
  data(){
    return {
      'newsList':''
    }
  },
  methods:{
    getNewsList(){
      this.$http.get("api/getnewslist").then(doneCallbacks=>{
        if(doneCallbacks.body.status==0){
          this.newsList=doneCallbacks.body.message
        }
      })
    }
  },
  created(){
    this.getNewsList();
  },
}
</script>

<style type="text/css" scoped>
.mui-table-view{
  margin-top: 20px;
}
.mui-media-body>span{
  font-size: 16px;
  color: #918;
}
.mui-ellipsis{
  display: flex;
  justify-content: space-between;
}
.mui-ellipsis>span{
 font-size: 14px;
 color: #189;
}
</style>