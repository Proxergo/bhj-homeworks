(function() {
    document.getElementById("modal_main").classList.add("modal_active");
}());

let mainModalClose = document.querySelector('.modal__close');
let successModalClose = document.querySelector('.modal__close');
let showSuccess = document.getElementsByClassName('show-success').item(0);

function closeModal() {
  document.querySelector('.modal_active').classList.remove('modal_active');
}

function showModal() {
  close();
  document.getElementById('modal_success').classList.add('modal_active');
}

mainModalClose.onclick = closeModal;
successModalClose.onclick = closeModal;
showSuccess.onclick = showModal;