<template>
    <div>
        <h1>글을 작성하는 공간입니다</h1>

        <input type="text" v-model="title"><br>
        <textarea name="" id="" cols="30" rows="10" v-model="memo"></textarea><br>
        <button @click="addmemo">전송</button>

        <!-- <form action="/api/memo/writeform">
            <input type="text" name="title"><br>
            <textarea name="memo" id="" cols="30" rows="10"></textarea><br>
            <input type="submit" value="전송">
        </form> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            title:"",
            memo:""
        }
    },
    methods: {
        addmemo(){
            //전체 추가된 메모의 갯수
            let count= 2;

            // post를 이용해서 서버로 값 전달
            this.$http.post('/api/memo', {
                data:{
                    id:this.count+= 1,
                    title:this.title,
                    memo:this.memo,
                    writer:"익명"
                }
            }).then((response)=> console.log(response.data))
            this.$router.push('/')
        }
    },
}
</script>

