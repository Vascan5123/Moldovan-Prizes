import Vue from 'vue'
import 'firebase/auth'
import 'firebase/storage'

export default {
    state: {
        info: {
            header: "",
            left1: "",
            left2: "",
            right1: "",
            right2: "",
            footer: ""
        }
    },
    mutations: {
        allInfoM(state, payload) {
            state.info.header = payload.header;
            state.info.left1 = payload.left1;
            state.info.left2 = payload.left2;
            state.info.right1 = payload.right1;
            state.info.right2 = payload.right2;
            state.info.footer = payload.footer;
        },
    },
    actions: {
        async getPagges({ commit }) {
            let pages
            await Vue.$db.collection('info')
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach(s => {
                        const data = s.data()
                        pages = data
                    })
                })
                .catch(error => {
                    console.log(error)
                })
            await commit('allInfoM', pages)
            return pages
        },
        async SetPage({ commit }, payload) {

            await Vue.$db.collection("info").doc("page").set(payload);
            await commit('allInfoM', payload)

            /* Vue.$db.collection('pages').doc("primary").set({
                title : payload.value
            }).then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            }); */
        },
    },
    getters: {
        allInfosG: (state) => state.info,
    }
}