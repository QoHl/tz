(function () {
  const productListTitle = document.querySelector('.product-list-title');
  const productList = document.querySelector('.product-list');

  const modalContainer = document.querySelector('.modal-container');
  const modalContent = document.querySelector('.modal-content');

  const productType = window.location.hash.slice(1);

  const sedanProducts = [
    {
      title: 'volkswagen polo',
      img: '../src/assets/images/sedan.jpg',
      createDate: '2023-05-28',
    },
    {
      title: 'volkswagen polo',
      img: '../src/assets/images/sedan.jpg',
      createDate: '2021-05-28',
    },
    {
      title: 'volkswagen polo',
      img: '../src/assets/images/sedan.jpg',
      createDate: '2023-05-28',
    },
    {
      title: 'volkswagen polo',
      img: '../src/assets/images/sedan.jpg',
      createDate: '2023-05-28',
    },
    {
      title: 'volkswagen polo',
      img: '../src/assets/images/sedan.jpg',
      createDate: '2023-05-28',
    },
    {
      title: 'volkswagen polo',
      img: '../src/assets/images/sedan.jpg',
      createDate: '2023-05-28',
    },
    {
      title: 'volkswagen polo',
      img: '../src/assets/images/sedan.jpg',
      createDate: '2023-05-28',
    },
    {
      title: 'volkswagen polo',
      img: '../src/assets/images/sedan.jpg',
      createDate: '2023-05-28',
    },
    {
      title: 'volkswagen polo',
      img: '../src/assets/images/sedan.jpg',
      createDate: '2023-05-28',
    },
    {
      title: 'volkswagen polo',
      img: '../src/assets/images/sedan.jpg',
      createDate: '2023-05-28',
    },
    {
      title: 'volkswagen polo',
      img: '../src/assets/images/sedan.jpg',
      createDate: '2023-01-01',
    },
  ];
  const hatchbackProducts = [
    {
      title: 'mazda',
      img: '../src/assets/images/hatchback.jpg',
      createDate: '2023-05-28',
    },
    {
      title: 'mazda',
      img: '../src/assets/images/hatchback.jpg',
      createDate: '2021-05-28',
    },
    {
      title: 'mazda',
      img: '../src/assets/images/hatchback.jpg',
      createDate: '2023-05-28',
    },
    {
      title: 'mazda',
      img: '../src/assets/images/hatchback.jpg',
      createDate: '2023-05-28',
    },
    {
      title: 'mazda',
      img: '../src/assets/images/hatchback.jpg',
      createDate: '2023-05-28',
    },
    {
      title: 'mazda',
      img: '../src/assets/images/hatchback.jpg',
      createDate: '2023-05-28',
    },
    {
      title: 'mazda',
      img: '../src/assets/images/hatchback.jpg',
      createDate: '2023-05-28',
    },
    {
      title: 'mazda',
      img: '../src/assets/images/hatchback.jpg',
      createDate: '2023-05-28',
    },
    {
      title: 'mazda',
      img: '../src/assets/images/hatchback.jpg',
      createDate: '2023-05-28',
    },
    {
      title: 'mazda',
      img: '../src/assets/images/hatchback.jpg',
      createDate: '2023-05-28',
    },
    {
      title: 'mazda',
      img: '../src/assets/images/hatchback.jpg',
      createDate: '2023-01-01',
    },
    {
      title: 'mazda',
      img: '../src/assets/images/hatchback.jpg',
      createDate: '2023-01-01',
    },
  ];
  const universalProducts = [
    {
      title: 'chevrolete',
      img: '../src/assets/images/universal.jpg',
      createDate: '2023-05-28',
    },
    {
      title: 'chevrolete',
      img: '../src/assets/images/universal.jpg',
      createDate: '2021-05-28',
    },
    {
      title: 'chevrolete',
      img: '../src/assets/images/universal.jpg',
      createDate: '2023-05-28',
    },
    {
      title: 'chevrolete',
      img: '../src/assets/images/universal.jpg',
      createDate: '2023-05-28',
    },
    {
      title: 'chevrolete',
      img: '../src/assets/images/universal.jpg',
      createDate: '2023-05-28',
    },
    {
      title: 'chevrolete',
      img: '../src/assets/images/universal.jpg',
      createDate: '2023-05-28',
    },
    {
      title: 'chevrolete',
      img: '../src/assets/images/universal.jpg',
      createDate: '2023-05-28',
    },
    {
      title: 'chevrolete',
      img: '../src/assets/images/universal.jpg',
      createDate: '2023-05-28',
    },
    {
      title: 'chevrolete',
      img: '../src/assets/images/universal.jpg',
      createDate: '2023-05-28',
    },
    {
      title: 'chevrolete',
      img: '../src/assets/images/universal.jpg',
      createDate: '2023-05-28',
    },
    {
      title: 'chevrolete',
      img: '../src/assets/images/universal.jpg',
      createDate: '2023-01-01',
    },
    {
      title: 'chevrolete',
      img: '../src/assets/images/universal.jpg',
      createDate: '2023-01-01',
    },
    {
      title: 'chevrolete',
      img: '../src/assets/images/universal.jpg',
      createDate: '2023-01-01',
    },
  ];

  if (productType) {
    render(productListTitle, generateTitle());
    render(productList, generateCards(productType));

    const productBuyButton = document.querySelectorAll('.product-buy-button');
    productBuyButton.forEach((e) =>
      e.addEventListener('click', () => {
        modalContainer.style.display = 'flex';

        modalContent.innerHTML += generateForm();

        const formCloseButton = document.querySelector('.form-close');
        const formContainer = document.querySelector('.form-container');

        formCloseButton.addEventListener('click', () => {
          modalContainer.style.display = 'none';
          modalContent.innerHTML = '';
        });

        formContainer.addEventListener('submit', (e) => {
          e.preventDefault();

          const count = document.querySelector('.count-input').value;

          let color = '';
          if (document.getElementById('color1').checked) {
            color = document.getElementById('color1').value;
          } else if (document.getElementById('color2').checked) {
            color = document.getElementById('color2').value;
          } else if (document.getElementById('color3').checked) {
            color = document.getElementById('color3').value;
          }

          const comment = document.querySelector('.form-comment-textarea').value;

          alert(
            !count || !color || !comment
              ? 'Поля не заполнены'
              : `Произведена покупка в количестве: ${count}, цвет: ${color}, комментарий: ${comment}`
          );
        });
      })
    );
  }

  function getDayInfo(date) {
    const dayOfTheWeekHash = new Map([
      [0, 'Воскресенье'],
      [1, 'Понедельник'],
      [2, 'Вторник'],
      [3, 'Среда'],
      [4, 'Четверг'],
      [5, 'Пятница'],
      [6, 'Суббота'],
    ]);

    const formattedMothsHash = new Map([
      [0, 'Января'],
      [1, 'Февраля'],
      [2, 'Марта'],
      [3, 'Апреля'],
      [4, 'Мая'],
      [5, 'Июня'],
      [6, 'Июля'],
      [7, 'Августа'],
      [8, 'Сентября'],
      [9, 'Октября'],
      [10, 'Ноября'],
      [11, 'Декабря'],
    ]);

    const getWeek = (dateParam) => {
      const onejan = new Date(dateParam.getFullYear(), 0, 1);
      return Math.ceil(((dateParam - onejan) / 86400000 + onejan.getDay() + 1) / 7);
    };

    const dt = new Date(date);

    const dayOfTheWeek = dayOfTheWeekHash.get(dt.getDay());
    const week = getWeek(dt);
    const month = formattedMothsHash.get(dt.getMonth());
    const year = dt.getFullYear();

    return `${dayOfTheWeek}, ${week} неделя ${month} ${year} года`;
  }

  function generateForm() {
    return `
      <form class="form-container">
        <div>
          <div class="form-field form-count">
            <span class="form-label">Количество: </span>
            <input type="number" class="count-input" style="width: 200px" min="1" oninput="this.value = Math.abs(this.value)" />
          </div>
          <div class="form-field form-color">
            <span class="form-label">Цвет:</span>
            <div>
              <input type="radio" id="color1" name="color" value="Белый" />
              <label for="color1">Белый</label>
              <input type="radio" id="color2" name="color" value="Черный" />
              <label for="color2">Черный</label>
              <input type="radio" id="color3" name="color" value="Желтый" />
              <label for="color3">Желтый</label>
            </div>
          </div>
          <div class="form-field form-comment">
            <span class="form-label">Комментарий: </span>
            <textarea class="form-comment-textarea" style="resize: none; width: 200px" maxlength="2000"></textarea>
          </div>
        </div>
        <div class="form-buttons">
          <button class="form-close">Закрыть</button>
          <button type="submit" class="form-buy">Купить</button>
        </div>
      </form>
    `;
  }

  function generateTitle() {
    let title = '';

    switch (productType) {
      case 'sedan': {
        title = 'Седаны';
        break;
      }
      case 'hatchback': {
        title = 'Хэтчбеки';
        break;
      }
      case 'universal': {
        title = 'Универсалы';
        break;
      }
    }

    return `
      <h2 class="product-title">${title}</h2>
    `;
  }

  function generateCards(productType) {
    let productsArray = [];

    switch (productType) {
      case 'sedan': {
        productsArray = sedanProducts;
        break;
      }
      case 'hatchback': {
        productsArray = hatchbackProducts;
        break;
      }
      case 'universal': {
        productsArray = universalProducts;
        break;
      }
    }

    return productsArray.reduce((prev, curr) => prev + generateCardElement(curr), '');
  }

  function generateCardElement({ title, img, createDate }) {
    const date = getDayInfo(createDate);

    return `
      <div class="product-card">
        <h3 class="product-title">${title}</h3>
        <img
          src="${img}"
          width="400px"
          class="product-img"
        />
        <div class="product-footer">
          <span class="product-add-date">${date}</span>
          <button type="button" class="product-buy-button">Купить</button>
        </div>
      </div>
    `;
  }

  function render(wrapper, htmlText) {
    wrapper.innerHTML += htmlText;
  }
})();
