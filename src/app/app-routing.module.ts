import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth-guard';

const routes: Route[] = [

  
  {
    path : 'auth',
    loadChildren : () => import('./components/modules/auth/auth.module').then(m => m.AuthModule)
  },
  
  {
    path : 'user',
    loadChildren : () => import('./components/modules/user/user.module').then(m => m.UserModule),
    canActivate: [AuthGuard]
  },

  // {
  //   path : '**',
  //   redirectTo : 'auth/login',
  // }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
