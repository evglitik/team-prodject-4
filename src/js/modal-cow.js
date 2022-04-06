(() => {
    const refs = {
      openModalBtn: document.querySelector("[modal-open-btn]"),
      closeModalBtn: document.querySelector("[modal-close-btn]"),
      modal: document.querySelector("[modal-about]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();