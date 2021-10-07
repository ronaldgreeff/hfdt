<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions" @slideChangeTransitionEnd="setSelectedIndex">
      <swiper-slide v-for="(imageAddress, iI) in carouselImages" v-bind:key="'carousel_img_' + iI">
        <img :src="require(`../assets/${imageAddress}`)" :alt="'Office image ' + iI">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <table id="main-carousel" class="carousel-table">
      <thead>
        <th></th>
        <th></th>
        <th></th>
      </thead>
      <tbody>
        <tr v-bind:class="{ 'border-bottom': readMore }">
          <td class="border-bottom">Name: {{ carouselData[selectedIndex].name | titalize }}</td>
          <td class="td-space"></td>
          <td class="border-bottom">Availability: [{{ carouselData[selectedIndex].availability | capitalize }}]</td>
        </tr>
        <tr v-bind:class="{ hidden: readMore }">
          <td class="border-bottom">Location: [{{ carouselData[selectedIndex].location | titalize }}]</td>
          <td class="td-space"></td>
          <td class="border-bottom">Size: [{{ carouselData[selectedIndex].sizeValue }}] {{ carouselData[selectedIndex].sizeMeasure }}</td>
        </tr>
        <tr v-bind:class="{ hidden: readMore }" class="border-bottom">
          <td class="large-only"></td>
          <td class="large-only"></td>
          <td class="large-width" :colspan="colSpan">{{ carouselData[selectedIndex].description | capitalize }}</td>
        </tr>
      </tbody>
    </table>
    <button v-bind:class="{ active: !readMore }" v-on:click="toggleReadMore" class="submit">{{ readMoreText }}</button>
  </div>
</template>

<script>
  export default {
    name: 'carousel', 
    data() {
      return {
        swiperOptions: {  
          pagination: {
            el: '.swiper-pagination'
          },
          // Some Swiper option/callback...
        },
        selectedIndex: 0,
        readMore: false,
        readMoreText: null,
        colSpan: null,
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    methods: {
      setSelectedIndex() {
        this.selectedIndex = this.$refs.mySwiper.$swiper.activeIndex
      },
      toggleReadMore() {
        // toggle boolean (readMore)
        this.readMore = !this.readMore
        // set toggle text (readMoreText)
        this.readMore ? this.readMoreText = "Read More" : this.readMoreText = "Hide Text"
      },
      setColSpan() {
        window.innerWidth < 768 ? this.colSpan = 3 : null
      }
    },
    mounted() {
      this.setSelectedIndex()
      this.toggleReadMore()
      this.setColSpan()
    },
    props: {
      carouselData: Array,
      carouselImages: Array
    },
  }
</script>

<style>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  button {
    background: none;
    border: none;
  }
  button.submit.active {
    opacity: 0.3;
  }
  td, button.submit {
    padding-top: 5px;
    padding-bottom: 7px;
  }
  td.border-bottom,
  tr.border-bottom {
    border-bottom: 1px solid #736357;
  }
  @media (max-width: 768px) {
    td.large-only { display: none;}
  }
  @media (min-width: 768px) {
    td.large-width {
      width: 48%;
    }
    td.large-only { display: table-cell; }
  }
  @media (min-width: 992px) {}
  @media (min-width: 1200px) {}
</style>