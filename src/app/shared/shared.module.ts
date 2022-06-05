import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { CnjDirective } from './directives/cnj.directive';
import { CnjPipe } from './pipes/cnj.pipe';

@NgModule({
  declarations: [CnjDirective, CnjPipe, PaginatorComponent],
  imports: [CommonModule],
  exports: [CnjDirective, CnjPipe, PaginatorComponent],
})
export class SharedModule {}
