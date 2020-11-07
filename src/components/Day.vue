<template>
  <div>
    <slot name="back">
      <router-link to="/">Back to calendar</router-link>
    </slot>
    <h1 class="headline">{{ date.format('DD. MMMM') }}</h1>
    <main class="page-content" v-if="isAllowedToView">
      <slot name="page-content" class="page-content"></slot>
    </main>
    <main v-else>
      <div class="page-content">
        <h2>No cheating!</h2>
        <p style="text-align:center;">
          Seems like you need to be a little more patient ;-)
        </p>
      </div>
    </main>
  </div>
</template>

<script>
import Moment from 'moment'

Moment.locale('de')

export default {
  name: 'Day',
  props: ['day'],
  computed: {
    date: function () {
      return new Moment(this.day, 'DD.MM.YYYY')
    },
    now: function () {
      return new Moment()
    },
    isAllowedToView: function () {
      // return true
      return this.date <= this.now
    },
    year: function () {
      return this.date.format('YYYY')
    }
  }
}
</script>

<style lang="scss">
.page-content {
  width: 50%;
  margin: 0 auto;
  flex-flow: column;

  background: rgba(#000, 0.3);
  padding: 25px;

  @media screen and (max-width: 900px) {
    width: 75%;
  }

  @media screen and (max-width: 400px) {
    width: 90%;
  }
}

.page-content video {
  max-width: 600px;
}

.small-video {
  display: flex;
  justify-content: center;
}

img.thumbnail {
  max-height: 100px;
  width: auto;
}

.big {
  max-width: 600px;
  width: 100%;
}

p.center {
  text-align: center;
}
</style>
