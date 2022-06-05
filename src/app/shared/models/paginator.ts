export class Paginator<T> {
  paginatedList: T[] = [];

  pagination = {
    page: 1,
    perPage: 5,
    maxVisibleButtons: 5,
    totalPages: Math.ceil(this.list.length / 5) || 1,
  };

  buttonsToShow: number[] = [];

  constructor(public list: T[]) {}

  paginate(): void {
    const page = this.pagination.page - 1;
    const start = page * this.pagination.perPage;
    const end = start + this.pagination.perPage;

    this.paginatedList = this.list.slice(start, end);
    this.getVisibleButtons();
  }

  nextPage(): void {
    const isLastPage = this.pagination.page === this.pagination.totalPages;
    if (isLastPage) return;

    this.pagination.page++;
    this.paginate();
  }

  previousPage(): void {
    const isFirstPage = this.pagination.page === 1;
    if (isFirstPage) return;

    this.pagination.page--;
    this.paginate();
  }

  goTo(page: number): void {
    if (page > 0 && page <= this.pagination.totalPages) {
      this.pagination.page = page;
      this.paginate();
    }
  }

  getVisibleButtons(): void {
    const { maxVisibleButtons, totalPages } = this.pagination;

    let maxLeft = this.pagination.page - Math.floor(maxVisibleButtons / 2);
    let maxRight = this.pagination.page + Math.floor(maxVisibleButtons / 2);

    if (maxLeft < 1) {
      maxLeft = 1;
      maxRight = maxVisibleButtons;
    }

    if (maxRight > totalPages) {
      maxLeft = totalPages - (maxVisibleButtons - 1);
      maxRight = totalPages;

      if (maxLeft < 1) {
        maxLeft = 1;
      }
    }

    const buttons = [];

    for (let page = maxLeft; page <= maxRight; page++) {
      buttons.push(page);
    }

    this.buttonsToShow = buttons;
  }
}
