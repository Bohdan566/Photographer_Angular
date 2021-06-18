// import {EventEmitter, Injectable} from '@angular/core';
// import {HttpClient} from '@angular/common/http';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class TestService {
//
//   status: EventEmitter<boolean> = new EventEmitter();
//   url = 'http://localhost:8080';
//
//   constructor(private httpClient: HttpClient) { }
//
//   login(login: string, password: string) {
//     console.log('Login API');
//     const headers = new Headers();
//     const data = null;
//     headers.append('Authorization', 'Basic ' + btoa(login + ':' + password));
//     headers.append('Content-Type', 'application/x-www-form-urlencoded');
//
//     this.httpClient.post(this.url + '/login', data, {})
//       .map(res => res.json())
//       .subscribe(
//     token => { console.log(token); localStorage.setItem('id_token', token.token); },
//     err => { console.log(err); },
//       () => console.log('Request Complete')
//   );
// }
//
//   logout(): void {
//   localStorage.removeItem('id_token');
//   }
// }
