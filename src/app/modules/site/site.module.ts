import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module'

import { SiteComponent } from './site.component';
import { SiteLayoutComponent } from './site-layout/site-layout.component';

@NgModule({
  declarations: [
    SiteLayoutComponent,
    SiteComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule
  ]
})
export class SiteModule { }
