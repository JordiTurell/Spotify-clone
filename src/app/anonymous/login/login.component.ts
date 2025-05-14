import { Component, inject } from '@angular/core';
import { LoginVM } from '@infrastructure/vm/login-vm';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginvm: LoginVM = inject(LoginVM);
  
  constructor() {

  }

  login(){
    this.loginvm.login();
  }
}
