import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CnjDirective } from './cnj.directive';

@Component({
  template: `<input type="text" cnj />`,
})
class TestCnjComponent {}

describe('Directive: Cnj', () => {
  let component: TestCnjComponent;
  let fixture: ComponentFixture<TestCnjComponent>;
  let debugElement: DebugElement;
  let inputElement: HTMLInputElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestCnjComponent, CnjDirective],
    });
    fixture = TestBed.createComponent(TestCnjComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.css('input'));
    inputElement = debugElement.nativeElement;
  });

  it('should accepts only number', () => {
    inputElement.value = 'A*/ads2';
    debugElement.triggerEventHandler('input', new InputEvent('input'));
    expect(inputElement.value).toBe('2');
  });

  it('should transform value to CNJ_UNFORMATTED pattern', () => {
    inputElement.value = '50016828820208130672';
    debugElement.triggerEventHandler('input', new InputEvent('input'));
    expect(inputElement.value).toBe('5001682-88.2020.8.13.0672');
  });

  it('should not call transformToCNJ() when is deleting value', () => {
    inputElement.value = '50016828820208130672';
    debugElement.triggerEventHandler('input', new InputEvent('input'));

    debugElement.triggerEventHandler(
      'input',
      new InputEvent('input', {
        inputType: 'deleteContentBackward',
      })
    );

    expect().nothing();
  });

  describe('transformToCNJ()', () => {
    describe('if value is greather than MAX_LENGTH', () => {
      it('should stop event', () => {
        inputElement.value = '5001682-88.2020.8.13.0672445';
        debugElement.triggerEventHandler('input', new InputEvent('input'));
        expect(inputElement.value).toBe('5001682-88.2020.8.13.0672');
      });
    });

    describe('if value is lower or equal 7', () => {
      it('should replace with CNJ_FIRST_GROUP', () => {
        inputElement.value = '5001682';
        debugElement.triggerEventHandler('input', new InputEvent('input'));
        expect(inputElement.value).toBe('5001682-');
      });
    });

    describe('if value is lower or equal 9', () => {
      it('should replace with CNJ_SECOND_GROUP', () => {
        inputElement.value = '5001682-88';
        debugElement.triggerEventHandler('input', new InputEvent('input'));
        expect(inputElement.value).toBe('5001682-88.');
      });
    });

    describe('if value is lower or equal 13', () => {
      it('should replace with CNJ_THIRD_GROUP', () => {
        inputElement.value = '5001682-88.2020';
        debugElement.triggerEventHandler('input', new InputEvent('input'));
        expect(inputElement.value).toBe('5001682-88.2020.');
      });
    });

    describe('if value is lower or equal 14', () => {
      it('should replace with CNJ_FORTH_GROUP', () => {
        inputElement.value = '5001682-88.2020.8';
        debugElement.triggerEventHandler('input', new InputEvent('input'));
        expect(inputElement.value).toBe('5001682-88.2020.8.');
      });
    });

    describe('if value is lower or equal 16', () => {
      it('should replace with CNJ_FIFTH_GROUP', () => {
        inputElement.value = '5001682-88.2020.8.13';
        debugElement.triggerEventHandler('input', new InputEvent('input'));
        expect(inputElement.value).toBe('5001682-88.2020.8.13.');
      });
    });

    describe('if value is lower or equal 20', () => {
      it('should replace with CNJ_UNFORMATTED', () => {
        inputElement.value = '5001682-88.2020.8.13.0672';
        debugElement.triggerEventHandler('input', new InputEvent('input'));
        expect(inputElement.value).toBe('5001682-88.2020.8.13.0672');
      });
    });
  });
});
