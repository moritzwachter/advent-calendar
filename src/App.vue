<template>
  <div id="app">
    <div class="content">
      <router-view/>
    </div>
    <Snowf
  :amount="70"
  :size="7"
  :speed="1.2"
  :wind="2"
  :opacity="1"
  :swing="8"
  :image="null"
  :zIndex="null"
  :resize="true"
  color="#fff"
/>
  </div>
</template>

<script>
import Snowf from 'vue-snowf';
import Moment from 'moment'

export default {
  name: 'app',
      
  components: {
  Snowf
   },
  data () {
    return {

    };
  },
  computed: {
    video: function () {
      let day = (new Moment()).format('d')
      return this.sources[day % this.sources.length];

      // random on every page load:
      // return this.sources[Math.floor(Math.random() * 3)]
    }
  }
}
</script>

<style lang="scss">

  @import url('https://fonts.googleapis.com/css?family=Handlee|Montserrat:300,400');

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {

 
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    margin: 0;
    width: 100%;
    max-width: 100%;

    font-size: 100%;
  }

  a {
    color: white;
    outline: none;
  }

  h1 {
    font-size: 4rem;
    text-shadow: 0 2px 8px #666;
    margin-top: 20px;
    margin: 20px;

  @media screen and (max-width: 900px) {
    font-size: 3rem;
    margin: 30px;
  }

  @media screen and (max-width: 400px) {
    font-size: 2rem;
    margin: 25px;
  }
  }

  h1, h2 {
    font-family: 'Handlee', cursive;
    text-align: center;
  }
#app{
    background-image: url("./assets/background.jpg");
    background-size: contain, cover;
  }
</style>
