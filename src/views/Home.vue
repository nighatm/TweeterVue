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
        class="logo-image"
        src="https://lh3.googleusercontent.com/proxy/cVTrkm0OIKS2XnO9163d8_qphIpkgNqz0XdQnSyR9K2Ej4mYhbIma0-H3KTQKpZY-7ZNtiuwOfHk7uxqIV3P_Drtg4eGeSlOr0t1rvvUnPDmJNUC9-f5xBuJZbV9rkDJFnDCOmiJ5jXbLTqSOROPt4o"
        alt="tweets birds"
      />
    </div>
    <div id="home-container">
      <router-link to="/login">Login here..</router-link>
      <router-link to="/signup"> New Users,Sign up here..</router-link>
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
    width: 250px;
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
