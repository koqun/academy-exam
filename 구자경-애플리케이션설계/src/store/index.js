import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title:"",
    content:"",
    post:[
      {title:"첫번째 글 제목", content:"첫번째 글 내용", click:0}, 
      {title:"두번째 글 제목", content:"두번째 글 내용", click:0}, 
    ]
  },
  getters: {
  },
  mutations: {
    addcount(state, i){
      state.post[i].click++;
    },
    addpost(state){
      const zip={title:state.title, content:state.content, click:0};
      state.post.push(zip);
      state.title="";
      state.content="";
    }
  },
  actions: {
  },
  modules: {
  }
})
