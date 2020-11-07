<template>
  <div id="app">
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

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
