import { Directive, ElementRef, HostListener } from '@angular/core';
import {
  CNJ_FIFTH_GROUP,
  CNJ_FIRST_GROUP,
  CNJ_FORTH_GROUP,
  CNJ_SECOND_GROUP,
  CNJ_THIRD_GROUP,
  CNJ_UNFORMATTED,
} from '../utils/cnj-format';

@Directive({
  selector: 'input[cnj]',
})
export class CnjDirective {
  private MAX_LENGTH = 25;

  constructor(private element: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: InputEvent): void {
    if (event.inputType === 'deleteContentBackward') {
      return;
    }

    this.element.nativeElement.value = this.transformToCNJ(
      this.element.nativeElement.value,
      event
    );
  }

  private transformToCNJ(value: string, event: InputEvent): string {
    let newValue: string = value.replace(/\D/g, '');

    if (value.length > this.MAX_LENGTH) {
      event.stopImmediatePropagation();
      return value.substring(0, this.MAX_LENGTH - 1);
    }

    if (newValue.length <= 7) {
      return newValue.replace(CNJ_FIRST_GROUP.regex, CNJ_FIRST_GROUP.replace);
    } else if (newValue.length <= 10) {
      return newValue.replace(CNJ_SECOND_GROUP.regex, CNJ_SECOND_GROUP.replace);
    } else if (newValue.length <= 15) {
      return newValue.replace(CNJ_THIRD_GROUP.regex, CNJ_THIRD_GROUP.replace);
    } else if (newValue.length <= 17) {
      return newValue.replace(CNJ_FORTH_GROUP.regex, CNJ_FORTH_GROUP.replace);
    } else if (newValue.length <= 20) {
      return newValue.replace(CNJ_FIFTH_GROUP.regex, CNJ_FIFTH_GROUP.replace);
    } else if (newValue.length <= 25) {
      return newValue.replace(CNJ_UNFORMATTED.regex, CNJ_UNFORMATTED.replace);
    } else {
      return '';
    }
  }
}
