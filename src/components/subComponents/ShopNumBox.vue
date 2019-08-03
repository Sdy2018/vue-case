<template>
  <div class="mui-numbox" data-numbox-min="1" >
    <button class="mui-btn mui-btn-numbox-minus" type="button" @>-</button>
    <input id="test" class="mui-input-numbox" ref="box" type="number"  :value="this.number" >
    <button class="mui-btn mui-btn-numbox-plus" type="button"  disabled="">+</button>
  </div>
</template>

<script>
  import mui from '../../lib/mui/js/mui.min.js'
  export default{
    mounted(){
      mui(".mui-numbox").numbox()
    },
    props:['number']
  }
</script>

<style lang="scss" scoped>

</style>