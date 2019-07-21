import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module'

import { SiteComponent } from './site.component';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { SiteHeaderComponent } from './site-layout/site-header/site-header.component';
import { SiteFooterComponent } from './site-layout/site-footer/site-footer.component';
import { SiteNavComponent } from './site-layout/site-nav/site-nav.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    SiteLayoutComponent,
    SiteComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    SiteNavComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule
  ]
})
export class SiteModule { }
