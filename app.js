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
});

const body = document.body;

function setTheme(theme) {
  body.classList.remove("light-theme", "dark-theme");
  body.classList.add(theme);
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
  const buttonUp = document.querySelectorAll("#scrollToTop i");
  const buttonDown = document.querySelectorAll("button[data-scroll-target] i");
  const scrollToTopButton = document.getElementById("scrollToTop");
  let currentSection = 0;

  function scrollToSection(index) {
    if (index >= 0 && index < sections.length) {
      const section = sections[index];
      const offsetTop = section.offsetTop;

      // setTimeout to scroll smoothly
      setTimeout(() => {
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }, 0); // Delay scrolling
      currentSection = index;
    }
  }

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
  function toggleScrollToTopButton() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const scrollTopButton = document.getElementById("scrollToTop");
    const scrollThreshold = 500; // Adjustable value for start of scroll

    if (scrollY > scrollThreshold) {
      scrollTopButton.style.display = "block";
    } else {
      scrollTopButton.style.display = "none";
    }
  }
  window.addEventListener("scroll", toggleScrollToTopButton);
});

// SCROLL ANIMATION //
function startScrollAnimation(
  targetElementId,
  animationIn,
  animationOut,
  thresholdPercentage
) {
  const animatedBox = document.getElementById(targetElementId);
  const windowHeight = window.innerHeight;
  const scrollThreshold = windowHeight * (thresholdPercentage / 100);
  let animationStarted = false;

  function handleScroll() {
    // Calculate scroll position
    const scrollPosition = window.scrollY;
    //console.log(scrollPosition);
    if (!animationStarted && scrollPosition >= scrollThreshold) {
      // Add the animation property with the keyframes to start the animation
      animatedBox.style.animation = animationOut;
      animationStarted = true;

      // Remove the scroll event listener to prevent triggering the animation multiple times
      window.removeEventListener("scroll", handleScroll);
      // Add a new scroll listener to reset the animation
      window.addEventListener("scroll", resetAnimation);
    }
  }

  function resetAnimation() {
    const scrollPosition = window.scrollY;

    if (animationStarted && scrollPosition < scrollThreshold) {
      // User has scrolled back to the original position, reset the animation
      animatedBox.style.animation = animationIn;
      animationStarted = false;

      // Remove the reset scroll event listener
      window.removeEventListener("scroll", resetAnimation);
      // Reattach the main scroll listener
      window.addEventListener("scroll", handleScroll);
    }
  }

  // Attach the main scroll listener
  window.addEventListener("scroll", handleScroll);
}

startScrollAnimation(
  "hi-0",
  "slideUp 3.5s ease forwards",
  "slideOut 1s ease forwards",
  10
);
startScrollAnimation(
  "hi-1",
  "slideUp 3s ease forwards",
  "slideOut 1s ease forwards",
  10
);
startScrollAnimation(
  "hi-2",
  "slideUp 3s ease forwards",
  "slideOut 1s ease forwards",
  10
);
startScrollAnimation(
  "hi-3",
  "slideUp 2.5s ease forwards",
  "slideOut 1s ease forwards",
  10
);
startScrollAnimation(
  "hi-4",
  "slideUp 2s ease forwards",
  "slideOut 1s ease forwards",
  10
);
startScrollAnimation(
  "hi-5",
  "slideUp 2s ease forwards",
  "slideOut 1s ease forwards",
  10
);
startScrollAnimation(
  "hi-6",
  "slideUp 2s ease forwards",
  "slideOut 1s ease forwards",
  10
);

//portfolio click event//
const children = document.querySelectorAll(".project");

children.forEach((child) => {
  child.addEventListener("click", () => {
    // Remove "active" class from all children
    children.forEach((c) => c.classList.remove("active"));

    // Add "active" class to the clicked child
    child.classList.add("active");
  });
});
