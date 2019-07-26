<template >
  <div class="slide-container" style="height: 400px;width:100%">
    <mt-swipe  :auto="3000"  >
      <mt-swipe-item  v-for="item in pictures" :key="item" :style="{ 'backgroundImage':'url('+item+')'}">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script >
export default{
  props:['pictures']
}
</script>

<style lang="scss" scoped="">
.slide-container{
  .mint-swipe-item{
  background-size: cover !important;
  background-repeat: no-repeat !important;
  
  }
}
</style>