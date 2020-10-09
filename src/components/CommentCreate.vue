<template>
  <div>
    <textarea
      type="text"
      placeholder="character limit of 150"
      v-model="commentTweet"
    >
    </textarea>
    <br />
    <button @click="commentTweets">Add comments</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "comment-page",
  data() {
    return {
      commentTweet: " "
    };
  },
  methods: {
    commentTweets: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/comments",
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "0a7lJfhSqh40fBqUWmIO71IRKww5z9bzzvLNSvLZH5FB9"
          },
          data: {
            loginToken: cookies.get("session"),
            comment: this.commentTweet
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
