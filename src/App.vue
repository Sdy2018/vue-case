<template>
  <div class="container">
    <mt-header fixed title="vue案例">
      <span @click="back" slot="left" v-show="flag">
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>
    <transition >
      <router-view ></router-view>
    </transition>
    <section class="toolbar">
      <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item-sdy" to="/home">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item-sdy" to="/member">
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">会员</span>
        </router-link>
        <router-link class="mui-tab-item-sdy" to="/shoppingCar">
          <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
            <span class="mui-badge" id="badge">{{$store.getters.getAllCount}}</span>
          </span>
          <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link class="mui-tab-item-sdy" to="/search">
          <span class="mui-icon mui-icon-search"></span>
          <span class="mui-tab-label">搜索</span>
        </router-link>
      </nav>
    </section>
  </div>
</template>

<script>
export default{
  data(){
    return{
      flag:false
    }
  },
  methods:{
    back(){
      this.$router.go(-1)
    }
  },
  created(){
    this.$route.path==="/home"?this.flag=false:this.flag=true
  },
  watch:{
    '$route.path':function(newValue){
      newValue==="/home"?this.flag=false:this.flag=true
    }
  }
}
</script>

<style  scoped>
.mint-header.is-fixed{
  z-index: 10;
}
.container{
  padding-top: 20px;
  padding-bottom:50px;
  overflow-x: hidden;
}
.v-enter
{
  transform: translateX(100%);
}

.v-leave-to{
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active{
  transition: all 0.5s ease;
}
.mui-bar-tab .mui-tab-item-sdy.mui-active {
  color: #007aff;
}
.mui-bar-tab .mui-tab-item-sdy {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .mui-tab-item-sdy .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-sdy .mui-icon~.mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>