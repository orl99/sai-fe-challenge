import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {
      path: '',
      component: PublicComponent,
      children: [
          { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
          { path: '**', redirectTo: 'login', },
          { path: '', redirectTo: 'login', pathMatch: 'full' }
      ]
  },
  { path: '**', redirectTo: '', },
  { path: '', redirectTo: '', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {
  constructor(){
  }
}
