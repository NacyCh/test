<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <ul>
      <li><router-link to='/test'>点我test</router-link></li>
      <li><router-link to='first'>点我first</router-link></li>
      <li><router-link to='/second'>点我second</router-link></li>
      <li><router-link to='/event'>add form</router-link></li>
    </ul>
    <router-view class='view'></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.origin_name:before{
  content: ' /'
}
</style>
