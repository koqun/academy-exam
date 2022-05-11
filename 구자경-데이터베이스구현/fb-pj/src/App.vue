<template>
  <div id="app">
    <!-- 그냥 표시 -->
    <nav v-if="!fnGetAuthStatus">
      <router-link to="/">Home</router-link> |
      <router-link to="/Register">Sign up</router-link>
    </nav>
    <!-- 로그인 시 표시 -->
    <nav v-else>
      <router-link to="/">Home</router-link> |
      <a href="">Logout</a> | 
      <a href="">Withdrawal</a>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  computed: {
    fnGetAuthStatus(){
      return this.$store.getters.fnGetAuthStatus
    }
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
