<template>
  <div>
    <button class="tw-button" @click="showTweet">Show Tweets</button>
    <div v-for="tweet in tweets" :key="tweet.tweetId">
      <p><b>Tweets From:</b> {{ tweet.username }}</p>
      <p><b>Message:</b> {{ tweet.content }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "showtweets-page",

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
          }
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

<style scoped>
.tw-button {
  min-width: 150px;
  color: white;
  background-color: #1da1f2;
  font-weight: bold;
  padding: 12px 18px;
  border: none;
  border-radius: 25px;
  outline: 0;
}
.tw-button:hover {
  text-decoration: none;
  transition: 0.25s;
  background-color: #1c5d99;
}
</style>
