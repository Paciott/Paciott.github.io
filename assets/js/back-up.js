//TARGET ELEMENT FROM HTML
const backUp = document.querySelector('.back-up');

//ADD EVENT LISTENER TO ELEMENT
backUp.addEventListener("click", scrollToTop);
window.addEventListener("scroll", toggleBackUp);

// FUNCTION OF EVENT LISTENER
function scrollToTop() {
  // scroll to top page
  window.scroll(0, 0)
};

function toggleBackUp() {
  // check for window scroll, at >500 make the back up button to pop up
  let y = window.scrollY;
  if (y > 500) {
    document.querySelector(".back-up").classList.remove('disabled');
  } else {
    document.querySelector(".back-up").classList.add('disabled');
  }
};