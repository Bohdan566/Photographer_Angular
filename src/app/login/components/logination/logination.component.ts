import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {ValidatorsService} from '../../services/validators.service';
import {HttpClient} from '@angular/common/http';
import {User} from '../../models/user';

@Component({
  selector: 'app-logination',
  templateUrl: './logination.component.html',
  styleUrls: ['./logination.component.css']
})
export class LoginationComponent implements OnInit {

  // user: User;
  user = {id: 0, login: null, email: null, firstname: null, lastname: null, password: null, age: 0};


  login = new FormControl('', [Validators.required]);
  password = new FormControl('', [
    Validators.required]);


  loginForm = new FormGroup({
    login: this.login,
    password: this.password
  });


  constructor(
    private loginService: LoginService,
    private validatorsService: ValidatorsService,
    private httpClient: HttpClient
  ) {

  }

  ngOnInit(): void {
  }

  showPassword(): void{
    this.loginService.showPassword();
  }

  save(): any {
    console.log(this.loginForm);
    this.user.login = this.loginForm.value.login;
    this.user.password = this.loginForm.value.password;

    console.log(this.user);
    this.validatorsService.showTipsForLogin(this.login, this.password);
    if(this.loginForm.status === 'VALID'){
      this.loginService.loginUser(this.user);
    }
  }

}
