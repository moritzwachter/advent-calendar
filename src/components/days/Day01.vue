<template>
  <Day day="01.12.2020">
    <div slot="page-content">
      <h3>This is Day 1</h3>
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
  name: 'Day01',
  components: {
    Day
  }
}
</script>
