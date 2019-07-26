<template>
  <div class="goods-list">
    <router-link :to="'/home/goodsInfo/'+item.id" tag="div" class="goods-item" v-for="item in goodsList" :key="item.id">
      <img :src="item.img_url" alt="网络错误">
      <h1 class="title">{{item.title}}</h1>
      <div class="photoInfo">
        <div class="price">
          <span class="new">￥{{item.sell_price}}</span>
          <span class="old">￥{{item.market_price}}</span>
        </div>
        <div class="sell">
          <span>正在热卖</span>
          <span>当前销售{{item.stock_quantity}}</span>
        </div>
      </div>
    </router-link>
    <mt-button  type="primary" ref="load" size='large' plain @click="loadMore">加载更多</mt-button>
  </div>
</template>

<script src="">
export default{
  data(){
    return {
      'pageIndex': 1,
      'goodsList':[],
      'loadInfo':"没有更多"
    }
  },
  methods:{
    getGoodsList(pageIndex){
      this.$http.get('api/getgoods?pageindex='+pageIndex).then(doneCallbacks=>{
        if(doneCallbacks.body.status===0){
          this.goodsList=this.goodsList.concat(doneCallbacks.body.message)
        }
      })
    },
    loadMore(){
      this.getGoodsList(++this.pageIndex)
    }
  },
  created(){
    this.getGoodsList(this.pageIndex)
  }
}
</script>

<style lang="scss" scoped>
.goods-list{
  margin-top: 20px;
  display: flex;
  flex-wrap:wrap;
  padding: 10px;
  justify-content:space-between;
  img{
    display: block;
    margin: 0 auto;
    width: 450px;
  }
  .goods-item{
    box-shadow: 0 0 5px ;
    border: 1px solid #ccc;
    margin-top: 10px;
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    width: 48%;
    margin-bottom: 10px;
    h1{
      margin:15px;
      font-size: 20px;
    }
    .photoInfo{
      margin-top: 10px;
      padding:15px 10px; 
      color: #222;
      background-color: #ccc;
      .price{
        span{
        }
        .new{
          color: red;
          font-size: 22px;
          font-weight: bold;
        }
        .old{
          margin-left: 10px;
          color: #666;
          text-decoration: line-through;
        }
      }
      .sell{
        margin-top: 10px;
        display: flex;
        justify-content:space-between;
      }
    }
  }
}
</style>