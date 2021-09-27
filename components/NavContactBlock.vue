<template>
  <div>
    <div class="" v-for="contactLine in contactDetail">
      <p v-if="contactLine.value === ''">&nbsp;</p>
      <p v-else-if="contactLine.type === 'title'">{{ contactLine.value | capitalize }}</p>
      <a v-else-if="contactLine.type === 'email'" :href="'mailto:' + contactLine.value">{{ contactLine.value }}</a>
      <a v-else-if="contactLine.type === 'link'" :href="'//' + contactLine.url" target="_blank">{{ contactLine.value | upperCase }}</a>
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