<template>
  <div>
    <h1>Merry Christmas</h1>
    <h2>to you!</h2>
    <div class="cards-wrapper">
      <ul class="cards">
        <li
          class="card"
          v-for="i in range(1,24)"
          :key="i"
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
  }
}
</script>

<style lang="scss" scoped>
.cards-wrapper {
  width: 1200px;
  height: 600px;
  margin: 0 auto;
  max-width: 100%;
}

.cards {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  @media screen and (max-width: 385px) {
    justify-content: center;
  }
}

.card {
  width: 100px;
  height: 100px;

  border-radius: 25px;

  margin: 35px;

  background: rgba(#000, 0.1);
  border: 1px solid #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.5s;

  &:hover {
    cursor: pointer;
    background: rgba(#000, 0.3);
    box-shadow: 0 0 20px rgba(#fff ,0.3);
  }

  a {
    outline: 0;
    color: #fff;
    text-decoration: none;

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
