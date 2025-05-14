import { Routes } from '@angular/router';
import { AuthGuard } from '@infrastructure/guard/auth.guard';

export const routes: Routes = [
  { path: '', loadChildren: () => import('@core/core.module').then(m => m.CoreModule), canActivate: [AuthGuard] },
  
  { path: 'login', loadChildren: () => import('@anonymous/anonymous.module').then(m => m.AnonymousModule) }
];
