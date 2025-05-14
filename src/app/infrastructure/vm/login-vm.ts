import { inject, Injectable } from "@angular/core";
import { LoginService } from "@infrastructure/service/login/login.service";
import { environment as config } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})

export class LoginVM {
 
 sopty_url = `https://accounts.spotify.com/authorize?client_id=${config.clientId}&response_type=code&redirect_uri=${config.redirect_uri}`;

  loginservice: LoginService = inject(LoginService);

  constructor() { 

  }

  login(){
    window.location.href = this.sopty_url;
  }
}