<template>
  <div>
    <br />
    <textarea
      type="text"
      placeholder="character limit of 150"
      v-model="commentTweet"
    >
    </textarea>
    <br />
    <button @click="commentTweets">Add comments</button>
    <button @click="showComment">Show comments</button>
    <div v-for="comment in comments" :key="comment.commentId">
      <p>{{ comment.username }}</p>
      <p>{{ comment.content }}</p>
      <p>{{ comment.createdAt }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "comment-page",
  data() {
    return {
      comments: [],
      commentTweet: " "
    };
  },
  props: {
    tweetId: Number
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
            tweetId: this.tweetId,
            content: this.commentTweet
          }
        })
        .then(response => {
          console.log(response);
          this.commentTweet = " ";
        })
        .catch(error => {
          console.log(error);
        });
    },
    showComment: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/tweets",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "0a7lJfhSqh40fBqUWmIO71IRKww5z9bzzvLNSvLZH5FB9"
          },
          params: {
            tweetId: this.tweetId
          }
        })
        .then(response => {
          console.log(response);
          this.comments = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped></style>
