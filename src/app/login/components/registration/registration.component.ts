import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {ValidatorsService} from '../../services/validators.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../../models/user';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  // user: User;
  user = {id: 0, login: null, email: null, firstname: null, lastname: null, password: null, age: 0};


  login = new FormControl('', [Validators.required , this.validatorsService.unableLoginValidator]);
  email = new FormControl('', [Validators.required , this.validatorsService.unableEmailValidator]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8)
  ]);
  repeatPassword = new FormControl('', [Validators.required , this.validatorsService.differentPasswordValidator]);

  loginForm = new FormGroup({
    login: this.login,
    email: this.email,
    password: this.password,
    repeatPassword: this.repeatPassword
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
    this.user.email = this.loginForm.value.email;

    this.validatorsService.showTipsForRegister(this.login, this.email, this.password, this.repeatPassword);
    if (this.loginForm.status === 'VALID'){
      this.loginService.registerUser(this.user);
    }
  }
}
