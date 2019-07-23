import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => {
      //TODO: This has to be enhanced, currently this dynamic module loading is not up to the mark.
      if (localStorage.getItem('user'))
        return import('./modules/picstagram/picstagram.module').then(mod => mod.PicstagramModule)
      else
        return import('./modules/site/site.module').then(mod => mod.SiteModule)
    }
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
