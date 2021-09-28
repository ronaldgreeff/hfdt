<template>
  <div>
    <flickity class="carousel" ref="flickity" :options="flickityOptions">
      <img v-for="(imageAddress, imageIndex) in carouselImages" class="carousel-cell" :src="require(`../assets/${imageAddress}`)" :alt="'office image ' + [imageIndex + 1]" />
    </flickity>
    <p>{{ selectedIndex }}</p>
    <button @click="onChange()">Update</button>
    <table v-for="(tableData, tableIndex) in carouselData" v-bind:id="'carousel-table-' + tableIndex" class="carousel-table hidden">
      <thead>
        <th></th>
        <th></th>
      </thead>
      <tbody>
        <tr>
          <td>Name: {{ tableData.name | titalize }}</td>
          <td>Availability: [{{ tableData.availability | capitalize }}]</td>
        </tr>
        <tr>
          <td>Location: [{{ tableData.location | titalize }}]</td>
          <td>Size: [{{ tableData.sizeValue }}] {{ tableData.sizeMeasure }}</td>
        </tr>
        <tr>
          <td></td>
          <td>{{ tableData.description | capitalize }}</td>
        </tr>
      </tbody>
    </table>
    <a href="#">Read More</a>
  </div>
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
      },
      selectedIndex: 0
    }
  },
  methods: {
    next() {
      this.$refs.flickity.next();
      this.selectedIndex = this.$refs.flickity.selectedIndex();
    },
    previous() {
      this.$refs.flickity.previous();
      this.selectedIndex = this.$refs.flickity.selectedIndex();
    },
    onChange() {
      this.selectedIndex = this.$refs.flickity.selectedIndex();
    }
  },
  props: {
    carouselData: Array,
    carouselImages: Array
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
  width: 100vw;
  min-height: 50vh;
  max-height: 80vh;
  object-fit: contain;
  margin-right: 10px;
}

.carousel-table > tbody > tr > td {
  width: 50%;
}
</style>