<template>
  <button v-if="!userAuthanticated" @click="login">Login</button>
  <!-- <button @click="logout">Logout</button> -->
  <button v-if="userAuthanticated" @click="logout">Logout</button>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  methods: {
    ...mapActions(["login", "logout"]),

    // clasic dispatch method
    logout() {
      this.$store.dispatch("logout");
    },
  },
  computed: {
    ...mapGetters(["userAuthanticated"]),
  },
};
</script>

<style></style>
