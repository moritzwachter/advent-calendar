<template>
  <div>
    <h1>ABOAT ENTERTAINMENT ADVENT CALENDAR</h1>
    <h2>Merry Christmas!</h2>
    <div class="cards-wrapper"
    :zIndex="2">
      <ul class="cards">
        <li
          class="card"
          v-for="i in range(1,24)"
          :key="i"
          :zIndex="2"
        >
          <div>

            <router-link :to="'/day/' + i">
              {{ i }}
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>



<script>

export default {
  name: 'Calendar',
  methods: {
    range: function (min, max) {
      let arr = []
      let j = 0
      for (let i = min; i <= max; i++) {
        arr[j++] = i
      }

      return arr
    }
  },
  
}
</script>

<style lang="scss" scoped>

h1 {
    font-size: 4rem;
    text-shadow: 0 2px 8px #666;
    padding-top: 1;
    margin: 20px;

  @media screen and (max-width: 900px) {
    font-size: 3rem;

  }

  @media screen and (max-width: 400px) {
    font-size: 2rem;

  }
  }
.cards-wrapper {
  width: 1200px;
  height: 800px;
  margin: 0 auto;
  max-width: 100%;
  z-index: 100;

}

.cards {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  z-index: 100;

  @media screen and (max-width: 385px) {
    justify-content: center;
    z-index: 100;
  }
}

.card {
  width: 100px;
  height: 100px;

  border-radius: 25px;

  margin: 35px;

  background: rgba(#888, 0.1);
  border: 4px solid rgb(146, 188, 10);
  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.5s;

  &:hover {
    cursor: pointer;
    background: rgba(#888, 0.3);
    box-shadow: 0 0 20px rgba(rgb(146, 188, 10) ,0.3);
    z-index: 100;
  }

  a {
    outline: 1;
    color: rgb(146, 188, 10);
    text-decoration: none;
    z-index: 100;

    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:active,
    &:focus {
      border: none;
    }
  }

  div {
    font-family: 'Handlee', cursive;
    font-size: 52px;
    font-weight: bold;
    padding-top: 5px;

    width: 100%;
    height: 100%;
  }
}
</style>
