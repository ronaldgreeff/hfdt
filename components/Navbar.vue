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
        <li class="nav-item mobile-only"><hr /></li>
        <li
          class="nav-item"
          v-bind:class="navContactCol.contactBlocks.length == 1 ? 'nav-col-spacer' : none "
          v-for="navContactCol in navColumns"
          >
          <div class="nav-item-block">
            <div class="">
              <h3 class="text-left">{{ navContactCol.colTitle | upperCase }}</h3>
            </div>

            <div v-if="navContactCol.contactBlocks.length > 1" class="responsive-nav">
              <div class="text-left nav-col-spacer-half" v-for="navContactRow in navContactCol.contactBlocks">
                <div class="text-left" v-for="contactLine in navContactRow">
                  <p class="nav-contact-line" v-if="contactLine.type === 'title'">{{ contactLine.value | capitalize }}</p>
                  <a class="nav-contact-line" v-else-if="contactLine.type === 'email'" :href="'mailto:' + contactLine.value">{{ contactLine.value | capitalize }}</a>
                  <a class="nav-contact-line" v-else-if="contactLine.type === 'link'" :href="'//' + contactLine.url" target="_blank">{{ contactLine.value | capitalize }}</a>
                  <p class="nav-contact-line" v-else>{{ contactLine.value }}</p>
                </div>
              </div>
            </div>

            <div v-else>
              <div class="text-left" v-for="contactLine in navContactCol.contactBlocks[0]">
                <div class="text-left">
                  <p class="nav-contact-line" v-if="contactLine.type === 'title'">{{ contactLine.value | capitalize }}</p>
                  <a class="nav-contact-line" v-else-if="contactLine.type === 'email'" :href="'mailto:' + contactLine.value">{{ contactLine.value | capitalize }}</a>
                  <a class="nav-contact-line" v-else-if="contactLine.type === 'link'" :href="'//' + contactLine.url" target="_blank">{{ contactLine.value | capitalize }}</a>
                  <p class="nav-contact-line" v-else>{{ contactLine.value }}</p>
                </div>
              </div>
            </div>

          </div>
          <hr />
        </li>
      </ul>
      <div
        class="hamburger mobile-only"
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
  width: 100%;
}
hr {
  display: none;
}
.navbar {
}

@media only screen and (max-width: 768px) {
  header {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 99;
    height: 20vh;
  }
  nav {
    margin: 2% 4% 2% 4%;
  }
  .nav-item-block h3 { margin: 0vh 0vw 2vh 0vw}
  .text-left { text-align: left; }
  .nav-contact-line {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-menu {
    padding: 3%;
  }
  .hamburger {
    display: none;
  }
  hr {
    border: 0px;
    width: 90%;
    float: left;
    margin: 4vh 1vw 4vh 1vw;
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
    margin-top: 10vh;
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
  .nav-menu a {
    font-size: 18px;
    line-height: 19px;
    letter-spacing: 0em;
    font-size: x-large;
  }
  .nav-col-spacer-half {
    margin: 0vh 0vw 3vh 0vw;
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

@media (min-width: 768px) {
  .mobile-only {
    display: none;
  }
  nav {
    margin: 1%;
  }
  .navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: flex-start;
    align-items: flex-start;
  }
  .nav-menu {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-content: center;
    align-items: stretch;
    margin: 0 5vw 0 0;
    padding: 0;
  }
  .responsive-nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  div.responsive-nav > div > div:nth-child(1) > p {
    margin-top: 0;
  }
  .nav-col-spacer {
    margin: 0vh 2vw 0vh 3vw;
  }
  .nav-col-spacer-half {
    margin: 0vh 1vw 0vh 2vw;
  }
  div.responsive-nav > div:nth-child(1) {
    margin-left: 0;
  }
  .nav-menu h3 {
    margin-top: 0;
  }
  .nav-menu p, .nav-menu a {
    margin: 0;
  }
}

/* .nav-menu {}
.nav-item {}
.nav-link {}
.nav-link:hover {}
.nav-logo {}
.responsive-nav {} */

</style>
