<template>
  <div id="app">
    <h1>我是多页面---B页面</h1>
    <img src="../../assets/logo.png">
    <router-view/>
    <router-link to="/">
      <span>首页</span>
    </router-link>
    <router-link to="/child">
      <span>子页面</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
