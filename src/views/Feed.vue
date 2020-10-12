<template>
  <div class="cernter-alignment">
    <img
      id="logo-image"
      src="https://icons.iconarchive.com/icons/fasticon/connecting/512/feed-icon.png"
      alt="Feed image"
    />
    <div v-if="loginToken != undefined">
      <h2 class="header-text">Want to see what others are Tweeting about?</h2>
      <router-link to="/profile"> Back to Profile <br /></router-link>
      <br />
      <show-tweet />
      <p>---------------------------------------------------------</p>
      <create-tweet />
      <br />
      <h3 id="view-text">View Followers:</h3>
      <view-followers />
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

export default {
  name: "discover-page",
  components: {
    ViewFollowers,
    CreateTweet,
    ShowTweet
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
