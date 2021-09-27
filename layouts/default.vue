<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
/* Colour */
html, a {
  font-family: 'MessinaSansWeb';
  background: #f9f5ef;
  color: #736357;
}

a {
  /* all: unset; */
  text-decoration: none;
}

/* Mobile Fonts */
.hero-text,
input {
  font-size: 72px;
  line-height: 69px;
  letter-spacing: -0.05em;
}

.introduction,
.annotation,
.submit,
nav {
  font-size: 18px;
  line-height: 19px;
  letter-spacing: 0em;
}

footer > a,
nav > a {
  font-size: 10px;
  line-height: 10px;
  letter-spacing: -0.045em;
}

/* Desktop Fonts */
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
footer > a,
nav > a {
  font-size: 16px;
  line-height: 18px;
  letter-spacing: -0.045em;
}
</style>
