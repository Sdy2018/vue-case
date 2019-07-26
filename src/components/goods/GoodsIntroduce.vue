<template>
  <div class="introduce_container">
    <h1 class="title">{{goodsIntroduce.title}}</h1>
    <hr>
    <div class="content" v-html="goodsIntroduce.content"></div>
  </div>
</template>
<script >
export default{
  data(){
    return {
      'goodsIntroduce':{}
    }
  },
  methods:{
    getGoodsIntroduce(){
      this.$http.get('api/goods/getdesc/'+this.$route.params.id).then(success=>{
        if(success.body.status===0){
          this.goodsIntroduce=success.body.message[0]
        }
      })
    }
  },
  created(){
    this.getGoodsIntroduce()
  }
}
</script>

<style lang="scss" scoped>
.introduce_container{
  padding: 5px;
  padding-top: 20px;
  .title{
    margin: 20px 0px;
    text-align: center;
    font-size: 18px;
    color: #66f1ff
  }
  .content{
    margin-top: 20px;
  }
}
</style>