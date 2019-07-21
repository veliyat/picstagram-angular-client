import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PicstagramRoutingModule } from './picstagram-routing.module';

import { PicstagramComponent } from './picstagram.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';

@NgModule({
  declarations: [
    AppLayoutComponent,
    PicstagramComponent
  ],
  imports: [
    CommonModule,
    PicstagramRoutingModule
  ]
})
export class PicstagramModule { }
