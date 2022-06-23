import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SignInModel} from "../models/signIn-model";
import {environment} from "../../../environments/environment";
import {LoginResponse} from "../models/LoginResponse";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient ) { }
  signIn = (SignIn: SignInModel) => this.httpClient.post<LoginResponse>(`${environment.api_domain}/Authentication/login`,SignIn);
}
