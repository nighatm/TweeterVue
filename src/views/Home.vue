<template>
  <div>
    <h1 class="header-text">Tweeter Clone</h1>
    <h2 class="header-text">What's "Tweeter" Tweeting about!</h2>
    <br />
    <div id="image-container">
      <img
        class="logo-image"
        src="https://thumbs.dreamstime.com/b/tweet-blue-bird-action-funny-illustration-tweeter-logo-use-social-media-your-own-website-123057279.jpg"
        alt="Tweeter Image"
      />
      <img
        class="logo-image"
        src="https://lh3.googleusercontent.com/proxy/c8urFClYIaVjeFnGRzL8LdTnGcO_FkL-WCt29FEVDBS7W0lNvhC1mvRxL3GUZ0vKFR1A0joHS9K5aFXNPAsKwyIC9M422ITRbhp8GCvlyKrsM-X91HnrkykQ3fA6BrpYQlp4Nwqd793AAdNvFZL48FA"
        alt="tweet image"
      />
    </div>
    <div id="home-container">
      <router-link to="/login">Login here..</router-link>
      <router-link to="/signup"> New Users,Sign up here..</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: "Roboto Slab", serif;
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
}
#image-container {
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
}
.logo-image {
  width: 300px;
}
</style>
