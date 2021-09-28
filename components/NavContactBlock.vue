<template>
  <div class="nav-contact-block">
    <div v-for="contactLine in contactDetail">
      <!-- insert blank space wherever value is an empty string -->
      <p v-if="contactLine.value === ''">&nbsp;</p>
      <!-- colTitle > title formatting -->
      <p v-else-if="contactLine.type === 'colTitle'">{{ contactLine.value | upperCase }}</p>
      <p v-else-if="contactLine.type === 'title'">{{ contactLine.value | capitalize }}</p>
      <!-- email / link hrefs -->
      <a v-else-if="contactLine.type === 'email'" :href="'mailto:' + contactLine.value">{{ contactLine.value | capitalize }}</a>
      <a v-else-if="contactLine.type === 'link'" :href="'//' + contactLine.url" target="_blank">{{ contactLine.value | capitalize }}</a>
      <!-- strings -->
      <p v-else>{{ contactLine.value }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contactDetail: {
      type: Array
    }
  },
}
</script>
