import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CNJ_FORMATTED } from 'src/app/shared/utils/cnj-format';

@Component({
  selector: 'app-cnj-filter',
  templateUrl: './cnj-filter.component.html',
  styleUrls: ['./cnj-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CnjFilterComponent {
  form: FormGroup = this.buildForm();

  @Output()
  private filterCnj = new EventEmitter<string>();

  private get cnjControl() {
    return this.form.get('cnj')!;
  }

  constructor(private formBuilder: FormBuilder) {}

  submitForm(): void {
    if (this.cnjControl.valid) {
      this.filterCnj.emit(this.cnjControl.value);
      this.form.reset();
    }
  }

  hasCnjErrors(): boolean {
    const wasControlChanged =
      this.cnjControl.touched || !this.cnjControl.pristine;
    return Boolean(wasControlChanged && this.cnjControl.errors);
  }

  getCnjErrorMessage(): string {
    if (this.cnjControl.hasError('required')) {
      return 'Por gentileza, insira o CNJ.';
    }

    if (this.cnjControl.hasError('pattern')) {
      return 'Por gentileza, insira um CNJ com o formato válido. Exemplo: XXXXXXX-XX.XXXX.X.XX.XXXX';
    }

    return '';
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      cnj: [
        null,
        [Validators.required, Validators.pattern(CNJ_FORMATTED.regex)],
      ],
    });
  }
}
