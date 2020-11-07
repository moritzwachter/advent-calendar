<template>
  <Day day="15.12.2020">
    <div slot="page-content">
      <h3>This is Day 15</h3>
      <p>
        Feel free to add whatever kind of markup, images, videos or custom JS logic as you like!
      </p>
      <p class="caption-img">
        <img
            width="300"
            src="https://placekitten.com/300/300"
            alt=""
        >
      </p>
    </div>
  </Day>
</template>

<script>
import Day from '../Day.vue'

export default {
  name: 'Day15',
  components: {
    Day
  }
}
</script>
