import { inject, Injectable } from "@angular/core";
import { LoginService } from "@infrastructure/service/login/login.service";
import { Router } from "@angular/router";
import { AuthService } from "@infrastructure/service/auth/auth.service";

@Injectable({
  providedIn: 'root'
})

export class CallbackVM {

  authservice: AuthService = inject(AuthService);
  loginservice: LoginService = inject(LoginService);
  router:Router = inject(Router);
  
  constructor() { 

  }

  callback(){
    this.loginservice.callback().subscribe((response) =>{
      this.authservice.setToken(response.token);
      this.router.navigate(['/']);
    })
  }
}