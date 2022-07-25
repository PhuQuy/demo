import { CustomizeModalModule } from './../customize-modal/customize-modal.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    CustomizeModalModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
