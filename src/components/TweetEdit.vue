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
      content: "",
      loginToken: cookies.get("loginToken")
    };
  },

  props: {
    tweetId: Number
  },

  methods: {
    editTweet: function() {
      axios
        .request({
          url: "https://tweetapi.ml/api/tweets",
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          data: {
            loginToken: cookies.get("loginToken"),
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
