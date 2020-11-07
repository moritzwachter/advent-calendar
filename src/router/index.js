import Vue from 'vue'
import VueRouter from 'vue-router'
import Calendar from '../views/Calendar.vue'
import Day01 from '../components/days/Day01.vue'
import Day02 from '../components/days/Day02.vue'
import Day03 from '../components/days/Day03.vue'
import Day04 from '../components/days/Day04.vue'
import Day05 from '../components/days/Day05.vue'
import Day06 from '../components/days/Day06.vue'
import Day07 from '../components/days/Day07.vue'
import Day08 from '../components/days/Day08.vue'
import Day09 from '../components/days/Day09.vue'
import Day10 from '../components/days/Day10.vue'
import Day11 from '../components/days/Day11.vue'
import Day12 from '../components/days/Day12.vue'
import Day13 from '../components/days/Day13.vue'
import Day14 from '../components/days/Day14.vue'
import Day15 from '../components/days/Day15.vue'
import Day16 from '../components/days/Day16.vue'
import Day17 from '../components/days/Day17.vue'
import Day18 from '../components/days/Day18.vue'
import Day19 from '../components/days/Day19.vue'
import Day20 from '../components/days/Day20.vue'
import Day21 from '../components/days/Day21.vue'
import Day22 from '../components/days/Day22.vue'
import Day23 from '../components/days/Day23.vue'
import Day24 from '../components/days/Day24.vue'

let days = [
  Day01, Day02, Day03, Day04, Day05, Day06, Day07, Day08, Day09, Day10, Day11, Day12,
  Day13, Day14, Day15, Day16, Day17, Day18, Day19, Day20, Day21, Day22, Day23, Day24
]

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Calendar',
    component: Calendar
  },
]

for (let i = 1; i <= days.length; i++) {
  routes.push({
    path: '/day/' + i,
    component: days[i - 1]
  })
}

const router = new VueRouter({
  routes
})

export default router
