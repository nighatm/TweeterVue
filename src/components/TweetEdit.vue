<template>
  <div>
    <textarea v-model="content"> </textarea>
    <br />
    <button @click="editTweet()">Edit Tweet</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "edittweet-page",

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
    editTweet: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/tweets",
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "0a7lJfhSqh40fBqUWmIO71IRKww5z9bzzvLNSvLZH5FB9"
          },
          data: {
            loginToken: cookies.get("session"),
            tweetId: this.tweetId,
            content: this.content
          }
        })
        .then(response => {
          console.log(response);
          // this.tweets = content;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped></style>
