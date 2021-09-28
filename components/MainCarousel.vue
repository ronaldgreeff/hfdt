<template>
  <div>
    
    <swiper ref="mySwiper" :options="swiperOptions" @slideChangeTransitionEnd="setSelectedIndex">
      <swiper-slide v-for="imageAddress in carouselImages">{{imageAddress}}</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <p>{{ carouselData.slice(selectedIndex, [selectedIndex + 1])[0].img }}</p>
    <table class="carousel-table">
      <thead>
        <th></th>
        <th></th>
      </thead>
      <tbody>
        <tr>
          <td>Name: {{ carouselData.slice(selectedIndex, [selectedIndex + 1])[0].name | titalize }}</td>
          <td>Availability: [{{ carouselData.slice(selectedIndex, [selectedIndex + 1])[0].availability | capitalize }}]</td>
        </tr>
        <tr>
          <td>Location: [{{ carouselData.slice(selectedIndex, [selectedIndex + 1])[0].location | titalize }}]</td>
          <td>Size: [{{ carouselData.slice(selectedIndex, [selectedIndex + 1])[0].sizeValue }}] {{ carouselData.slice(selectedIndex, [selectedIndex + 1])[0].sizeMeasure }}</td>
        </tr>
        <tr>
          <td></td>
          <td>{{ carouselData.slice(selectedIndex, [selectedIndex + 1])[0].description | capitalize }}</td>
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
        selectedIndex: null,
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