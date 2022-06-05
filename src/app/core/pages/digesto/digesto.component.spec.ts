import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DigestoComponent } from './digesto.component';

describe('DigestoComponent', () => {
  let component: DigestoComponent;
  let fixture: ComponentFixture<DigestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DigestoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
