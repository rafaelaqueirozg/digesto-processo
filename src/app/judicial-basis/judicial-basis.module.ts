import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CnjFilterComponent } from './components/cnj-filter/cnj-filter.component';
import { MovementsListComponent } from './components/movements-list/movements-list.component';
import { PartsListComponent } from './components/parts-list/parts-list.component';
import { ProcessDetailComponent } from './components/process-detail/process-detail.component';
import { ProcessComponent } from './components/process/process.component';
import { JudicialBasisRoutingModule } from './judicial-basis-routing.module';
import { JudicialBasisComponent } from './judicial-basis.component';
import { AttachmentsListComponent } from './components/attachments-list/attachments-list.component';
import { RelatedProcessListComponent } from './components/related-process-list/related-process-list.component';

@NgModule({
  declarations: [
    JudicialBasisComponent,
    CnjFilterComponent,
    ProcessDetailComponent,
    PartsListComponent,
    ProcessComponent,
    MovementsListComponent,
    AttachmentsListComponent,
    RelatedProcessListComponent,
  ],
  imports: [
    CommonModule,
    JudicialBasisRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class JudicialBasisModule {}
