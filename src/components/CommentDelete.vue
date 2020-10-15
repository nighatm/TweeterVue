<template>
  <div>
    <button @click="deleteComment()">
      Delete Comment
    </button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "deletecomment-page",

  data() {
    return {
      comments: [],
      commentTweet: " "
      // commentId: Number,
    };
  },
  props: {
    commentId: Number
  },

  methods: {
    deleteComment: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/comments",
          method: "DELETE",

          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "0a7lJfhSqh40fBqUWmIO71IRKww5z9bzzvLNSvLZH5FB9"
          },
          data: {
            loginToken: cookies.get("session"),
            commentId: this.commentId
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
