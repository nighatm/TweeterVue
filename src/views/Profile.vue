<template>
  <div class="cernter-alignment">
    <div v-if="loginToken != undefined">
      <h2 class="header-text">Explore Tweets, Update Profile</h2>
      <router-link to="/tweet">Go to Tweets Page <br /></router-link>
      <br />

      <!-- <followers v-if="follow == true"/> 
      <view-following v-else-if="false"/>
       -->

      <followers />
      <following />
      <profile-edit />
      <profile-delete />
      <logout-user />
    </div>
    <div v-else>
      <p>Please login in to continue...</p>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import ProfileEdit from "../components/ProfileEdit.vue";
import ProfileDelete from "../components/ProfileDelete.vue";
import LogoutUser from "../components/Logout.vue";
import Followers from "../components/Followers.vue";
import Following from "../components/Following.vue";

export default {
  name: "profile-page",

  components: {
    ProfileEdit,
    ProfileDelete,
    LogoutUser,
    Followers,
    Following
  },
  data() {
    return {
      loginToken: cookies.get("session"),
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
</style>
