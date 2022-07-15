import { MainLayoutModule } from './layouts/main-layout/main-layout.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@pages/home/home.module').then(mod => mod.HomeModule)
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking'
    }),
    MainLayoutModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
