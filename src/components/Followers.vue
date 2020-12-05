<template>
  <div>
    <button class="tw-button" @click="viewFollowers">View Followers</button>
    <div v-for="follower in followers" :key="follower.userId">
      <p>{{ follower.bio }}</p>
      <p>*{{ follower.email }}</p>
      <p>---------------------------</p>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";

export default {
  name: "followers-page",
  data() {
    return {
      followers: [],
      userId: cookies.get("user"),
      loginToken: cookies.get("loginToken")
    };
  },
  methods: {
    viewFollowers: function() {
      axios
        .request({
          url: "https://tweetapi.ml/api/followers",
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
          this.followers = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.tw-button {
  min-width: 150px;
  color: white;
  background-color: #1da1f2;
  font-weight: bold;
  padding: 12px 18px;
  border: none;
  border-radius: 25px;
  outline: 0;
}
.tw-button:hover {
  text-decoration: none;
  transition: 0.25s;
  background-color: #1c5d99;
}
</style>
