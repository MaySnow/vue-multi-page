<template>
  <div id="app">
    <h1>我是多页面---A页面</h1>
    <img src="../../../assets/logo.png">
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'app',
    created () {
      axios.get('/api/cart')
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
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
