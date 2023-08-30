"use strict";

// NAV TOGGLER
const navbarTogglers = document.querySelectorAll(".toggle");

navbarTogglers.forEach((navbarToggler) => {
  navbarToggler.addEventListener("click", () => {
    const nav = document.querySelector(".nav");

    if (nav.classList.contains("show")) {
      nav.classList.remove("show");
    } else {
      nav.classList.add("show");
    }
  });
});

// LIGHT/DARK
document.addEventListener("DOMContentLoaded", function () {
  const element = document.querySelector("body");
  const classList = element.classList;
  const classArray = Array.from(classList);
  console.log(classArray);
});

const body = document.body;
const header = document.querySelector("header"); // Select the header element

function setTheme(theme) {
  body.classList.remove("light-theme", "dark-theme");
  body.classList.add(theme);
  header.classList.remove("light-header", "dark-header"); // Remove previous header classes
  header.classList.add(`${theme}-header`); // Apply the appropriate header class
  // Save the user's preference in a cookie
  document.cookie = `theme=${theme}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
}

function toggleTheme() {
  if (body.classList.contains("dark-theme")) {
    setTheme("light-theme");
  } else {
    setTheme("dark-theme");
  }
}

// Check if a theme preference cookie exists
function checkThemeCookie() {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [name, value] = cookie.split("=");
    if (name === "theme") {
      setTheme(value);
      break;
    }
  }
}

// Call checkThemeCookie() to set the theme on page load
checkThemeCookie();

// Attach click event listener to theme toggle button
document
  .getElementById("theme-toggle-button")
  .addEventListener("click", toggleTheme);

// ... Existing toggle switch code ...

// Update theme based on toggle switch state
function updateTheme() {
  if (themeToggleSwitch.checked) {
    setTheme("dark-theme");
  } else {
    setTheme("light-theme");
  }
}

themeToggleSwitch.addEventListener("change", updateTheme);

// Call updateTheme() to set the theme on toggle switch load
updateTheme();
