<template>
  <div>
    <img
      class="expression-image"
      @click="likeTweet"
      v-if="isLiked == false"
      src="https://www.clipartmax.com/png/middle/358-3583360_e-3-hearts-hearts-like-icon-instagram-heart-icon-svg.png"
    />
    <img
      class="expression-image"
      @click="unlikeTweet"
      v-else-if="isLiked == true"
      src="https://cdn0.iconfinder.com/data/icons/twitter-ui-flat/48/Twitter_UI-24-512.png"
    />
    <div>Tweet Likes: {{ likesCount.length }}</div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "tweet-like",

  data() {
    return {
      isLiked: false,
      likesCount: []
    };
  },
  props: {
    tweetId: Number
  },

  methods: {
    likeTweet: function() {
      axios
        .request({
          url: "https://tweetapi.ml/api/tweet-likes",
          method: "POST",
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
          this.isLiked = true;
        })
        .catch(error => {
          console.log(error);
        });
    },
    unlikeTweet: function() {
      (this.isLiked = false),
        axios
          .request({
            url: "https://tweetapi.ml/api/tweet-likes",
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
            this.isLiked = false;
          })
          .catch(error => {
            console.log(error);
          });
    },
    countLikes: function() {
      axios
        .request({
          url: "https://tweetapi.ml/api/tweet-likes",
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
          params: {
            tweetId: this.tweetId
          }
        })
        .then(response => {
          console.log(response);
          this.countLikes = response.data;

          let thisUser = cookies.get("user");
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
