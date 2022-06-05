import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigestoComponent } from './core/pages/digesto/digesto.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'digesto' },
  {
    path: 'digesto',
    component: DigestoComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'judicial-basis' },
      {
        path: 'judicial-basis',
        loadChildren: () =>
          import('./judicial-basis/judicial-basis.module').then(
            (m) => m.JudicialBasisModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
