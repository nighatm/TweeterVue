<template>
  <div class="cernter-alignment">
    <div v-if="loginToken != undefined">
      <header-page />
      <br />
      <profiles-view />
      <br />
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
export default {
  name: "discover-page",
  components: {
    ProfilesView,
    HeaderPage,
    FooterPage
  },
  data() {
    return {
      loginToken: cookies.get("session")
    };
  }
};
</script>

<style scoped></style>
