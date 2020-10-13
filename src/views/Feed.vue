<template>
  <div class="cernter-alignment">
    <div v-if="loginToken != undefined">
      <header-page />
      <h2 class="header-text">Want to see what others are Tweeting about?</h2>
      <br />
      <show-tweet />
      <p>---------------------------------------------------------</p>
      <create-tweet />
      <br />
      <h3 id="view-text">View Followers:</h3>
      <view-followers />
      <footer-page />
    </div>
    <div v-else>
      <p>Please login in to continue...</p>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import ViewFollowers from "../components/Followers.vue";
import CreateTweet from "../components/TweetCreate.vue";
import ShowTweet from "../components/TweetShow.vue";
import HeaderPage from "../components/Header.vue";
import FooterPage from "../components/Footer.vue";

export default {
  name: "discover-page",
  components: {
    ViewFollowers,
    CreateTweet,
    ShowTweet,
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

<style scoped>
.header-text {
  display: grid;
  align-items: center;
  justify-items: center;
  margin-top: 5vh;
  color: #1c5d99;
}
#view-text {
  color: #1c5d99;
}
</style>
