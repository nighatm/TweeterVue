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
      commentTweet: ""
    };
  },
  props: {
    commentId: Number
  },

  methods: {
    deleteComment: function() {
      axios
        .request({
          url: "https://tweetapi.ml/api/comments",
          method: "DELETE",

          headers: {
            "Content-Type": "application/json"
          },
          data: {
            loginToken: cookies.get("loginToken"),
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
