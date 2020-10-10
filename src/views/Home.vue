<template>
  <div>
    <h1>This is the home page..</h1>
    <br />
    <p>Want to see what others are <b> Tweeting </b> about?</p>
    <show-tweet />
    <p>---------------------------------------------------------</p>
    <create-tweet />

    <br /><br /><br />
    <router-link to="/login">Existing Users,Login here..</router-link>
    <br /><br /><br />
    <router-link to="/signup"> New Users,Sign up here..</router-link>
  </div>
</template>

<script>
import CreateTweet from "../components/TweetCreate.vue";
import ShowTweet from "../components/TweetShow.vue";
export default {
  name: "home",
  components: {
    CreateTweet,
    ShowTweet
  }
};
</script>

<style scoped></style>
