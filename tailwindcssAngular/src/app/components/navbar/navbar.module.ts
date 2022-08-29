import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginModule } from '@modals/login/login.module';
import { NavbarComponent } from './navbar.component';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    LoginModule
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
