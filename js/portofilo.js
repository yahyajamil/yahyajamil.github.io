const portfolio = document.querySelector('.portfolio-container');
const loadBtn = document.querySelector('.load-more-btn');

const showLoader = () => {
  document.getElementById('loader').classList.remove('hidden');
};

const hideLoader = () => {
  document.getElementById('loader').classList.add('hidden');
};

let itemsDisplayed = window.innerWidth < 1200 && window.innerWidth > 768 ? 10 : 9;
let data = [];

// Function to render items
const renderItems = (start, end) => {
  for (let index = start; index < end; index++) {
    if (index >= data.length) break;

    const object = data[index];
    let img = object.img__url;
    let title = object.title;
    let url = object.URL;

    const itemHTML = `
      <div class="frame">
        <div class="head-frame">
          <div class="head-frame-content flex">
            <div class="navigate flex">
              <p><i class="fa fa-arrow-left"></i></p>
              <p><i class="fa fa-arrow-right"></i></p>
            </div>
            <div class="searchbar">
              <p><i class="fa fa-search"></i></p>
            </div>
            <div class="bar-navigate flex">
              <p><i class="fa fa-arrow-down"></i></p>
              <p><i class="fa fa-bars"></i></p>
            </div>
          </div>
        </div>
        <div class="body-frame">
          <div class="portfolio__single-section mix category-a category-b category-c" data-order="1">
            <img class="portfolio__single-section__image img-responsive" src="${img}" alt="${title}">
            <div class="portfolio__single-section__overlay">
              <div class="overlay-content">
                <h4>${title}</h4>
                <p>Developer : Yahya Jamil</p>
              </div>
              <div class="portfolio__single-section__demo flex">
                <a href="${url}"><span class="portfolio__single-section__demo-text">Live Demo</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    portfolio.insertAdjacentHTML('beforeend', itemHTML);
  }
};

// Fetch data and initial render
const fetchDataAndRender = () => {
  fetch('../data/data.json')
    .then(response => response.json())
    .then(fetchedData => {
      data = fetchedData;
      renderItems(0, itemsDisplayed);

      loadBtn.addEventListener('click', () => {
        renderItems(itemsDisplayed, data.length);
        itemsDisplayed = data.length;
        loadBtn.style.display = 'none';
      });

      hideLoader();
    })
    .catch(error => console.error('Error loading JSON:', error));
};

showLoader();
fetchDataAndRender();

// Handle window resize
window.addEventListener('resize', () => {
  const newItemsDisplayed = window.innerWidth < 1200 && window.innerWidth > 768 ? 10 : 9;

  if (newItemsDisplayed !== itemsDisplayed) {
    itemsDisplayed = newItemsDisplayed;
    portfolio.innerHTML = ''; // Clear the existing items
    renderItems(0, itemsDisplayed); // Re-render the items
  }
});
