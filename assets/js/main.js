//TITLE
const textIntro = document.querySelector(".intro-content h1");

function typeWriter(el) {
  const textArray = el.innerHTML.split("");
  el.innerHTML = "";

  textArray.forEach((letra, i) => {
    setTimeout(() => {
      el.innerHTML += letra;
    }, 75 * i);
  });
}

typeWriter(textIntro);

// MENU CLICK
const blinkSelection = document.querySelectorAll(".blink-arrow");


function activeBlink () {
  blinkSelection.forEach((element) => {
    element.classList.remove("active");
  });
  this.classList.add("active");
}

blinkSelection.forEach((element) => {
  element.addEventListener("click", activeBlink);
});
