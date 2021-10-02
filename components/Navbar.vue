<template>
  <header id="header" class="header">
    <nav class="navbar">
      <a href="/" class="nav-logo">
        <LogoTXo2
          v-gsap.from="{
          opacity: 0,
          x: -200,
          y: 0,
          duration: 1
          }"
        />
      </a>

      <ul
        class="nav-menu"
        v-bind:class="{ active: isActive }"
      >
        <li class="nav-item" v-for="navContactCol in navColumns">
          <div class="">
            <h3 class="">{{ navContactCol.colTitle | upperCase }}</h3>
          </div>
          <div v-if="navContactCol.contactBlocks.length > 1" class="responsive-nav">
            <div class="" v-for="navContactRow in navContactCol.contactBlocks">
              <div class="nav-contact-line" v-for="contactLine in navContactRow">
                <p class="reduce-y-margin" v-if="contactLine.type === 'title'">{{ contactLine.value | capitalize }}</p>
                <a class="reduce-y-margin" v-else-if="contactLine.type === 'email'" :href="'mailto:' + contactLine.value">{{ contactLine.value | capitalize }}</a>
                <a class="reduce-y-margin" v-else-if="contactLine.type === 'link'" :href="'//' + contactLine.url" target="_blank">{{ contactLine.value | capitalize }}</a>
                <p class="reduce-y-margin" v-else>{{ contactLine.value }}</p>
              </div>
            </div>
          </div>
          <div v-else class="">
            <div class="nav-contact-line" v-for="contactLine in navContactCol.contactBlocks[0]">
              <p class="" v-if="contactLine.type === 'title'">{{ contactLine.value | capitalize }}</p>
              <a class="" v-else-if="contactLine.type === 'email'" :href="'mailto:' + contactLine.value">{{ contactLine.value | capitalize }}</a>
              <a class="" v-else-if="contactLine.type === 'link'" :href="'//' + contactLine.url" target="_blank">{{ contactLine.value | capitalize }}</a>
              <p class="" v-else>{{ contactLine.value }}</p>
            </div>
          </div>
        </li>
      </ul>
      <div
        class="hamburger"
        v-on:click="toggleMenu"
        v-bind:class="{ active: isActive }"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </nav>
  </header>
</template>

<script>
import LogoTXo2 from '@/components/LogoTXo2'

export default {
  data() {
    return {
      isActive: false
    }
  },
  components: {
    LogoTXo2,
  },
  props: {
    navColumns: Array,
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style>

li {
    list-style: none;
}

.header {
  position: fixed;
  top: 0;
  width: 90%;
}
.header-space {
  margin-top: 100vh;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hamburger {
  display: none;
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: #736357;
}

.nav-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
}

/* .nav-item {}
.nav-link {}
.nav-link:hover {}
.nav-logo {} */

@media only screen and (max-width: 768px) {
  .nav-menu {
    position: fixed;
    height: 90vh;
    left: -110%;
    top: 3.5rem;
    flex-direction: column;
    width: 100%;
    border-radius: 10px;
    text-align: center;
    transition: 0.3s;
  }

  .nav-menu.active {
    left: 0;
  }

  .nav-item {
    margin: 2.5rem 0;
  }

  .hamburger {
    display: block;
    cursor: pointer;
  }

  .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active .bar:nth-child(1) {
    -webkit-transform: translateY(8px) rotate(45deg);
    transform: translateY(8px) rotate(45deg);
  }

  .hamburger.active .bar:nth-child(3) {
    -webkit-transform: translateY(-8px) rotate(-45deg);
    transform: translateY(-8px) rotate(-45deg);
  }
}
</style>
