const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
  modeButton.classList.toggle("darkMode");
  main.classList.toggle("darkMode");
});
