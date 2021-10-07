<template>
  <div id="main">
    <Nuxt />
  </div>
</template>

<style>
* {
  margin: 0;
}
/* Colours
Background: #f9f5ef
*/
html, header, hr, .nav-menu {
  background: #f9f5ef;
}
/* Colours
Foreground/Text: #736357
 */
html,
body,
a, a:link,
input, ::placeholder,
button,
hr {
  font-family: 'MessinaSansWeb';
  color: #736357;
}
/* want to keep proper tags but
  the design seems to have H* and p
  font-weights/sizing inverted */
h1, h3 {
  font-weight: lighter;
  font-size: smaller;
}
h2 {
  font-weight: 100;
  font-size: larger;
}
a {
  text-decoration: none;
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
li {
  list-style: none;
}

@media (max-width: 768px) {
  /* Hero text / Form inputs
  Font-size: 72px
  Line-height: 69px
  Letter-spacing: -0.05em
  */
  .hero-text, /**/
  input, /**/
  .newsletter-text {
    font-size: 72px; /**/
    line-height: 69px; /**/
    letter-spacing: -0.05em; /**/
    margin: 0px;
  }
  /* Introduction / Annotations / Submit button / Navigation
  Font-size: 18px
  Line-height: 19px
  Letter-spacing: 0em
   */
  .introduction, /**/
  .annotation, /**/
  button, /**/
  nav /**/ {
    font-size: 18px; /**/
    line-height: 19px; /**/
    letter-spacing: 0em; /**/
  }
  p {
    font-size: x-large;
    margin-top: 5px;
  }
}
@media (min-width: 768px) {
  /* Hero text / Form inputs
  Font-size: 144px
  Line-height: 138px
  Letter-spacing: -0.05em
  */
  .hero-text, /**/
  input, /**/
  .newsletter-text {
    font-size: 144px; /**/
    line-height: 138px; /**/
    letter-spacing: -0.05em; /**/
  }
  .introduction, /**/
  .annotation, /**/
  .submit /**/
  {
    font-size: 45px; /**/
    line-height: 45px; /**/
    letter-spacing: 0em; /**/
  }
  /* Navigation/Footer links
  Font-size: 16px
  Line-height: 18px
  Letter-spacing: -0.045em
  */
  footer a,
  nav a {
    font-size: 16px; /**/
    line-height: 18px; /**/
    letter-spacing: -0.045em; /**/
  }
}
@media (min-width: 992px) {}
@media (min-width: 1200px) {}

</style>
