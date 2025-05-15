import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '@models/login';
import { environment } from '@environments/environment';
import { Token } from '@models/token';

const api = environment.api;
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private http:HttpClient = inject(HttpClient);

  constructor() { }

  login():Observable<Login>{
    const url = `${api}/login`;
    return this.http.get<Login>(url);
  }

  callback():Observable<Token>{
    const url = `${api}/gettoken`;
    return this.http.get<Token>(url);
  }
}
