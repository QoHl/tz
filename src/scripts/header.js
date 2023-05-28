(function () {
  const headerTab = document.querySelector('.header-tab');

  headerTab.addEventListener('click', (event) => {
    const attributeValue = event.target.attributes['data-code'].value;
    if (attributeValue) {
      window.location.hash = attributeValue;
      window.location.reload();
    }
  });
})();
