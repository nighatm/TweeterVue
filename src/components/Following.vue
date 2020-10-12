<template>
  <div>
    <h4 id="text-color"><u>You are following</u></h4>
    <div v-if="users.length > 0">
      <div v-for="user in users" :key="user.userId">
        <p>* {{ user.email }}</p>
        <p>* {{ user.username }}</p>
        <p>* {{ user.birthdate }}</p>
        <p>* {{ user.bio }}</p>
        <p>---------------------------</p>
        <br />
      </div>
    </div>
    <p v-else>
      Oh.. There's no one.. <br />
      Want to explore
    </p>
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
      loginToken: cookies.get("session")
    };
  },
  methods: {
    viewFollowwing: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/follows",
          method: "GET",
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
          this.users = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted: function() {
    this.viewFollowwing();
  }
};
</script>

<style scoped>
#text-color {
  color: #1c5d99;
}
</style>
