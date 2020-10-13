<template>
  <div>
    <div v-if="loginToken != undefined">
      <div id="menu">
        <router-link to="/"> <h4 class="text-color">Home</h4> </router-link>
        <router-link to="/profile">
          <h4 class="text-color">Profile</h4>
        </router-link>
        <router-link to="/discover">
          <h4 class="text-color">Discover</h4>
        </router-link>
        <router-link to="/feed"> <h4 class="text-color">Feed</h4> </router-link>
      </div>
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
.text-color {
  color: #1da1f2;
}
#menu {
  display: grid;
  text-align: center;
  align-content: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  font-size: 1.5em;
  width: 100%;
  max-height: 15vh;
}
@media only screen and (min-width: 1000px) {
  #menu {
    display: grid;
    text-align: center;
    align-content: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 25vh;
    font-size: 1.5em;
    width: 100%;
    max-height: 10vh;
    margin-top: 5vh;
    margin-bottom: 10vh;
  }
}
</style>
