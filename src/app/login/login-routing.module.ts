import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {LoginationComponent} from './components/logination/logination.component';
import {SuccessRegistrationComponent} from './components/success-registration/success-registration.component';

const routes: Routes = [{
  path: '', component: LoginComponent, children: [{
    path: '', component: LoginationComponent
  },
    {
    path: 'logination', component: LoginationComponent
  }, {
    path: 'registration', component: RegistrationComponent
  }, {
    path: ':id', component: SuccessRegistrationComponent
    }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
