import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginVM } from '@infrastructure/vm/login-vm';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private loginvm = inject(LoginVM);
  private router = inject(Router);
  
  login(){
    this.loginvm.login();
  }
}
