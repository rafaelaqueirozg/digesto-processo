import { Paginator } from './paginator';

describe('Paginator', () => {
  let paginator: Paginator<string> = new Paginator(
    Array.from({ length: 100 }).map((item, index) => 'item' + index)
  );

  beforeEach(() => {
    paginator.pagination = {
      page: 1,
      perPage: 5,
      maxVisibleButtons: 5,
      totalPages: Math.ceil(paginator.list.length / 5) || 1,
    };
  });

  it('should totalPages should be 1 if list is empty', () => {
    const paginator2 = new Paginator([]);
    expect(paginator2.pagination.totalPages).toEqual(1);
  });

  it('should fill paginatedList and call getVisibleButtons', () => {
    spyOn(paginator, 'getVisibleButtons');

    paginator.paginate();

    expect(paginator.paginatedList.length).toEqual(5);
    expect(paginator.getVisibleButtons).toHaveBeenCalled();
  });

  describe('nextPage()', () => {
    it('should go to next page', () => {
      spyOn(paginator, 'paginate');

      paginator.nextPage();

      expect(paginator.pagination.page).toEqual(2);
      expect(paginator.paginate).toHaveBeenCalled();
    });

    it('should still in last page if nextPage is called', () => {
      spyOn(paginator, 'paginate');

      paginator.pagination.page = 20;
      paginator.nextPage();

      expect(paginator.pagination.page).toEqual(20);
      expect(paginator.paginate).not.toHaveBeenCalled();
    });
  });

  describe('previousPage()', () => {
    it('should still in first page if previousPage is called', () => {
      spyOn(paginator, 'paginate');

      paginator.previousPage();

      expect(paginator.pagination.page).toEqual(1);
      expect(paginator.paginate).not.toHaveBeenCalled();
    });

    it('should go to previous page', () => {
      spyOn(paginator, 'paginate');

      paginator.pagination.page = 2;
      paginator.previousPage();

      expect(paginator.pagination.page).toEqual(1);
      expect(paginator.paginate).toHaveBeenCalled();
    });
  });

  describe('goTo()', () => {
    it('should still in the current page if page provided is invalid', () => {
      spyOn(paginator, 'paginate');

      paginator.goTo(100);

      expect(paginator.pagination.page).toEqual(1);
      expect(paginator.paginate).not.toHaveBeenCalled();
    });

    it('should go to previous page', () => {
      spyOn(paginator, 'paginate');

      paginator.goTo(15);

      expect(paginator.pagination.page).toEqual(15);
      expect(paginator.paginate).toHaveBeenCalled();
    });
  });

  describe('getVisibleButtons()', () => {
    describe('if maxLeft is lower than 1', () => {
      it('should set [1, 2, 3, 4, 5] to buttonsToShow', () => {
        paginator.getVisibleButtons();
        expect(paginator.buttonsToShow).toEqual([1, 2, 3, 4, 5]);
      });
    });

    describe('if maxRight is greater than totalPages', () => {
      it('should set [16, 17, 18, 19, 20] to buttonsToShow', () => {
        paginator.pagination.page = 19;
        paginator.getVisibleButtons();
        expect(paginator.buttonsToShow).toEqual([16, 17, 18, 19, 20]);
      });

      it('should set [1, 2] to buttonsToShow', () => {
        const paginator2 = new Paginator(
          Array.from({ length: 10 }).map((item, index) => 'item' + index)
        );
        paginator2.getVisibleButtons();
        expect(paginator2.buttonsToShow).toEqual([1, 2]);
      });
    });
  });
});
