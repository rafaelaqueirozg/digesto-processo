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
    debugElement.triggerEventHandler('input', {});
    expect(inputElement.value).toBe('2');
  });

  it('should transform value to CNJ_UNFORMATTED pattern', () => {
    inputElement.value = '50016828820208130672';
    debugElement.triggerEventHandler('input', {});
    expect(inputElement.value).toBe('5001682-88.2020.8.13.0672');
  });
});
