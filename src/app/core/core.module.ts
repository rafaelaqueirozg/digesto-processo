import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DigestoComponent } from './pages/digesto/digesto.component';

@NgModule({
  declarations: [DigestoComponent, NavbarComponent],
  imports: [CommonModule, RouterModule],
})
export class CoreModule {}
