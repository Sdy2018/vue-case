<template>
  <div class="mui-numbox" data-numbox-min="1" >
    <button class="mui-btn mui-btn-numbox-minus" type="button" @>-</button>
    <input id="test" class="mui-input-numbox" ref="box" @change="change" type="number"  value="1" >
    <button class="mui-btn mui-btn-numbox-plus" type="button"  disabled="">+</button>
  </div>
</template>

<script>
  import mui from '../../lib/mui/js/mui.min.js'
  export default{
    mounted(){
      mui(".mui-numbox").numbox()
    },
    data(){
      return{
        number:1
      }
    },
    methods:{
      change(){
        this.number=this.$refs.box.value
      }
    },
    props:["max"],
    watch:{
      max:function(newVal,oldVal){
        mui(".mui-numbox").numbox().setOption('max',newVal)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>