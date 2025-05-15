import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '@environments/environment';
import { AuthService } from '@infrastructure/service/auth/auth.service';
import { LoginService } from '@infrastructure/service/login/login.service';
import { CallbackVM } from '@infrastructure/vm/callback-vm';



@Component({
  selector: 'app-callback-login',
  imports: [],
  templateUrl: './callback-login.component.html',
  styleUrl: './callback-login.component.css'
})
export class CallbackLoginComponent implements OnInit {
  
  callbackvm: CallbackVM = inject(CallbackVM);

  constructor() { }

  ngOnInit(): void{
    this.callbackvm.callback();
  }

}
