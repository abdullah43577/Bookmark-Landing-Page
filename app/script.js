"use strict";
const features = document.querySelector(".features");

// will figure out a solution for not using the querySelectorAll in this case
const link = document.querySelectorAll("a");

link.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

features.addEventListener("click", function (e) {
  let clicked = e.target.closest(".feature");
  console.log(clicked);
  //   let [child] = clicked.children;
  //   console.log(child);
  //   child.addEventListener("click", (e) => {
  //     e.preventDefault();
  //   });
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
  console.log(clicked);

  if (!clicked) return;
  clicked.lastElementChild.classList.toggle("hidden");

  console.log(clicked.firstElementChild.children);
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
