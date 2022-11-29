<template>
  <Day day="27.11.2022">
    <div slot="page-content">
      <h3>Day 1</h3>
      <p class = textbox>
       Merry Christmas Companion! To participate in the todays Giveaway simply do the following Tasks:
        <ul>
        <li><div class=link>Follow our Profile on &nbsp; <a href="https://twitter.com/talkaboat" target="_blank">  <b>Twitter</b> </a> </div></li>
        <li>Like & Share our pinned Post</li>
        <li>Place a comment using the hashtags #AboatEntertainment #Crypto</li>
       </ul>




       
      </p>
      <div class =logo>
      <img
        width="300"
        src="https://talkaboat.online/assets/images/talkaboat_light.png"
        alt=""
     />
     </div>
    </div>
  </Day>
</template>

<script>
import Day from "../Day.vue";

export default {
  name: "Day01",
  components: {
    Day,
  },
};
</script>

<style lang="scss" scoped>

h1 {
    font-size: 2rem;
    text-shadow: 0 2px 8px #666;
    padding-top: 1;
    margin: 5px;

  }

 .text {
    display: flex;
    justify-content: block;
    padding-top: 20px;
    font-size: 14px;
    z-index: 200;

    a {
      color: white;
      z-index: 200;
    }
  }

.link {
    display: flex;
    justify-content: block;
    font-size: 14px;
    z-index: 500;

    

    a {
      color: cyan;
      z-index: 500;
    }
  }

  .logo {
    display: flex;
    justify-content: center;
    font-size: 14px;
    z-index: 500;

    

    a {
      color: blue;
      z-index: 500;
    }
  }  
</style>