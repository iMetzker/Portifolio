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

