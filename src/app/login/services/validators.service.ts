import { Injectable } from '@angular/core';
import {AbstractControl, FormControl} from '@angular/forms';
import {LoginService} from './login.service';



@Injectable({
  providedIn: 'root'
})

export class ValidatorsService {

  constructor(private loginService: LoginService) { }

// registration validators

  unableLoginValidator(inputData: AbstractControl): any{
    const str = inputData.value;
    const arrayOfLetters = str.split('');
    if (/^[a-zA-Z1-9]+$/.test(inputData.value) === false) {
      return {wrongValue: true, message: 'login can contain only Latin letters and numbers'};
    }
    else if (inputData.value.length < 4 || inputData.value.length > 20){
      return {wrongLength: true, message: 'login should have length at least 4 characters and max length of login is 20 characters'};
    }
    else if (!arrayOfLetters[0].match(/^[a-zA-Z]/)){
      return {wrongBeginning: true, message: 'your login must start only with letters'};
    }

    return null;
  }

  unableEmailValidator(inputData: AbstractControl): any{
    if (/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(inputData.value) === false) {
      return {wrongValue: true, message: 'write the email in the correct format, example: bohdan566@gmail.com'};
    }

    return null;
  }

  differentPasswordValidator(inputData: AbstractControl): any{
    if (inputData.value !== inputData.parent?.value?.password){
      return {different: true, message: 'your example is wrong'};
    }
    return null;
  }

  // login validators

  // wrongNameValidator(inputData: AbstractControl): any{
  //   if (inputData.value !== 'bohdan566'){
  //     return {wrongName: true, message: 'you written wrong login'};
  //   }
  //   return null;
  // }
  //
  // wrongPasswordValidator(inputData: AbstractControl): any{
  //   if (inputData.value !== 'bohdan1234'){
  //     return {wrongPassword: true, message: 'you written wrong password'};
  //   }
  //   return null;
  // }

  // functions to show tips

  showTipsForRegister(login: FormControl, email: FormControl, password: FormControl, repeatPassword: FormControl): any{

    const loginIsEmpty = document.getElementsByClassName('loginIsEmpty');

    if (login?.errors?.required === true) {
      for (let i = 0; i < loginIsEmpty.length; i++) {
        const loginIsEmptyElement = loginIsEmpty[i];
        loginIsEmptyElement.classList.add('warning');
      }
    } else {
      for (let i = 0; i < loginIsEmpty.length; i++) {
        const loginIsEmptyElement = loginIsEmpty[i];
        loginIsEmptyElement.classList.remove('warning');
      }
    }

    const loginIsWrong = document.getElementsByClassName('loginIsWrong');

    if (login?.errors?.unableValue === true ||
      login?.errors?.wrongValue === true ||
      login?.errors?.wrongBeginning === true ||
      login?.errors?.wrongLength === true ||
      login?.errors?.required === true) {
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

    const emailIsEmpty = document.getElementsByClassName('emailIsEmpty');

    if (email?.errors?.required === true) {
      for (let i = 0; i < emailIsEmpty.length; i++) {
        const emailIsEmptyElement = emailIsEmpty[i];
        emailIsEmptyElement.classList.add('warning');
      }
    } else {
      for (let i = 0; i < emailIsEmpty.length; i++) {
        const emailIsEmptyElement = emailIsEmpty[i];
        emailIsEmptyElement.classList.remove('warning');
      }
    }

    const emailIsWrong = document.getElementsByClassName('emailIsWrong');

    if (email?.errors?.unableValue === true || email?.errors?.wrongValue === true || email?.errors?.required === true) {
      for (let i = 0; i < emailIsWrong.length; i++) {
        const emailIsWrongElement = emailIsWrong[i];
        emailIsWrongElement.classList.add('warning');
      }
    } else {
      for (let i = 0; i < emailIsWrong.length; i++) {
        const emailIsWrongElement = emailIsWrong[i];
        emailIsWrongElement.classList.remove('warning');
      }
    }

    const passwordIsEmpty = document.getElementsByClassName('passwordIsEmpty');

    if (password?.errors?.required === true) {
      for (let i = 0; i < passwordIsEmpty.length; i++) {
        const passwordEmptyElement = passwordIsEmpty[i];
        passwordEmptyElement.classList.add('warning');
      }
    } else {
      for (let i = 0; i < passwordIsEmpty.length; i++) {
        const passwordEmptyElement = passwordIsEmpty[i];
        passwordEmptyElement.classList.remove('warning');
      }
    }

    const passwordIsTooShort = document.getElementsByClassName('passwordIsTooShort');

    if (password?.errors?.minlength?.actualLength < 8 || password?.errors?.minlength || password?.errors?.required === true) {
      for (let i = 0; i < passwordIsTooShort.length; i++) {
        const passwordElement = passwordIsTooShort[i];
        passwordElement.classList.add('warning');
      }
    } else {
      for (let i = 0; i < passwordIsTooShort.length; i++) {
        const passwordElement = passwordIsTooShort[i];
        passwordElement.classList.remove('warning');
      }
    }

    const repeatPasswordIsEmpty = document.getElementsByClassName('repeatPasswordIsEmpty');

    if (repeatPassword?.errors?.required === true) {
      for (let i = 0; i < repeatPasswordIsEmpty.length; i++) {
        const repeatPasswordEmptyElement = repeatPasswordIsEmpty[i];
        repeatPasswordEmptyElement.classList.add('warning');
      }
    } else {
      for (let i = 0; i < repeatPasswordIsEmpty.length; i++) {
        const repeatPasswordEmptyElement = repeatPasswordIsEmpty[i];
        repeatPasswordEmptyElement.classList.remove('warning');
      }
    }

    const repeatPasswordIsDifferent = document.getElementsByClassName('repeatPasswordIsDifferent');

    if (repeatPassword?.errors?.different === true || repeatPassword?.errors?.required === true) {
      for (let i = 0; i < repeatPasswordIsDifferent.length; i++) {
        const repeatPasswordElement = repeatPasswordIsDifferent[i];
        repeatPasswordElement.classList.add('warning');
      }
    } else {
      for (let i = 0; i < repeatPasswordIsDifferent.length; i++) {
        const repeatPasswordElement = repeatPasswordIsDifferent[i];
        repeatPasswordElement.classList.remove('warning');
      }
    }
  }

  showTipsForLogin(login: FormControl, password: FormControl): any{

    const loginIsEmpty = document.getElementsByClassName('loginIsEmpty');
    const loginIsWrong = document.getElementsByClassName('loginIsWrong');

    if (login?.errors?.required === true) {
      for (let i = 0; i < loginIsEmpty.length; i++) {
        const loginIsEmptyElement = loginIsEmpty[i];
        loginIsEmptyElement.classList.add('warning');
      }
    } else {
      for (let i = 0; i < loginIsEmpty.length; i++) {
        const loginIsEmptyElement = loginIsEmpty[i];
        loginIsEmptyElement.classList.remove('warning');
      }
    }


    if (login?.errors?.wrongName === true) {
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

    const passwordIsEmpty = document.getElementsByClassName('passwordIsEmpty');
    const passwordIsWrong = document.getElementsByClassName('passwordIsWrong');

    if (password?.errors?.required === true ) {
      for (let i = 0; i < passwordIsEmpty.length; i++) {
        const passwordEmptyElement = passwordIsEmpty[i];
        passwordEmptyElement.classList.add('warning');
      }
    } else {
      for (let i = 0; i < passwordIsEmpty.length; i++) {
        const passwordEmptyElement = passwordIsEmpty[i];
        passwordEmptyElement.classList.remove('warning');
      }
    }



    if (password?.errors?.wrongPassword === true) {
      for (let i = 0; i < passwordIsWrong.length; i++) {
        const passwordElement = passwordIsWrong[i];
        passwordElement.classList.add('warning');
      }
    } else {
      for (let i = 0; i < passwordIsWrong.length; i++) {
        const passwordElement = passwordIsWrong[i];
        passwordElement.classList.remove('warning');
      }
    }
  }
}
