import Vue from 'vue'
import App from './App.vue'
/* import 'vuetify/dist/vuetify.min.css' */
import vuetify from './plugins/vuetify';
/* import Vuetify from 'vuetify' */
import firebaseConfig from "./config/firebase.js"
import firebase from 'firebase/app'
import "firebase/firestore"
import 'firebase/auth'
import store from './store'
import router from './router'

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()

Vue.$db = db

Vue.config.productionTip = false
/* Vue.use(Vuetify) */

const vm = new Vue({
  vuetify,
  beforeCreate() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        vm.$store.dispatch("stateChange", user)
      } else {
        // No user is signed in.
      }
    });
  },

  store,
  router,
  render: h => h(App)
}).$mount('#app')
