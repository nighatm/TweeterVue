<template>
  <div>
    <div v-if="loginToken != undefined">
      <h3 class="header-text">Want to discover other users?</h3>
      <h3 class="header-text">
        Want to discover what are they tweeting about?<br /><br /><br />
      </h3>

      <div id="discover-container">
        <button class="tw-button" @click="viewProfiles">Discover others</button>
        <tweet-show />
        <followers />
        <following />
      </div>
      <div id="discover-content" v-for="user in users" :key="user.userId">
        <h4>{{ user.username }}</h4>
        <p>{{ user.email }}</p>
        <p>{{ user.birthdate }}</p>
        <p>{{ user.bio }}</p>
        <p>---------------------------</p>
      </div>
    </div>
    <div v-else>
      <h2>Please login in to continue...</h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
import TweetShow from "../components/TweetShow.vue";
import Followers from "../components/Followers.vue";
import Following from "../components/Following.vue";

export default {
  name: "profileview-page",

  components: {
    TweetShow,
    Followers,
    Following
  },
  data() {
    return {
      users: [],
      loginToken: cookies.get("loginToken")
    };
  },
  methods: {
    viewProfiles: function() {
      axios
        .request({
          url: "https://tweetapi.ml/api/users",
          method: "GET",
          headers: {
            "Content-Type": "application/json"
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
#discover-container {
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.header-text {
  display: grid;
  align-items: center;
  justify-items: center;
  margin-top: 5vh;
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
