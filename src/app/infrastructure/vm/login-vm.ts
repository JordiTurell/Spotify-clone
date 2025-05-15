import { inject, Injectable } from "@angular/core";
import { LoginService } from "@infrastructure/service/login/login.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class LoginVM {

  constructor(private loginservice:LoginService, private router:Router) { 

  }

  login(){
    this.loginservice.login().subscribe({
      next: (response) => {
        window.open(response.url, '_blank');
      },
      error: (error) => {
        console.error('Error during login:', error);
      },
      complete: () => {
        this.router.navigate(['/login/callback']);
      }
    });
  }
}