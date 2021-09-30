<template>
  <div>
    <h2>{{ introDescription.title | upperCase }}</h2>
    <p class="introduction">{{ introDescription.text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    introDescription: Object
  }
}
</script>