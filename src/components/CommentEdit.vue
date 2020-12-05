<template>
  <div>
    <textarea v-model="commentTweet"> </textarea>
    <br />
    <button @click="editComment()">Edit Comment</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "editcomment-page",

  data() {
    return {
      comments: [],
      commentTweet: "",
      loginToken: cookies.get("loginToken")
    };
  },

  props: {
    commentId: Number
  },

  methods: {
    editComment: function() {
      axios
        .request({
          url: "https://tweetapi.ml/api/comments",
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          data: {
            loginToken: cookies.get("loginToken"),
            commentId: this.commentId,
            content: this.commentTweet
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
