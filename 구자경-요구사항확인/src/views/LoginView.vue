<template>
    <div class="login">
        아이디:<input type="text" v-model="user"><br>
        비밀번호:<input type="password"><br>
        <button @click="loginUser">로그인</button>
        <button @click="$router.push('/')">취소</button>
    </div>
</template>

<script>
export default {
    name:'LoginView',
    data : ()=>({
        user :''
    }),
    methods : {
        // login-user 이벤트를 보내고, this.user 값을 전달
        loginUser : function() {
            this.$emit('login-user', this.user);
            // 컴포넌트를  '/'로 바꿈
            this.$router.push('/');
        }
    }
}
</script>