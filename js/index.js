const menuToggle = document.getElementByI("menu-toggle");
const menu = document.getElementById("menu");
const closeMenu = document.getElementById("close-menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

closeMenu.addEventListener("click", () => {
  menu.classList.add("hidden");
});
