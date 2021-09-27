<template>
  <flickity class="carousel" ref="flickity" :options="flickityOptions">
    <div v-for="(cData, cIndex) in carouselData" v-bind:id="'slide-' + [cIndex + 1]" class="carousel-cell">{{ cIndex + 1 }}</div>
  </flickity>
</template>

<script>
import Flickity from 'vue-flickity'

export default {
  components: {
    Flickity
  },
  data() {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true
      }
    }
  },
  methods: {
    next() {
      this.$refs.flickity.next();
    },
    previous() {
      this.$refs.flickity.previous();
    }
  },
  props: {
    carouselData: Array
  }
}

</script>

<style>
/* external css: flickity.css */

* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.carousel {
  background: #EEE;
}

.carousel-cell {
  width: 66%;
  height: 200px;
  margin-right: 10px;
  background: #8C8;
}

/* cell number */
.carousel-cell:before {
  display: block;
  text-align: center;
  line-height: 200px;
  font-size: 80px;
  color: white;
}
</style>