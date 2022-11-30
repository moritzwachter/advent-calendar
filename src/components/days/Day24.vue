<template>
  <Day day="13.12.2022">
    <div slot="page-content">
      <h3>Community Day</h3>
      <p class = textbox>
       Ahoi, landlubbers an Merry Christmas! Today again is a special day of our <font size= "6"><b>Giveaway</b></font>:
        <ul>
        <li> It's time to presentate you the long awaited, long desired Talkaboat Stickers Part 2!</li>
        <li><div class=link>Check out our &nbsp; <a href="https://t.me/Talkaboat" target="_blank">  <b>Telegram</b> </a> for more! </div></li>
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
    font-size: 6rem;
    text-shadow: 0 2px 8px #666;
    padding-top: 1;
    margin: 5px;

  }

.link {
    display: flex;
    justify-content: block;
    font-size: 14px;
    z-index: 500;

    

    a {
      color: rgb(95,141,62);
      z-index: 500;
    }
  }

  .logo {
    display: flex;
    justify-content: center;
    font-size: 14px;
    z-index: 500;

    

    a {
      z-index: 500;
    }
  }  
</style>