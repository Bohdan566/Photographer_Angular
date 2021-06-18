import {Host, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginService} from './services/login.service';
import {ValidatorsService} from './services/validators.service';
import {HttpClientModule} from '@angular/common/http';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginationComponent } from './components/logination/logination.component';
import { SuccessRegistrationComponent } from './components/success-registration/success-registration.component';





@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    LoginationComponent,
    SuccessRegistrationComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginService, ValidatorsService]
})
export class LoginModule { }
