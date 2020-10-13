<template>
  <div class="cernter-alignment">
    <header-page />
    <h1 class="header-text">Sign up for a Tweeter account!</h1>
    <br />
    <router-link to="/login">Already a User.. Login Here!</router-link>
    <br /><br /><br />
    <!-- <router-link to="/"> Home</router-link> -->

    <signup-form />
    <footer-page />
  </div>
</template>

<script>
import SignupForm from "../components/SignupForm.vue";
import HeaderPage from "../components/Header.vue";
import FooterPage from "../components/Footer.vue";

export default {
  name: "Signup-page",
  components: {
    SignupForm,
    HeaderPage,
    FooterPage
  }
};
</script>

<style scoped>
#sign-head {
  text-align: center;
}
#twitter-img {
  width: 100px;
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
