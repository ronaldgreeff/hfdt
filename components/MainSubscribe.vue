<template>
  <div>
    <h2>STAY UPDATED</h2>
    <p class="newsletter-text">Newsletter</p>
    <form>
      <label class="hidden" for="full-name"></label>
      <input class="newsletter-text" type="text" id="full-name" name="full-name" placeholder="Full Name">
      <label class="hidden" for="company-name"></label>
      <input class="newsletter-text" type="text" id="company-name" name="company-name" placeholder="Company Name">
      <label class="hidden" for="email-address"></label>
      <input class="newsletter-text" type="text" id="email-address" name="email-address" placeholder="Email Address">
      <button class="submit" type="submit">Submit</button>
    </form>
  </div>
</template>

<style>
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
/* Introduction / Annotations / Submit button
*/
.submit {
  text-align: left;
  padding: 0;
  letter-spacing: 0em; /**/
}
@media (max-width: 768px) {
  /* 
  Introduction / Annotations / Submit button / Navigation
  Font-size: 18px
  Line-height: 19px
  */
  .submit {
    font-size: 18px;
    line-height: 19px;
  }
}
@media (min-width: 768px) {
  /* Introduction / Annotations / Submit button
  Font-size: 45px
  Line-height: 45px
  */
  .submit {
    font-size: 45px;
    line-height: 45px;
  }
}
@media (min-width: 992px) {}
@media (min-width: 1200px) {}
</style>