<template>
  <div>
    <img
      class="expression-image"
      @click="likeTweet"
      v-if="isLiked == false"
      src="https://media5.newsnationtv.com/images/2015/11/04/196231201-twitterheart.jpg"
      alt="Like Image"
    />
    <img
      class="expression-image"
      @click="unlikeTweet"
      v-else-if="isLiked == true"
      src="https://hamlab.dev/content/images/size/w2000/2020/07/twitter-unlike-all-bg.png"
      alt="Unlike Image"
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
      likesNumber: Number,
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
  width: 80px;
}
</style>
