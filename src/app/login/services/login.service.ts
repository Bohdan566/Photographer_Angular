import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user';
import {error} from '@angular/compiler-cli/src/transformers/util';
import {declareI18nVariable} from '@angular/compiler/src/render3/view/i18n/util';
import {Observable} from 'rxjs';
import {ValidatorsService} from './validators.service';
import {AbstractControl} from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class LoginService {


  url = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  showPassword(): any {
    const passwordControls = document.getElementsByClassName('password-control');
    const inputs = document.getElementsByClassName('input-password');

    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      if (input.getAttribute('type') === 'password'){
        input.setAttribute('type', 'text');
        // console.log(input);

        for (let j = 0; j < passwordControls.length; j++) {
          const passwordControl = passwordControls[j];
          passwordControl.classList.add('view');
        }

      } else {
        input.setAttribute('type', 'password');
        // console.log(input);
        for (let j = 0; j < passwordControls.length; j++) {
          const passwordControl = passwordControls[j];
          passwordControl.classList.remove('view');
        }

      }
    }
  }



  loginUser(user: User){
    const loginIsWrong = document.getElementsByClassName('loginIsWrong');
    const passwordIsWrong = document.getElementsByClassName('passwordIsWrong');
    this.httpClient.post<User>(this.url + '/login', user).subscribe((value) => {
      console.log(value);
      if(value == null){
        for (let i = 0; i < loginIsWrong.length; i++) {
          const loginIsWrongElement = loginIsWrong[i];
          loginIsWrongElement.classList.add('warning');
        }
      } else {
        for (let i = 0; i < loginIsWrong.length; i++) {
          const loginIsWrongElement = loginIsWrong[i];
          loginIsWrongElement.classList.remove('warning');
        }
      }
    });
  }


  registerUser(user: User){
    let message = '';
    const successRegistration = document.getElementsByClassName('successRegistration');
    const unsuccessRegistration = document.getElementsByClassName('unsuccessRegistration');
    this.httpClient.post<User>(this.url + '/register', user).subscribe((value) => {
      console.log(value);
      if (value !== null){
        this.httpClient.get(this.url + '/email/' + value.email).subscribe((value1 => {}));

          for (let i = 0; i < successRegistration.length; i++) {
            const successElement = successRegistration[i];
            successElement.classList.add('success');
          }

        for (let i = 0; i < unsuccessRegistration.length; i++) {
          const unsuccessElement = unsuccessRegistration[i];
          unsuccessElement.classList.remove('unseccess');
        }
        message = 'You are successfully registered';
        console.log(message);
        return message;
      } else {

        for (let i = 0; i < unsuccessRegistration.length; i++) {
          const unsuccessElement = unsuccessRegistration[i];
          unsuccessElement.classList.add('unseccess');
        }

        for (let i = 0; i < successRegistration.length; i++) {
          const successElement = successRegistration[i];
          successElement.classList.remove('success');
        }
        message = 'This login or email is already taken';
        console.log(message);
        return message;
      }
    });
  }



}
