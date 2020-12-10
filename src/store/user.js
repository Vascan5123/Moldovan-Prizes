import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
export default {
    state: {
        isAuth: false,
    },
    mutations: {
        SetIsAuth(state, isAuth) {
            state.isAuth = isAuth
        },
    },
    actions: {
        async signin({ commit }, payload) {
            let error1 = "";
            await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then((res) => {
                    commit("SetIsAuth", true)
                    console.log(res.user)
                })
                .catch(function (error) {
                    error1 = error
                    console.log(error)
                });
            return error1
        },
        stateChange({ commit }, payload) {
            if (payload) {
                commit("SetIsAuth", true)
            }
        },
    },
    getters: {
        isUserAuth: (state) => state.isAuth,
    }
}