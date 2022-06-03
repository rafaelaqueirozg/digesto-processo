import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CnjFilterComponent } from './cnj-filter.component';

describe('CnjFilterComponent', () => {
  let component: CnjFilterComponent;
  let fixture: ComponentFixture<CnjFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CnjFilterComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CnjFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('hasCnjErrors()', () => {
    beforeEach(() => {
      component['cnjControl'].reset();
      component['cnjControl'].markAsTouched();
    });

    it('should return true if cnj is touched and value is not provided', () => {
      component['cnjControl'].setValue(null);
      fixture.detectChanges();
      expect(component.hasCnjErrors()).toBeTrue();
    });

    it('should return true if cnj is changed and value is invalid', () => {
      component['cnjControl'].setValue('0002265-89.2011.8.26.00');
      fixture.detectChanges();
      expect(component.hasCnjErrors()).toBeTrue();
    });

    it('should return false if cnj is valid', () => {
      component['cnjControl'].setValue('0002265-89.2011.8.26.0012');
      fixture.detectChanges();
      expect(component.hasCnjErrors()).toBeFalse();
    });
  });

  describe('getCnjErrorMessage()', () => {
    beforeEach(() => {
      component['cnjControl'].reset();
      component['cnjControl'].markAsTouched();
    });

    it('should return message if cnj is not provided', () => {
      component['cnjControl'].setValue(null);
      fixture.detectChanges();
      expect(component.getCnjErrorMessage()).toEqual(
        'Por gentileza, insira o CNJ.'
      );
    });

    it('should return message if cnj is invalid', () => {
      component['cnjControl'].setValue('0002265-89.2011.8.26.00');
      fixture.detectChanges();
      expect(component.getCnjErrorMessage()).toEqual(
        'Por gentileza, insira um CNJ com o formato válido. Exemplo: XXXXXXX-XX.XXXX.X.XX.XXXX'
      );
    });

    it('should return empty message if cnj is valid', () => {
      component['cnjControl'].setValue('0002265-89.2011.8.26.0012');
      fixture.detectChanges();
      expect(component.getCnjErrorMessage()).toEqual('');
    });
  });

  describe('submitForm()', () => {
    beforeEach(() => {
      component['cnjControl'].reset();
      component['cnjControl'].markAsTouched();
    });

    it('should not emit cnj value if is invalid', () => {
      spyOn(component['filterCnj'], 'emit');
      component['cnjControl'].setValue(null);
      component.submitForm();
      expect(component['filterCnj'].emit).not.toHaveBeenCalled();
    });

    it('should emit cnj value if is valid', () => {
      spyOn(component['filterCnj'], 'emit');
      component['cnjControl'].setValue('0002265-89.2011.8.26.0012');
      component.submitForm();
      expect(component['filterCnj'].emit).toHaveBeenCalledWith(
        component['cnjControl'].value
      );
    });
  });
});
