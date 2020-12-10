<template>
  <v-container fluid v-if="loading">
    <v-card-title
      class="justify-center text-center display-1 my-8 white--text font-weight-bold word_break"
    >
      &#9733; {{ header }} &#9733;
    </v-card-title>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4" class="mr-md-12">
        <v-card class="rounded-xl pa-2" height="100%" elevation="5">
          <v-card-title class="justify-center word_break" v-html="left1">
          </v-card-title>
          <v-card-text
            class="text-subtitle-1 grey--text text--darken-4"
            v-html="left2"
          >
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-card class="rounded-xl pa-2" height="100%" elevation="5">
          <v-card-title class="justify-center" v-html="right1"> </v-card-title>
          <v-card-text
            class="text-subtitle-1 grey--text text--darken-4"
            v-html="right2"
          >
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card-title class="justify-center white--text text-h5 word_break">
          <em v-html="footer"> </em>
        </v-card-title>
        <v-row justify="center">
          <img
            width="40%"
            class="mr-10 img1"
            src="../assets/islai.png"
            @click="gotopage('https://islai.org/')"
          />
          <img
            width="40%"
            class="img1"
            src="../assets/imi.png"
            @click="gotopage('http://www.math.md/')"
          />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      header: "",
      left1: "",
      left2: "",
      right1: "",
      right2: "",
      footer: "",
      loading: false,
    };
  },
  methods: {
    gotopage(url) {
      location.href = url;
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

      this.loading = true;
  },
};
</script>

<style scoped>
.img1:hover {
  cursor: pointer;
}
.word_break {
  word-break: normal;
  position: relative;
}
</style>