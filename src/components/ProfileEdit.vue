<template>
  <div id="editprofile-content">
    <h1>Update/Edit Profile</h1>
    <p>Email</p>
    <input
      type="text"
      placeholder="Enter valid email"
      id="email-input"
      class="text-format"
      v-model="email"
    />
    <p>User Name</p>
    <input
      type="text"
      placeholder="Enter username"
      id="username-input"
      v-model="username"
    />
    <p>Password</p>
    <input
      type="password"
      placeholder="Enter password"
      id="password-input"
      v-model="password"
    />
    <p>Bio</p>
    <textarea
      cols="30"
      placeholder="Enter bio"
      rows="3"
      id="bio-input"
      v-model="bio"
    ></textarea>
    <p>Birthday</p>
    <input
      type="text"
      placeholder="YYYY-MM-DD"
      id="birthday-input"
      v-model="birthdate"
    />
    <h3>{{ updateStatus }}</h3>
    <router-link to="/login">Login Now</router-link>
    <div>
      <button class="tw-button" @click="updateUser">Update..</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  data() {
    return {
      email: " ",
      username: "",
      password: "",
      bio: "",
      birthdate: "",
      updateStatus: "",
      loginToken: cookies.get("session")
    };
  },
  methods: {
    updateUser: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/users",
          method: "patch",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "0a7lJfhSqh40fBqUWmIO71IRKww5z9bzzvLNSvLZH5FB9"
          },
          data: {
            email: this.email,
            password: this.password,
            username: this.username,
            bio: this.bio,
            birthdate: this.birthdate,
            loginToken: this.loginToken
          }
        })
        .then(response => {
          console.log(response);
          this.updateStatus = "Success";
          this.$router.push("/login");
        })
        .catch(error => {
          console.log(error);
          this.updateStatus = "Error!";
        });
    }
  }
};
</script>

<style scoped></style>
