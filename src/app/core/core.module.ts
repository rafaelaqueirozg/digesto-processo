import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthorizationInterceptor } from './interceptors/authorization.interceptor';
import { DigestoComponent } from './pages/digesto/digesto.component';

@NgModule({
  declarations: [DigestoComponent, NavbarComponent],
  imports: [CommonModule, RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
