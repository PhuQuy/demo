import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomizeModalComponent } from './customize-modal.component';

@NgModule({
  declarations: [
    CustomizeModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CustomizeModalComponent]
})
export class CustomizeModalModule { }
