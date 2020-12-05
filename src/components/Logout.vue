<template>
  <div>
    <button class="tw-button" @click="logOut">Return to Home</button>
    <h1>you have successfully logged out</h1>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "logout-user",
  data() {
    return {
      loginToken: cookies.get("loginToken")
    };
  },
  methods: {
    logOut: function() {
      axios
        .request({
          url: "https://tweetapi.ml/api/login",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          },
          data: {
            loginToken: this.loginToken
          }
        })
        .then(response => {
          console.log(response);
          cookies.remove("loginToken");
          cookies.remove("user");
          this.$router.push("/");
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
