<template>
  <div class="contact-block-parent">
    <LogoTXo2
      v-gsap.from="{
        opacity: 0, 
        x: -200, 
        duration: 1
      }"
    />
    <div class="contact-block-child" v-for="contactDetail in navContacts">
      <NavContactBlock v-bind:contactDetail="contactDetail" />
    </div>
  </div>
</template>

<script>
import LogoTXo2 from '@/components/LogoTXo2'
import NavContactBlock from '@/components/NavContactBlock'

export default {
  components: {
    LogoTXo2,
    NavContactBlock,
  },
  props: {
    navContacts: Array,
  }
}
</script>

<style>
.contact-block-parent
{
  display: table;
  width: 100%;
}
.contact-block-child
{
  display: table-cell;
}
</style>