import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RelatedProcessListComponent } from './related-process-list.component';

describe('RelatedProcessListComponent', () => {
  let component: RelatedProcessListComponent;
  let fixture: ComponentFixture<RelatedProcessListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RelatedProcessListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedProcessListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
