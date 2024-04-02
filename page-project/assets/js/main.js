import '../scss/styles.scss'

const title = document.getElementById("description");
const catIcon = document.getElementById("cat-icon");

catIcon.addEventListener("click", () => {

  title.textContent = "This website is purrfect!";

  setTimeout(() => {
    title.textContent = "Coded by Darek Duda";
  }, 1000);
});