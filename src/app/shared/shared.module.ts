import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CnjDirective } from './directives/cnj.directive';

@NgModule({
  declarations: [CnjDirective],
  imports: [CommonModule],
  exports: [CnjDirective],
})
export class SharedModule {}
