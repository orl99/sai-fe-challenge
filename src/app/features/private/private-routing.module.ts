import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { PrivateComponent } from './private.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      {
        path: 'articles',
        loadChildren: () => import('./pages/articles/articles.module').then(m => m.ArticlesModule),
        canActivate: [AuthGuard]
      },
      { path: '', redirectTo: 'articles', pathMatch: 'full' }
    ],
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '', },
  { path: '', redirectTo: '', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
