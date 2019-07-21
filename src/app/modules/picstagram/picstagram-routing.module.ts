import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PicstagramComponent } from './picstagram.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', component: PicstagramComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PicstagramRoutingModule { }
