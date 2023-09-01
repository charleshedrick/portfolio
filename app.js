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
  header.classList.remove("light-header", "dark-header");
  header.classList.add(`${theme}-header`);
  document.cookie = `theme=${theme}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;

  // Update the icon based on the theme
  const themeToggleButton = document.getElementById("theme-toggle-button");
  if (theme === "dark-theme") {
    themeToggleButton.classList.remove("bi-sun-fill", "header-icon");
    themeToggleButton.classList.add("bi-moon-fill", "header-icon");
  } else {
    themeToggleButton.classList.remove("bi-moon-fill", "header-icon");
    themeToggleButton.classList.add("bi-sun-fill", "header-icon");
  }
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

// LIGHT/DARK ICON TOGGLE //
document.addEventListener("DOMContentLoaded", function () {
  // Attach click event listener to the theme toggle button
  const themeToggleButton = document.getElementById("theme-toggle-button");
  themeToggleButton.addEventListener("click", toggleTheme);

  // Update theme based on toggle button click
  function toggleTheme() {
    const currentTheme = document.body.classList.contains("dark-theme")
      ? "light-theme"
      : "dark-theme";
    setTheme(currentTheme);
  }
});

// SCROLLING EFFECTS //
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  const buttonUp = document.querySelectorAll(".arrow-up");
  const buttonDown = document.querySelectorAll(".arrow-down");
  const scrollToTopButton = document.getElementById("scrollToTop");
  let currentSection = 0;

  function scrollToSection(index) {
    if (index >= 0 && index < sections.length) {
      sections[index].scrollIntoView({ behavior: "smooth" });
      currentSection = index;
    }
  }

  function toggleScrollToTopButton() {
    scrollToTopButton.style.display =
      window.scrollY >= sections[1].offsetTop ? "block" : "none";
  }

  // Scrolling with mouse wheel
  window.addEventListener("wheel", function (event) {
    if (event.deltaY > 0 && currentSection < sections.length - 1) {
      currentSection++;
      scrollToSection(currentSection);
    } else if (event.deltaY < 0 && currentSection > 0) {
      currentSection--;
      scrollToSection(currentSection);
    }
  });

  // Smooth scrolling with arrow buttons
  buttonUp.forEach((button) => {
    button.addEventListener("click", function () {
      currentSection--;
      scrollToSection(currentSection);
    });
  });

  buttonDown.forEach((button) => {
    button.addEventListener("click", function () {
      currentSection++;
      scrollToSection(currentSection);
    });
  });

  // Show/hide "Up" button
  window.addEventListener("scroll", toggleScrollToTopButton);
  toggleScrollToTopButton(); // Initial call to set button visibility
});
