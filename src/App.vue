<template>
  <div id="app" class="container">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {};
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: "Roboto Slab", serif;
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
.cernter-alignment {
  display: grid;
  align-items: center;
  justify-items: center;
}
</style>
