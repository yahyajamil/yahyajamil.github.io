const portfolio = document.querySelector('.portfolio-container');
const loadBtn = document.querySelector('.load-more-btn');

const showLoader = () => {
    document.getElementById('loader').classList.remove('hidden');
};

const hideLoader = () => {
    document.getElementById('loader').classList.add('hidden');
};

showLoader();

let itemsDisplayed = 9;

fetch('../data/data.json')
    .then(response => response.json())
    .then(data => {

        const renderItems = (start, end) => {
            let currentRow;
            for (let index = start; index < end; index++) {
                if (index >= data.length) break;

                const object = data[index];
                if (index % 3 === 0) {
                    currentRow = document.createElement('div');
                    currentRow.classList.add('row', 'gutters-40');
                    portfolio.appendChild(currentRow);
                }

                let img = object.img__url;
                let title = object.title;
                let url = object.URL;

                const itemHTML = `
                    <div class="col-md-4">
                      <div class="portfolio__single-section mix category-a category-b category-c" data-order="1">
                        <img class="portfolio__single-section__image img-responsive" src="${img}" alt="${title}">
                        <div class="portfolio__single-section__overlay">
                          <div class="overlay-content">
                            <h4>${title}</h4>
                            <p>Developer : Yahya Jamil</p>
                          </div>
                          <div class="portfolio__single-section__demo">
                            <a href="${url}"><span class="portfolio__single-section__demo-text">Live Demo</span></a>
                          </div>
                        </div>
                      </div>
                    </div>
                `;

                currentRow.insertAdjacentHTML('beforeend', itemHTML);
            }
        };

        renderItems(0, itemsDisplayed);

        loadBtn.addEventListener('click', () => {
            renderItems(itemsDisplayed, data.length);
            itemsDisplayed = data.length;
            loadBtn.style.display = 'none';
        });

        hideLoader();
    })
    .catch(error => console.error('Error loading JSON:', error));
