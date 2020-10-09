<template>
  <div>
    <button class="tw-button" @click="showTweet">Show the tweets</button>
    <div v-for="tweet in tweets" :key="tweet.tweetId">
      <p>These you your Tweets: {{ tweet.username }}</p>
      <p>Tweet Message: {{ tweet.content }}</p>
      <tweet-edit :tweetId="tweet.tweetId" />
      <!-- <button>Edit Tweet</button> -->
      <tweet-delete />
      <!-- <button>Delete Tweet</button> -->
      <!-- if clicked call the delete tweet -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
import TweetEdit from "../components/TweetEdit.vue";
import TweetDelete from "../components/TweetDelete.vue";

export default {
  name: "showtweets-page",
  components: {
    TweetEdit,
    TweetDelete
  },

  data() {
    return {
      tweets: [],
      username: "",
      content: ""
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
          // take this params off for all the users, and put these when we have specific user in the logged in method
        })
        .then(response => {
          console.log(response);
          this.tweets = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped></style>
