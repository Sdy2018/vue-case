<template>
  <div class="shoppingcar-container">
    <div class="mui-card" v-for="(item,index) in goodsList" :key="item.id">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <mt-switch  v-model="$store.getters.getGoodsSelect[index][item.id]" 
          @change="selectedChanged(item.id,$store.getters.getGoodsSelect[index][item.id])" >
          </mt-switch>
          <img class="right" :src="item.thumb_path" alt="BATMAN">
          <div  class="goods-number">
            <h1>{{item.title}}</h1>
            <p >
              <span class="price">{{item.sell_price}}</span>
              <numbox :number="goodsCount[index][item.id]"></numbox>
              <a href="#" @click.prevent="removeGoods(item.id,index)">删除</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="account-left">
            <p>总计(不含运费)</p>
            <p>已勾选商品 <span class="red">{{$store.getters.getGoodsCountAndAmount.count}}</span> 件,总价:<span class="red">￥{{$store.getters.getGoodsCountAndAmount.amount}}</span></p>
          </div>
          <mt-button type="danger" class="right" >结算</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="">
  import numbox from '../subComponents/ShopNumBox.vue'
  export default{
    data(){
      return {
        goodsList:[],
        goodsCount:[]
      }
    },
    methods:{
      getShoppingGoods(){
        var shoppingGoods=[]
        this.$store.state.shoppingCar.forEach(item=>{
          shoppingGoods.push(item.goodsID)
          this.goodsCount.push({[item.goodsID]:item.goodsCount})
        })
        if(shoppingGoods.length<=0){
          return
        }
        this.$http.get("api/goods/getshopcarlist/"+shoppingGoods.join(',')).then(doneCallbacks=>{
          if(doneCallbacks.body.status===0){
            this.goodsList=doneCallbacks.body.message
          }
        })
      },
      removeGoods(id,index){
        this.goodsList.splice(index,1)
        this.goodsCount.splice(index,1)
        this.$store.commit("removeGoods",id)
      },
      selectedChanged(id,select){
        this.$store.commit("updatedGoodsSelected",{id:id,select:select})
      }
    },
    created(){
      this.getShoppingGoods()
    },
    components:{
      numbox
    }
  }

</script>

<style lang="scss" scoped>

.shoppingcar-container{
  padding-top: 20px;
  .mui-card-content-inner{
    display: flex;
    align-items:center;
    .right{
      margin-left: 20px;
    }
    .red{
      color: red;
    }
    img{
      width: 60px;
      height: 60px;
    }
    .goods-number{
      display: flex;
      flex-direction:column;
      justify-content:space-between;
      h1{
        margin-top: 0px;
        font-size: 14px;
        text-align: center;
      }
      p{
        margin: 0px;
        .price{
          color: red;
        }
      }
    }
  }
}
</style>