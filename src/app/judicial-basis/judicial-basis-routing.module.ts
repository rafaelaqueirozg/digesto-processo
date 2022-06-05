import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JudicialBasisComponent } from './judicial-basis.component';

const routes: Routes = [{ path: '', component: JudicialBasisComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JudicialBasisRoutingModule { }
