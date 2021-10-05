<template>
  <div>
    <div class="footer-logo">
      <LogoThirdway
        v-gsap.from="{
          opacity: 0, 
          x: -200,
          duration: 1
        }"
      />
    </div>
    <div class="nav-links">
      <a class="" v-for="fData in [
        {title: 'Terms & Conditions', url: '#'},
        {title: 'Privacy Policy', url: '#'},
        {title: 'Cookie Policy', url: '#'},
        {title: 'Accessibility', url: '#'},
        {title: '', url: ''},]"
      :href='fData.url'
      >{{fData.title }}
      </a>
    </div>
  </div>
</template>

<script>
import LogoThirdway from '@/components/LogoThirdway'

export default {
  components: {
    LogoThirdway,
  },
  props: {
    navColumns: Array,
  }
}
</script>

<style>
footer a /**/ {
  font-size: 10px; /**/
  line-height: 10px; /**/
  letter-spacing: -0.045em; /**/
}
.nav-links {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.nav-links a {
  text-align: left;
}
@media (max-width: 768px) {
  /* 
  Footer links
  Font-size: 10px
  Line-height: 10px
  Letter-spacing: -0.045em
   */
  .nav-links {
    font-size: 10px; /**/
    line-height: 10px; /**/
    letter-spacing: -0.045em; /**/
  }
}
@media (min-width: 768px) {}
@media (min-width: 992px) {}
@media (min-width: 1200px) {}

</style>
