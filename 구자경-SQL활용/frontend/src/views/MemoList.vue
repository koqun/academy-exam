<template>
    <div>
        <h1>메모</h1>
        <!--  메모의 아이디와 작성자와 제목 출력 -->
        <table>
            <tr>
                <td>아이디</td>
                <td>작성자</td>
                <td>제목</td>
            </tr>
            <tr v-for="memo in memo" :key="memo.i">
                <td>{{memo.id}}</td>
                <td>{{memo.writer}}</td>
                <!-- 타이틀을 눌렀을때 /list/:id 링크로 이동 -->
                <td @click="$router.push(`/list/${memo.id}`)">{{memo.title}}</td>
                <!-- 수정 버튼을 눌렀을때 /updateform/${memo.id} 링크로 이동 -->
                <button @click="$router.push(`/updateform/${memo.id}`)">수정</button>
                <!-- 삭제 버튼을 눌렀을때, 삭제할 memo.id를 apimemo.js로 전송 -->
                <button @click="deletememo(memo.id)">삭제</button>
                <!-- apimemo.js 내에서 id값을 이용해 해당 배열 splice로 삭제 -->
                <!-- res.send로 수정된 memos 배열값 전송 -->
                <!-- 수정값 표현할 해당 페이지의 data에 response(데이터 갱신) -->
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data () {
        return {
            //v-for로 확인하기 위해 배열
            memo : []
        }
    },
    // 컴포지션이 처음 생성될때 값을 가져와야 화면에 출력할수 있다
    created() {
        // axios를 통해 값을 가져옴 - get
        // this.memo에 가져온 값 넣어줌
        this.$http.get('/api/memo')
        .then((response) => {
            // data를 통해서 값 가져올 수 있다.
            console.log(response.data);
            this.memo = response.data
        })
    },
    methods: {
        deletememo(id) {
            this.$http.delete(`/api/memo/${id}`).then((response) => {
                // backend > apimemo.js 단에서
                // memos(memo.json)의 배열 중 동일한 id를 가진 memo를 삭제 한 뒤,
                // 수정된 memo.json의 배열을 delete methods 실행 이후 다시 불러온다.
                this.memo = response.data;
            })
        }
    },
}
</script>