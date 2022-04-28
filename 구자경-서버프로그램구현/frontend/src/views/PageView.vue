<template>
    <div>
        <h1>{{memo.title}}</h1>
        <p>{{memo.memo}}</p>
    </div>
</template>

<script>
export default {
    created() {
        // /api/memo/paramsid를 넣어서 전달
        this.$http.get(`/api/memo/${this.$route.params.id}`)
        .then((response)=> {
            this.memo= response.data;
            console.log(this.memo)
        })
    },
    data() {
        return {
            memo:{}
        }
    },
}
</script>