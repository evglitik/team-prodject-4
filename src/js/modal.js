// (() => {
//   const refs = {

    
//     openModalBtn: document.querySelectorAll("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.forEach(btn => { console.log("123sdfhsd"); btn.addEventListener("click", toggleModal) })
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden");
//   }
// })();

(() => {
  const refs = {
    openModalBtn: document.querySelector(".header-btn__on-modal"),
    closeModalBtn: document.querySelector(".header-btn__off-modal"),
    modal: document.querySelector(".header__beackdrop-modal"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("fulse-title");
  }
})();
