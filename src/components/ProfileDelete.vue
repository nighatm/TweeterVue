<template>
  <div id="delete-account">
    <h2 id="text-color">Want to Delete your account?</h2>
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
    <br />
    <button class="tw-button" @click="deleteUser">
      Delete account...
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
