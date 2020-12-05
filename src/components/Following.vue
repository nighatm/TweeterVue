<template>
  <div>
    <button class="tw-button" @click="viewFollowwing">Following</button>
    <div v-if="users.length > 0">
      <div v-for="user in users" :key="user.userId">
        <p>* {{ user.email }}</p>
        <p>* {{ user.username }}</p>
        <p>* {{ user.birthdate }}</p>
        <p>* {{ user.bio }}</p>
        <p>---------------------------</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "following-page",
  data() {
    return {
      users: [],
      userId: cookies.get("user"),
      loginToken: cookies.get("loginToken")
    };
  },
  methods: {
    viewFollowwing: function() {
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
          this.users = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
#text-color {
  color: #1c5d99;
}
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
