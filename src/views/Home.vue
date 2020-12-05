<template>
  <div id="home-content">
    <header-page />
    <div id="titles">
      <h1 class="header-text">Tweeter Clone</h1>
      <h2 class="header-text">?'s "Tweeter" Tweeting about!</h2>
    </div>
    <br />
    <div id="image-container">
      <img
        class="logo-image"
        src="https://thumbs.dreamstime.com/b/tweet-blue-bird-action-funny-illustration-tweeter-logo-use-social-media-your-own-website-123057279.jpg"
        alt="tweet bird image"
      />
      <img
        id="logo-image2"
        src="https://www.adweek.com/wp-content/uploads/2017/11/twitter-280-for-all-PAGE-2017.png"
        alt="tweets birds"
      />
    </div>
    <div id="home-container">
      <router-link to="/login">Login here..</router-link>
      <router-link to="/signup"> New User,.........Sign up here..</router-link>
    </div>
    <div>
      <footer-page />
    </div>
  </div>
</template>

<script>
import HeaderPage from "../components/Header.vue";
import FooterPage from "../components/Footer.vue";
export default {
  name: "home",
  components: {
    HeaderPage,
    FooterPage
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: "Roboto Slab", serif;
}
#home-content {
  display: grid;
  align-items: center;
  justify-items: center;
  min-height: 40vh;
}
.header-text {
  display: grid;
  align-items: center;
  justify-items: center;
  margin-top: 5vh;
  color: #1c5d99;
}
#home-container {
  display: grid;
  align-items: center;
  justify-items: center;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  max-height: 30vh;
}
#titles {
  display: grid;
  align-items: center;
  justify-items: center;
  height: 30vh;
}
#image-container {
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  column-gap: 10vh;
}
.logo-image {
  width: 150px;
}
@media only screen and (min-width: 1000px) {
  .logo-image {
    width: 350px;
  }
  #logo-image2 {
    width: 450px;
    margin-left: 7vh;
  }
  #titles {
    display: grid;
    align-items: center;
    justify-items: center;
    height: 30vh;
    font-size: 1.5em;
  }
  #image-container {
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    column-gap: 30vh;
  }
}
</style>
