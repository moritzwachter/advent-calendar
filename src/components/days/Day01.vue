<template>
  <Day day="27.11.2022">
    <div slot="page-content">
      <h3>Day 1</h3>
      <p>
        Merry Christmas Companion! To participate in the todays Giveaway simply do the following Tasks:
        <ul>
	      <li>Follow our Profile <p v-html="text"></p></li>
	      <li>Like & Share our pinned Post</li>
	      <li>Place a comment using the hashtags #AboatEntertainment #Crypto</li>
       </ul>
      </p>
      <img
          width="300"
          src="https://talkaboat.online/assets/images/talkaboat_light.png"
          alt=""
      >
    </div>
  </Day>
</template>

<script>
import Day from '../Day.vue'
data: function() {
    return {
      text: "Twitter"
    };
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.13/dist/vue.min.js"></script>
export default {
  name: 'Day01',
  components: {
    Day
  }
}
</script>
