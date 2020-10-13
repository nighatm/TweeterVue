<template>
  <div id="menu">
    <div v-if="loginToken != undefined">
      <router-link to="/login" v-if="!loginToken">Login </router-link>
      <router-link to="/signup" v-if="!loginToken">Signup </router-link>
      <router-link to="/" v-if="loginToken"> Home </router-link>
      <router-link to="/profile" v-if="loginToken"> Profile </router-link>
      <router-link to="/discover" v-if="loginToken"> Discover </router-link>
      <router-link to="/feed" v-if="loginToken"> Feed </router-link>
    </div>
    <div v-else>
      <h2>Please login in to continue...</h2>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";

export default {
  name: "header-menu",
  data() {
    return {
      loginToken: cookies.get("session")
    };
  }
};
</script>

<style scoped>
* {
  margin: 0%;
  padding: 0%;
}

#menu {
  display: grid;
  text-align: center;
  align-content: center;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  font-size: 1.5em;
  width: 100%;
  max-height: 10vh;
}
</style>
