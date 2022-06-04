import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthorizationInterceptor } from './interceptors/authorization.interceptor';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { DigestoComponent } from './pages/digesto/digesto.component';

@NgModule({
  declarations: [DigestoComponent, NavbarComponent, LoaderComponent],
  imports: [CommonModule, RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
  exports: [LoaderComponent],
})
export class CoreModule {}
