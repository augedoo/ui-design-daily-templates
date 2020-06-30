// UI Var
const UIshowModalBtn = document.querySelector('.show-modal-btn');
const UIModal = document.querySelector('#modal');

UIshowModalBtn.addEventListener('click', showModal);
document.addEventListener('click', closeModal);

function showModal(e) {
  UIModal.classList.toggle('modal-open');
  e.preventDefault();
}

function closeModal(e) {
  if (!e.target.closest('#modal')) {
    UIModal.classList.toggle('modal-close');
  }
  e.preventDefault();
}
