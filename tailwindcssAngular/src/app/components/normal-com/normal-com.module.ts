import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NormalComComponent } from './normal-com.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NormalComComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [NormalComComponent]
})
export class NormalComModule { }
