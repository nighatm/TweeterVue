<template>
  <div>
    <div v-if="loginToken != undefined">
      <img
        id="logo-image"
        src="https://www.pinclipart.com/picdir/middle/306-3067911_discover-clipart.png"
        alt="discover image"
      />
      <profiles-view />
    </div>
    <div v-else>
      <h2>Please login in to continue...</h2>
    </div>
  </div>
</template>

<script>
import ProfilesView from "../components/ProfilesView.vue";
import cookies from "vue-cookies";
export default {
  name: "discover-page",
  components: {
    ProfilesView
  },
  data() {
    return {
      loginToken: cookies.get("session")
    };
  }
};
</script>

<style scoped>
#logo-image {
  display: block;
  position: absolute;
  top: 2vh;
  width: 80px;
}
</style>
