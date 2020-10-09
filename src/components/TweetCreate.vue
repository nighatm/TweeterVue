<template>
  <div></div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "createtweet-page",

  data() {
    return {
      contentTweet: " "
    };
  },

  methods: {
    createTweet: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/tweets",
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "0a7lJfhSqh40fBqUWmIO71IRKww5z9bzzvLNSvLZH5FB9"
          },
          data: {
            loginToken: cookies.get("session"),
            content: this.contentTweet
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
