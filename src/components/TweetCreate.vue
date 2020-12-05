<template>
  <div>
    <br />
    <p id="tweet-text">What's in your mind? Want to <b>Tweet</b></p>
    <textarea
      type="text"
      id=""
      cols="30"
      rows="5"
      placeholder="character limit of 200"
      v-model="contentTweet"
    ></textarea>
    <br />
    <button class="tw-button" @click="createTweet">Post Tweet</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "createtweet-page",

  data() {
    return {
      contentTweet: ""
    };
  },

  methods: {
    createTweet: function() {
      axios
        .request({
          url: "https://tweetapi.ml/api/tweets",
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },
          data: {
            // loginToken: cookies.get("session"),
            loginToken: cookies.get("loginToken"),
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

<style scoped>
.header-text {
  display: grid;
  align-items: center;
  justify-items: center;
  margin-top: 5vh;
  color: #1c5d99;
}
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
#tweet-text {
  color: #1c5d99;
}
</style>
