<template>
  <div>
    <Navbar v-bind:navContacts="navContacts" />
    <IntroHeroText v-bind:introHeroText="introHeroText" />
    <IntroDescription v-bind:introDescription="introDescription" />
    <MainCarousel v-bind:carouselData="carouselData" />
    <MainSubscribe />
  </div>
</template>

<script>
import '../filters.js'
import Navbar from '@/components/Navbar'
import IntroHeroText from '@/components/IntroHeroText'
import IntroDescription from '@/components/IntroDescription'
import MainSubscribe from '@/components/MainSubscribe'

export default {
  components: {
    Navbar,
    IntroHeroText,
    IntroDescription,
    MainSubscribe
  },
  data(){
    return {
      navContacts: [
        [{type: 'colTitle', value: 'enquiries'}, {type: 'title', value: 'general'}, {type: '', value: '+44 (0) 020 3613 4733'}, {type: 'email', value: 'info@txowork.com'},],
        [{type: 'colTitle', value: ''}, {type: 'title', value: 'sales'}, {type: '', value: '+44 (0) 020 3613 4733'}, {type: 'email', value: 'info@txowork.com'},],
        [{type: 'colTitle', value: 'address'}, {type: 'title', value: 'morelands'}, {type: 'text', value: '5-23 Old Street'}, {type: 'text', value: 'London EC1V 9HL'},],
        [{type: 'colTitle', value: 'connect'}, {type: 'link', value: 'instagram', url: 'www.instagram.com'}, {type: 'link', value: 'linkedin', url: 'www.linkedin.com'}, {type: 'link', value: 'facebook', url: 'www.facebook.com'},],
      ],
      introHeroText: 'We’re hands-on and committed to evolving your business to strive for better',
      introDescription: {title: 'Our offering', text: 'We provide physical, pragmatic and personal business guidance. Success is never static. Neither are we. We’ll be your business partners for positive change'},
      carouselData: [
        {name: 'sample title', location: 'soho', availability: 'now', sizeValue: '4,200', sizeMeasure: 'sqft', description: 'Quam eos premqui tem cupta il inimet as rerum rent volum sitibus idunt la consenis ea nos doluptur, ipsapernates praeperrunte nobist peditaquis eum audaecto quam, susa consecae isto eum fugit.'},
        {name: 'sample title', location: 'soho', availability: 'now', sizeValue: '4,200', sizeMeasure: 'sqft', description: 'Quam eos premqui tem cupta il inimet as rerum rent volum sitibus idunt la consenis ea nos doluptur, ipsapernates praeperrunte nobist peditaquis eum audaecto quam, susa consecae isto eum fugit.'},
        {name: 'sample title', location: 'soho', availability: 'now', sizeValue: '4,200', sizeMeasure: 'sqft', description: 'Quam eos premqui tem cupta il inimet as rerum rent volum sitibus idunt la consenis ea nos doluptur, ipsapernates praeperrunte nobist peditaquis eum audaecto quam, susa consecae isto eum fugit.'},
        {name: 'sample title', location: 'soho', availability: 'now', sizeValue: '4,200', sizeMeasure: 'sqft', description: 'Quam eos premqui tem cupta il inimet as rerum rent volum sitibus idunt la consenis ea nos doluptur, ipsapernates praeperrunte nobist peditaquis eum audaecto quam, susa consecae isto eum fugit.'},
        {name: 'sample title', location: 'soho', availability: 'now', sizeValue: '4,200', sizeMeasure: 'sqft', description: 'Quam eos premqui tem cupta il inimet as rerum rent volum sitibus idunt la consenis ea nos doluptur, ipsapernates praeperrunte nobist peditaquis eum audaecto quam, susa consecae isto eum fugit.'}
      ],
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}

</script>

<style></style>
