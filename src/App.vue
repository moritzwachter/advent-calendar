<template>
  <div id="app">
    <div class="content">
      <router-view />
    </div>
    <Snowf
      :amount="60"
      :size="5"
      :speed="1.2"
      :wind="2"
      :opacity="0.8"
      :swing="2"
      :image="null"
      :zIndex="0"
      :resize="true"
      color="#fff"
    />
  </div>
</template>

<script>
import Moment from "moment";
import Snowf from "vue-snowf";

export default {
  name: "app",
  components: {
    Snowf,
  },
  computed: {
    video: function () {
      let day = new Moment().format("d");
      return this.sources[day % this.sources.length];

      // random on every page load:
      // return this.sources[Math.floor(Math.random() * 3)]
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Handlee|Montserrat:300,400");

html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  font-family: "Montserrat", sans-serif;
  color: #rgb(100, 164, 253);
  margin: 0;
  width: 100%;
  max-width: 100%;

  font-size: 100%;
}

a {
  color: rgb(100, 164, 253);
  outline: none;
}

h1 {
  font-size: 4rem;
  text-shadow: 0 2px 8px #666;
  padding-top: 1;
  margin: 20px;

  @media screen and (max-width: 900px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 2rem;
  }
}

h1,
h2 {
  font-family: "Handlee", cursive;
  text-align: center;
  color: rgb(100, 164, 253);
}
#app {
  background-image: url("./assets/background.jpg");
  background-size: contain, cover;
  z-index: -100;
}
</style>
