(function () {
  const scrollTopButton = document.querySelector('.scroll-top');

  document.addEventListener('scroll', () => {
    if (scrollY === 0) {
      scrollTopButton.style.display = 'none';
    } else {
      scrollTopButton.style.display = 'block';
    }
  });

  scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
})();
