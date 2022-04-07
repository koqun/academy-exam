<template>
  <div class="page">
    <!-- 동적라우터를 이용하여 $route의 값을 저장하고 가져올수 있음 -->
    <h1><span>{{$route.params.page}}</span>페이지입니다</h1>
    <p>{{data.board[($route.params.page)-1].memo}}</p>
  </div>
</template>

<script>
import data from '../assets/data.json'

export default {
  name: 'PageComp',
  // data: data
  data() {
    return {
      data,
    }
  },
}
</script>
