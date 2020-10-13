<template>
  <div id="signupform-content">
    <p>Email</p>
    <input
      type="text"
      placeholder="Enter valid email"
      id="email-input"
      class="text-format"
      v-model="email"
    />
    <br /><br />
    <p>User Name</p>
    <input
      type="text"
      placeholder="Enter username"
      id="username-input"
      v-model="username"
    />
    <br /><br />
    <p>Password</p>
    <input
      type="password"
      placeholder="Enter password"
      id="password-input"
      v-model="password"
    />
    <br /><br />
    <p>Bio</p>
    <textarea
      cols="30"
      placeholder="Enter bio"
      rows="3"
      id="bio-input"
      v-model="bio"
    ></textarea>
    <br /><br />
    <p>Birthday</p>
    <input
      type="text"
      placeholder="YYYY-MM-DD"
      id="birthday-input"
      v-model="birthdate"
    />
    <br />
    <button class="tw-button" @click="signupUser">Sign Up!</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "signup-form",
  components: {},
  data() {
    return {
      email: " ",
      username: "",
      password: "",
      bio: "",
      birthdate: ""
    };
  },
  methods: {
    signupUser: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/users",
          method: "post",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "0a7lJfhSqh40fBqUWmIO71IRKww5z9bzzvLNSvLZH5FB9"
          },
          data: {
            email: this.email,
            password: this.password,
            username: this.username,
            bio: this.bio,
            birthdate: this.birthdate
          }
        })
        .then(response => {
          // console.log(response);
          //write logic to ensure token was sent (e.g if)
          cookies.set("session", response.data.loginToken);
          this.$router.push("/login");
        })
        .catch(error => {
          console.log(error);
          // this.status = "Login Error!";
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
#signupform-content {
  display: grid;
  justify-items: center;
  align-items: center;
  width: 100%;
  /* min-height: 50vh; */
  size: 2.5em;
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
