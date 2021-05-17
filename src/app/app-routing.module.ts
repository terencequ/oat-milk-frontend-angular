import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AntiAuthGuardService} from './auth/anti-auth-guard.service';
import {AuthGuardService} from './auth/auth-guard.service';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [AntiAuthGuardService]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'character-sheet',
    loadChildren: () => import('./character-sheet/character-sheet.module').then(m => m.CharacterSheetModule),
    canActivate: [AuthGuardService]
  },
  {path: '**', redirectTo: 'auth/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
