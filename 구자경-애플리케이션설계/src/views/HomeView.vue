<template>
  <div class="home">
    <table>
      <tr>
        <td>번호</td>
        <td>제목</td>
        <td>클릭횟수(조회수)</td>
      </tr>
      <tr v-for="(item, i) in $store.state.post"  :key="i">
        <td>{{i}}</td>
        <td><a @click="addcount(i)">{{item.title}}</a></td>
        <td>{{item.click}}</td>
      </tr>
    </table>

    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  methods: {
    addcount(i){
      this.$store.commit('addcount', i);
      this.$router.push(`/board/${i}`);
    }
  },
}
</script>
