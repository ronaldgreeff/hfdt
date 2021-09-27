import Vue from 'vue';

// Capitalize the first letter
Vue.filter('capitalize', value => {
  if (!value) return ''
  return value.toString().charAt(0).toUpperCase() + value.slice(1)
})

// Uppercase all the letters
Vue.filter('upperCase', value => {
  return value.toUpperCase();
});

// Capitalise the first letter of every word
Vue.filter('titalize', value => {
  return value.replace(/(^\w|\s\w)(\S*)/g, (_,m1,m2) => m1.toUpperCase() + m2.toLowerCase())
})