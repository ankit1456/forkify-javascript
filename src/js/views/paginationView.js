import View from './view';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const currentPage = this._data.page;

    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // page 1 and there are other pages
    if (currentPage === 1 && numPages > 1) {
      return `<button data-goto-page="${
        currentPage + 1
      }" class="btn--inline pagination__btn--next">
                  <span>Page ${currentPage + 1}</span>
                  <svg class="search__icon">
                    <use href="${icons}#icon-arrow-right"></use>
                  </svg>
              </button>`;
    }

    // last page
    if (currentPage === numPages && numPages > 1)
      return `<button data-goto-page="${
        currentPage - 1
      }" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${currentPage - 1}</span>
              </button>`;

    // other page

    if (this._data.page < numPages)
      return `<button data-goto-page="${
        currentPage - 1
      }" class="btn--inline pagination__btn--prev">
                  <svg class="search__icon">
                  <use href="${icons}#icon-arrow-left"></use>
                  </svg>
                  <span>Page ${currentPage - 1}</span>
              </button>
              <button data-goto-page="${
                currentPage + 1
              }" class="btn--inline pagination__btn--next">
                  <span>Page ${currentPage + 1}</span>
                  <svg class="search__icon">
                    <use href="${icons}#icon-arrow-right"></use>
                  </svg>
              </button>`;

    // page 1 and there are no other pages
    return '';
  }

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', e => {
      const clickedbutton = e.target.closest('.btn--inline');

      if (!clickedbutton) return;
      const goToPage = Number(clickedbutton.dataset.gotoPage);

      handler(goToPage);
    });
  }
}

export default new PaginationView();
