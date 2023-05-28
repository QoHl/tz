(function () {
  const headerTab = document.querySelector('.footer-link-list');

  headerTab.addEventListener('click', (event) => {
    const attributeValue = event.target.attributes['data-code'].value;
    if (attributeValue) {
      window.location.hash = attributeValue;
      window.location.reload();
    }
  });
})();
