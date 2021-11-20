<template>
  <user-auth></user-auth>
  <!-- <HelloWorld v-if="userAuthanticated" msg="Welcome to Your Vue.js App" /> -->
  <HelloWorld v-if="isAuth" msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import UserAuth from "./components/UserAuth.vue";

// import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    HelloWorld,
    UserAuth,
  },
  computed: {
    // ...mapGetters(["userAuthanticated"]),
    isAuth() {
      return this.$store.getters.userAuthanticated;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
