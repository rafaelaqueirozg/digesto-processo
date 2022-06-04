import { TestBed } from '@angular/core/testing';
import { tap } from 'rxjs';
import { LoaderService } from './loader.service';

describe('LoaderService', () => {
  let service: LoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set true in isLoading when show() is called', () => {
    spyOn(service.isLoading, 'next');

    service.show();
    service.isLoading.pipe(
      tap((isLoading) => {
        expect(isLoading).toBeTrue();
      })
    );

    expect(service.isLoading.next).toHaveBeenCalledOnceWith(true);
  });

  it('should set false in isLoading when show() is called', () => {
    spyOn(service.isLoading, 'next');

    service.hide();
    service.isLoading.pipe(
      tap((isLoading) => {
        expect(isLoading).toBeFalse();
      })
    );

    expect(service.isLoading.next).toHaveBeenCalledOnceWith(false);
  });
});
