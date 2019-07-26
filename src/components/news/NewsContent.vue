<template>
  <div>
    <div class="newsInfoContainer">
      <h1 class="title">
        {{newsInfo.title}}
      </h1>
      <p class="time">
        <span>{{newsInfo.add_time | dateformat}} </span>
        <span>{{newsInfo.click}}</span>
      </p>
      <hr>
      <span >{{newsInfo.zhaiyao}}</span>
    </div>
    <comment :id="id"></comment>

  </div>
</template>

<script type="text/javascript">
  import comment from '../../components/subComponents/comment.vue';
  export default{
    data(){
      return {
        'id':this.$route.params.id,
        'newsInfo':{}
      }
    },
    created(){
      this.getNewsList()
    },
    methods:{
      getNewsList(){
        this.$http.get('api/getnewslist').then(doneCallbacks=>{
          if(doneCallbacks.body.status==0){
            var arrayMsg=doneCallbacks.body.message
            for(var i=0;i<arrayMsg.length;i++){
              if(arrayMsg[i].id==this.id){
                this.newsInfo=arrayMsg[i]
                return
              }
            }
            console.log(doneCallbacks.body.message)
          }
        })
      }
    },
    components:{
      comment
    }
  }
</script>

<style scoped>
.newsInfoContainer>.title{
  color: red;
  text-align: center;
  font-size: 22px;
}
.newsInfoContainer>.time{
  color: #189;
  display: flex;
  justify-content: space-between;
}
.newsInfoContainer>span{
  padding: 0 5px;
}
</style>