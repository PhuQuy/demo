import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { RouterModule, Routes } from '@angular/router';
import { NormalComModule } from '@components/normal-com/normal-com.module';
import { OnpushComModule } from '@components/onpush-com/onpush-com.module';

const routes: Routes = [
  {
    path: '',
    component: TestComponent,
  }
];

@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NormalComModule,
    OnpushComModule
  ]
})
export class TestModule { }
