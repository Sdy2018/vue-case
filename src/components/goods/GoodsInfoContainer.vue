<template>
	<div class="goodsinfo-container">
		<transition 
		 @before-enter="beforeEnter"
		 @enter="enter"
		 @after-enter="afterEnter"
		>
			<div class="ball" v-if="ballFlag" ref="ball">

			</div>
		</transition> 
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<div class="slide-container" style="height: 400px;width:100%">
						<mt-swipe  :auto="3000"  >
							<mt-swipe-item  v-for="item in photoList" :key="item.src"  >
								<img :src="item.src" alt="">
							</mt-swipe-item>
						</mt-swipe>
					</div>
				</div>
			</div>
		</div>
		<div class="mui-card">
			<div class="mui-card-header">{{pictureInfo.title}}</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p>
						市场价:<del>{{pictureInfo.market_price}}</del>&nbsp;&nbsp;销售价:&nbsp;
						<span class="price">{{pictureInfo.sell_price}}</span>
					</p>
					<p>
						购买数量:
						<numbox :max="pictureInfo.stock_quantity" @buyCount="getSelectCount" ref="numbox"></numbox>
					</p>
					<mt-button type="primary">立即购买</mt-button>
					<mt-button type="danger" @click="addShoppCar">加入购物车</mt-button>
				</div>
			</div>
		</div>
		<div class="mui-card">
			<div class="mui-card-header">商品参数</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p>商品编号:{{pictureInfo.goods_no}}</p>
					<p>库存情况:{{pictureInfo.stock_quantity}}</p>
					<p>上架时间: {{pictureInfo.add_time | dateformat()}}</p>
				</div>
			</div>
			<div class="mui-card-footer">
				<mt-button type="primary" size="large" plain @click="goIntroduce">图文介绍</mt-button>
				<mt-button type="danger" size="large" plain @click="goComment">商品评论</mt-button>
			</div>
		</div>
	</div>
</template>

<script>
	import slide from '../subComponents/SlideContainer.vue';
	import numbox from '../subComponents/BuyNumberBox.vue'
	export default{
		data(){
			return{
				'id':this.$route.params.id,
				'pictureList':[],
				'photoList':[],
				'pictureInfo':{},
				'ballFlag':false,
				'buyCount':1
			}
		},
		methods:{
			getPictureList(){
				this.$http.get("api/getthumimages/"+this.id).then(SUCCESS=>{
					if(SUCCESS.body.status===0){
						this.photoList=SUCCESS.body.message
					}
				})
			},
			getPictureInfo(){
				this.$http.get('api/goods/getinfo/'+this.id).then(success=>{
					if(success.body.status===0){
						this.pictureInfo=success.body.message[0]
					}
				})
			},
			goIntroduce(){
				this.$router.push({
					'name':'introduce',
					'params':{
						'id':this.id
					}
				})
			},
			goComment(){
				this.$router.push({
					'name':'comment',
					'params':{
						'id':this.id
					}
				})
			},
			addShoppCar(){
				this.ballFlag=!this.ballFlag
				console.log(this.$refs.numbox.number)
			},
			beforeEnter(el){
				el.style.transform="translate(0,0)"
			},
			enter(el,done){
				/*获取小球位置*/
				const ball=this.$refs.ball.getBoundingClientRect();
				const badge=document.getElementById("badge").getBoundingClientRect();
				const xDist=badge.left-ball.left
				const yDist=badge.top-ball.top
				el.offsetWidth
				el.style.transform="translate("+xDist+"px,"+yDist+"px)"
				el.style.transition="all 1s cubic-bezier(.3,.5,.8,.98)"
				done()
			},
			afterEnter(el){
				this.ballFlag=!this.ballFlag
			},
			getSelectCount(count){
				this.buyCount=count
				console.log(this.buyCount)
			}
		},
		created(){
			this.getPictureList()
			this.getPictureInfo()
		},
		components:{
			slide,
			numbox
		}
	}
</script>

<style lang='scss' scoped>
.goodsinfo-container{
	background-color: #eee;
	padding-top: 20px;
	.slide-container{
		text-align: center;
		background-color: #fff;
		img{
			height: 100%px;
			width: auto;
		}
	}
	.mui-card{
		.price{
			color: red;
			font-size: 16px;
			font-weight: bold;
		}
	}
	.mui-card-footer{
		display: block;
		button{
			margin:15px 0px;
		}
	}
	.ball{
		position: absolute;
		height: 15px;
		width: 15px;
		border-radius: 50%;
		background-color: red;
		left:142px;
		top:589px;
		z-index: 999;
		// transform:translate(473px,208px);
	}
}

</style>