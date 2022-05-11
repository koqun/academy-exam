import Vue from 'vue'
import Vuex from 'vuex'
// 파베 불러오기
import '@/datasources/firebase'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'
import router from '@/router'

const auth = getAuth();

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    state: {
      oUser: null // 사용자 정보를 담을 객체
    },
  },
  getters: {
    fnGetUser(state){
      return state.oUser;
    },
    // oUser 값이 null이 아닌 User 정보가 들어가있을 때, 로그인 상태 true
    fnGetAuthStatus(state) {
      return state.oUser!=null;
    }
  },
  mutations: {
    fnSetUser(state, payload){
      state.oUser = payload;
    }
  },
  actions: {
    // Firebase의 인증을 이용하며 이메일 회원생성 및 저장
    fnRegisterUser({commit}, payload){
      createUserWithEmailAndPassword(auth, payload.pEmail, payload.pPassword)
      .then((pUserInfo)=> {
        // 신규 회원 이메일 정보를 스토어에 저장
        commit("fnSetUser", {
          email: pUserInfo.user.email,
        })
        router.push("/main");
      })
      .catch((err)=> {
        console.log(err.message);
      })
    },
    // 파이어베이스의 인증을 이용하여 이메일 회원 로그인
    DoLogin({commit}, payload){
      signInWithEmailAndPassword(auth, payload.pEmail, payload.pPassword)
      .then((pUserInfo)=> {
        commit("fnSetUser", {
          id: pUserInfo.user.uid,
          name: pUserInfo.user.displayName,
          email: pUserInfo.user.email,
          photoURL: pUserInfo.user.photoURL
        })
        router.push("/main");
      })
      .catch((err)=> {
        console.log(err.message);
      })
    },
    // 파이어베이스 구글 로그인 팝업
    fnDoGoogleLogin_Popup({commit}){
      const oProvider = new GoogleAuthProvider();
      oProvider.addScope("profile");
      oProvider.addScope("email");

      signInWithPopup(auth, oProvider)
      .then((pUserInfo)=> {
        commit("fnSetUser", {
          id: pUserInfo.user.uid,
          name: pUserInfo.user.displayName,
          email: pUserInfo.user.email,
          photoURL: pUserInfo.user.photoURL
        })
        router.push("/main");
      })
      .catch((err)=> {
        console.log(err.message);
      })
    },
  },
  modules: {
  }
})
