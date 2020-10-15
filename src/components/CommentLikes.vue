<template>
  <div>
    <img
      class="expression-image"
      @click="likeComment"
      v-if="isLiked == false"
      src="https://www.clipartmax.com/png/middle/358-3583360_e-3-hearts-hearts-like-icon-instagram-heart-icon-svg.png"
    />
    <img
      class="expression-image"
      @click="unlikeComment"
      v-else-if="isLiked == true"
      src="https://cdn0.iconfinder.com/data/icons/twitter-ui-flat/48/Twitter_UI-24-512.png"
    />
    <div>Comment Likes: {{ likesCount.length }}</div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "comment-like",

  data() {
    return {
      isLiked: false,
      likesCount: []
    };
  },
  props: {
    commentId: Number
  },

  methods: {
    likeComment: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/comment-likes",
          method: "POST",
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
          this.isLiked = true;
        })
        .catch(error => {
          console.log(error);
        });
    },
    unlikeComment: function() {
      (this.isLiked = false),
        axios
          .request({
            url: "https://tweeterest.ml/api/comment-likes",
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
            this.isLiked = false;
          })
          .catch(error => {
            console.log(error);
          });
    },
    countLikes: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/comment-likes",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "0a7lJfhSqh40fBqUWmIO71IRKww5z9bzzvLNSvLZH5FB9"
          },
          params: {
            commentId: this.commentId
          }
        })
        .then(response => {
          console.log(response);
          this.countLikes = response.data;

          let thisUser = cookies.get("userId");
          for (let i = 0; i < this.countLikes.length; i++) {
            if (thisUser == this.countLikes[i].userId) {
              this.isLiked = true;
              return;
            }
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.expression-image {
  width: 50px;
}
</style>
