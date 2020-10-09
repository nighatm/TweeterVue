<template>
  <div>
    <p>Log out page</p>
    <button class="tw-button" @click="logOut">Logout from account</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "logout-user",
  data() {
    return {
      loginToken: cookies.get("session")
    };
  },
  methods: {
    logOut: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/login",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "0a7lJfhSqh40fBqUWmIO71IRKww5z9bzzvLNSvLZH5FB9"
          },
          data: {
            loginToken: this.loginToken
          }
        })
        .then(response => {
          console.log(response);
          cookies.remove("session");
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

<style scoped></style>
