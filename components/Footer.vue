<template>
  <div>
    <div class="footer-nav">
      <div class="footer-logo">
        <a href="#">
          <LogoThirdway />
        </a>
      </div>
      <div class="footer-links">
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
/* 
Footer links
Letter-spacing: -0.045em
*/
.footer-links {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.footer-links a {
  letter-spacing: -0.045em; /**/
}
@media (max-width: 768px) {
  .footer-logo {
    margin: 1vh 0vw 5vh 0vw;
  }
  /* 
  Footer links
  Font-size: 10px
  Line-height: 10px
  */
  .footer-links {
    font-size: 10px; /**/
    line-height: 10px; /**/
  }
}
@media (min-width: 768px) {
  .footer-nav {
    display: flex;
    flex-direction: row;
  }
  .footer-logo, .footer-links {
    width: 50%;
  }
  /*
  Navigation/Footer links
  Font-size: 16px
  Line-height: 18px
  */
  .footer-links {  
    font-size: 16px; /**/
    line-height: 18px; /**/
  }
}
@media (min-width: 992px) {}
@media (min-width: 1200px) {}

</style>
