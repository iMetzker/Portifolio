const blinkSelection = document.querySelectorAll(".blink-arrow");

//MOBILE
function menuMobile() {
    const nav = document.querySelector(".nav-bar");
    nav.classList.toggle("active");
  }

// ARROW
function activeBlink () {
  blinkSelection.forEach((element) => {
    element.classList.remove("active");
  });
  this.classList.add("active");
}

blinkSelection.forEach((element) => {
  element.addEventListener("click", activeBlink);
});