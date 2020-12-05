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
      content: "",
      loginToken: cookies.get("loginToken")
    };
  },
  props: {
    tweetId: Number
  },

  methods: {
    deleteTweet: function() {
      axios
        .request({
          url: "https://tweetapi.ml/api/tweets",
          method: "DELETE",

          headers: {
            "Content-Type": "application/json"
          },
          data: {
            loginToken: cookies.get("loginToken"),
            tweetId: this.tweetId
          }
        })
        .then(response => {
          console.log(response);
          alert("Are sure about Delete operation?");
          window.confirm();
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped></style>
