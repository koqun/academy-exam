<template>
  <div class="write">
    <h1>글을 작성하는 공간입니다</h1>
    
    <input type="text" size="28" v-model="$store.state.title">
    <br>
    <textarea name="" id="" cols="30" rows="10" v-model="$store.state.content"></textarea>
    <br>
    <button @click="addpost">완료</button>
  </div>
</template>

<script>
export default {
  methods: {
    addpost(){
      this.$store.commit('addpost');
    }
  },
}
</script>