<template>
  <flickity class="carousel" ref="flickity" :options="flickityOptions">
    <div v-for="(cData, cIndex) in carouselData" v-bind:id="'slide-' + cIndex" class="carousel-cell">
      <img class="carousel-img" :src="require(`../assets/${cData.img}`)" :alt="'office image ' + [cIndex + 1]">
      <table class="carousel-table">
        <thead>
          <th></th>
          <th></th>
        </thead>
        <tbody>
          <tr>
            <td>Name: {{ cData.name | titalize }}</td>
            <td>Availability: [{{ cData.availability | capitalize }}]</td>
          </tr>
          <tr>
            <td>Location: [{{ cData.location | titalize }}]</td>
            <td>Size: [{{ cData.sizeValue }}] {{ cData.sizeMeasure }}</td>
          </tr>
          <tr>
            <td></td>
            <td>{{ cData.description | capitalize }}</td>
          </tr>
        </tbody>
      </table>
    </div>
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
        initialIndex: 0,
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

.carousel-cell {
  width: 100%;
  height: 800px;
  margin-right: 10px;
}

.carousel-img {
  max-width: 100%;
}

.carousel-cell > table > tbody > tr > td {
  width: 50%;
}
</style>