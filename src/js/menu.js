
(() => {
  const refs = {
    openMenuBtn: document.querySelector(".menu-open-btn"),
    closeMenuBtn: document.querySelector(".menu-close-btn"),
    closeMenuBtn1: document.querySelector(".menu-close-btn1"),
    closeMenuBtn2: document.querySelector(".menu-close-btn2"),
    closeMenuBtn3: document.querySelector(".menu-close-btn3"),
    closeMenuBtn4: document.querySelector(".menu-close-btn4"),
    menu: document.querySelector(".mob-menu-header"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn1.addEventListener("click", toggleMenu);
  refs.closeMenuBtn2.addEventListener("click", toggleMenu);
  refs.closeMenuBtn3.addEventListener("click", toggleMenu);
  refs.closeMenuBtn4.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }
})();