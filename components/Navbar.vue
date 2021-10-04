<template>
  <header>
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
        v-bind:class="{ active: activeMenu }"
      >
        <li class="nav-item"><hr /></li>
        <li class="nav-item" v-for="navContactCol in navColumns">
          <div class="nav-item-block">
            <div class="">
              <h3 class="nav-col-text">{{ navContactCol.colTitle | upperCase }}</h3>
            </div>
            <div v-if="navContactCol.contactBlocks.length > 1" class="responsive-nav">
              <div class="nav-col-text" v-for="navContactRow in navContactCol.contactBlocks">
                <div v-for="contactLine in navContactRow">
                  <p class="nav-contact-line" v-if="contactLine.type === 'title'">{{ contactLine.value | capitalize }}</p>
                  <a class="nav-contact-line" v-else-if="contactLine.type === 'email'" :href="'mailto:' + contactLine.value">{{ contactLine.value | capitalize }}</a>
                  <a class="nav-contact-line" v-else-if="contactLine.type === 'link'" :href="'//' + contactLine.url" target="_blank">{{ contactLine.value | capitalize }}</a>
                  <p class="nav-contact-line" v-else>{{ contactLine.value }}</p>
                </div>
              </div>
            </div>
            <div v-else class="responsive-nav">
              <div class="nav-col-text" v-for="contactLine in navContactCol.contactBlocks[0]">
                <p class="nav-contact-line" v-if="contactLine.type === 'title'">{{ contactLine.value | capitalize }}</p>
                <a class="nav-contact-line" v-else-if="contactLine.type === 'email'" :href="'mailto:' + contactLine.value">{{ contactLine.value | capitalize }}</a>
                <a class="nav-contact-line" v-else-if="contactLine.type === 'link'" :href="'//' + contactLine.url" target="_blank">{{ contactLine.value | capitalize }}</a>
                <p class="nav-contact-line" v-else>{{ contactLine.value }}</p>
              </div>
            </div>
          </div>
          <hr />
        </li>
      </ul>
      <div
        class="hamburger"
        v-on:click="toggleMenu"
        v-bind:class="{ active: activeMenu }"
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
      activeMenu: false
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
      this.activeMenu = !this.activeMenu
    }
  }
}
</script>

<style>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  height: 20vh;
}
.header-space {
  margin-top: 100vh;
}
nav {
  margin: 25px 25px 75px 25px;
}
/* .nav-item { margin-top:  10vh; } */
.nav-col-text { text-align: left; }
.responsive-nav {}

.nav-contact-line {
  margin-top: 5px;
  margin-bottom: 5px;
  /* text-align: left; */
}

li {
  list-style: none;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hamburger {
  display: none;
}
hr {
  border: 0px;
  width: 90%;
  float: left;
}
.bar, hr {
  display: block;
  height: 2px;
  background-color: #736357;
}
.bar {
  margin: 17px auto;
  width: 55px;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.nav-menu {
  /* display: flex; */
  justify-content: space-between;
  /* align-items: left; */
  /* padding: 0px; */
}

/* .nav-item {}
.nav-link {}
.nav-link:hover {}
.nav-logo {} */

@media only screen and (max-width: 768px) {
  .nav-menu {
    margin-top: 20vh;
    position: fixed;
    height: 90vh;
    left: -110%;
    top: 0;
    flex-direction: column;
    width: 100%;
    text-align: center;
    transition: 0.3s;
  }

  .nav-menu.active {
    left: 0;
  }

  .nav-item-block {
    margin: 4vh 0vw 1vh 0vw;
  }

  .hamburger {
    display: block;
    cursor: pointer;
  }

  .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active .bar:nth-child(1) {
    -webkit-transform: translateY(19px) rotate(45deg);
    transform: translateY(19px) rotate(45deg);
  }

  .hamburger.active .bar:nth-child(3) {
    -webkit-transform: translateY(-19px) rotate(-45deg);
    transform: translateY(-19px) rotate(-45deg);
  }
}
</style>
