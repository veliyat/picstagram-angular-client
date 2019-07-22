import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { SiteComponent } from './site.component';
import { AccountsLayoutComponent } from './site-layout/accounts-layout/accounts-layout.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      { path: '', component: SiteComponent },
      {
        path: 'accounts', component: AccountsLayoutComponent, children: [
          { path:'login', component: LoginComponent },
          { path: 'emailsignup', component: RegisterComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
