import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'public',
    loadChildren: () =>  import('./features/public/public.module').then(m => m.PublicModule)
  },
  {
    path: 'private',
    loadChildren: () => import('./features/private/private.module').then(m => m.PrivateModule),
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: 'public', },
  { path: '', redirectTo: 'public', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
