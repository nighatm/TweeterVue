<template>
  <div class="cernter-alignment">
    <div v-if="loginToken != undefined">
      <header-page />
      <br />
      <profiles-view />
      <br />
      <!-- <followers /> -->
      <logout-page />
      <footer-page />
    </div>
    <div v-else>
      <h2>Please login in to continue...</h2>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import HeaderPage from "../components/Header.vue";
import FooterPage from "../components/Footer.vue";
import ProfilesView from "../components/ProfilesView.vue";
import LogoutPage from "../components/Logout.vue";
// import Followers from "../components/Followers.vue";

export default {
  name: "discover-page",
  components: {
    ProfilesView,
    HeaderPage,
    FooterPage,
    LogoutPage
    // Followers,
    // Following
  },
  data() {
    return {
      loginToken: cookies.get("session")
    };
  }
};
</script>

<style scoped></style>
