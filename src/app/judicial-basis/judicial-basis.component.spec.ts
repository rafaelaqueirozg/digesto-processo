import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { JudicialBasisComponent } from './judicial-basis.component';
import { cnjMock } from './mocks/cnj.mock';
import { CnjService } from './services/cnj.service';

describe('JudicialBasisComponent', () => {
  let component: JudicialBasisComponent;
  let fixture: ComponentFixture<JudicialBasisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JudicialBasisComponent],
      providers: [CnjService],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JudicialBasisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getCnj', () => {
    spyOn(component['cnjService'], 'getProcess').and.returnValue(of(cnjMock));
    component.getCnj('5001682-88.2020.8.13.0672');

    component.process$.subscribe((process) => {
      expect(process).toEqual(cnjMock);
    });
  });
});
