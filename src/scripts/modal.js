(function () {
  const closeButton = document.querySelector('.close-button');
  const modalContainer = document.querySelector('.modal-container');

  closeButton.addEventListener('click', () => {
    modalContainer.style.display = 'none';
  });
})();
