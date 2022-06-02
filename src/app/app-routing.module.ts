import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigestoComponent } from './core/pages/digesto/digesto.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'digesto' },
  {
    path: 'digesto',
    component: DigestoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
