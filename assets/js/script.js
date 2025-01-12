document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const navSection = document.getElementById("nav");
  const button = document.querySelector("#navbar button");
  const offset = 150; // Modificato l'offset a 150px

  window.addEventListener("scroll", function () {
    const navBottom = navSection.getBoundingClientRect().bottom;

    if (navBottom <= offset) {
      navbar.style.backgroundColor = "#ffffff"; // Cambia colore della navbar
      navbar.classList.remove("hidden"); // Mostra navbar
      button.style.backgroundColor = "#28a745"; // Cambia colore del bottone
      button.style.color = "#ffffff"; // Cambia colore del testo del bottone
    } else {
      navbar.style.backgroundColor = "#ffc017"; // Ripristina colore della navbar
      navbar.classList.add("hidden"); // Nascondi navbar
      button.style.backgroundColor = ""; // Ripristina colore del bottone
      button.style.color = ""; // Ripristina colore del testo del bottone
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
