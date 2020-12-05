<template>
  <div class="cernter-alignment">
    <div v-if="loginToken != undefined">
      <header-page />
      <h2 class="header-text">Explore Tweets, Update Profile</h2>
      <br />
      <router-link to="/tweet">Go to Tweets Page </router-link> | --------------
      |

      <router-link to="/logout">Logout <br /></router-link>
      <br />

      <profile-edit />
      <profile-delete />
      <logout-user />
      <footer-page />
    </div>
    <div v-else>
      <p>Please login in to continue...</p>
      <router-link to="/"> Home <br /> </router-link>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import ProfileEdit from "../components/ProfileEdit.vue";
import ProfileDelete from "../components/ProfileDelete.vue";
import LogoutUser from "../components/Logout.vue";

import HeaderPage from "../components/Header.vue";
import FooterPage from "../components/Footer.vue";

export default {
  name: "profile-page",

  components: {
    ProfileEdit,
    ProfileDelete,
    LogoutUser,
    HeaderPage,
    FooterPage
  },
  data() {
    return {
      loginToken: cookies.get("loginToken"),
      follow: true
    };
  }
};
</script>

<style scoped>
.header-text {
  display: grid;
  align-items: center;
  justify-items: center;
  margin-top: 5vh;
  color: #1c5d99;
}

@media only screen and (min-width: 1000px) {
  #titles {
    display: grid;
    align-items: center;
    justify-items: center;
    height: 30vh;
    font-size: 2.5em;
  }

  .header-text {
    size: 2.5em;
  }
}
</style>
