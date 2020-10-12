<template>
  <!-- this is for the user follow -->
  <div>
    <button class="tw-button" @click="followUser" v-if="isFollowing == false">
      Follow
    </button>
    <button
      class="tw-button"
      @click="unfollowUser"
      v-else-if="isFollowing == true"
    >
      Unfollow
    </button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "follow-unfollow-page",
  data() {
    return {
      usersFollowing: [],
      isFollowing: false,
      loginToken: cookies.get("session"),
      userId: cookies.get("user")
    };
  },
  methods: {
    followUser: function() {
      axios
        .request({
          method: "POST",
          url: "https://tweeterest.ml/api/follows",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "0a7lJfhSqh40fBqUWmIO71IRKww5z9bzzvLNSvLZH5FB9"
          },
          data: {
            loginToken: cookies.get("session"),
            followId: this.userId
          }
        })
        .then(response => {
          console.log(response.data);
          this.isFollowing = true;
        })
        .catch(error => {
          console.log(error);
        });
    },
    unfollowUser: function() {
      axios
        .request({
          method: "DELETE",
          url: "https://tweeterest.ml/api/follows",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "0a7lJfhSqh40fBqUWmIO71IRKww5z9bzzvLNSvLZH5FB9"
          },
          data: {
            loginToken: cookies.get("session"),
            followId: this.userId
          }
        })
        .then(response => {
          console.log(response);
          this.isFollowing = false;
        })
        .catch(error => {
          console.log(error);
        });
    },
    checkFollowers: function() {
      axios
        .request({
          method: "GET",
          url: "https://tweeterest.ml/api/followers",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "0a7lJfhSqh40fBqUWmIO71IRKww5z9bzzvLNSvLZH5FB9"
          },
          params: {
            userId: this.userId
          }
        })
        .then(response => {
          console.log(response);
          this.usersFollowing = response.data;

          for (let i = 0; i < this.usersFollowing.length; i++) {
            if (this.userId == this.usersFollowing[i].userId) {
              this.isFollowing = true;
            }
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted: function() {
    this.checkFollowers();
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
