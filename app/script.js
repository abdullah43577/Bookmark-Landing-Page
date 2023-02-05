"use strict";

// Removing default behavious of links
const link = document.querySelectorAll("a");

link.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

// hero section on load slide in
const heroSection = document.querySelector(".hero--section");

setTimeout(() => {
  heroSection.classList.remove("translate-y-[100px]");
  heroSection.classList.remove("opacity-0");
}, 500);

// slide up transitions on page sections
const featuresSect = document.getElementById("section1");
const extension = document.getElementById("section2");
const faqSect = document.getElementById("section3");

const revealSection = function (entries, observer) {
  let [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("translate-y-[100px]");
  entry.target.classList.remove("opacity-0");

  observer.unobserve(entry.target);
};

const observer = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});
observer.observe(featuresSect.children[0]);
observer.observe(featuresSect.children[1]);
observer.observe(extension.children[0]);
observer.observe(extension.children[1]);
observer.observe(faqSect.children[0]);
observer.observe(faqSect.children[1]);

const features = document.querySelector(".features");

// Tabbed Components
features.addEventListener("click", function (e) {
  let clicked = e.target.closest(".feature");
  if (!clicked) return;

  // remove active classes
  document
    .querySelectorAll(".feature")
    .forEach((ft) => ft.classList.remove("activeTab"));
  document
    .querySelectorAll(".component")
    .forEach((comp) => comp.classList.add("hidden"));

  // adding active classes
  clicked.classList.add("activeTab");

  document
    .querySelector(`.component--${clicked.dataset.tab}`)
    .classList.remove("hidden");

  document
    .querySelector(`.component--${clicked.dataset.tab}`)
    .classList.add("flex");
});

// FAQ Implementation
const faqContainer = document.querySelector(".faq--container");

faqContainer.addEventListener("click", (e) => {
  let clicked = e.target.closest(".faq");

  if (!clicked) return;

  clicked.lastElementChild.classList.toggle("hidden");
  clicked.firstElementChild.children[1].classList.toggle("rotate-[360deg]");
});

// Input validation
const validateEmail = function (email) {
  const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return regex.test(email);
};

const form = document.querySelector("form");
const input = document.querySelector("input");
const errorImg = document.querySelector(".errorimg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validateEmail(input.value)) {
    validator(
      "Whoops, make sure it's an email",
      "hsl(0, 94%, 66%)",
      "bg-softRed"
    );
    input.classList.add("error");
    errorImg.classList.remove("hidden");

    return;
  }

  validator("Email entered Accepted!", "hsl(231, 69%, 60%)", "bg-softBlue");
  input.classList.remove("error");
  errorImg.classList.add("hidden");

  input.value = "";

  setTimeout(() => {
    input.nextElementSibling.textContent = "";
    input.nextElementSibling.style.backgroundColor = "transparent";
    input.nextElementSibling.classList.remove("py-1");
  }, 3000);
});

const validator = function (text, bgTransparent, bgColor) {
  input.nextElementSibling.textContent = text;
  input.nextElementSibling.style.backgroundColor = bgTransparent;
  input.nextElementSibling.classList.add(bgColor);
  input.nextElementSibling.classList.add("py-1");
};

// Burger Menu Implementation
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menuContainer");
const logo = document.querySelector("nav > svg > g > path");
console.log(menu, burger);

burger.addEventListener("click", function () {
  burger.classList.toggle("toggle");
  logo.classList.toggle("toggle");
  menu.classList.toggle("containerMenuOpen");
});
