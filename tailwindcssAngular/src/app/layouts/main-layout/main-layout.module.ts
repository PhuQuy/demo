import { NavbarModule } from './../../components/navbar/navbar.module';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NavbarModule
  ]
})
export class MainLayoutModule { }
