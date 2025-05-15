import { Routes } from '@angular/router';
import { AuthGuard } from '@infrastructure/guard/auth.guard';

export const routes: Routes = [
   { path: '', redirectTo: 'login', pathMatch: 'full' }, 
    { path: 'login', loadChildren: () => import('@anonymous/anonymous.module').then(m => m.AnonymousModule) },
    { path: 'app', loadChildren: () => import('@core/core.module').then(m => m.CoreModule) },
    { path: '**', redirectTo: 'login' }
];
