<template>
  <div class="photo-content-container">
    <h1 class="title">{{content.title}}</h1>
    <div class="photo-info">
      <span>{{content.add_time | dateformat()}}</span>
      <span>{{content.click}}</span>
    </div>
    <hr>
    <!-- 缩略图 -->
    <vue-preview class="photo-preview" :slides="slide" @close="handleClose"></vue-preview>
    <div class="photo-content" v-html="content.content"></div>
    <!-- 评论 -->

    <comment :id="this.id"></comment>
  </div>
</template>

<script >
  import comment from '../subComponents/comment.vue'
  export default{
    data(){
      return{
        'id':this.$route.params.id,
        'content':"",
        'slide':[]
      }
    },
    methods:{
      getphotoContent(){
      this.$http.get("api/getimageInfo/"+this.id).then(doneCallbacks=>{
        if(doneCallbacks.body.status===0){
          this.content=doneCallbacks.body.message[0]
        }
      })
      },
      getThumbnail(){
        this.$http.get('api/getthumimages/'+this.id).then(doneCallbacks=>{
          if(doneCallbacks.body.status===0){
            (doneCallbacks.body.message).forEach((item, index, arr)=> {
              item.msrc=item.src
              item.alt='picture'+index
              item.title='picture'+index
              item.w=600
              item.h=400
            });
            this.slide=doneCallbacks.body.message
            console.log(this.slide)
          }
        })
      },
      handleClose () {
        console.log('close event')
      }
    },
    created(){
      this.getphotoContent()
      this.getThumbnail()
    },
    components:{
      comment
    }
  }
</script>

<style lang="scss" scoped>
  .photo-content-container{
    padding: 3px;
    h1{
      margin-top:40px;
      margin-bottom:15px;
      font-size:18px;
      color:#819;
      text-align:center;
    }
    .photo-info{
      display:flex;
      justify-content:space-between;
      color: #27D2C0;
    }
    .photo-content{
      margin-top:10px;
      font-size: 16px;
      line-height: 30px;
    }
    .photo-preview{
      text-align: center;
      display: inline;
    }
  }
  .photo-preview>div{
    display: inline;
  }
</style>