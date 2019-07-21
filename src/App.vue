<template>
  <div >
    <mt-header fixed title="首页"></mt-header>
    <h1 class="container">123</h1>
    <section class="toolbar">
      <nav class="mui-bar mui-bar-tab">
        <a class="mui-tab-item " href="#tabbar">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </a>
        <a class="mui-tab-item mui-active" href="#tabbar-with-chat">
          <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
          <span class="mui-tab-label">消息</span>
        </a>
        <a class="mui-tab-item" href="#tabbar-with-contact">
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">通讯录</span>
        </a>
        <a class="mui-tab-item" href="#tabbar-with-map">
          <span class="mui-icon mui-icon-gear"></span>
          <span class="mui-tab-label">设置</span>
        </a>
      </nav>
    </section>
  </div>
</template>

<script>
  console.log('hi')
  export default{
    'msg':'nice to see you'
  }
</script>

<style type="text/css" scoped>
.container{
  margin-top: 40px;
}
</style>