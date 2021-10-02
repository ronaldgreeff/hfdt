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
        <tr>
          <td class="border-bottom border-top">Name: {{ carouselData[selectedIndex].name | titalize }}</td>
          <td class="td-space"></td>
          <td class="border-bottom border-top">Size: [{{ carouselData[selectedIndex].sizeValue }}] {{ carouselData[selectedIndex].sizeMeasure }}</td>
        </tr>
        <tr>
          <td class="border-bottom">Location: [{{ carouselData[selectedIndex].location | titalize }}]</td>
          <td class="td-space"></td>
          <td class="border-bottom">Availability: [{{ carouselData[selectedIndex].availability | capitalize }}]</td>
        </tr>
        <tr>
           <td class="border-bottom" colspan="3">{{ carouselData[selectedIndex].description | capitalize }}</td>
        </tr>
      </tbody>
    </table>
    <button class="submit">Read more</button>
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
      }
    },
    mounted() {
      this.setSelectedIndex()
    },
    props: {
      carouselData: Array,
      carouselImages: Array
    },
  }
</script>