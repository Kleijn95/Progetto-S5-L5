document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const navSection = document.getElementById("nav");
  const button = document.querySelector("#navbar button");
  const offset = 150;

  window.addEventListener("scroll", function () {
    const navBottom = navSection.getBoundingClientRect().bottom;

    if (navBottom <= offset) {
      navbar.style.backgroundColor = "#ffffff";
      navbar.classList.remove("hidden");
      button.style.backgroundColor = "#28a745";
      button.style.color = "#ffffff";
    } else {
      navbar.style.backgroundColor = "#ffc017";
      navbar.classList.add("hidden");
      button.style.backgroundColor = "";
      button.style.color = "";
    }
  });
});

let svg = document.querySelector("svg");

let gruppiOpachi = [...svg.querySelectorAll("g[opacity]")];

function cambiaOpacitàCasuale() {
  let indiceCasuale = Math.floor(Math.random() * gruppiOpachi.length);
  let gruppoSelezionato = gruppiOpachi[indiceCasuale];
  let opacitàCorrente = gruppoSelezionato.getAttribute("opacity");

  if (opacitàCorrente == 1) {
    gruppoSelezionato.setAttribute("opacity", 0);
  } else {
    gruppoSelezionato.setAttribute("opacity", 1);
  }
}

setInterval(cambiaOpacitàCasuale, 100);
