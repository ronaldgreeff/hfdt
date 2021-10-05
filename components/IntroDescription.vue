<template>
  <div class="intro-description">
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

<style>
@media (max-width: 768px) {
  .introduction {
    
  }
}
@media (min-width: 768px) {
  .intro-description {
    margin: 10vh 10vw 10vh 35vw;
  }
}
@media (min-width: 992px) {}
@media (min-width: 1200px) {}
</style>