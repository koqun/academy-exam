<template>
  <div id="app">
    <div v-if='login'>
      <button outlined @click="$router.push('/board')">글 목록</button>
      <button outlined @click="$router.push(`/user/${user}`)">{{user}}님의 정보</button>
      <button @click="loginOut">로그아웃</button>
    </div>
    
    <button v-else @click="$router.push('/login')">로그인</button>

    <router-view @login-user="showLogin"></router-view>
  </div>
</template>

<script>
export default {
  name:'App',
  data() {
    return {
      user : '',
      login : false
    }
  },
  methods : {
    showLogin : function(user) {
      this.user = user;
      this.login = true;
    },
    loginOut : function() {
      this.user= '';
      this.login = false;
      //처음화면으로 돌아가기위함
      this.$router.push('/');
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
