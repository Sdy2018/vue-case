<template>
  <div class="introduce_comment">
      <comment :id="this.$route.params.id"></comment>
  </div>
</template>
<script >
  import comment from '../subComponents/comment.vue'
  export default{
    components:{
      comment
    }
  }
</script>

<style lang="scss" scoped>
.introduce_comment{
  padding-top: 20px;
}
</style>