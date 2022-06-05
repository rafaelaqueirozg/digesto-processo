import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoaderComponent } from './loader.component';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show loader if isLoading is true', () => {
    component.isLoading.next(true);
    fixture.detectChanges();

    component.isLoading.subscribe((isLoading) => {
      expect(isLoading).toBeTrue();
    });

    const loaderElement: HTMLDivElement =
      fixture.nativeElement.querySelector('.overlay');

    expect(loaderElement).toBeDefined();
  });

  it('should hide loader if isLoading is false', () => {
    component.isLoading.next(false);
    fixture.detectChanges();

    component.isLoading.subscribe((isLoading) => {
      expect(isLoading).toBeFalse();
    });

    const loaderElement: HTMLDivElement =
      fixture.nativeElement.querySelector('.overlay');

    expect(loaderElement).toBeNull();
  });
});
