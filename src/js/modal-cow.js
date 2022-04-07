(() => {
    const refs = {
      openModalBtn: document.querySelector("[about-open-btn]"),
      closeModalBtn: document.querySelector("[about-close-btn]"),
      modal: document.querySelector("[modal-about]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();