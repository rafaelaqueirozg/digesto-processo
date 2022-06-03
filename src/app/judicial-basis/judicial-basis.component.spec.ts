import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudicialBasisComponent } from './judicial-basis.component';

describe('JudicialBasisComponent', () => {
  let component: JudicialBasisComponent;
  let fixture: ComponentFixture<JudicialBasisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JudicialBasisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JudicialBasisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
