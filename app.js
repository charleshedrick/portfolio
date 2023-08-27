"use strict";

const navToggler = document.getElementById("navbar-toggler");
const navCollapse = document.getElementById("navbar-collapse");

navToggler.addEventListener("click", () => {
  navCollapse.classList.toggle("show");
});
