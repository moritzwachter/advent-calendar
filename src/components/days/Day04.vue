<template>
  <Day day="04.12.2020">
    <div slot="page-content">
      <h3>This is Day 4</h3>
      <p>
        Feel free to add whatever kind of markup, images, videos or custom JS logic as you like!
      </p>
      <img
          width="300"
          src="https://placekitten.com/300/300"
          alt=""
      >
    </div>
  </Day>
</template>

<script>
import Day from '../Day.vue'

export default {
  name: 'Day04',
  components: {
    Day
  }
}
</script>
