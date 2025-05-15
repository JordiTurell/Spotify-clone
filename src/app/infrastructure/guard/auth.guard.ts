import { inject, Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@infrastructure/service/auth/auth.service';
import { map, Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard {

    authService: AuthService = inject(AuthService);
    router: Router = inject(Router);

    constructor(){

    }

    canActivate():Observable<boolean> | boolean{
        return this.CanAccess()
    }

    canMatch():Observable<boolean> | boolean{
        return this.CanAccess()
    }

    CanAccess():Observable<boolean> | boolean {
        const token = this.authService.getToken();
        if (token) {
            this.router.navigate(['/app']);
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }  
}
