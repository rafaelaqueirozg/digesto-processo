import { Pipe, PipeTransform } from '@angular/core';
import { CNJ_UNFORMATTED } from '../utils/cnj-format';

@Pipe({
  name: 'cnj',
})
export class CnjPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(CNJ_UNFORMATTED.regex, CNJ_UNFORMATTED.replace);
  }
}
