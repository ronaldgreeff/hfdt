<template>
  <div id="footer">
    <div class="nav-logo">
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

</style>