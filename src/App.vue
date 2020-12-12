<template>
  <div id="app">
    <!-- <Search/> -->
    <!-- <Login/> -->
   <!-- <Register /> -->
   <router-view />
  </div>
</template>

<script>
// import Search from './views/Admin/Search'
// import Login from './views/pages/Login'
// import Register from './views/pages/Register'

export default {
  name: 'App',
  components: {
    // Search,
    // Register,
    // Login
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
