<template>
  <div class="simple">
    <p>
      <a
        :href="url"
        target="_blank"
      >
        <img
          @click.once="showImage"
          :src="image"
          :class="imgClass"
        >
      </a>
    </p>
    <hr>
    <h2>{{ title }}</h2>
    <p
      class="description"
      v-html="description"
    >
    </p>
  </div>
</template>

<script>
export default {
  name: 'SimpleDay',
  data: () => {
    return {
      'imgClass': 'position blurred',
      'imgShown': false,
      'url': null
    }
  },
  props: [
    'day',
    'title',
    'description',
    'image',
    'link'
  ],
  methods: {
    showImage: function (event) {
      event.preventDefault();
      if (!this.imgShown) {
        this.imgShown = true
        this.imgClass = 'position'
        this.url = this.link
      }
    }
  }
}
</script>

<style>
.challenge {
  font-family: 'Handlee', serif;
  text-align: center;
}

h2 {
  font-size: 48px;
}

img {
  max-width: 100%;
}

.description {
  font-size: 24px;
}

.position {
  display: block;
  margin: 0 auto;
  transition: filter 2s;
}

.position.blurred {
  filter: blur(10px) sepia(70%) grayscale(60%);
  -webkit-filter: blur(10px) sepia(70%) grayscale(60%);
}
</style>
