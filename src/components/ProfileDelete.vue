<template>
  <div id="delete-account">
    <p>this is a delete account page</p>
    <h2>Want to Delete your account?</h2>
    <p>Enter Your Email</p>
    <input
      type="text"
      placeholder="Enter email"
      id="email-input"
      class="form-input"
      v-model="email"
    />
    <p>Enter Password</p>
    <input
      type="password"
      placeholder="Enter password"
      id="password-input"
      class="form-input"
      v-model="password"
    />
    <br />
    <button class="tw-button" @click="deleteUser">
      Delete your account...
    </button>
    <h3>{{ updateStatus }}</h3>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  data() {
    return {
      email: "",
      password: "",
      updateStatus: "",
      loginToken: cookies.get("session")
    };
  },
  methods: {
    deleteUser: function() {
      console.log(this.email);
      console.log(this.password);
      console.log(this.loginToken);

      this.updateStatus = "Loading";
      axios
        .request({
          url: "https://tweeterest.ml/api/users",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "0a7lJfhSqh40fBqUWmIO71IRKww5z9bzzvLNSvLZH5FB9"
          },
          data: {
            loginToken: this.loginToken,
            email: this.email,
            password: this.password
          }
        })
        .then(response => {
          console.log(response);
          this.updateStatus = "Success";
          this.$router.push("/signup");
          cookies.remove("session", response.data.loginToken);
        })
        .catch(error => {
          console.log(error);
          this.updateStatus = "Error";
        });
    }
  }
};
</script>

<style scoped></style>
