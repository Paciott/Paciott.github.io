// TARGET ELEMENTS OF HTML

const header = document.querySelector('header');
const technologies = document.querySelector('.technologies');
const frontendBtn = document.querySelector('.frontend-btn');
const backendBtn = document.querySelector('.backend-btn');
const otherBtn = document.querySelector('.other-btn');
const allBtn = document.querySelector('.all-btn');
let frontendTechnologies = document.querySelectorAll('.frontend');
let backendTechnologies = document.querySelectorAll('.backend');
let otherTechnologies = document.querySelectorAll('.other');

// ADD EVENT LISTENERS TO TARGETED ELEMENTS
window.addEventListener("scroll", changeColor);
frontendBtn.addEventListener("click", sortFrontendTechnologies);
backendBtn.addEventListener("click", sortBackendTechnologies);
otherBtn.addEventListener("click", sortOtherTechnologies);
allBtn.addEventListener("click", showAllTechnologies);

// FUNCTIONS OF EVENT LISTENERS

function changeColor() {
  // check for window scroll, at >500 change header background color
  let y = window.scrollY;
  if (y > 100) {
    document.querySelector("header").style.backgroundColor = 'rgb(41, 41, 41)';
  } else {
    document.querySelector("header").style.backgroundColor = "unset";
  }
};

function sortFrontendTechnologies() {
  // set the displayed technologies by manipulating the 'disabled' class, here we display only frontend technologies
  backendTechnologies.forEach(element => {
    element.classList.add('disabled');
  });
  frontendTechnologies.forEach(element => {
    element.classList.remove('disabled');
  });
  otherTechnologies.forEach(element => {
    element.classList.add('disabled');
  });
}

function sortBackendTechnologies() {
  // set the displayed technologies by manipulating the 'disabled' class, here we display only backend technologies
  frontendTechnologies.forEach(element => {
    element.classList.add('disabled');
  });
  backendTechnologies.forEach(element => {
    element.classList.remove('disabled');
  });
  otherTechnologies.forEach(element => {
    element.classList.add('disabled');
  });
}

function sortOtherTechnologies() {
  // set the displayed technologies by manipulating the 'disabled' class, here we display only technologies under the 'other' flag.
  frontendTechnologies.forEach(element => {
    element.classList.add('disabled');
  });
  backendTechnologies.forEach(element => {
    element.classList.add('disabled');
  });
  otherTechnologies.forEach(element => {
    element.classList.remove('disabled');
  });
}

function showAllTechnologies() {
  // remove the 'disabled' class and show all technologies
  frontendTechnologies.forEach(element => {
    element.classList.remove('disabled');
  });
  backendTechnologies.forEach(element => {
    element.classList.remove('disabled');
  });
  otherTechnologies.forEach(element => {
    element.classList.remove('disabled');
  });
}

