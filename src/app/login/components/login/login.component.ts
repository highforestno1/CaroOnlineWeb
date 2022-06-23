import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {LoginService} from "../../services/login.service";
import {LoginResponse} from "../../models/LoginResponse";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,private loginServices: LoginService, private  route: Router) { }
  dataLogin = this.fb.group({
    username: [''],
    password: ['']
  })
  ngOnInit(): void {
  }

  onSubmit() {
    this.loginServices.signIn(this.dataLogin.value).subscribe((res:LoginResponse) =>{
      if(res.token != null){
        this.route.navigate(['/room']);
      }
    },error => {
      alert("Tài khoản mật khẩu không đúng !!");
    });
  }
}
