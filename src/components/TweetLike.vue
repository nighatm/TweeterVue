<template>
  <div>
    <img
      class="expression-image"
      @click="likeTweet"
      v-if="isLiked == false"
      src="https://cdn0.iconfinder.com/data/icons/twitter-ui-flat/48/Twitter_UI-24-512.png"
    />
    <img
      class="expression-image"
      @click="unlikeTweet"
      v-else-if="isLiked == true"
      src="https://cdn4.iconfinder.com/data/icons/glyph-ui-icons-part-1/22/dislike-512.png"
    />
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "tweet-like",

  data() {
    return {
      isLiked: false
    };
  },
  props: {
    tweetId: Number
  },

  methods: {
    likeTweet: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/tweet-likes",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "0a7lJfhSqh40fBqUWmIO71IRKww5z9bzzvLNSvLZH5FB9"
          },
          data: {
            loginToken: cookies.get("session"),
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
            url: "https://tweeterest.ml/api/tweet-likes",
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "X-Api-Key": "0a7lJfhSqh40fBqUWmIO71IRKww5z9bzzvLNSvLZH5FB9"
            },
            data: {
              loginToken: cookies.get("session"),
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
    }
  }
};
</script>

<style scoped>
.expression-image {
  width: 50px;
}
</style>
