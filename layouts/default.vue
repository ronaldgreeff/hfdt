<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>

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
a {
  text-decoration: none;
}
html,
body,
a, a:link,
input, ::placeholder,
button,
hr {
  font-family: 'MessinaSansWeb';
  color: #736357;
}
nav a {
  height: 100%;
}
::placeholder {
  opacity: 0.25;
}
img {
  max-width: 100%;
  height: auto;
}
.spacer {
  height: 10vh;
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
  caret-color: #736357;
}
/* hr {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
} */

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

/* Desktop Fonts */
@media (min-width: 992px) {
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
}

</style>
