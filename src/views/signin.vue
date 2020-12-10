<template>
  <v-main>
    <v-container class="fill-height">
      <v-row justify="center">
        <v-col align-self="center" cols="12" md="4">
          <v-card class="pa-2">
            <v-card-title class="justify-center"> Sign in </v-card-title>
            <v-alert
              color="error"
              class="text-center white--text"
              v-model="errorSignin"
            >
              {{ errorSigninText }}
            </v-alert>
            <v-text-field v-model="email" label="email"></v-text-field>
            <v-text-field v-model="password" label="password"></v-text-field>
            <v-btn block color="success" @click="signinF()">Go</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      errorSignin: false,
      errorSigninText: "",
    };
  },
  methods: {
    async signinF() {
      var signin = await this.$store.dispatch("signin", {
        email: this.email,
        password: this.password,
      });
      if (signin != "") {
        this.errorSignin = true;
        this.errorSigninText = signin.message;
      } else {
        this.$router.push("/admin");
      }
    },
  },
  computed: {
    isUserAuth() {
      return this.$store.getters.isUserAuth;
    },
  },
  watch: {
    isUserAuth(val) {
      if (val === true) this.$router.push("/admin");
    },
  },
};
</script>

<style scoped>
</style>