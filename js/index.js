document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  const closeMenuButton = document.getElementById("close-menu");
  const menuToggle = document.getElementById("menu-toggle");

  menuToggle.addEventListener("click", () => {
    menu.classList.remove("translate-x-full");
    menu.classList.remove("hidden");
  });

  closeMenuButton.addEventListener("click", () => {
    setTimeout(() => {
      menu.classList.add("hidden");
    }, 300);
  });
});
