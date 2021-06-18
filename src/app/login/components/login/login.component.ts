import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {AbstractControl, AbstractFormGroupDirective, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {typeToValue} from '@angular/compiler-cli/src/ngtsc/reflection/src/type_to_value';
import {translateType} from '@angular/compiler-cli/src/ngtsc/translator';
import {LoginService} from '../../services/login.service';
import {ValidatorsService} from '../../services/validators.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {any} from 'codelyzer/util/function';
import {createOptional} from '@angular/compiler/src/core';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // // user: User;
  // user = {id: 0, login: null, firstname: null, lastname: null, password: null, age: 0};
  //
  //
  // login = new FormControl('', [this.validatorsService.unableValidator]);
  // password = new FormControl('', [
  //   Validators.required,
  //   Validators.minLength(8)
  // ]);
  // repeatPassword = new FormControl('', [this.validatorsService.differentValidator]);
  //
  // loginForm = new FormGroup({
  //   login: this.login,
  //   password: this.password,
  //   repeatPassword: this.repeatPassword
  // });


  constructor(
    private loginService: LoginService,
    private validatorsService: ValidatorsService,
    private httpClient: HttpClient
  ) {

  }

  ngOnInit(): void {
  }

  // showPassword(): void{
  //   this.loginService.showPassword();
  // }
  //
  // save(): any {
  //   this.user.login = this.loginForm.value.login;
  //   this.user.password = this.loginForm.value.password;
  //   this.loginService.loginUser(this.user);
  // }

}





