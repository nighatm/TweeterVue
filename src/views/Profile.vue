<template>
  <div>
    <h3>
      this page should have profile edit options, ability to show logged user's
      tweets, view followers and following
    </h3>
    <h3>Want to Tweet or check Tweets?</h3>
    <router-link to="/tweet">Go to Tweets Page</router-link>
    <p>This is a profile page</p>
    <profile-edit />
    <profile-delete />
    <logout-user />
  </div>
</template>

<script>
import ProfileEdit from "../components/ProfileEdit.vue";
import ProfileDelete from "../components/ProfileDelete.vue";
import LogoutUser from "../components/Logout.vue";

export default {
  name: "profile-page",

  components: {
    ProfileEdit,
    ProfileDelete,
    LogoutUser
  }
};
</script>

<style scoped></style>
