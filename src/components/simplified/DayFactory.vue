<template>
  <Day :day="formattedDate">
    <div slot="page-content">
      <SimpleDay :title="title" :description="description" :link="link" :image="image"></SimpleDay>
    </div>
  </Day>
</template>

<script>
import Day from '../Day.vue'
import SimpleDay from './SimpleDay.vue'
import calendars from './calendars.json'

export default {
  name: 'DayFactory',
  props: ['version', 'day'],
  components: {
    SimpleDay,
    Day
  },
  computed: {
    calendar: function () {
      return calendars[this.version]
    },
    year: function () {
      return this.calendar.settings.year;
    },
    title: function () {
      return this.calendar.days[this.day].title
    },
    image: function () {
      return this.calendar.days[this.day].image
    },
    link: function () {
      return this.calendar.days[this.day].link
    },
    description: function () {
      return this.calendar.days[this.day].description
    },
    formattedDate: function () {
      return this.day + '.12.' + this.year
    }
  }
}
</script>
