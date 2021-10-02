<template>
  <div id="wrapper">
    <Nuxt />
  </div>
</template>

<style>
/* Colour */
html, header, hr, .nav-menu {
  background: #f9f5ef;
}

/* want to keep proper tags but
  the design seems to have H* and p
  font-weights/sizing inverted */
h1, h2, h3 {
  font-weight: lighter;
  font-size: smaller;
}
p {
  font-size: x-large;
  margin-top: 5px;
}
.reduce-y-margin {
  margin-top: 5px;
  margin-bottom: 5px;
}
a {
  text-decoration: none;
}
html, body, a, a:link, input, button {
  font-family: 'MessinaSansWeb';
  color: #736357;
}
img {
  max-width: 100%;
  height: auto;
}
.spacer {
  height: 10vh;
}
.section {
  display: block;
  margin-top: 10vh;
  margin-bottom: 20vh;
}
td, .submit {
  padding-top: 5px;
  padding-bottom: 7px;
}
td.border-bottom
{
  border-bottom: 1px solid #736357;
}
td.border-top {
  border-top: 1px solid #736357;
}
form {
  margin-top: 5px;
}
input {
  width: 100%;
  border: none;
  outline: none;
  padding: 0px;
  background-color: unset;
}
::placeholder {
  color: #736357;
  opacity: 0.25;
}

hr {
  width: 100%;
  border-color: #736357;
  margin-left: auto;
  margin-right: auto;
}

/* Responsiveness */
#wrapper { width:95%; margin: 0 auto; }
#header { width:95%; z-index: 99;}
#content { width:100%; }
#sidebar { width:100%; }
#footer { width:100%; }

/* Mobile Fonts */
.hero-text,
input,
.newsletter-text {
  font-size: 72px;
  line-height: 69px;
  letter-spacing: -0.05em;
  margin: 0px;
}

.introduction,
.annotation,
button,
nav {
  font-size: 18px;
  line-height: 19px;
  letter-spacing: 0em;
}
button {
  background: none;
  border: none;
}
.submit {
  text-align: left;
  padding: 0;
}

footer a,
nav a,
.nav-links {
  font-size: 10px;
  line-height: 10px;
  letter-spacing: -0.045em;
}
.nav-links {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.nav-links a {
  text-align: left;
}

/* Small devices (landscape phones, 576px and up) */
/* @media (min-width: 576px) {} */

/* Medium devices (tablets, 768px and up) */
/* @media (min-width: 768px) {
  #wrapper { width:90%;  margin: 0 auto; }
  #content { width:70%; float:left; }
  #sidebar { width:30%; float:right; }
} */

/* Large devices (desktops, 992px and up) */
/* Desktop Fonts */
/* @media (min-width: 992px) {
  .hero-text,
  input {
    font-size: 144px;
    line-height: 138px;
    letter-spacing: -0.05em;
  }
  .introduction,
  .annotation,
  .submit,
  nav {
    font-size: 45px;
    line-height: 45px;
    letter-spacing: 0em;
  }
  footer a,
  nav a {
    font-size: 16px;
    line-height: 18px;
    letter-spacing: -0.045em;
  }
} */

/* Extra large devices (large desktops, 1200px and up) */
/* @media (min-width: 1200px) {
  #wrapper { width:90%; margin: 0 auto; }
} */

</style>
