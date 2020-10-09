<template>
  <div>
    <button @click="deleteTweet()">
      Delete Tweet
    </button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "deletetweet-page",

  data() {
    return {
      tweets: [],
      content: " ",
      loginToken: cookies.get("session")
    };
  },
  props: {
    tweetId: Number
  },

  methods: {
    deleteTweet: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/tweets",
          method: "DELETE",

          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "0a7lJfhSqh40fBqUWmIO71IRKww5z9bzzvLNSvLZH5FB9"
          },
          data: {
            loginToken: cookies.get("session"),
            tweetId: this.tweetId
          }
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped></style>
