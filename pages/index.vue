<template>
  <div>
    <Navbar v-bind:navColumns="navColumns" />
    <div class="section header-space"><IntroHeroText v-bind:introHeroText="introHeroText" /></div>
    <div class="section"><IntroDescription v-bind:introDescription="introDescription" /></div>
    <div class="section"><MainCarousel v-bind:carouselData="carouselData" v-bind:carouselImages="carouselImages" /></div>
    <div class="section"><MainSubscribe /></div>
    <div class="spacer"></div>
    <Footer />
  </div>
</template>

<script>
import '../filters.js'
import Navbar from '@/components/Navbar'
import IntroHeroText from '@/components/IntroHeroText'
import IntroDescription from '@/components/IntroDescription'
import MainSubscribe from '@/components/MainSubscribe'
import Footer from '@/components/Footer'

export default {
  components: {
    Navbar,
    IntroHeroText,
    IntroDescription,
    MainSubscribe,
    Footer
  },
  data(){
    return {
      navColumns: [
        {colTitle: 'enquiries', contactBlocks: [
          [{type: 'title', value: 'general'}, {type: 'text', value: '+44 (0) 020 3613 4733'}, {type: 'email', value: 'info@txowork.com'}],
          [{type: 'title', value: 'sales'}, {type: 'text', value: '+44 (0) 020 3613 4733'}, {type: 'email', value: 'info@txowork.com'}]
        ]},
        {colTitle: 'address', contactBlocks: [
          [{type: 'title', value: 'morelands'}, {type: 'text', value: '5-23 Old Street'}, {type: 'text', value: 'London EC1V 9HL'}]
        ]},
        {colTitle: 'connect', contactBlocks: [
          [{type: 'link', value: 'instagram', url: 'www.instagram.com'}, {type: 'link', value: 'linkedin', url: 'www.linkedin.com'}, {type: 'link', value: 'facebook', url: 'www.facebook.com'}]
        ]}
      ],
      introHeroText: 'We’re hands-on and committed to evolving your business to strive for better',
      introDescription: {title: 'Our offering', text: 'We provide physical, pragmatic and personal business guidance. Success is never static. Neither are we. We’ll be your business partners for positive change'},
      carouselData: [
        {img: 'media/c1.jpg', name: 'sample title', location: 'soho', availability: 'now', sizeValue: '4,200', sizeMeasure: 'sqft', description: 'Quam eos premqui tem cupta il inimet as rerum rent volum sitibus idunt la consenis ea nos doluptur, ipsapernates praeperrunte nobist peditaquis eum audaecto quam, susa consecae isto eum fugit.'},
        {img: 'media/c2.jpeg', name: 'sample title', location: 'soho', availability: 'now', sizeValue: '4,200', sizeMeasure: 'sqft', description: 'Quam eos premqui tem cupta il inimet as rerum rent volum sitibus idunt la consenis ea nos doluptur, ipsapernates praeperrunte nobist peditaquis eum audaecto quam, susa consecae isto eum fugit.'},
        {img: 'media/c3.jpeg', name: 'sample title', location: 'soho', availability: 'now', sizeValue: '4,200', sizeMeasure: 'sqft', description: 'Quam eos premqui tem cupta il inimet as rerum rent volum sitibus idunt la consenis ea nos doluptur, ipsapernates praeperrunte nobist peditaquis eum audaecto quam, susa consecae isto eum fugit.'},
        {img: 'media/c4.jpeg', name: 'sample title', location: 'soho', availability: 'now', sizeValue: '4,200', sizeMeasure: 'sqft', description: 'Quam eos premqui tem cupta il inimet as rerum rent volum sitibus idunt la consenis ea nos doluptur, ipsapernates praeperrunte nobist peditaquis eum audaecto quam, susa consecae isto eum fugit.'},
        {img: 'media/c5.jpeg', name: 'sample title', location: 'soho', availability: 'now', sizeValue: '4,200', sizeMeasure: 'sqft', description: 'Quam eos premqui tem cupta il inimet as rerum rent volum sitibus idunt la consenis ea nos doluptur, ipsapernates praeperrunte nobist peditaquis eum audaecto quam, susa consecae isto eum fugit.'}
      ],
      carouselImages: [
        'media/c1.jpg',
        'media/c2.jpeg',
        'media/c3.jpeg',
        'media/c4.jpeg',
        'media/c5.jpeg',
      ],
    }
  },
}

</script>

<style></style>
