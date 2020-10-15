<template>
  <div class="cernter-alignment">
    <div v-if="loginToken != undefined">
      <header-page />
      <create-tweet /><br />
      <div><follow-unfollow /></div>
      <br />
      <button class="tw-button" @click="showTweet">Show the tweets</button>
      <div v-for="tweet in tweets" :key="tweet.tweetId">
        <p><b>Tweet From:</b> {{ tweet.username }}</p>
        <p><b>Tweet Message:</b> {{ tweet.content }}</p>
        <like-tweet :tweetId="tweet.tweetId" />
        <p>
          ---------------------------------------------------------------------------------------------
        </p>
        <tweet-edit :tweetId="tweet.tweetId" />
        <tweet-delete :tweetId="tweet.tweetId" />
        <tweet-comment :tweetId="tweet.tweetId" />
        <comment-like />
      </div>
      <footer-page />
    </div>
    <div v-else>
      <p>Please login in to continue...</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
import TweetEdit from "../components/TweetEdit.vue";
import CreateTweet from "../components/TweetCreate.vue";
import TweetDelete from "../components/TweetDelete.vue";
import TweetComment from "../components/CommentCreate.vue";
import CommentLike from "../components/CommentLikes.vue";
import FollowUnfollow from "../components/FollowUnfollow.vue";
import LikeTweet from "../components/TweetLike.vue";
import HeaderPage from "../components/Header.vue";
import FooterPage from "../components/Footer.vue";

export default {
  name: "showtweets-page",
  components: {
    TweetEdit,
    TweetDelete,
    TweetComment,
    LikeTweet,
    CreateTweet,
    FollowUnfollow,
    HeaderPage,
    FooterPage,
    CommentLike
  },

  data() {
    return {
      tweets: [],
      username: "",
      content: "",
      loginToken: cookies.get("session")
    };
  },
  props: {
    tweetId: Number
  },
  methods: {
    showTweet: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/tweets",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "0a7lJfhSqh40fBqUWmIO71IRKww5z9bzzvLNSvLZH5FB9"
          },
          params: {
            userId: cookies.get("userId")
          }
        })
        .then(response => {
          console.log(response);
          this.tweets = response.data;
          this.tweets.reverse();
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped></style>
