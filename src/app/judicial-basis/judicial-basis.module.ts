import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CnjFilterComponent } from './components/cnj-filter/cnj-filter.component';
import { JudicialBasisRoutingModule } from './judicial-basis-routing.module';
import { JudicialBasisComponent } from './judicial-basis.component';

@NgModule({
  declarations: [JudicialBasisComponent, CnjFilterComponent],
  imports: [
    CommonModule,
    JudicialBasisRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class JudicialBasisModule {}
