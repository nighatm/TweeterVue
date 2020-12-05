<template>
  <div>
    <button @click="viewFollowing">View Following</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "following-page",

  data() {
    return {
      following: [],
      userId: cookies.get("user")
    };
  },
  methods: {
    viewFollowing: function() {
      axios
        .request({
          url: "https://tweetapi.ml/api/follows",
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
          params: {
            userId: this.userId
          }
        })
        .then(response => {
          console.log(response);
          this.following = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped></style>
