<template>
	<div>
		<hr>
		<textarea maxlength="120">
		</textarea>
		<mt-button type="primary" size='large' >发表</mt-button>
		<div class="cmt-list">
			<div class="comt-item"  v-for="(item,index) in message" :key="item.add_time">
				<p>
					<span>第{{index+1}}楼&nbsp;&nbsp;</span>
					<span>用户:{{item.user_name}}&nbsp;&nbsp;</span>
					<span>发表时间:{{item.add_time | dateformat()}}</span>
				</p>
				<div class="comt-content">
					{{item.content}}
				</div>
			</div>
		</div>

		<mt-button class="more" type="primary" size='large' plain @click="showMore">加载更多</mt-button>
	</div>
</template>

<script src="">
	export default{
		data(){
			return {
				'pageindex':1,
				'message':[]
			}
		},
		methods:{
			getCommentInfo(){
				this.$http.get("api/getcomments/"+this.id+"?pageindex="+this.pageindex).then(doneCallbacks=>{
					if(doneCallbacks.body.status==0){
						this.message=this.message.concat(doneCallbacks.body.message)
					}
				})
			},
			showMore(){
				this.pageindex++
				this.getCommentInfo()
			}
		},
		created(){
			this.getCommentInfo()
		},
		props:['id']

	}
</script>

<style type="text/css">

.cmt-list>.comt-item>p{
	margin-top: 10px;
	background-color: #eee;
}
.cmt-list>.comt-item>.comt-content{
	border: 1px solid #f40;
	text-indent: 2em;
	height: 60px;
	padding-top: 5px;
}
.more{
	margin-top: 10px;
}
</style>