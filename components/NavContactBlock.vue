<template>
  <div>
    <div v-for="contactLine in contactDetail">
      <!-- insert blank space WHEREVER value is an empty string -->
      <p v-if="contactLine.value === ''">&nbsp;</p>
      <!-- hierarchy of capitalisation/upperCase -->
      <p v-else-if="contactLine.type === 'colTitle'">{{ contactLine.value | upperCase }}</p>
      <p v-else-if="contactLine.type === 'title'">{{ contactLine.value | capitalize }}</p>
      <!-- add hrefs -->
      <a v-else-if="contactLine.type === 'email'" :href="'mailto:' + contactLine.value">{{ contactLine.value }}</a>
      <a v-else-if="contactLine.type === 'link'" :href="'//' + contactLine.url" target="_blank">{{ contactLine.value | capitalize }}</a>
      <!-- for phone numbers / anything not 'processed' -->
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