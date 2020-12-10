<template>
  <v-container class="admin fill-height" fluid>
    <v-row justify="center">
      <v-col cols="8">
        <v-text-field label="Header" outlined v-model="header"></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="4">
        <v-text-field label="title 1" outlined v-model="left1"></v-text-field>
        <v-textarea
          class="mx-0 font-weight-light"
          outlined
          v-model="left2"
        ></v-textarea>
      </v-col>
      <v-col cols="4">
        <v-text-field label="title 1" outlined v-model="right1"></v-text-field>
        <v-textarea
          class="mx-0 font-weight-light"
          outlined
          v-model="right2"
        ></v-textarea>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="8">
        <v-text-field label="Footer" outlined v-model="footer"></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="8">
        <v-row justify="center">
          <v-btn
            x-large
            color="primary"
            href="https://logic-prize-moldova.islai.org/"
          >
            Primary page
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn x-large color="success" @click="saveF">Save changes</v-btn>
          <v-spacer></v-spacer>
          <v-btn x-large color="error" @click="logout">Log out</v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from "firebase/app";

export default {
  data() {
    return {
      header: "",
      left1: "",
      left2: "",
      right1: "",
      right2: "",
      footer: "",
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(function () {
          location.href = "/signin";
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    saveF() {
      var data = {
        header: this.header,
        left1: this.left1,
        left2: this.left2,
        right1: this.right1,
        right2: this.right2,
        footer: this.footer,
      };
      this.$store.dispatch("SetPage", data);
    },
  },
  async mounted() {
    let info;

    await this.$store.dispatch("getPagges").then((result) => {
      info = result;
    });

    (this.header = info.header),
      (this.left1 = info.left1),
      (this.left2 = info.left2),
      (this.right1 = info.right1),
      (this.right2 = info.right2),
      (this.footer = info.footer);
  },
  created() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (!user) {
        location.href = "/signin";
        /* this.$router.push("/signin"); */
      }
    });
  },
};
</script>

<style scoped>
.admin {
  background: #fff;
}
</style>