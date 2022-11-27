<template>
  <div id="app">
    <div :style="image"></div>
    <div class="content">
      <router-view/>
    </div>
    <Snowf
  :amount="50"
  :size="5"
  :speed="1.5"
  :wind="0"
  :opacity="0.8"
  :swing="1"
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
      sources: [
        {
          src: require('./assets/octagon.mp4'),
          type: 'video/mp4'
        },
        {
          src: require('./assets/particles.mp4'),
          type: 'video/mp4'
        },
        {
          src: require('./assets/snowflakes.mp4'),
          type: 'video/mp4'
        },
      ]
    }
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
    background: #222;
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
    font-size: 6rem;
    text-shadow: 0 2px 8px #666;
    margin: 50px;

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

  #video-background {
    /*  making the video fullscreen  */
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -100;
  }
</style>
