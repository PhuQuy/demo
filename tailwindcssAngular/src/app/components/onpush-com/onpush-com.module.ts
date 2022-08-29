import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnpushComComponent } from './onpush-com.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OnpushComComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [OnpushComComponent]
})
export class OnpushComModule { }
