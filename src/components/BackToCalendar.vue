<template>
  <div class="link-back">
    <router-link :to="calendarPath">Back to calendar</router-link>
  </div>
</template>

<script>
  export default {
    'name': 'back-to-calendar',
    props: [
      'year'
    ],
    computed: {
      calendarPath: function () {
        //return (this.year) ? '/' + this.year + '/' : '/login'
        return '/'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .link-back {
    display: flex;
    justify-content: center;
    padding-top: 20px;
    font-size: 24px;
    z-index: 100;

    @media screen and (max-width: 900px) {
      font-size: 20px;
    }

    @media screen and (max-width: 700px) {
      font-size: 16px;
    }

    a {
      color: rgb(100, 164, 253);
      z-index: 100;
    }
  }
</style>
