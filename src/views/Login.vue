<template>
  <div class="cernter-alignment">
    <header-page />
    <h1 class="header-text">Welcome to Tweeter Clone!</h1>
    <br />
    <h2 class="header-text">Login</h2>
    <div id="login-form">
      <p>Email</p>
      <input
        type="text"
        placeholder="Enter email"
        id="email-input"
        class="form-input"
        v-model="email"
      />
      <p>Password</p>
      <input
        type="password"
        placeholder="Enter password"
        id="password-input"
        class="form-input"
        v-model="password"
      />
      <button class="tw-button" @click="loginUser">Login</button>
      <br />

      <h3>{{ loginStatus }}</h3>
      <router-link to="/"> Home </router-link>

      <router-link to="/signup" id="signup-link">
        New User? Sign up here</router-link
      >
      <footer-page />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
import HeaderPage from "../components/Header.vue";
import FooterPage from "../components/Footer.vue";

export default {
  data() {
    return {
      email: "",
      password: "",
      loginStatus: "",
      HeaderPage,
      FooterPage
    };
  },
  methods: {
    loginUser: function() {
      this.loginStatus = "Loading..";
      axios
        .request({
          url: "https://tweeterest.ml/api/login",
          method: "post",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "0a7lJfhSqh40fBqUWmIO71IRKww5z9bzzvLNSvLZH5FB9"
          },
          data: {
            email: this.email,
            password: this.password
          }
        })
        .then(response => {
          console.log(response);
          this.loginStatus = "Success";
          cookies.set("session", response.data.loginToken);
          cookies.set("user", response.data.userId);
          this.$router.push("/profile");
        })
        .catch(error => {
          console.log(error);
          this.status = "Login Error!";
        });
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: "Roboto Slab", serif;
}

/* #login {
  display: grid;
  align-items: center;
  justify-items: center;
  width: 100%;
  min-height: 70vh;
} */
#login-form {
  display: grid;
  align-items: center;
  justify-items: center;
  width: 100%;
  min-height: 50vh;
  /* background-color: #f5f8fa; */
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
.header-text {
  display: grid;
  align-items: center;
  justify-items: center;
  margin-top: 5vh;
  color: #1c5d99;
}
@media only screen and (min-width: 1000px) {
  .header-text {
    display: grid;
    align-items: center;
    justify-items: center;
    margin-top: 5vh;
    color: #1c5d99;
  }
}
</style>
