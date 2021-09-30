<template>
  <div>

  <header class="header hidden">
    <a href="" class="logo">CSS Nav</a>
    <input class="menu-btn" type="checkbox" id="menu-btn" />
    <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
    <ul class="menu">
      <li><a href="#work">Our Work</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#careers">Careers</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </header>

  <nav>
    <div class="nav-logo">
      <LogoTXo2
        v-gsap.from="{
          opacity: 0, 
          x: -200,
          duration: 1
        }"
      />
    </div>
    <div class="spacer"></div>
    <hr>
    <div class="nav-contacts">
      <div class="nav-contact-col" v-for="navContactCol in navColumns">
        <h3 class="nav-contact-row-title">{{ navContactCol.colTitle | upperCase }}</h3>
        <div class="nav-contact-row" v-for="navContactRow in navContactCol.contactBlocks">
          <div class="nav-contact-line" v-for="contactLine in navContactRow">
            <p class="reduce-y-margin" v-if="contactLine.type === 'title'">{{ contactLine.value | capitalize }}</p>
            <a class="reduce-y-margin" v-else-if="contactLine.type === 'email'" :href="'mailto:' + contactLine.value">{{ contactLine.value | capitalize }}</a>
            <a class="reduce-y-margin" v-else-if="contactLine.type === 'link'" :href="'//' + contactLine.url" target="_blank">{{ contactLine.value | capitalize }}</a>
            <p class="reduce-y-margin" v-else>{{ contactLine.value }}</p>
          </div>
        </div>
        <hr>
      </div>
    </div>
  </nav>
  </div>
</template>

<script>
import LogoTXo2 from '@/components/LogoTXo2'

export default {
  components: {
    LogoTXo2,
  },
  props: {
    navColumns: Array,
  }
}
</script>

<style>

nav {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.nav-logo {width: 100%;}
.nav-contacts
{
  /* max-width: 50%; */
}

.contact-block-child
{
  display: table-cell;
}
/*  */
.header {
  background-color: #fff;
  box-shadow: 1px 1px 4px 0 rgba(0,0,0,.1);
  position: fixed;
  width: 100%;
  z-index: 3;
}

.header ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  background-color: #fff;
}

.header li a {
  display: block;
  padding: 20px 20px;
  border-right: 1px solid #f4f4f4;
  text-decoration: none;
}

.header li a:hover,
.header .menu-btn:hover {
  background-color: #f4f4f4;
}

.header .logo {
  display: block;
  float: left;
  font-size: 2em;
  padding: 10px 20px;
  text-decoration: none;
}

/* menu */

.header .menu {
  clear: both;
  max-height: 0;
  transition: max-height .2s ease-out;
}

/* menu icon */

.header .menu-icon {
  cursor: pointer;
  display: inline-block;
  float: right;
  padding: 28px 20px;
  position: relative;
  user-select: none;
}

.header .menu-icon .navicon {
  background: #333;
  display: block;
  height: 2px;
  position: relative;
  transition: background .2s ease-out;
  width: 18px;
}

.header .menu-icon .navicon:before,
.header .menu-icon .navicon:after {
  background: #333;
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  transition: all .2s ease-out;
  width: 100%;
}

.header .menu-icon .navicon:before {
  top: 5px;
}

.header .menu-icon .navicon:after {
  top: -5px;
}

/* menu btn */

.header .menu-btn {
  display: none;
}

.header .menu-btn:checked ~ .menu {
  max-height: 240px;
}

.header .menu-btn:checked ~ .menu-icon .navicon {
  background: transparent;
}

.header .menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.header .menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}

/* 48em = 768px */

@media (min-width: 48em) {
  .header li {
    float: left;
  }
  .header li a {
    padding: 20px 30px;
  }
  .header .menu {
    clear: none;
    float: right;
    max-height: none;
  }
  .header .menu-icon {
    display: none;
  }
}
</style>