<template>
  <div id="app">
    <img src="../../assets/logo.png">
    <ul>
      <li><a href="/a.html">我是A页面</a></li>
      <li><a href="/b.html">我是B页面</a></li>
    </ul>
    <router-view/>
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
