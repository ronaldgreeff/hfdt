<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions" @slideChangeTransitionEnd="setSelectedIndex">
      <swiper-slide v-for="imageAddress in carouselImages">
        <img :src="require(`../assets/${imageAddress}`)" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <p>{{ carouselData[selectedIndex].img }}</p>
    <table class="carousel-table">
      <thead>
        <th></th>
        <th></th>
      </thead>
      <tbody>
        <tr>
          <td>Name: {{ carouselData[selectedIndex].name | titalize }}</td>
          <td>Availability: [{{ carouselData[selectedIndex].availability | capitalize }}]</td>
        </tr>
        <tr>
          <td>Location: [{{ carouselData[selectedIndex].location | titalize }}]</td>
          <td>Size: [{{ carouselData[selectedIndex].sizeValue }}] {{ carouselData[selectedIndex].sizeMeasure }}</td>
        </tr>
        <tr>
          <td></td>
          <td>{{ carouselData[selectedIndex].description | capitalize }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'carrousel',
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